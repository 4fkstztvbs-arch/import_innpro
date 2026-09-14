#!/usr/bin/env python3
"""Overí na živom webe, či naimportované presmerovania kategórií naozaj fungujú.

Statická kontrola (verify-novy-strom.py) overuje len vnútornú konzistenciu CSV — že cieľ je uzol
stromu, že nevznikajú reťazce a slučky. Nepovie ale, či Shoptet import naozaj prebehol a či
presmerovanie na webe existuje. To zistí jedine požiadavka na živú adresu.

Pre každý zdroj sa pýtame bez nasledovania presmerovaní a porovnávame, kam Shoptet posiela:
  OK            301/302 presne na očakávaný cieľ
  INÝ CIEĽ      presmeruje, ale inam (vo väčšine prípadov to znamená, že URL medzitým dostala
                iná kategória — Shoptet páruje kategórie podľa slugu)
  BEZ PRESMEROVANIA  200, stránka žije ďalej pod starou adresou — presmerovanie sa nenaimportovalo
  404           zdroj zmizol bez náhrady, zákazník aj Google dostanú chybu

Usage:
  python3 scripts/kontrola-presmerovani.py [--vzorka=200] [--csv=reports/redirect-map-...csv]
  --vzorka=0 preverí všetky riadky (2316 požiadaviek, trvá desiatky minút)
"""
import csv
import collections
import pathlib
import random
import sys
import urllib.request

KOREN = pathlib.Path(__file__).resolve().parent.parent
ZAKLAD = 'https://www.premiumstore.sk'
VZORKA = 200
CSV = KOREN / 'reports' / 'redirect-map-kategorie-shoptet-import.csv'
for a in sys.argv[1:]:
    if a.startswith('--vzorka='):
        VZORKA = int(a.split('=', 1)[1])
    elif a.startswith('--csv='):
        CSV = pathlib.Path(a.split('=', 1)[1])


class BezPresmerovania(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *a, **k):
        return None


OPENER = urllib.request.build_opener(BezPresmerovania)


def skus(cesta):
    """(stavovy kod, kam presmeruje alebo None)"""
    req = urllib.request.Request(ZAKLAD + cesta, method='HEAD',
                                 headers={'User-Agent': 'premiumstore-kontrola/1.0'})
    try:
        with OPENER.open(req, timeout=30) as r:
            return r.status, r.headers.get('Location')
    except urllib.error.HTTPError as e:
        return e.code, e.headers.get('Location')
    except Exception as e:
        return None, str(e)


def normalizuj(u):
    if not u:
        return None
    return u.replace(ZAKLAD, '').split('?')[0]


def main():
    with CSV.open(encoding='utf-8-sig', newline='') as fh:
        riadky = [r for r in csv.reader(fh, delimiter=';') if len(r) >= 2 and r[0].startswith('/')]
    print(f'{CSV.name}: {len(riadky)} presmerovaní')
    vzorka = riadky if VZORKA <= 0 else random.Random(20260914).sample(riadky, min(VZORKA, len(riadky)))
    print(f'preverujem {len(vzorka)}\n')

    vysledky = collections.Counter()
    chyby = []
    for i, (zdroj, ciel, *_) in enumerate(vzorka, 1):
        kod, kam = skus(zdroj)
        kam = normalizuj(kam)
        if kod in (301, 302) and kam == ciel:
            stav = 'OK'
        elif kod in (301, 302):
            stav = 'INÝ CIEĽ'
        elif kod == 200:
            stav = 'BEZ PRESMEROVANIA'
        elif kod == 404:
            stav = '404'
        else:
            stav = f'iné ({kod})'
        vysledky[stav] += 1
        if stav != 'OK':
            chyby.append((stav, zdroj, ciel, kam))
        if i % 25 == 0:
            print(f'  ... {i}/{len(vzorka)}', flush=True)

    print('\n=== VÝSLEDOK ===')
    for k, v in vysledky.most_common():
        print(f'  {v:5d}  {k}  ({100 * v / len(vzorka):.1f} %)')
    if chyby:
        print(f'\nprvých {min(30, len(chyby))} nezhôd:')
        for stav, z, c, k in chyby[:30]:
            print(f'  [{stav}] {z}\n        čakané {c}\n        skutočné {k}')
    return 0


if __name__ == '__main__':
    sys.exit(main())
