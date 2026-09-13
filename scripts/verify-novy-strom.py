#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Kompletna overovacia sada nad novym stromom kategorii pred nasadenim."""
import csv, json, sys, os, collections

BASE = "/home/user/import_innpro"
ok, bad = [], []
def check(cond, msg):
    (ok if cond else bad).append(msg)

# ---------- 1. strom ----------
rows = list(csv.DictReader(open(f"{BASE}/data/novy-strom-kategorii-2026-09-12.csv",
                                encoding="utf-8-sig", newline=""), delimiter=";"))
by_id = {r["id"]: r for r in rows}
check(len(rows) == len(by_id), f"strom: {len(rows)} uzlov, unikatne id: {len(by_id)}")

urls = collections.Counter(r["url"] for r in rows)
dupu = [u for u, c in urls.items() if c > 1]
check(not dupu, f"unikatne URL ({len(urls)}), duplicity: {dupu}")

paths = collections.Counter(r["full_path"] for r in rows)
dupp = [p for p, c in paths.items() if c > 1]
check(not dupp, f"unikatne full_path, duplicity: {dupp}")

dangling = [r["id"] for r in rows if r["parentId"] and r["parentId"] not in by_id]
check(not dangling, f"visiaci rodicia: {dangling}")

# full_path konzistentny s hierarchiou
def calc_path(r):
    segs, cur = [], r
    seen = set()
    while cur:
        if cur["id"] in seen:
            return "CYKLUS"
        seen.add(cur["id"])
        segs.append(cur["name"].strip())
        cur = by_id.get(cur["parentId"]) if cur["parentId"] else None
    return " > ".join(reversed(segs))
mismatch = [(r["id"], r["full_path"], calc_path(r)) for r in rows if calc_path(r) != r["full_path"].strip()]
check(not mismatch, f"full_path == vypocitana cesta z hierarchie ({len(mismatch)} nezhod)")

# depth konzistentna
dmis = []
for r in rows:
    d, cur = 0, r
    while cur["parentId"]:
        cur = by_id[cur["parentId"]]; d += 1
    if int(r["depth"]) != d:
        dmis.append(r["id"])
check(not dmis, f"depth konzistentna ({len(dmis)} nezhod)")

# ---------- 2. import CSV ----------
imp = list(csv.DictReader(open(f"{BASE}/data/kategorie-import-2026-09-12.csv",
                               encoding="utf-8-sig", newline=""), delimiter=";"))
check(len(imp) == len(rows), f"import CSV ma {len(imp)} riadkov, strom {len(rows)}")
check(all(not r["id"] and not r["parentId"] for r in imp),
      "import CSV: vsetky id/parentId prazdne (Shoptet vytvara nove)")

imp_by_url = {r["url"]: r for r in imp}
check(len(imp_by_url) == len(imp), "import CSV: unikatne URL")

# parentUrl musi existovat v ramci importu
badparent = [r["url"] for r in imp if r["parentUrl"] and r["parentUrl"] not in imp_by_url]
check(not badparent, f"import CSV: kazdy parentUrl existuje ({badparent[:5]})")

# title == name v strome; parentUrl zodpoveda rodicovi v strome
tree_by_url = {r["url"]: r for r in rows}
tmis = [u for u, r in imp_by_url.items()
        if u not in tree_by_url or tree_by_url[u]["name"].strip() != r["title"].strip()]
check(not tmis, f"import title == nazov uzla v strome ({len(tmis)} nezhod: {tmis[:5]})")
pmis = []
for u, r in imp_by_url.items():
    node = tree_by_url.get(u)
    if not node: continue
    want = by_id[node["parentId"]]["url"] if node["parentId"] else ""
    if r["parentUrl"].strip() != want:
        pmis.append((u, r["parentUrl"], want))
check(not pmis, f"import parentUrl == URL rodica v strome ({len(pmis)} nezhod: {pmis[:3]})")

# vyplnene SEO polia
empty_seo = [r["url"] for r in imp if not r["metaTitle"].strip() or not r["metaDescription"].strip()
             or not r["topDescription"].strip()]
check(not empty_seo, f"vsetky uzly maju topDescription/metaTitle/metaDescription ({len(empty_seo)} prazdnych)")
longmt = [r["url"] for r in imp if len(r["metaTitle"]) > 70]
longmd = [r["url"] for r in imp if len(r["metaDescription"]) > 175]
print(f"  POZN. {len(longmt)} metaTitle nad 70 znakov (max {max((len(r['metaTitle']) for r in imp), default=0)}) – Google ich skrati, obsahovo su v poriadku")
check(not longmd, f"metaDescription <= 175 znakov ({len(longmd)} dlhych)")

# ---------- 3. known-categories ----------
kp = f"{BASE}/data/known-categories-new-2026-09-12.json"
if not os.path.exists(kp): kp = f"{BASE}/data/known-categories.json"
known = json.load(open(kp, encoding="utf-8"))
kset = set(known if isinstance(known, list) else known.get("categories", known))
tset = {r["full_path"] for r in rows}
check(kset == tset, f"known-categories == strom (chyba {len(tset-kset)}, navyse {len(kset-tset)})")

# ---------- 4. mapping subory ----------
# Kontroluju sa CIELE, t.j. hodnoty categoryRenamesByPath (kluce su cesty z feedu dodavatela,
# tie v nasom strome byt nemaju).
for name in ["innpro", "atos", "penta", "kb", "solight", "basys", "wiim"]:
    # pred prepnutim sa kontroluje staged subor, po prepnuti uz ostry
    src = f"{BASE}/scripts/{name}-mapping.new.json"
    if not os.path.exists(src): src = f"{BASE}/scripts/{name}-mapping.json"
    try:
        m = json.load(open(src, encoding="utf-8"))
    except FileNotFoundError:
        check(False, f"{name}-mapping: subor chyba"); continue
    vals = set()
    for key in ["categoryRenamesByPath", "categoryMap", "fallbackByManufacturer",
                "priceListCategoryMap", "categoryOverridesByCode"]:
        for k, v in (m.get(key) or {}).items():
            if k.startswith("_"): continue  # komentarove kluce v mappingu
            if isinstance(v, str): vals.add(v)
            elif isinstance(v, dict) and v.get("category"): vals.add(v["category"])
    outside = sorted(v for v in vals if v not in tset)
    check(not outside, f"{name}-mapping: {len(vals)} cielov, mimo strom {len(outside)}: {outside[:3]}")
hp = f"{BASE}/scripts/heureka-mapping.new.json"
if not os.path.exists(hp): hp = f"{BASE}/scripts/heureka-mapping.json"
h = json.load(open(hp, encoding="utf-8"))
outside = sorted(k for k in h if k not in tset)
check(not outside, f"heureka-mapping: {len(h)} nasich kategorii, mimo strom {len(outside)}: {outside[:3]}")

# ---------- 5. category-urls ----------
curls = json.load(open(f"{BASE}/data/category-urls.json", encoding="utf-8"))
check(set(curls) == tset, f"category-urls kluce == strom (chyba {len(tset-set(curls))}, navyse {len(set(curls)-set(curls)&tset)})")
badu = [k for k, v in curls.items() if tree_by_url.get(v.strip("/").split("/")[-1]) is None]
check(not badu, f"category-urls hodnoty ukazuju na URL v strome ({len(badu)} zlych: {badu[:3]})")

# ---------- 6. presmerovania ----------
red = list(csv.reader(open(f"{BASE}/reports/redirect-map-kategorie-shoptet-import.csv",
                           encoding="utf-8-sig", newline=""), delimiter=";"))
rrows = red  # shoptet import je bez hlavicky
srcs = [r[0] for r in rrows if r]
tgts = [r[1] for r in rrows if len(r) > 1]
dsrc = [s for s, c in collections.Counter(srcs).items() if c > 1]
check(not dsrc, f"presmerovania: {len(rrows)} riadkov, duplicitne zdroje {len(dsrc)}")
selfr = [s for s, t in zip(srcs, tgts) if s.strip("/") == t.strip("/")]
check(not selfr, f"presmerovania: ziadne self-redirecty ({len(selfr)})")
chain = [s for s in srcs if s in set(tgts)]
check(not chain, f"presmerovania: ziadne retazce ({len(chain)})")
valid_urls = {r["url"] for r in rows}
# Najzradnejsi pripad: stara adresa, ktoru si prevzal INY uzol noveho stromu. Self-redirect to
# nie je (zdroj != ciel) ani retazec, ale presmerovanie by zivu kategoriu urobilo nedostupnou.
alive = [s for s in srcs if s.strip("/") in valid_urls]
check(not alive, f"presmerovania: ziadny zdroj nie je zivy uzol noveho stromu ({len(alive)}: {alive[:5]})")
# Stara korenova kategoria patri na novy koren, nie do podkategorie.
full = list(csv.DictReader(open(f"{BASE}/reports/redirect-map-kategorie-2026-09-12.csv",
                                encoding="utf-8", newline=""), delimiter=";"))
check(len(full) == len(rrows), f"plna mapa ({len(full)}) a shoptet import ({len(rrows)}) maju rovnaky pocet")
rootsrc = [(r["old_url"], r["new_full_path"]) for r in full
           if " > " not in r["old_full_path"] and " > " in r["new_full_path"]]
check(not rootsrc, f"presmerovania: stare korene ukazuju na novy koren ({len(rootsrc)}: {rootsrc[:3]})")
badt = [t for t in tgts if t.strip("/").split("/")[-1] not in valid_urls]
check(not badt, f"presmerovania: vsetky ciele su uzly noveho stromu ({len(set(badt))} zlych: {sorted(set(badt))[:3]})")

# ---------- vysledok ----------
for m in ok:  print("  OK   ", m)
for m in bad: print("  CHYBA", m)
print(f"\n{len(ok)} OK / {len(bad)} chyb")
sys.exit(1 if bad else 0)
