#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Najde ATOS produkty, ktore ten isty model dodava aj iny dodavatel za lepsiu cenu, a vypise ich
# kody na vylucenie. Parovanie ide cez znacku + modelovy kod z nazvu - EAN sa pouzit neda, kazdy
# dodavatel ma vlastny (ATOS ceske distributorske, InnPro vyrobcovske).
#
# Pusti sa znova vzdy, ked sa zmeni sortiment ktorehokolvek z dvojice dodavatelov:
#   python3 build_atos_exclusions.py
import re, glob, json, collections

PREFER = {"uni-t": "innpro", "mhpower": "penta"}   # znacka -> dodavatel, od ktoreho berieme
MODEL = re.compile(r"\b([A-Z]{1,4}[-\s]?\d{2,5}[A-Z+]{0,4})\b")
STOP = {"USB", "LED", "RGB", "IP65", "IP67", "DC", "AC", "4K"}

feeds = {}
for f in sorted(glob.glob("/home/user/import_innpro/output/*.xml")):
    src = f.split("/")[-1].replace(".xml", "")
    items = []
    for it in re.findall(r"<SHOPITEM>.*?</SHOPITEM>", open(f, encoding="utf-8").read(), re.S):
        def g(t):
            m = re.search(rf"<{t}><!\[CDATA\[(.*?)\]\]></{t}>", it, re.S) or re.search(rf"<{t}>([^<]*)</{t}>", it)
            return m.group(1).strip() if m else ""
        items.append({"code": g("CODE"), "man": g("MANUFACTURER"),
                      "name": g("PRODUCTNAME") or g("NAME"), "price": g("PRICE_VAT") or g("PRICE")})
    feeds[src] = items


def model_of(name):
    for m in MODEL.findall(name):
        k = m.upper().replace(" ", "").replace("-", "")
        if len(k) >= 4 and k not in STOP:
            return k
    return None


def models_of(src, brand):
    out = {}
    for i in feeds[src]:
        if i["man"].strip().lower() != brand:
            continue
        m = model_of(i["name"])
        if m:
            out.setdefault(m, i)
    return out


excluded, report = [], []
for brand, winner in PREFER.items():
    theirs = models_of(winner, brand)
    for i in feeds["atos"]:
        if i["man"].strip().lower() != brand:
            continue
        m = model_of(i["name"])
        if m and m in theirs and i["code"]:
            excluded.append(i["code"])
            report.append((brand, m, i["code"], i["name"], i["price"], theirs[m]["price"], winner))

excluded = sorted(set(excluded))
json.dump(excluded, open("atos_excluded_codes.json", "w"), ensure_ascii=False, indent=1)
print(f"kodov na vylucenie: {len(excluded)}")
per = collections.Counter(r[0] for r in report)
for k, v in per.items():
    print(f"  {k}: {v}")
for b, m, c, n, pa, pw, w in sorted(report)[:6]:
    print(f"  {b} {m:9} kod {c:12} ATOS {pa}€ vs {w} {pw}€  |  {n[:50]}")
