#!/usr/bin/env python3
"""Matches every product in data/basys-bose-pricelist.json against BASYS's own official product
photo library (two Nextcloud shares they sent directly — file listings crawled via WebDAV
PROPFIND and saved as data/basys-cloud-files-1.json / -2.json, each a flat list of full download
URLs). Writes data/basys-bose-cloud-images.json: objKod -> [image URLs] for confident matches only.

Why this exists: BASYS's own Heureka feed only has 2 images for ~59/76 products; this cloud
library has ~8700 marketing/product photos covering nearly the whole catalog, organised into one
folder per model (sometimes per model+colour). Matching is folder-name-to-product-name token
overlap weighted by word rarity (IDF) — a rare, distinctive word (e.g. "omnijewell") that doesn't
appear in ANY folder name causes an outright reject for that product, rather than falling back to
a same-category-but-wrong-product folder (e.g. don't show "Lifestyle Ultra" bracket photos for an
"OmniJewell" bracket — different, unrelated product line). This is deliberately conservative: a
missing image is preferable to a wrong one.

Usage: python3 match-basys-cloud-images.py
Re-run whenever the price list changes or BASYS sends updated/additional cloud folders (re-crawl
those first — see the PROPFIND snippet in git history of this file's introducing commit, or ask
to have that crawl step turned into a proper script if it's needed again).
"""
import json
import math
import re
import urllib.parse
from collections import Counter
from pathlib import Path

DATA_DIR = Path(__file__).resolve().parent.parent / 'data'
PRICELIST_PATH = DATA_DIR / 'basys-bose-pricelist.json'
CLOUD_FILES = [DATA_DIR / 'basys-cloud-files-1.json', DATA_DIR / 'basys-cloud-files-2.json']
OUT_PATH = DATA_DIR / 'basys-bose-cloud-images.json'

STOP = {'bose', 'the', 'a', 'ii', 'iii', 'iv', '2nd', 'gen', 'edition', 'le'}
GENERIC_COLORS = {'black', 'white', 'čierna', 'biela'}
IMG_EXT = ('.jpg', '.jpeg', '.png')
SKIP_HINTS = ('banner', 'hero', 'launch', 'aem', 'ecomgallery', 'situational', 'action', 'closeup',
              'xray', 'gallery', 'bundle', 'panel', 'app_', 'diskstation', 'caseconflict')
BLACK_HINTS = ('black', 'bl_', '_bl', 'nueblack', 'ciern')
WHITE_HINTS = ('white', 'wh_', '_wh', 'whitesmoke', 'biel')
RARE_THRESHOLD = 3.5
MIN_SCORE = 5
MAX_IMAGES_PER_PRODUCT = 3


def tokens(s):
    s = re.sub(r'[:/+]', ' ', s)
    words = re.findall(r'[A-Za-z0-9]+', s.lower())
    return set(w for w in words if w not in STOP and len(w) > 1)


def folder_of(url):
    m = re.match(r'https://cloud\.basys\.cz/remote\.php/dav/public-files/[^/]+/([^/]+)/', url)
    return urllib.parse.unquote(m.group(1)).strip() if m else None


def load_folders():
    by_folder = {}
    for path in CLOUD_FILES:
        if not path.exists():
            continue
        for f in json.loads(path.read_text(encoding='utf-8')):
            fo = folder_of(f)
            if fo:
                by_folder.setdefault(fo, []).append(f)
    return by_folder


def pick_images(files, color_raw):
    good = [f for f in files if f.lower().endswith(IMG_EXT) and not any(h in f.lower() for h in SKIP_HINTS)]
    if not good:
        good = [f for f in files if f.lower().endswith(IMG_EXT)]
    color_raw = color_raw.lower()
    want_black = any(h in color_raw for h in ('čierna', 'black', 'ciern'))
    want_white = any(h in color_raw for h in ('biela', 'white', 'biel'))
    if want_black:
        good.sort(key=lambda f: (0 if any(h in f.lower() for h in BLACK_HINTS) else (2 if any(h in f.lower() for h in WHITE_HINTS) else 1), f))
    elif want_white:
        good.sort(key=lambda f: (0 if any(h in f.lower() for h in WHITE_HINTS) else (2 if any(h in f.lower() for h in BLACK_HINTS) else 1), f))
    else:
        good.sort()
    return good[:MAX_IMAGES_PER_PRODUCT]


def main():
    by_folder = load_folders()
    folder_tokens = {fo: tokens(fo) for fo in by_folder}
    all_folder_tokens = set().union(*folder_tokens.values()) if folder_tokens else set()

    df = Counter()
    for ft in folder_tokens.values():
        for t in ft:
            df[t] += 1
    n = len(folder_tokens)
    idf = {t: math.log((n + 1) / (c + 1)) + 1 for t, c in df.items()}

    pricelist = json.loads(PRICELIST_PATH.read_text(encoding='utf-8'))
    result = {}

    for p in pricelist:
        name_t = tokens(p['name'])
        color_raw = p['color'].strip().lower()
        color_t = tokens(p['color'])
        is_generic_color = color_raw in GENERIC_COLORS or not color_t

        scored = []
        for fo, ft in folder_tokens.items():
            name_overlap = name_t & ft
            if not name_overlap:
                continue
            color_overlap = color_t & ft
            name_score = sum(idf[t] for t in name_overlap)
            color_score = sum(idf[t] for t in color_overlap) * 2
            extra = ft - name_t
            penalty = sum(idf.get(t, 1) for t in extra) * 0.6 if (is_generic_color and extra) else 0
            score = name_score + color_score - penalty
            numeric_hit = any(t.isdigit() and len(t) >= 3 for t in name_overlap)
            scored.append((score, fo, len(name_overlap), numeric_hit))

        scored.sort(key=lambda x: -x[0])
        best = scored[0] if scored else None

        rare_missing = any(idf.get(t, 0) >= RARE_THRESHOLD and t not in all_folder_tokens for t in name_t)

        accepted = False
        if best and not rare_missing:
            strong_overlap = best[2] >= 2 or best[3]
            accepted = strong_overlap and best[0] >= MIN_SCORE

        if accepted:
            imgs = pick_images(by_folder[best[1]], p['color'])
            if imgs:
                result[p['objKod']] = imgs

    OUT_PATH.write_text(json.dumps(result, indent=1, ensure_ascii=False), encoding='utf-8')
    print(f'{len(result)}/{len(pricelist)} products matched -> {OUT_PATH}')


if __name__ == '__main__':
    main()
