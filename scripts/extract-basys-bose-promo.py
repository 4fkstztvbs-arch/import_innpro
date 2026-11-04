#!/usr/bin/env python3
"""BaSys/Bose promo cenník (xlsx) -> data/basys-bose-promo-<od>_<do>.json

Použitie: python3 scripts/extract-basys-bose-promo.py PROMO.xlsx --valid-from=2026-11-01 --valid-until=2026-11-30
obj. kód sa určuje podľa EAN z data/basys-bose-pricelist.json (xlsx má duplicitné kódy, napr. B 895491-0200 pre dve farby).
transform-basys.js načíta každý data/basys-bose-promo*.json a promo cena platí len v rozsahu [validFrom, validUntil].
"""
import json, re, sys
import openpyxl

args = [a for a in sys.argv[1:] if not a.startswith("--")]
opts = dict(a[2:].split("=", 1) for a in sys.argv[1:] if a.startswith("--") and "=" in a)
src, vf, vu = args[0], opts["valid-from"], opts["valid-until"]
pl = {p["ean"].lstrip("0"): p for p in json.load(open("data/basys-bose-pricelist.json"))}
clean = lambda s: re.sub(r"\s+", " ", str(s or "")).strip()
ws = openpyxl.load_workbook(src, data_only=True).worksheets[0]
items, notes, cat = [], [], ""
for r in ws.iter_rows(values_only=True):
    if r[3] and not r[1]:
        cat = clean(r[3]); continue
    if not r[1] or not isinstance(r[8], (int, float)):
        continue
    ean = str(int(r[2]))
    p = pl.get(ean)
    code = p["objKod"] if p else clean(r[1])
    if clean(r[1]) != clean(code):
        notes.append(f"{clean(r[1])} ({clean(r[4])}) -> {code} podľa EAN {ean}")
    if not p:
        notes.append(f"{code} nie je v cenníku 15.10.2026 (ide o produkt mimo cenníka)")
    items.append(dict(objKod=code, ean=ean, name=clean(r[3]), color=clean(r[4]), category=cat,
                      mocInclVat=float(r[5]), promoMocInclVat=float(r[8]), supportExclVat=float(r[9] or 0),
                      purchasePriceExclVat=float(r[7])))
out = f"data/basys-bose-promo-{vf}_{vu}.json"
json.dump(dict(validFrom=vf, validUntil=vu, source=src.split("/")[-1], notes=notes, items=items), open(out, "w"), ensure_ascii=False, indent=1)
print(len(items), "->", out)
for n in notes: print(" -", n)
