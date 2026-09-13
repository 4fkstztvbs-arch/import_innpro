#!/usr/bin/env python3
"""Zostaví pravidlá zaradenia z pozorovaného správania a overí, že dávajú ten istý výsledok.

Dnes o zaradení jedného produktu rozhoduje osem vrstiev za sebou (prefixový prepis v
categoryRenamesByPath, brána proti stromu, fuzzy findMatch, preklad starý->nový strom, zložené
cesty, výslovné pravidlá, pád na predka, orezanie v enforce-tree). Každá vznikla ako záplata na
zlyhanie tej predchádzajúcej a dokopy sa nedá prečítať, prečo produkt skončil tam, kde skončil.

Pritom zaradenie je už dnes plne deterministické: v data/zdrojove-kategorie/*.json nevedie ani
jedna z 2488 zdrojových ciest na dva rôzne ciele. Kaskádu teda vieme nahradiť jednou tabuľkou na
dodávateľa — zdrojová cesta -> uzol stromu, vyhráva najdlhší prefix, chvost sa zahodí.

Tabuľka sa nevymýšľa, odvodzuje sa z toho, kam produkty chodia dnes, a skript si hneď overí, že
prehratím všetkých zdrojových ciest cez pravidlá vyjde presne dnešný cieľ. Rozdiel = chyba.

Prefixy sa zlučujú: keď celý podstrom zdrojových ciest vedie na ten istý uzol, stačí jedno
pravidlo na jeho koreni. Preto je pravidiel podstatne menej než zdrojových ciest.

Usage: python3 scripts/build-category-rules.py [--zapis]
       bez --zapis len vypíše, čo by vzniklo (suchý beh)
"""
import json
import pathlib
import sys

KOREN = pathlib.Path(__file__).resolve().parent.parent
ZDROJ = KOREN / 'data' / 'zdrojove-kategorie'
CIEL = KOREN / 'data' / 'kategorie'
ZAPIS = '--zapis' in sys.argv


def nacitaj(cesta):
    """zdrojová cesta -> cieľový uzol (berie najčastejší cieľ; viacznačné hlási volajúci)"""
    surove = json.loads(cesta.read_text(encoding='utf-8'))
    out, viacznacne = {}, []
    for zdroj, ciele in surove.items():
        skutocne = {c: n for c, n in ciele.items() if c != '(zahodené)'}
        if not skutocne:
            continue
        if len(skutocne) > 1:
            viacznacne.append((zdroj, skutocne))
        out[zdroj] = max(skutocne.items(), key=lambda kv: kv[1])[0]
    return out, viacznacne


def postav_trie(mapa):
    trie = {}
    for zdroj, ciel in mapa.items():
        uzol = trie
        for seg in zdroj.split(' > '):
            uzol = uzol.setdefault('deti', {}).setdefault(seg, {})
        uzol['ciel'] = ciel
    return trie


def ciele_podstromu(uzol, akum):
    if 'ciel' in uzol:
        akum.add(uzol['ciel'])
    for dieta in uzol.get('deti', {}).values():
        ciele_podstromu(dieta, akum)
    return akum


def zozbieraj(uzol, cesta, zdedeny, pravidla):
    """Emituje pravidlo len tam, kde sa cieľ mení oproti zdedenému."""
    ciele = ciele_podstromu(uzol, set())
    if not ciele:
        return
    if len(ciele) == 1:
        ciel = next(iter(ciele))
        if ciel != zdedeny and cesta:
            pravidla[' > '.join(cesta)] = ciel
        return
    # zmiešaný podstrom: vlastný cieľ uzla potrebuje pravidlo, deti sa riešia zvlášť
    if 'ciel' in uzol and uzol['ciel'] != zdedeny and cesta:
        pravidla[' > '.join(cesta)] = uzol['ciel']
        zdedeny = uzol['ciel']
    for meno, dieta in uzol.get('deti', {}).items():
        zozbieraj(dieta, cesta + [meno], zdedeny, pravidla)


def uprav(pravidla, zdroj):
    """Najdlhší prefix vyhráva; chvost sa zahodí. Presne to, čo bude robiť runtime."""
    segs = zdroj.split(' > ')
    for d in range(len(segs), 0, -1):
        ciel = pravidla.get(' > '.join(segs[:d]))
        if ciel:
            return ciel
    return None


def main():
    if not ZDROJ.is_dir():
        sys.exit(f'chýba {ZDROJ} — najprv musí prebehnúť aspoň jeden beh každého dodávateľa')

    spolu_ciest = spolu_pravidiel = spolu_chyb = 0
    for subor in sorted(ZDROJ.glob('*.json')):
        dodavatel = subor.stem
        mapa, viacznacne = nacitaj(subor)
        pravidla = {}
        zozbieraj(postav_trie(mapa), [], None, pravidla)

        # Overenie: prehrať VŠETKY zdrojové cesty cez pravidlá a porovnať s dnešným cieľom.
        chyby = [(z, c, uprav(pravidla, z)) for z, c in mapa.items() if uprav(pravidla, z) != c]
        spolu_ciest += len(mapa)
        spolu_pravidiel += len(pravidla)
        spolu_chyb += len(chyby)

        print(f'{dodavatel:9s} {len(mapa):5d} zdrojových ciest -> {len(pravidla):4d} pravidiel '
              f'({len(set(mapa.values())):3d} cieľov), nezhôd: {len(chyby)}')
        for z, oc, dost in chyby[:5]:
            print(f'    NEZHODA {z!r}: čakané {oc!r}, pravidlá dali {dost!r}')
        for z, c in viacznacne[:5]:
            print(f'    viacznačné {z!r} -> {c}')

        if ZAPIS and not chyby:
            CIEL.mkdir(parents=True, exist_ok=True)
            obsah = {
                '_comment': (
                    f'Zaradenie produktov {dodavatel} do stromu. Kľúč je cesta tak, ako ju posiela '
                    'dodávateľ; hodnota je uzol nášho stromu. Vyhráva NAJDLHŠÍ prefix a cieľ '
                    'nahrádza celú cestu — chvost dodávateľa sa zahadzuje, takže nemôže vzniknúť '
                    'cesta mimo strom ani zložená cesta s novým koreňom a starým chvostom. '
                    'Vygenerované scripts/build-category-rules.py z data/zdrojove-kategorie/, '
                    'overené na zhodu s predošlým správaním. Zmenu zaradenia sprav tu, je to '
                    'jediné miesto, kde sa o ňom rozhoduje.'),
                'pravidla': dict(sorted(pravidla.items())),
            }
            (CIEL / f'{dodavatel}.json').write_text(
                json.dumps(obsah, ensure_ascii=False, indent=1) + '\n', encoding='utf-8')

    print(f'\nSPOLU     {spolu_ciest:5d} zdrojových ciest -> {spolu_pravidiel:4d} pravidiel, '
          f'nezhôd: {spolu_chyb}')
    if spolu_chyb:
        sys.exit('pravidlá nereprodukujú dnešné zaradenie — nezapisujem')
    if not ZAPIS:
        print('(suchý beh, nič sa nezapísalo — spusti s --zapis)')


if __name__ == '__main__':
    main()
