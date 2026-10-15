#!/usr/bin/env python3
"""Extrahuje BaSys/Bose cenník (xlsx) + katalóg (PDF) do data/basys-bose-pricelist.json.

Použitie:
  python3 scripts/extract-basys-bose-pricelist.py CENNIK.xlsx KATALOG.pdf [--valid-from=2026-10-15] \
      [--previous=data/basys-bose-pricelist.json] [--out=data/basys-bose-pricelist.json]

Pravidlá (rozhodnutia z 2026-10-15, pozri reports/bose-cennik-2026-10-15.md):
  * Zdroj pravdy pre MOC a VOC je xlsx (list "VOC FY27_ALL"); chýbajúce MOC dopĺňa list "MOC FY27".
  * PDF katalóg dopĺňa položky, ktoré v xlsx nie sú (DMOC s DPH), a slúži na opravu SKU/EAN:
    pri konflikte medzi xlsx a PDF vyhráva hodnota s platným EAN-13 kontrolným súčtom.
  * Duplicitné obj. kódy v xlsx (preklepy) sa opravia podľa PDF (podľa EAN).
  * objKod sa zachová v presnom tvare z predchádzajúceho cenníka (aj s dvojitou medzerou),
    lebo na ňom visia kódy produktov v Shoptete a content overrides.
"""
import json, re, subprocess, sys, os
import openpyxl

def ean_ok(e):
    e = str(e).zfill(13)
    if not e.isdigit() or len(e) != 13:
        return False
    s = sum(int(c) * (3 if i % 2 else 1) for i, c in enumerate(e[:12]))
    return (10 - s % 10) % 10 == int(e[12])

def norm_code(c):
    return re.sub(r"[\s‐-―_]+", " ", str(c or "")).strip().upper()

def clean(s):
    return re.sub(r"\s+", " ", str(s or "").replace(" ", " ")).strip()

def parse_xlsx(path):
    wb = openpyxl.load_workbook(path, data_only=True)
    voc = []
    cat = ""
    for r in wb["BOSE VOC FY27_ALL"].iter_rows(values_only=True):
        if r[3] and not r[1]:
            cat = clean(r[3])
            continue
        if not r[1] or not r[2] or not isinstance(r[5], (int, float)):
            continue
        voc.append(dict(objKod=clean(r[1]), ean=str(int(float(r[2]))) if str(r[2]).replace(".0", "").isdigit() else str(r[2]).strip(),
                        name=clean(r[3]), color=clean(r[4]), category=cat,
                        mocInclVat=float(r[5]), mocExclVat=round(float(r[6]), 2),
                        purchasePriceExclVat=round(float(r[7]), 2), isNew=bool(r[8] and "NEW" in str(r[8]))))
    # list MOC: popis + MOC pre položky bez VOC (UB/UTS-20 II, SoundTouch controler...)
    moc = []
    cur_model, cur_desc = "", ""
    for r in wb["BOSE MOC FY27"].iter_rows(values_only=True):
        model, desc, color, code, price = r[0], r[2], r[3], r[4], r[5]
        if model and clean(model):
            cur_model = clean(model)
        if code and re.match(r"B \d", str(code).strip()):
            codes = [clean(c) for c in re.split(r"\n+", str(code)) if clean(c)]
            colors = [clean(c) for c in re.split(r"\n+", str(color or "")) if clean(c)]
            d = clean(desc) if desc and not (model is None and r[3] and desc and len(clean(desc)) < 80 and False) else ""
            if model and clean(model):
                cur_desc = clean(desc)
            for i, c in enumerate(codes):
                moc.append(dict(objKod=c.replace("‐", "-"), color=colors[i] if i < len(colors) else "", model=cur_model,
                                description=cur_desc, mocInclVat=float(price) if price else None,
                                mocExclVat=round(float(r[6]), 2) if r[6] else None))
    return voc, moc

def parse_pdf(path):
    txt = subprocess.run(["pdftotext", "-layout", path, "-"], capture_output=True, text=True, check=True).stdout
    rows = []
    for page in txt.split("\f"):
        lines = [l for l in page.split("\n") if l.strip()]
        if len(lines) < 4:
            continue
        # prvé riadky: sekcia, názov produktu
        title = None
        for i, l in enumerate(lines[:6]):
            if l.strip().isupper() and i + 1 < len(lines):
                title = clean(lines[i + 1])
                break
        if not title:
            continue
        # text katalógu: nadpis, odstavec (ľavý stĺpec) a 3 odrážky (pravý stĺpec)
        if not any(re.match(r"^\s*Farba\s+SKU", l) for l in lines):
            continue
        ti = next(i for i, l in enumerate(lines) if clean(l) == title)
        headline = clean(lines[ti + 1])
        left, right = [], []
        for l in lines[ti + 2:]:
            if re.match(r"^\s*Farba\s+SKU", l):
                break
            m = re.match(r"^(.{0,70}?\S)\s{3,}(\S.*)$", l)
            if m and len(m.group(1)) < 75 and len(l) - len(l.lstrip()) < 20:
                left.append(clean(m.group(1))); right.append(clean(m.group(2)))
            elif len(l) - len(l.lstrip()) >= 60:
                right.append(clean(l))
            else:
                left.append(clean(l))
        bullets = []
        for r in right:
            if bullets and r[:1].islower():
                bullets[-1] += " " + r
            else:
                bullets.append(r)
        for l in lines:
            m = re.match(r"^\s*(.+?)\s{2,}(B \d{6}(?:-\d{4})?)\s+(\d{11})\s+([\d ]+,\d{2}) €", l)
            if m:
                rows.append(dict(title=title, color=clean(m.group(1)), objKod=m.group(2), ean=m.group(3),
                                 dmoc=float(m.group(4).replace(" ", "").replace(",", ".")),
                                 headline=headline, paragraph=" ".join(left), bullets=bullets))
    return rows

def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    opts = dict(a[2:].split("=", 1) for a in sys.argv[1:] if a.startswith("--") and "=" in a)
    xlsx, pdf = args[0], args[1]
    out = opts.get("out", "data/basys-bose-pricelist.json")
    prev_path = opts.get("previous", out)
    prev = json.load(open(prev_path)) if os.path.exists(prev_path) else []
    prev_by_norm = {norm_code(p["objKod"]): p["objKod"] for p in prev}
    prev_by_ean = {p["ean"]: p["objKod"] for p in prev}

    voc, moc = parse_xlsx(xlsx)
    pdf_rows = parse_pdf(pdf)
    pdf_by_ean = {r["ean"]: r for r in pdf_rows}
    notes = []

    # 1) opravy duplicitných kódov / preklepov v xlsx podľa PDF (kľúč = EAN)
    seen = {}
    for r in voc:
        p = pdf_by_ean.get(r["ean"])
        if p and norm_code(p["objKod"]) != norm_code(r["objKod"]):
            # SKU z PDF berieme len ak je xlsx kód duplicitný (preklep); inak je PDF chybné (napr. Micro B 783342)
            dup = sum(1 for x in voc if norm_code(x["objKod"]) == norm_code(r["objKod"])) > 1
            if dup:
                notes.append(f"SKU {r['objKod']} ({r['name']} {r['color']}): duplicitný v xlsx, opravené na {p['objKod']} podľa PDF")
                r["objKod"] = p["objKod"]
            else:
                notes.append(f"SKU konflikt {r['objKod']} (xlsx) vs {p['objKod']} (PDF) pre EAN {r['ean']}: ponechané xlsx")
        # 2) EAN: ak xlsx EAN nemá platný checksum, skús PDF s rovnakým SKU
        if not ean_ok(r["ean"]):
            alt = next((x for x in pdf_rows if norm_code(x["objKod"]) == norm_code(r["objKod"]) and ean_ok(x["ean"])), None)
            if alt:
                notes.append(f"EAN {r['ean']} ({r['objKod']}) má zlý kontrolný súčet, opravené na {alt['ean']} podľa PDF")
                r["ean"] = alt["ean"]
    # EAN konflikt: xlsx platný vs PDF neplatný (a naopak) pre rovnaké SKU
    for r in voc:
        for x in pdf_rows:
            if norm_code(x["objKod"]) == norm_code(r["objKod"]) and x["ean"] != r["ean"]:
                good = r["ean"] if ean_ok(r["ean"]) else x["ean"]
                notes.append(f"EAN konflikt {r['objKod']}: xlsx {r['ean']} ({'OK' if ean_ok(r['ean']) else 'zlý súčet'}) vs PDF {x['ean']} ({'OK' if ean_ok(x['ean']) else 'zlý súčet'}) -> {good}")
                r["ean"] = good
    # PDF opravuje xlsx EAN aj keď SKU v xlsx chýba/sa líši (napr. soundbar bracket): rovnaké SKU + platný PDF EAN
    for r in voc:
        if not ean_ok(r["ean"]):
            raise SystemExit(f"Nevyriešený neplatný EAN {r['ean']} pre {r['objKod']}")

    # xlsx pomenoval B 895491-xxxx (cena 349 EUR) ako "QC Ultra Headphones" - ide o QuietComfort Headphones 2nd Gen
    for r in voc:
        if r["objKod"].startswith("B 895491") and "Ultra" in r["name"]:
            notes.append(f"Názov {r['objKod']}: '{r['name']}' -> 'Bose Quietcomfort Headphones 2nd Gen' (SKU/cena patria QC Headphones 2nd Gen)")
            r["name"] = "Bose Quietcomfort Headphones 2nd Gen"

    # objKod v tvare z predchádzajúceho cenníka
    for r in voc:
        r["objKod"] = prev_by_norm.get(norm_code(r["objKod"]), r["objKod"])

    # Farba: PDF katalóg + list MOC sú zhodné a zodpovedajú kartám v e-shope (napr. Ultra Open 2: -0030 Cherry, -0040 Olive;
    # list VOC to má opačne) -> farbu berieme z PDF, keď EAN sedí.
    for r in voc:
        p = pdf_by_ean.get(r["ean"])
        if p and p["color"].lower() != r["color"].lower():
            SK = {"cierna": "black", "cierne": "black", "biela": "white", "biele": "white", "modra": "blue", "dusk blue": "blue dusk"}
            def fam(c):
                c = re.sub(r"[^a-z ]", "", c.lower().replace("č", "c").replace("á", "a").replace("é", "e")).strip()
                c = re.sub(r"\b(smoke|white smoke)\b", "white", c)
                for k, v in SK.items():
                    c = c.replace(k, v)
                return re.sub(r"\s+", " ", re.sub(r"modra blue dusk|blue dusk|dusk blue", "bluedusk", c)).strip()
            if fam(p["color"]) != fam(r["color"]) and not fam(r["color"]).startswith(fam(p["color"])):
                notes.append(f"Farba {r['objKod']} / EAN {r['ean']}: xlsx '{r['color']}' vs PDF '{p['color']}' -> PDF")
                r["colorXlsx"] = r["color"]
                r["color"] = p["color"]

    have = {norm_code(r["objKod"]) for r in voc}
    have_ean = {r["ean"] for r in voc}
    # 3) položky len v MOC liste (bez VOC) a len v PDF
    extra = []
    for m in moc:
        k = norm_code(m["objKod"])
        if k in have or m["mocInclVat"] is None:
            continue
        p = next((x for x in pdf_rows if norm_code(x["objKod"]) == k), None)
        if not p:
            continue
        have.add(k)
        extra.append(dict(objKod=prev_by_norm.get(k, m["objKod"]), ean=p["ean"], name=m["model"], color=m["color"] or p["color"],
                          category="HOME ACCESSORIES", mocInclVat=m["mocInclVat"], mocExclVat=m["mocExclVat"],
                          purchasePriceExclVat=None, isNew=False, source="xlsx-moc+pdf"))
    for p in pdf_rows:
        k = norm_code(p["objKod"])
        if k in have or p["ean"] in have_ean:
            continue
        if p["title"].startswith("S1 Pro"):
            notes.append(f"{p['objKod']} {p['title']}: Bose Professional, mimo tohto cenníka (bez VOC) - preskočené")
            continue
        have.add(k)
        # sesterský produkt (rovnaký model v xlsx VOC) určuje cenu aj nákupku, aby farebné varianty mali rovnakú cenu
        sib = next((v for v in voc if re.sub(r"\W", "", v["name"].lower()).endswith(re.sub(r"\W", "", p["title"].lower()))), None)
        if sib:
            notes.append(f"{p['objKod']} {p['title']} {p['color']}: len v PDF ({p['dmoc']} EUR), cena a nákupka prevzaté zo súrodenca {sib['objKod']}")
            extra.append(dict(objKod=prev_by_norm.get(k, p["objKod"]), ean=p["ean"], name=sib["name"], color=p["color"], category=sib["category"],
                              mocInclVat=sib["mocInclVat"], mocExclVat=sib["mocExclVat"], purchasePriceExclVat=sib["purchasePriceExclVat"],
                              isNew=False, source="pdf+sibling", dmocPdf=p["dmoc"]))
            continue
        extra.append(dict(objKod=prev_by_norm.get(k, p["objKod"]), ean=p["ean"], name=p["title"], color=p["color"],
                          category=("HEADPHONES" if "Earbuds" in p["title"] else "HOME ACCESSORIES"), mocInclVat=p["dmoc"], mocExclVat=round(p["dmoc"] / 1.23, 2),
                          purchasePriceExclVat=None, isNew=False, source="pdf"))
    for r in voc:
        r["source"] = "xlsx-voc"
        p = pdf_by_ean.get(r["ean"])
        if p:
            r["dmocPdf"] = p["dmoc"]
    items = voc + extra
    valid_from = opts.get("valid-from", "2026-10-15")
    json.dump(items, open(out, "w"), ensure_ascii=False, indent=1)
    moc_desc = {norm_code(m["objKod"]): m["description"] for m in moc if m.get("description")}
    catalog = {}
    for r in items:
        p = pdf_by_ean.get(r["ean"])
        entry = dict(xlsxDescription=moc_desc.get(norm_code(r["objKod"]), ""))
        if p:
            entry.update(pdfTitle=p["title"], headline=p["headline"], paragraph=p["paragraph"], bullets=p["bullets"], dmocPdf=p["dmoc"])
        catalog[r["objKod"]] = entry
    json.dump(dict(validFrom=valid_from, items=catalog), open(os.path.join(os.path.dirname(out) or ".", "basys-bose-catalog.json"), "w"), ensure_ascii=False, indent=1)
    json.dump(dict(validFrom=valid_from, notes=notes, pdfRows=pdf_rows), open(out.replace(".json", "-notes.json"), "w"), ensure_ascii=False, indent=1)
    print(f"{len(voc)} VOC + {len(extra)} doplnených (MOC/PDF) -> {out}")
    for n in notes:
        print(" -", n)

if __name__ == "__main__":
    main()
