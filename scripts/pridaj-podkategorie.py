#!/usr/bin/env python3
"""Pridá do stromu podkategórie a nasmeruje na ne pravidlá — všetko, čo k tomu treba, naraz.

Pridanie jednej kategórie sa dotkne siedmich súborov a keď sa na niektorý zabudne, prejaví sa to
až v e-shope: chýbajúca URL znamená produkt bez odkazu, ponechané presmerovanie urobí novú
kategóriu nedostupnou (to sa stalo pri /ventilatory/) a ponechaný riadok v zozname na skrytie ju
po importe skryje aj s tovarom. Skript preto robí všetkých sedem krokov z jedného zadania:

  data/novy-strom-kategorii-*.csv      uzol do stromu
  data/known-categories.json           aby ho brána uznala
  data/category-urls.json              aby produkty dostali odkaz
  data/kategorie-import-*.csv          riadok na import do Shoptetu aj so SEO textami
  data/kategorie/<dodavatel>.json      pravidlá, ktoré tam tovar nasmerujú
  reports/redirect-map-*.csv           presmerovania preč z novej URL sa odstránia
  data/kategorie-skryt-stare-*.csv     riadok na skrytie sa odstráni

Zadanie je JSON:
  {"rodic": "cesta > v > strome",
   "deti": [{"meno": "...", "url": "...", "top": "...", "metaTitle": "...", "metaDesc": "...",
             "pravidla": {"atos": ["zdrojova > cesta", ...]}}]}

Usage: python3 scripts/pridaj-podkategorie.py zadanie.json [--sucho]
"""
import collections
import re
import unicodedata
import csv
import json
import pathlib
import sys

KOREN = pathlib.Path(__file__).resolve().parent.parent
STROM_CSV = KOREN / 'data' / 'novy-strom-kategorii-2026-09-12.csv'
IMPORT_CSV = KOREN / 'data' / 'kategorie-import-2026-09-12.csv'
SKRYT_CSV = KOREN / 'data' / 'kategorie-skryt-stare-2026-09-13.csv'
REDIRECTY = [(KOREN / 'reports' / 'redirect-map-kategorie-shoptet-import.csv', False),
             (KOREN / 'reports' / 'redirect-map-kategorie-splostene-shoptet-import.csv', False),
             (KOREN / 'reports' / 'redirect-map-kategorie-2026-09-12.csv', True)]


def nacitaj_csv(p, bom=True):
    with p.open(encoding='utf-8-sig' if bom else 'utf-8', newline='') as fh:
        return list(csv.reader(fh, delimiter=';'))


def slug(s):
    """Slug tak, ako ho z názvu odvodí Shoptet."""
    s = ''.join(c for c in unicodedata.normalize('NFD', str(s).lower())
                if not unicodedata.combining(c))
    return re.sub(r'[^a-z0-9]', '-', s.replace('&', 'a')).strip('-')


def main():
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    sucho = '--sucho' in sys.argv
    if not args:
        sys.exit('chýba súbor so zadaním')
    zadanie = json.loads(pathlib.Path(args[0]).read_text(encoding='utf-8'))
    rodic = zadanie['rodic']
    deti = zadanie['deti']

    kc = json.loads((KOREN / 'data' / 'known-categories.json').read_text(encoding='utf-8'))
    if rodic not in kc:
        sys.exit(f'rodič {rodic!r} nie je v strome')
    cu = json.loads((KOREN / 'data' / 'category-urls.json').read_text(encoding='utf-8'),
                    object_pairs_hook=collections.OrderedDict)

    obsadene = {u.strip('/'): c for c, u in cu.items()}
    kolizie = [(d['url'], obsadene[d['url']]) for d in deti
               if d['url'] in obsadene and obsadene[d['url']] != f"{rodic} > {d['meno']}"]
    if kolizie:
        sys.exit(f'URL kolidujú so stromom: {kolizie}')

    # URL NOVEJ kategórie sa musí rovnať slugu z jej názvu. Kategóriu totiž spravidla založí
    # PRODUKTOVÝ import z cesty vo feede, nie toto CSV — a ten si slug odvodí z názvu. Keď sa
    # naša url líši, Shoptet kategóriu založí pod svojím slugom, naše CSV ju už nenájde a vyrobí
    # duplicitu; odkazy v popisoch produktov (berú URL z category-urls.json) potom vedú na prázdnu
    # stránku. Presne tak 14. 9. 2026 vznikli /macacie-toalety-a-prislusenstvo/ a
    # /pelechy--skrabadla-a-klietky/, hoci CSV posielalo /macacie-toalety/ a
    # /pelechy-skrabadla-klietky/ — obe kategórie mali prázdne SEO texty, čo je podpis
    # automatického založenia produktovým importom.
    zle = [(d['meno'], d['url'], slug(d['meno'])) for d in deti if d['url'] != slug(d['meno'])]
    if zle:
        for meno, url, s in zle:
            print(f'CHYBA: {meno!r} má url {url!r}, ale Shoptet ju založí ako {s!r}')
        sys.exit('URL novej kategórie sa musí rovnať slugu z názvu — oprav url alebo názov')

    nove_cesty = [f"{rodic} > {d['meno']}" for d in deti]
    print(f'{rodic}\n  + {len(deti)} podkategórií')
    if sucho:
        for d in deti:
            print(f"      /{d['url']}/  {d['meno']}")
        return 0

    # 1) known-categories + category-urls
    for c, d in zip(nove_cesty, deti):
        if c not in kc:
            kc.append(c)
        cu[c] = f"/{d['url']}/"
    kc.sort()
    (KOREN / 'data' / 'known-categories.json').write_text(
        json.dumps(kc, ensure_ascii=False, indent=1) + '\n', encoding='utf-8')
    (KOREN / 'data' / 'category-urls.json').write_text(
        json.dumps(collections.OrderedDict(sorted(cu.items())), ensure_ascii=False, indent=1) + '\n',
        encoding='utf-8')

    # 2) strom CSV
    r = nacitaj_csv(STROM_CSV)
    podla = {x[5]: x for x in r[1:] if len(x) > 5}
    rodic_riadok = podla[rodic]
    hlbka = str(int(rodic_riadok[2]) + 1)
    exist = {x[0] for x in r[1:] if x}
    i = 1
    for c, d in zip(nove_cesty, deti):
        if c in podla:
            continue
        while f'm{i}' in exist:
            i += 1
        exist.add(f'm{i}')
        r.append([f'm{i}', rodic_riadok[0], hlbka, d['meno'], d['url'], c])
    with STROM_CSV.open('w', encoding='utf-8-sig', newline='') as fh:
        w = csv.writer(fh, delimiter=';', lineterminator='\r\n')
        for x in r:
            w.writerow(x)

    # 3) importny CSV
    r = nacitaj_csv(IMPORT_CSV)
    hlav = r[0]
    su = {x[9] for x in r[1:] if len(x) > 9}
    rodic_url = cu[rodic].strip('/')
    for d in deti:
        if d['url'] in su:
            continue
        r.append(['', '', rodic_url, '0', '1', '1', '1', d['meno'], d['meno'], d['url'],
                  d['top'], '', d['metaTitle'], d['metaDesc'], ''])
    with IMPORT_CSV.open('w', encoding='utf-8-sig', newline='') as fh:
        fh.write(';'.join(hlav[:-1]) + ';\r\n')
        w = csv.writer(fh, delimiter=';', quoting=csv.QUOTE_ALL, lineterminator='\r\n')
        for x in r[1:]:
            w.writerow(x[:14])

    # 4) pravidlá
    podla_dod = collections.defaultdict(dict)
    for c, d in zip(nove_cesty, deti):
        for dod, cesty in (d.get('pravidla') or {}).items():
            for zc in cesty:
                podla_dod[dod][zc] = c
    for dod, m in podla_dod.items():
        f = KOREN / 'data' / 'kategorie' / f'{dod}.json'
        j = json.loads(f.read_text(encoding='utf-8'), object_pairs_hook=collections.OrderedDict)
        j['pravidla'].update(m)
        j['pravidla'] = collections.OrderedDict(sorted(j['pravidla'].items()))
        f.write_text(json.dumps(j, ensure_ascii=False, indent=1) + '\n', encoding='utf-8')
        print(f'  {dod}: +{len(m)} pravidiel')

    # 5) presmerovania a zoznam na skrytie — nové URL sú živé uzly, nesmú viesť preč ani byť skryté
    zive = {u.strip('/') for u in cu.values()}
    for p, ma_hlavicku in REDIRECTY:
        rr = nacitaj_csv(p, bom=ma_hlavicku)
        telo = rr[1:] if ma_hlavicku else rr
        nove = [x for x in telo if not (x and x[0].strip('/') in zive)]
        if len(nove) != len(telo):
            with p.open('w', encoding='utf-8-sig' if ma_hlavicku else 'utf-8', newline='') as fh:
                w = csv.writer(fh, delimiter=';', lineterminator='\r\n')
                if ma_hlavicku:
                    w.writerow(rr[0])
                for x in nove:
                    w.writerow(x)
            print(f'  {p.name}: -{len(telo) - len(nove)} presmerovaní')
    rr = nacitaj_csv(SKRYT_CSV)
    iu = rr[0].index('url')
    telo = [x for x in rr[1:] if not (len(x) > iu and x[iu] in zive)]
    if len(telo) != len(rr) - 1:
        with SKRYT_CSV.open('w', encoding='utf-8-sig', newline='') as fh:
            fh.write(';'.join(rr[0]) + ';\r\n')
            w = csv.writer(fh, delimiter=';', quoting=csv.QUOTE_ALL, lineterminator='\r\n')
            for x in telo:
                w.writerow(x)
        print(f'  zoznam na skrytie: -{len(rr) - 1 - len(telo)} riadkov')

    print(f'  strom má {len(kc)} uzlov')
    return 0


if __name__ == '__main__':
    sys.exit(main())
