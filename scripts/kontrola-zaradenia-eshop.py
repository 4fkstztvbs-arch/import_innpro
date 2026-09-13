#!/usr/bin/env python3
"""Overí na živom webe, či import produktov staré zaradenie odstraňuje, alebo len pridáva.

13. 9. 2026 bol feed medzi 20:54 a 21:15 pokazený — produkty v ňom mali kategóriu skrátenú až na
koreň stromu. Import, ktorý v tom okne prebehol, to zapísal do e-shopu. Od 21:31 je feed správny,
takže nasledujúci import zapíše správnu kategóriu; otvorená je len otázka, či tú zlú odstráni.

Meria sa to, čo je vidieť na webe, a zámerne jednoducho, aby výsledok nezávisel od parsovania
HTML: pre každú sledovanú kategóriu sa zisťuje počet strán tovaru a či sa na prvej strane
vyskytuje známy produkt, ktorý tam nepatrí. Ak import zaradenie prepisuje, počet strán po importe
klesne a kontrolný produkt zmizne.

Najprv sa uloží východiskový stav (`--zapis-zaklad`), po importe sa spustí bez parametra a
porovná sa.

Usage:
  python3 scripts/kontrola-zaradenia-eshop.py --zapis-zaklad   # pred importom
  python3 scripts/kontrola-zaradenia-eshop.py                  # po importe, porovná
"""
import json
import pathlib
import re
import sys
import urllib.request

KOREN = pathlib.Path(__file__).resolve().parent.parent
ZAKLAD_SUBOR = KOREN / 'reports' / 'kontrola-zaradenia-zaklad.json'
ZAKLAD = 'https://www.premiumstore.sk'

# kategória -> (URL, text produktu, ktorý tam NEMÁ byť)
SLEDOVANE = {
    'Dielňa, náradie a záhrada': ('/dielna-a-zahrada/', 'ANYCUBIC'),
    'Profesionálna audio technika': ('/profesionalna-audio-technika/', None),
    'Auto-moto': ('/auto-moto/', None),
    'Televízne ovládače': ('/televizne-ovladace/', None),
    'Satelitné ovládače': ('/satelitne-ovladace/', None),
    'Príslušenstvo do auta': ('/vybavenie-auta/', None),
    'Príslušenstvo k TV, audio a video technike': ('/prislusenstvo-k-tv--audio--video/', 'Samsung'),
}


def stiahni(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'premiumstore-kontrola/1.0'})
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read().decode('utf-8', 'replace')


def zmeraj(cesta, marker):
    """(počet strán, výskytov markera na 1. strane) — None pri nedostupnej stránke."""
    try:
        html = stiahni(ZAKLAD + cesta)
    except Exception as e:
        return None, str(e)
    strany = [int(x) for x in re.findall(r'strana-(\d+)', html)]
    return {
        'stran': max(strany) if strany else 1,
        'marker': len(re.findall(re.escape(marker), html, re.I)) if marker else None,
    }, None


def main():
    zapis = '--zapis-zaklad' in sys.argv
    stav = {}
    for kategoria, (cesta, marker) in SLEDOVANE.items():
        vysledok, chyba = zmeraj(cesta, marker)
        stav[kategoria] = {'cesta': cesta, 'marker_text': marker,
                           **(vysledok or {}), **({'chyba': chyba} if chyba else {})}

    if zapis:
        ZAKLAD_SUBOR.parent.mkdir(parents=True, exist_ok=True)
        ZAKLAD_SUBOR.write_text(json.dumps(stav, ensure_ascii=False, indent=1) + '\n',
                                encoding='utf-8')
        print(f'Východiskový stav uložený do {ZAKLAD_SUBOR}:\n')
        for k, v in stav.items():
            print(f'  {v.get("stran", "?"):>4} strán   marker {v.get("marker")}   {k}')
        return 0

    if not ZAKLAD_SUBOR.exists():
        sys.exit(f'chýba {ZAKLAD_SUBOR} — najprv spusti s --zapis-zaklad')
    zaklad = json.loads(ZAKLAD_SUBOR.read_text(encoding='utf-8'))

    zmenilo = False
    print(f'{"kategória":46s} {"strán pred":>10s} {"po":>5s} {"marker pred":>12s} {"po":>5s}')
    for kategoria, teraz in stav.items():
        pred = zaklad.get(kategoria, {})
        s1, s2 = pred.get('stran'), teraz.get('stran')
        m1, m2 = pred.get('marker'), teraz.get('marker')
        if (s1 is not None and s2 is not None and s2 < s1) or (m1 and m2 == 0):
            zmenilo = True
        print(f'{kategoria[:46]:46s} {str(s1):>10s} {str(s2):>5s} {str(m1):>12s} {str(m2):>5s}')

    print()
    if zmenilo:
        print('ZÁVER: počty klesli / kontrolný produkt zmizol — import zaradenie PREPISUJE,')
        print('staré zaradenia sa dorovnajú samy a netreba robiť nič.')
    else:
        print('ZÁVER: nič sa nezmenilo — import zaradenie iba PRIDÁVA. Staré zaradenia treba')
        print('odobrať ručne podľa reports/zle-zaradenia-v-eshope.csv.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
