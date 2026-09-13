#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# tree_path_renames.json dotahuje cesty z 851-navrhu na nazvy, ktore realne idu do Shoptetu.
# Jeho hodnoty su ale kopie nazvov uzlov - pri kazdom premenovani alebo presune uzla zostarnu
# a ticho zacnu ukazovat na cestu, ktora v strome neexistuje (mapping dodavatela potom zapise
# kategoriu mimo strom). Tento skript ich po kazdej zmene stromu dotiahne:
#   - hodnota, ktora v strome je -> ponechat
#   - hodnota, ktorej list existuje v strome prave raz -> prepisat na aktualnu plnu cestu
#   - hodnota zhodna s klucom -> zahodit (nic nerobi)
#   - inak -> nahlasit a ponechat na rucne rozhodnutie
# Spustat PRED build_import_csv.py / build_redirect_map.py / rewrite_*_mapping.py.
import csv, json, collections, os, sys

SCRATCH = os.path.dirname(os.path.abspath(__file__))
TREE = "/home/user/import_innpro/data/novy-strom-kategorii-2026-09-12.csv"
P = os.path.join(SCRATCH, "tree_path_renames.json")

rows = list(csv.DictReader(open(TREE, encoding="utf-8-sig", newline=""), delimiter=";"))
tset = {r["full_path"] for r in rows}
byleaf = collections.defaultdict(list)
for r in rows:
    byleaf[r["name"].strip()].append(r["full_path"])

d = json.load(open(P, encoding="utf-8"))
fixed, dropped, stuck = 0, 0, []
out = {}
for k, v in d.items():
    if k == v:
        dropped += 1
        continue
    if v in tset:
        out[k] = v
        continue
    # List cielovej cesty uz v strome nemusi existovat vobec - vtedy sa uzol premenoval a
    # jedinou stopou nan je list kluca (cesta z 851-navrhu sa s nazvom uzla zvycajne zhoduje).
    cand = byleaf.get(v.split(" > ")[-1], []) or byleaf.get(k.split(" > ")[-1], [])
    if len(cand) == 1 and cand[0] == k:
        dropped += 1          # dotiahnutim by vznikol zaznam sam na seba
        continue
    if len(cand) == 1:
        out[k] = cand[0]
        fixed += 1
    else:
        out[k] = v
        stuck.append((k, v))

json.dump(out, open(P, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(f"tree_path_renames: {len(out)} zaznamov, dotiahnutych {fixed}, zahodenych {dropped}")
for k, v in stuck:
    print(f"  POZOR: cielova cesta nie je v strome a list nie je jednoznacny: {k!r} -> {v!r}")
sys.exit(0)
