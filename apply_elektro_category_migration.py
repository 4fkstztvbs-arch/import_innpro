#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
PremiumStore.sk — migrácia mapovania produktov na nový strom kategórií
Dátum: 2026-09-21

Použitie z KOREŇA repozitára:
  python3 apply_elektro_category_migration.py          # DRY RUN, nič nezapíše
  python3 apply_elektro_category_migration.py --apply  # zapíše zmeny
  python3 apply_elektro_category_migration.py --check  # iba validácia

Skript je zámerne idempotentný. Existujúce JSON-y načíta, zmení len konkrétne
cesty/pravidlá a pred zápisom validuje cieľový strom.
"""

from __future__ import annotations
import argparse
import copy
import json
import re
import sys
from pathlib import Path

ROOT_CAT = "Elektro, Smart Home a osvetlenie"
ELEC = f"{ROOT_CAT} > Elektroinštalácia"
LIGHT = f"{ROOT_CAT} > Osvetlenie"
SMART = f"{ROOT_CAT} > Smart domácnosť"
SEC = f"{ROOT_CAT} > Bezpečnosť a kamerové systémy"
VENT = f"{ROOT_CAT} > Vzduchotechnika"

SMART_SENSORS = f"{SMART} > Smart senzory"
SMART_PLUGS = f"{SMART} > Smart zásuvky"
SMART_SWITCHES = f"{SMART} > Smart vypínače a relé"
SMART_HUBS = f"{SMART} > Huby a centrálne jednotky"
SMART_CONTROLS = f"{SMART} > Smart ovládače a panely"
SMART_HEAT = f"{SMART} > Smart termostaty a hlavice"
SMART_LIGHT = f"{SMART} > Smart osvetlenie"

SEC_WIFI = f"{SEC} > Wi-Fi kamery pre domácnosť"
SEC_CCTV = f"{SEC} > Kamerové systémy"
SEC_DETECT = f"{SEC} > Detektory a alarmy"
SEC_BELLS = f"{SEC} > Domové a video zvončeky"
SEC_LOCKS = f"{SEC} > Zámky a prístupové systémy"
SEC_GATES = f"{SEC} > Pohony brán a vrát"

LED = f"{LIGHT} > LED osvetlenie"
LED_BULBS = f"{LED} > LED žiarovky"
LED_REFL = f"{LED} > LED reflektory"
LED_PANELS = f"{LED} > LED panely a podhľadové svietidlá"
LED_STRIPS = f"{LED} > LED pásiky a príslušenstvo"
LED_TUBES = f"{LED} > LED trubice"
LIGHT_INTERIOR = f"{LIGHT} > Interiérové svietidlá"
LIGHT_OUTDOOR = f"{LIGHT} > Vonkajšie a záhradné osvetlenie"
LIGHT_LAMPS = f"{LIGHT} > Stolové a stojacie lampy"
LIGHT_SPOT = f"{LIGHT} > Bodové a lištové osvetlenie"
LIGHT_INDUSTRIAL = f"{LIGHT} > Priemyselné osvetlenie"
LIGHT_FLASH = f"{LIGHT} > Baterky a ručné svietidlá"
LIGHT_XMAS = f"{LIGHT} > Vianočné osvetlenie a dekorácie"
LIGHT_COMPONENTS = f"{LIGHT} > Komponenty pre svietidlá"

E_CABLES = f"{ELEC} > Káble a vodiče"
E_SWITCH = f"{ELEC} > Vypínače a zásuvky"
E_EXT = f"{ELEC} > Predlžovacie káble a vidlice"
E_EXT_CORDS = f"{E_EXT} > Predlžovacie prívody"
E_EXT_INDUSTRIAL = f"{E_EXT} > Priemyselné vidlice a zásuvky"
E_EXT_SWITCH = f"{E_EXT} > Spínacie a časové zásuvky"
E_EXT_PLUGS = f"{E_EXT} > Vidlice, zásuvky a redukcie"
E_TRAVEL = f"{E_EXT} > Cestovné adaptéry"
E_INSTALL = f"{ELEC} > Inštalačné príslušenstvo"
E_INSTALL_FIX = f"{E_INSTALL} > Príchytky, pásky a hmoždinky"
E_INSTALL_TUBES = f"{E_INSTALL} > Rúrky a chráničky"
E_INSTALL_JOINS = f"{E_INSTALL} > Káblové spojky a očká"
E_BOXES = f"{ELEC} > Montážne skrine a rozvádzače"
E_BOARD = f"{ELEC} > Rozvádzačové prvky"
E_BREAKERS = f"{ELEC} > Ističe a chrániče"
E_METERS = f"{ELEC} > Elektromery a spínacia technika"
E_CAPS = f"{ELEC} > Motorové rozbehové kondenzátory"
E_MIXED = f"{ELEC} > Viacnásobné zásuvky a izolačný materiál"
E_OLD_TOOLS = f"{ELEC} > Inštalačné náradie a materiál"

VENT_HOME = f"{VENT} > Domové ventilátory"
VENT_INDUSTRIAL = f"{VENT} > Priemyselné ventilátory"
VENT_GRILLES = f"{VENT} > Mriežky, žalúzie a klapky"
VENT_DUCTS = f"{VENT} > Vzduchovody a tvarovky"
VENT_ACC = f"{VENT} > Príslušenstvo k ventilátorom"
VENT_DOORS = f"{VENT} > Revízne dvierka"

# ---------------------------------------------------------------------------
# 1) PRESNÁ transformácia starého Shoptet stromu -> strom, ktorý bol 21.9.2026
#    importovaný cez categories CSV. Poradie: najšpecifickejšie prefixy prvé.
# ---------------------------------------------------------------------------
PATH_RULES = [
    # Smart
    (f"{ROOT_CAT} > Smart domácnosť – zariadenia > Senzory pohybu a otvorenia",
     f"{SMART_SENSORS} > Senzory pohybu a otvorenia"),
    (f"{ROOT_CAT} > Smart domácnosť – zariadenia > Senzory teploty a vlhkosti",
     f"{SMART_SENSORS} > Senzory teploty a vlhkosti"),
    (f"{ROOT_CAT} > Smart domácnosť – zariadenia > Smart termostaty a hlavice", SMART_HEAT),
    (f"{ROOT_CAT} > Smart domácnosť – zariadenia > Smart zásuvky", SMART_PLUGS),
    (f"{ROOT_CAT} > Smart riadiace jednotky a huby", SMART_HUBS),
    (f"{ROOT_CAT} > Smart domácnosť – zariadenia", SMART),

    # Osvetlenie — štyri LED leaf kategórie boli presunuté pod LED osvetlenie
    (f"{ROOT_CAT} > Osvetlenie – svietidlá > LED panely a podhľadové svietidlá", LED_PANELS),
    (f"{ROOT_CAT} > Osvetlenie – svietidlá > LED pásiky a profily", LED_STRIPS),
    (f"{ROOT_CAT} > Osvetlenie – svietidlá > LED reflektory", LED_REFL),
    (f"{ROOT_CAT} > Osvetlenie – svietidlá > LED žiarovky", LED_BULBS),
    (f"{ROOT_CAT} > Osvetlenie – svietidlá > LED osvetlenie", LED),
    (f"{ROOT_CAT} > Osvetlenie – svietidlá > Baterky a ručné svietidlá", LIGHT_FLASH),
    (f"{ROOT_CAT} > Osvetlenie – svietidlá > Komponenty pre svietidlá", LIGHT_COMPONENTS),
    (f"{ROOT_CAT} > Osvetlenie – svietidlá > Vianočné osvetlenie a dekorácie", LIGHT_XMAS),
    (f"{ROOT_CAT} > Osvetlenie – svietidlá", LIGHT),

    # Bezpečnosť
    (f"{ROOT_CAT} > Profesionálne kamerové systémy", SEC_CCTV),
    (f"{ROOT_CAT} > IP kamery", SEC_WIFI),
    (f"{ROOT_CAT} > Zabezpečenie – detektory a senzory", SEC_DETECT),
    (f"{ROOT_CAT} > Bezdrôtové zvončeky", SEC_BELLS),
    (f"{ROOT_CAT} > Pohony brán a vrát", SEC_GATES),
    (f"{ROOT_CAT} > Príslušenstvo pre zabezpečovacie systémy",
     f"{SEC} > Príslušenstvo pre zabezpečovacie systémy"),

    # Vzduchotechnika
    (f"{ROOT_CAT} > Vzduchotechnika a montážne príslušenstvo", VENT),

    # Elektroinštalácia — najprv rename leafu a cestovných adaptérov
    (f"{ROOT_CAT} > Inštalačné príslušenstvo > Trubky a chráničky", E_INSTALL_TUBES),
    (f"{ROOT_CAT} > Cestovné adaptéry", E_TRAVEL),
    (f"{ROOT_CAT} > Vypínače a nástenné zásuvky", E_SWITCH),
    (f"{ROOT_CAT} > Predlžovacie káble a vidlice", E_EXT),
    (f"{ROOT_CAT} > Inštalačné príslušenstvo", E_INSTALL),
    (f"{ROOT_CAT} > Montážne skrine a rozvádzače", E_BOXES),
    (f"{ROOT_CAT} > Rozvádzačové prvky", E_BOARD),
    (f"{ROOT_CAT} > Ističe a chrániče", E_BREAKERS),
    (f"{ROOT_CAT} > Elektromery a spínacia technika", E_METERS),
    (f"{ROOT_CAT} > Káble a vodiče", E_CABLES),
    (f"{ROOT_CAT} > Viacnásobné zásuvky a izolačný materiál", E_MIXED),
    (f"{ROOT_CAT} > Inštalačné náradie a materiál", E_OLD_TOOLS),
]
PATH_RULES.sort(key=lambda x: len(x[0]), reverse=True)

# Nové kategórie vložené do Shoptetu (3 v prvom + 11 v druhom importe).
REQUIRED_NEW_CATEGORIES = {
    ELEC,
    SEC,
    SMART_SENSORS,
    E_CAPS,
    LED_TUBES,
    LIGHT_INTERIOR,
    LIGHT_OUTDOOR,
    LIGHT_LAMPS,
    LIGHT_SPOT,
    LIGHT_INDUSTRIAL,
    SMART_SWITCHES,
    SMART_CONTROLS,
    SMART_LIGHT,
    SEC_LOCKS,
}

NEW_CATEGORY_URLS = {
    ELEC: "/elektroinstalacia/",
    SEC: "/bezpecnost-a-kamerove-systemy/",
    SMART_SENSORS: "/smart-senzory/",
    E_CAPS: "/motorove-rozbehove-kondenzatory/",
    LED_TUBES: "/led-trubice/",
    LIGHT_INTERIOR: "/interierove-svietidla/",
    LIGHT_OUTDOOR: "/vonkajsie-a-zahradne-osvetlenie/",
    LIGHT_LAMPS: "/stolove-a-stojacie-lampy/",
    LIGHT_SPOT: "/bodove-a-listove-osvetlenie/",
    LIGHT_INDUSTRIAL: "/priemyselne-osvetlenie/",
    SMART_SWITCHES: "/smart-vypinace-a-rele/",
    SMART_CONTROLS: "/smart-ovladace-a-panely/",
    SMART_LIGHT: "/smart-osvetlenie/",
    SEC_LOCKS: "/zamky-a-pristupove-systemy/",
}

# ---------------------------------------------------------------------------
# 2) Zdrojové cesty dodávateľov -> presný nový cieľ.
#    Tieto pravidlá majú prednosť cez "najdlhší prefix".
# ---------------------------------------------------------------------------

ATOS_OVERRIDES = {
    # Brány — parent už nie je "pohon" pre všetko, aby poštová schránka neskončila pri motoroch.
    "Druhy > DŮM ZAHRADA > BRÁNY A BRANKY": SEC,
    "Druhy > DŮM ZAHRADA > BRÁNY A BRANKY > Bezdrátové zvonky": SEC_BELLS,
    "Druhy > DŮM ZAHRADA > BRÁNY A BRANKY > Parkovací zábrany": SEC_GATES,
    "Druhy > DŮM ZAHRADA > BRÁNY A BRANKY > Pohony křídlová vrata": SEC_GATES,
    "Druhy > DŮM ZAHRADA > BRÁNY A BRANKY > Pohony posuvná vrata": SEC_GATES,
    "Druhy > DŮM ZAHRADA > BRÁNY A BRANKY > Pohony pro garážová vrata": SEC_GATES,
    "Druhy > DŮM ZAHRADA > BRÁNY A BRANKY > Příslušenství pro pohony vrat": SEC_GATES,
    "Druhy > DŮM ZAHRADA > BRÁNY A BRANKY > Poštovní schránky":
        "Dielňa, náradie a záhrada > Záhrada a bazén > Záhradné doplnky",
    "Druhy > DŮM ZAHRADA > BRÁNY A BRANKY > Schránky na klíče": SEC_LOCKS,

    # Kamerové systémy — konkrétne outliery zo zdrojového reportu.
    "Druhy > DŮM ZAHRADA > KAMEROVÉ SYSTÉMY": SEC_CCTV,
    "Druhy > DŮM ZAHRADA > KAMEROVÉ SYSTÉMY > Akční kamery":
        "TV, audio, video a foto technika > Foto a príslušenstvo",
    "Druhy > DŮM ZAHRADA > KAMEROVÉ SYSTÉMY > Domovní videotelefony": SEC_BELLS,
    "Druhy > DŮM ZAHRADA > KAMEROVÉ SYSTÉMY > HDCVI a 5v1 videorekordéry":
        f"{SEC_CCTV} > Videorekordéry NVR a DVR",
    "Druhy > DŮM ZAHRADA > KAMEROVÉ SYSTÉMY > HDCVI, HDTVI, AHD kamery":
        f"{SEC_CCTV} > Kamery 4v1",
    "Druhy > DŮM ZAHRADA > KAMEROVÉ SYSTÉMY > Inspekční kamery, endoskopy":
        "Dielňa, náradie a záhrada > Meracia technika > Inšpekčné kamery a endoskopy",
    "Druhy > DŮM ZAHRADA > KAMEROVÉ SYSTÉMY > IP SMART kamery": SEC_WIFI,
    "Druhy > DŮM ZAHRADA > KAMEROVÉ SYSTÉMY > Kamerové sety": SEC_CCTV,

    # Smart — oddeľujeme spotrebiče, TV, kamery a audio od skutočného smart-home.
    "Druhy > ELEKTRO > Chytrá domácnost a SMART elektronika": SMART,
    "Druhy > ELEKTRO > Chytrá domácnost a SMART elektronika > Čističky vzduchu":
        "Domáce spotrebiče a domácnosť > Klíma, vzduch a vykurovanie > Čističky a zvlhčovače vzduchu",
    "Druhy > ELEKTRO > Chytrá domácnost a SMART elektronika > Detektory a alarmy": SEC_DETECT,
    "Druhy > ELEKTRO > Chytrá domácnost a SMART elektronika > IP kamery": SEC_WIFI,
    "Druhy > ELEKTRO > Chytrá domácnost a SMART elektronika > Klávesnice":
        "Počítače, mobily a tablety > Monitory a PC periférie",
    "Druhy > ELEKTRO > Chytrá domácnost a SMART elektronika > Meteostanice":
        "Domáce spotrebiče a domácnosť > Vybavenie kuchyne a domácnosti > Meteostanice",
    "Druhy > ELEKTRO > Chytrá domácnost a SMART elektronika > Ostatní smart elektronika": SMART,
    "Druhy > ELEKTRO > Chytrá domácnost a SMART elektronika > Osvětlení": SMART_LIGHT,
    "Druhy > ELEKTRO > Chytrá domácnost a SMART elektronika > Přenosné lednice, chladící boxy":
        "Auto-moto > Karavany a obytné autá",
    "Druhy > ELEKTRO > Chytrá domácnost a SMART elektronika > Příslušenství": SMART,
    "Druhy > ELEKTRO > Chytrá domácnost a SMART elektronika > Rádia":
        "TV, audio, video a foto technika > Audio technika > Rádiá",
    "Druhy > ELEKTRO > Chytrá domácnost a SMART elektronika > Robotické vysavače":
        "Domáce spotrebiče a domácnosť > Upratovanie a starostlivosť o bielizeň > Vysávače > Robotické vysávače",
    "Druhy > ELEKTRO > Chytrá domácnost a SMART elektronika > Televizory":
        "TV, audio, video a foto technika > Televízory",
    "Druhy > ELEKTRO > Chytrá domácnost a SMART elektronika > Topení": SMART,
    "Druhy > ELEKTRO > Chytrá domácnost a SMART elektronika > Vypínače": SMART_SWITCHES,
    "Druhy > ELEKTRO > Chytrá domácnost a SMART elektronika > Zásuvky": SMART_PLUGS,
    "Druhy > ELEKTRO > Chytrá domácnost a SMART elektronika > Zvonky": SEC_BELLS,

    # Elektroinštalačné náradie — vyprázdni starú zmiešanú kategóriu prirodzeným routingom.
    "Druhy > ELEKTROINSTALAČNÍ MATERIÁL": ELEC,
    "Druhy > ELEKTROINSTALAČNÍ MATERIÁL > Instalační nářadí a ostatní materiál": ELEC,
    "Druhy > ELEKTROINSTALAČNÍ MATERIÁL > Instalační nářadí a ostatní materiál > Chemie":
        "Dielňa, náradie a záhrada > Dielenské vybavenie > Chémia pre dielňu",
    "Druhy > ELEKTROINSTALAČNÍ MATERIÁL > Instalační nářadí a ostatní materiál > Elektrické zámky":
        SEC_LOCKS,
    "Druhy > ELEKTROINSTALAČNÍ MATERIÁL > Instalační nářadí a ostatní materiál > Klíče na F konektory":
        "Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie > Kľúče",
    "Druhy > ELEKTROINSTALAČNÍ MATERIÁL > Instalační nářadí a ostatní materiál > Lisovací kleště":
        "Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie > Kliešte",
    "Druhy > ELEKTROINSTALAČNÍ MATERIÁL > Instalační nářadí a ostatní materiál > Nářadí pro fotovoltaiku":
        "Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie",
    "Druhy > ELEKTROINSTALAČNÍ MATERIÁL > Instalační nářadí a ostatní materiál > Ořezávače kabelů":
        "Dielňa, náradie a záhrada > Ručné a elektrické náradie > Mechanické náradie",
    "Druhy > ELEKTROINSTALAČNÍ MATERIÁL > Instalační nářadí a ostatní materiál > Organizéry":
        "Dielňa, náradie a záhrada > Dielenské vybavenie",
    "Druhy > ELEKTROINSTALAČNÍ MATERIÁL > Instalační nářadí a ostatní materiál > Ostatní":
        "Dielňa, náradie a záhrada > Dielenské vybavenie",
    "Druhy > ELEKTROINSTALAČNÍ MATERIÁL > Instalační nářadí a ostatní materiál > Rozběhové kondenzátory":
        E_CAPS,
    "Druhy > ELEKTROINSTALAČNÍ MATERIÁL > Montážní skříně a rozvaděče > Revizní dvířka":
        VENT_DOORS,
}

INNPRO_OVERRIDES = {
    "Inteligentná domácnosť > IP kamery": SEC_WIFI,
    # Celá táto vetva je od dodávateľa vedená ako "Inteligentná domácnosť > Osvetlenie".
    # Namiesto miešania so všeobecným LED sortimentom ide do Smart osvetlenia.
    "Inteligentná domácnosť > Osvetlenie": SMART_LIGHT,
    "Inteligentná domácnosť > Prvky výkonu": SMART,
    "Inteligentná domácnosť > Prvky výkonu > Senzory": SMART_SENSORS,
    "Inteligentná domácnosť > Prvky výkonu > Smart kúrenie > Termostatické hlavice": SMART_HEAT,
    "Inteligentná domácnosť > Prvky výkonu > Smart kúrenie > Termostaty": SMART_HEAT,
    "Inteligentná domácnosť > Prvky výkonu > Smart kúrenie > Ovládače klimatizácie > tepelného čerpadla": SMART,
    "Inteligentná domácnosť > Prvky výkonu > Smart zámky": SEC_LOCKS,
    "Inteligentná domácnosť > Prvky výkonu > Smart zástrčky": SMART_PLUGS,
    "Inteligentná domácnosť > Riadiace jednotky": SMART,
    "Inteligentná domácnosť > Riadiace jednotky > Ovládacie panely": SMART_CONTROLS,
    "Inteligentná domácnosť > Riadiace jednotky > Prepínače": SMART_SWITCHES,
    "Inteligentná domácnosť > Riadiace jednotky > Smart centrály": SMART_HUBS,
    "Inteligentná domácnosť > Riadiace jednotky > Smart ovládače": SMART_CONTROLS,
    "Inteligentná domácnosť > Príslušenstvo": SMART,
    "Inteligentná domácnosť > Smart záhrada": SMART,
}

SOLIGHT_OVERRIDES = {
    # Bezpečný fallback pre nový nepoznaný elektroinštalačný podtyp.
    "Solight > Elektroinštalačný materiál": ELEC,
    "Solight > Elektroinštalačný materiál > 230V > Držiaky zásuviek": E_SWITCH,
    "Solight > Elektroinštalačný materiál > 230V > Flexo šnúry": E_EXT_PLUGS,
    "Solight > Elektroinštalačný materiál > 230V > Koncovky": E_EXT_PLUGS,
    "Solight > Elektroinštalačný materiál > 230V > Rozbočky": E_EXT_PLUGS,
    "Solight > Elektroinštalačný materiál > 230V > Viacnásobné zásuvky": E_EXT_PLUGS,
    "Solight > Elektroinštalačný materiál > 230V > Vypínače a zásuvky": E_SWITCH,
    "Solight > Elektroinštalačný materiál > 400V": E_EXT_INDUSTRIAL,
    "Solight > Elektroinštalačný materiál > Izolačný materiál > Izolačné PVC pásky": E_INSTALL_FIX,
    "Solight > Elektroinštalačný materiál > Izolačný materiál > Viazacie pásky": E_INSTALL_FIX,
    "Solight > Elektroinštalačný materiál > Káble": E_CABLES,

    "Solight > Elektrotovar > Bezdrôtové zvončeky": SEC_BELLS,
    "Solight > Elektrotovar > Cestovné adaptéry": E_TRAVEL,
    "Solight > Elektrotovar > Diaľkovo ovládané zásuvky": SMART_PLUGS,
    "Solight > Elektrotovar > Merače spotreby": E_METERS,
    "Solight > Elektrotovar > Zabezpečovacia technika": SEC_DETECT,
    "Solight > Elektrotovar > Zabezpečovacia technika > Kamery": SEC_WIFI,
    "Solight > Elektrotovar > Časové spínače": E_METERS,

    "Solight > Predľžovacie prívody": E_EXT,
    "Solight > Predľžovacie prívody > Jednozásuvkové > Jednozásuvkové  400V": E_EXT_INDUSTRIAL,
    "Solight > Predľžovacie prívody > Jednozásuvkové > Jednozásuvkové 230V": E_EXT_CORDS,
    "Solight > Predľžovacie prívody > Navíjacie bubny": E_EXT_CORDS,
    "Solight > Predľžovacie prívody > Prepäťové ochrany": E_BREAKERS,
    "Solight > Predľžovacie prívody > Viaczásuvkové": E_EXT_CORDS,
    "Solight > Predľžovacie prívody > Výsuvné a vstavané zásuvky": E_SWITCH,
    "Solight > Predľžovacie prívody > Záhradné stĺpiky": E_EXT,

    "Solight > Svietiaci program": LIGHT,
    "Solight > Svietiaci program > GU10 bodové osvetlenie": LIGHT_SPOT,
    "Solight > Svietiaci program > LED osvetlenie": LIGHT_INTERIOR,
    "Solight > Svietiaci program > LED osvetlenie > Vonkajšie osvetlenie": LIGHT_OUTDOOR,
    "Solight > Svietiaci program > LED panely a podhľadová svetla": LED_PANELS,
    # Opravuje 38 LED pásikov + 23 príslušenstva + 14 zdrojov, ktoré boli bez pravidla.
    "Solight > Svietiaci program > LED pásky a príslušenstvo": LED_STRIPS,
    "Solight > Svietiaci program > LED pásky": LED_STRIPS,
    "Solight > Svietiaci program > LED reflektory": LED_REFL,
    "Solight > Svietiaci program > LED stolové lampy": LIGHT_LAMPS,
    "Solight > Svietiaci program > LED trubicové žiarivky": LED_TUBES,
    "Solight > Svietiaci program > LED žiarovky": LED_BULBS,
    "Solight > Svietiaci program > Priemyselné LED osvetlenie": LIGHT_INDUSTRIAL,
    "Solight > Svietiaci program > Senzory a konektory": LIGHT_COMPONENTS,
    "Solight > Svietiaci program > Svietidlá > Čelové": LIGHT_FLASH,
    "Solight > Svietiaci program > Svietidlá > Lampáše": LIGHT_FLASH,
    "Solight > Svietiaci program > Svietidlá > Montážne a nabíjacie svetla": LIGHT_FLASH,
    "Solight > Svietiaci program > Svietidlá > Nabíjacie": LIGHT_FLASH,
    "Solight > Svietiaci program > Svietidlá > Nenabíjacie": LIGHT_FLASH,
    "Solight > Svietiaci program > Vianocne osvetlenie": LIGHT_XMAS,
}

KB_OVERRIDES = {
    "Dům a Byt > Chytrá domácnost": SMART,
    "Dům a Byt > Chytrá domácnost > Chytré zabezpečení > Chytré senzory": SMART_SENSORS,
    "Dům a Byt > Chytrá domácnost > Chytré zabezpečení > Detektor pohybu":
        f"{SMART_SENSORS} > Senzory pohybu a otvorenia",
    "Dům a Byt > Chytrá domácnost > Chytré zabezpečení > Kamery": SEC_WIFI,

    "Dům a Byt > Žárovky, vypínače, svítidla > Cestovní adaptéry": E_TRAVEL,
    "Dům a Byt > Žárovky, vypínače, svítidla > LED Žárovky": LED_BULBS,
    "Dům a Byt > Žárovky, vypínače, svítidla > Lampy a lampičky": LIGHT_LAMPS,
    "Dům a Byt > Žárovky, vypínače, svítidla > Ostatní žárovky a zářivky": LIGHT,
    "Dům a Byt > Žárovky, vypínače, svítidla > Svítidla": LIGHT,
    "Dům a Byt > Žárovky, vypínače, svítidla > Svítidla > Vnitřní osvětlení > Dekorativní osvětlení":
        LIGHT_INTERIOR,
    "Dům a Byt > Žárovky, vypínače, svítidla > Svítidla > Vnitřní osvětlení > SMART osvětlení":
        SMART_LIGHT,
    "Dům a Byt > Žárovky, vypínače, svítidla > Svítidla > Vnitřní osvětlení > Stojací a stolní lampy":
        LIGHT_LAMPS,
    "Dům a Byt > Žárovky, vypínače, svítidla > Svítidla > Vnitřní osvětlení > Stropní a nástěnná svítidla":
        LIGHT_INTERIOR,
    "Dům a Byt > Žárovky, vypínače, svítidla > Zásuvky": E_SWITCH,
}

PENTA_OVERRIDES = {
    "Koncový shop I6 > Domáce spotrebiče > Vysávače > Robotické vysávače":
        "Domáce spotrebiče a domácnosť > Upratovanie a starostlivosť o bielizeň > Vysávače > Robotické vysávače",
    "Koncový shop I6 > Domácnosť > Ohrievače > Krbové ventilátory":
        "Domáce spotrebiče a domácnosť > Klíma, vzduch a vykurovanie > Ventilátory",
    "Koncový shop I6 > Domácnosť > Smart > Kamery": SEC_WIFI,
    "Koncový shop I6 > Domácnosť > Smart > Osvetlenie": SMART_LIGHT,
    "Koncový shop I6 > Domácnosť > Smart > Zásuvky": SMART_PLUGS,
    "Koncový shop I6 > Domácnosť > Svietidlá > Interiérové osvetlenie": LIGHT_INTERIOR,
    "Koncový shop I6 > Domácnosť > Vianočné dekorácie": LIGHT_XMAS,
    "Koncový shop I6 > Domácnosť > Vianočné dekorácie > Vianočné osvetlenie": LIGHT_XMAS,
}

# Penta exclusions sa ZÁMERNE nemenia. Nechceme v rovnakom deployi zmeniť kategorizáciu
# a zároveň nečakane otvoriť doteraz vylúčený sortiment.

# InnPro: jediná skutočne široká smart vetva, ktorú treba rozdeliť podľa názvu.
SMART_SENSOR_SUBRULES = [
    {
        "category": "Senzory pohybu a otvorenia",
        "pattern": r"pohyb|motion|\bPIR\b|otvor|opening|dver|door|okn|window|magnet|kontakt|contact",
    },
    {
        "category": "Senzory teploty a vlhkosti",
        "pattern": r"teplot|temperature|vlhk|humidity|hygro|termohyg|thermo",
    },
]

# ---------------------------------------------------------------------------
# Pomocné funkcie
# ---------------------------------------------------------------------------

def migrate_path(s: str) -> str:
    if not isinstance(s, str):
        return s
    for old, new in PATH_RULES:
        if s == old:
            return new
        if s.startswith(old + " > "):
            return new + s[len(old):]
    return s

def read_json(path: Path):
    raw = path.read_text(encoding="utf-8-sig")
    if not raw.strip():
        return None, raw
    return json.loads(raw), raw

def detect_indent(raw: str, default: int = 2) -> int:
    m = re.search(r"\n( +)[\"\[]", raw)
    if m:
        return max(1, len(m.group(1)))
    return default

def dump_json(obj, raw: str, *, sort_keys: bool = False) -> str:
    indent = detect_indent(raw)
    return json.dumps(
        obj, ensure_ascii=False, indent=indent, sort_keys=sort_keys
    ) + "\n"

def transform_dict_keys(obj: dict, fn):
    out = {}
    for k, v in obj.items():
        nk = fn(k)
        if nk in out and out[nk] != v:
            raise RuntimeError(f"Kolízia po transformácii kľúča: {k!r} -> {nk!r}")
        out[nk] = v
    return out

def transform_strings(obj):
    """Rekurzívne zmení iba hodnoty, ktoré sú cestou v našom starom Elektro strome."""
    if isinstance(obj, str):
        return migrate_path(obj)
    if isinstance(obj, list):
        return [transform_strings(x) for x in obj]
    if isinstance(obj, dict):
        out = {}
        for k, v in obj.items():
            nk = migrate_path(k) if isinstance(k, str) else k
            nv = transform_strings(v)
            if nk in out and out[nk] != nv:
                raise RuntimeError(f"Kolízia JSON kľúča po migrácii: {k!r} -> {nk!r}")
            out[nk] = nv
        return out
    return obj

def set_rules(path: Path, overrides: dict, planned: dict):
    obj, raw = read_json(path)
    if obj is None:
        raise RuntimeError(f"Prázdny JSON: {path}")
    rules = obj.get("pravidla")
    if not isinstance(rules, dict):
        raise RuntimeError(f"{path}: chýba objekt 'pravidla'")

    # Najprv migrujeme všetky existujúce cieľové hodnoty.
    for src, target in list(rules.items()):
        rules[src] = migrate_path(target)

    # Potom presné nové routing rozhodnutia.
    rules.update(overrides)
    new = dump_json(obj, raw)
    if new != raw:
        planned[path] = (raw, new)

def migrate_mapping_json(path: Path, planned: dict):
    if not path.exists():
        return
    obj, raw = read_json(path)
    if obj is None:
        return

    # V mappingoch sú source paths kľúče; transformujeme iba cieľové hodnoty.
    obj = transform_strings(obj)

    # InnPro categorySubRulesByName: parent je KĽÚČ, preto ho migrujeme osobitne.
    if path.name == "innpro-mapping.json":
        sub = obj.get("categorySubRulesByName", {})
        if isinstance(sub, dict):
            sub = transform_dict_keys(sub, migrate_path)
            sub[SMART_SENSORS] = SMART_SENSOR_SUBRULES
            obj["categorySubRulesByName"] = sub

    # Penta používa categoryRenamesByPath ako aktívny routing.
    if path.name == "penta-mapping.json":
        ren = obj.get("categoryRenamesByPath")
        if not isinstance(ren, dict):
            raise RuntimeError("scripts/penta-mapping.json: chýba categoryRenamesByPath")
        ren.update(PENTA_OVERRIDES)
        # categoryExclusionsByPath sa ZÁMERNE nemení.
        obj["categoryRenamesByPath"] = ren

    new = dump_json(obj, raw)
    if new != raw:
        planned[path] = (raw, new)

def migrate_known(path: Path, planned: dict) -> set[str]:
    obj, raw = read_json(path)
    if not isinstance(obj, list):
        raise RuntimeError("data/known-categories.json nie je pole")

    transformed = [migrate_path(x) for x in obj]
    if len(transformed) != len(set(transformed)):
        # Vypíš presný konflikt.
        seen = set()
        dup = []
        for x in transformed:
            if x in seen:
                dup.append(x)
            seen.add(x)
        raise RuntimeError("Kolízia known-categories po migrácii: " + ", ".join(sorted(set(dup))))

    known = set(transformed)
    known.update(REQUIRED_NEW_CATEGORIES)
    out = sorted(known)
    new = json.dumps(out, ensure_ascii=False, indent=1) + "\n"
    if new != raw:
        planned[path] = (raw, new)
    return set(out)

def migrate_urls(path: Path, planned: dict):
    obj, raw = read_json(path)
    if not isinstance(obj, dict):
        raise RuntimeError("data/category-urls.json nie je objekt")
    out = {}
    for k, v in obj.items():
        nk = migrate_path(k)
        if nk in out and out[nk] != v:
            raise RuntimeError(f"category-urls kolízia: {k!r} -> {nk!r}")
        out[nk] = v
    out.update(NEW_CATEGORY_URLS)
    new = dump_json(out, raw)
    if new != raw:
        planned[path] = (raw, new)

def migrate_heureka(path: Path, planned: dict):
    obj, raw = read_json(path)
    if not isinstance(obj, dict):
        raise RuntimeError("scripts/heureka-mapping.json nie je objekt")
    out = {}
    for k, v in obj.items():
        nk = migrate_path(k)
        if nk in out and out[nk] != v:
            raise RuntimeError(
                f"Heureka mapping kolízia s rozdielnym CATEGORY_ID: {k!r} -> {nk!r}"
            )
        out[nk] = v
    new = dump_json(out, raw)
    if new != raw:
        planned[path] = (raw, new)

def migrate_recursive_json(path: Path, planned: dict, known_after: set[str] | None = None):
    if not path.exists():
        return
    obj, raw = read_json(path)
    if obj is None:
        return
    obj = transform_strings(obj)

    # Staršia approved-category migrácia má snapshot celého stromu.
    if path.name == "approved-category-migration.json" and isinstance(obj, dict):
        if isinstance(obj.get("tree"), list) and known_after is not None:
            obj["tree"] = sorted(known_after)

    new = dump_json(obj, raw)
    if new != raw:
        planned[path] = (raw, new)

def effective_json(path: Path, planned: dict):
    if path in planned:
        return json.loads(planned[path][1])
    obj, _ = read_json(path)
    return obj

def validate(repo: Path, planned: dict):
    known_path = repo / "data/known-categories.json"
    known_obj = effective_json(known_path, planned)
    if not isinstance(known_obj, list):
        raise RuntimeError("known-categories sa nedá validovať")
    known = set(known_obj)

    required = {
        ROOT_CAT, ELEC, LIGHT, SMART, SEC, VENT,
        SMART_SENSORS, SMART_PLUGS, SMART_SWITCHES, SMART_HUBS, SMART_CONTROLS,
        SMART_HEAT, SMART_LIGHT, SEC_WIFI, SEC_CCTV, SEC_DETECT, SEC_BELLS,
        SEC_LOCKS, SEC_GATES, LED, LED_BULBS, LED_REFL, LED_PANELS,
        LED_STRIPS, LED_TUBES, LIGHT_INTERIOR, LIGHT_OUTDOOR, LIGHT_LAMPS,
        LIGHT_SPOT, LIGHT_INDUSTRIAL, LIGHT_FLASH, LIGHT_XMAS, LIGHT_COMPONENTS,
        E_CABLES, E_SWITCH, E_EXT, E_TRAVEL, E_INSTALL, E_INSTALL_TUBES,
        E_BOXES, E_BOARD, E_BREAKERS, E_METERS, E_CAPS,
        VENT_HOME, VENT_INDUSTRIAL, VENT_GRILLES, VENT_DUCTS, VENT_ACC, VENT_DOORS,
    }
    missing = sorted(required - known)
    if missing:
        raise RuntimeError("V known-categories chýbajú povinné uzly:\n  - " + "\n  - ".join(missing))

    # Staré vetvy, ktoré po Shoptet importe už nesmú byť aktívnym cieľom.
    stale_exact = {
        f"{ROOT_CAT} > Osvetlenie – svietidlá",
        f"{ROOT_CAT} > Smart domácnosť – zariadenia",
        f"{ROOT_CAT} > Smart riadiace jednotky a huby",
        f"{ROOT_CAT} > Profesionálne kamerové systémy",
        f"{ROOT_CAT} > IP kamery",
        f"{ROOT_CAT} > Zabezpečenie – detektory a senzory",
        f"{ROOT_CAT} > Bezdrôtové zvončeky",
        f"{ROOT_CAT} > Pohony brán a vrát",
        f"{ROOT_CAT} > Vzduchotechnika a montážne príslušenstvo",
        f"{ROOT_CAT} > Cestovné adaptéry",
        f"{ROOT_CAT} > Vypínače a nástenné zásuvky",
    }
    left = sorted(x for x in known if x in stale_exact)
    if left:
        raise RuntimeError("V known-categories zostali staré aktívne uzly: " + ", ".join(left))

    # Každý canonical supplier target musí byť reálny uzol stromu.
    kdir = repo / "data/kategorie"
    for p in sorted(kdir.glob("*.json")):
        obj = effective_json(p, planned)
        if not obj:
            continue
        for src, target in (obj.get("pravidla") or {}).items():
            if target not in known:
                raise RuntimeError(
                    f"{p}: cieľ pravidla nie je v known-categories:\n  {src}\n  -> {target}"
                )

    # Penta rename targets.
    penta = repo / "scripts/penta-mapping.json"
    pobj = effective_json(penta, planned)
    if pobj:
        for src, target in (pobj.get("categoryRenamesByPath") or {}).items():
            if isinstance(target, str) and target not in known:
                raise RuntimeError(
                    f"{penta}: Penta cieľ nie je v known-categories:\n  {src}\n  -> {target}"
                )

    # InnPro per-SKU overrides a názvové subrules.
    ipath = repo / "scripts/innpro-mapping.json"
    iobj = effective_json(ipath, planned)
    if iobj:
        for code, target in (iobj.get("categoryOverridesByCode") or {}).items():
            if code == "_comment":
                continue
            if isinstance(target, str) and target not in known:
                raise RuntimeError(f"InnPro SKU {code}: neznámy cieľ {target}")
        for parent, rules in (iobj.get("categorySubRulesByName") or {}).items():
            if parent not in known:
                raise RuntimeError(f"InnPro subrules: neznámy parent {parent}")
            for r in rules:
                full = parent + " > " + r["category"]
                if full not in known:
                    raise RuntimeError(f"InnPro subrules: neznámy child {full}")
                # over regex syntax before workflow does it in Node
                re.compile(r["pattern"], re.I)

    # URL map — nové kategórie musia mať presne URL, ktoré sme importovali do Shoptetu.
    upath = repo / "data/category-urls.json"
    uobj = effective_json(upath, planned)
    if not isinstance(uobj, dict):
        raise RuntimeError("category-urls sa nedá validovať")
    for cat, url in NEW_CATEGORY_URLS.items():
        if uobj.get(cat) != url:
            raise RuntimeError(f"Chybná/chýbajúca URL: {cat} -> {uobj.get(cat)!r}, očakávam {url!r}")

    # Solight 95 známych chýb: dve prefixové pravidlá musia existovať.
    sol = effective_json(repo / "data/kategorie/solight.json", planned)
    srules = (sol or {}).get("pravidla") or {}
    if srules.get("Solight > Svietiaci program > LED pásky a príslušenstvo") != LED_STRIPS:
        raise RuntimeError("Solight: chýba routing pre LED pásky a príslušenstvo (75 produktov)")
    if srules.get("Solight > Svietiaci program > GU10 bodové osvetlenie") != LIGHT_SPOT:
        raise RuntimeError("Solight: chýba routing pre GU10 bodové osvetlenie (20 produktov)")

    return {
        "known_count": len(known),
        "supplier_rule_files": len(list(kdir.glob("*.json"))),
        "new_categories_checked": len(NEW_CATEGORY_URLS),
    }

def collect_stale_text_hits(repo: Path, planned: dict):
    needles = [
        f"{ROOT_CAT} > Osvetlenie – svietidlá",
        f"{ROOT_CAT} > Smart domácnosť – zariadenia",
        f"{ROOT_CAT} > Smart riadiace jednotky a huby",
        f"{ROOT_CAT} > Profesionálne kamerové systémy",
        f"{ROOT_CAT} > IP kamery",
        f"{ROOT_CAT} > Zabezpečenie – detektory a senzory",
        f"{ROOT_CAT} > Bezdrôtové zvončeky",
        f"{ROOT_CAT} > Vzduchotechnika a montážne príslušenstvo",
        f"{ROOT_CAT} > Vypínače a nástenné zásuvky",
        f"{ROOT_CAT} > Cestovné adaptéry",
    ]
    candidate_paths = []
    for base in [repo / "data", repo / "scripts"]:
        if not base.exists():
            continue
        for p in base.rglob("*"):
            if p.is_file() and p.suffix in {".json", ".js"}:
                # Generated/history locations intentionally skipped.
                if any(part in {"reports", "output", "node_modules"} for part in p.parts):
                    continue
                candidate_paths.append(p)

    hits = []
    for p in candidate_paths:
        if p in planned:
            text = planned[p][1]
        else:
            try:
                text = p.read_text(encoding="utf-8-sig")
            except Exception:
                continue
        for n in needles:
            if n in text:
                hits.append((p.relative_to(repo).as_posix(), n))
                break
    return hits

def prepare(repo: Path):
    planned: dict[Path, tuple[str, str]] = {}

    markers = [
        repo / "data/known-categories.json",
        repo / "scripts/zarad-kategoriu.js",
        repo / "data/kategorie/atos.json",
        repo / "data/kategorie/innpro.json",
        repo / "data/kategorie/solight.json",
        repo / "data/kategorie/kb.json",
    ]
    missing = [str(p.relative_to(repo)) for p in markers if not p.exists()]
    if missing:
        raise RuntimeError(
            "Toto nevyzerá ako koreň import_innpro repozitára. Chýba: " + ", ".join(missing)
        )

    known_after = migrate_known(repo / "data/known-categories.json", planned)
    migrate_urls(repo / "data/category-urls.json", planned)
    migrate_heureka(repo / "scripts/heureka-mapping.json", planned)

    # Canonical routing files.
    set_rules(repo / "data/kategorie/atos.json", ATOS_OVERRIDES, planned)
    set_rules(repo / "data/kategorie/innpro.json", INNPRO_OVERRIDES, planned)
    set_rules(repo / "data/kategorie/solight.json", SOLIGHT_OVERRIDES, planned)
    set_rules(repo / "data/kategorie/kb.json", KB_OVERRIDES, planned)

    # Ak pribudne ďalší supplier v data/kategorie/, aspoň jeho existujúce TARGETY
    # sa posunú na nový strom. Žiadne jeho source pravidlá nevymýšľame.
    for p in sorted((repo / "data/kategorie").glob("*.json")):
        if p.name in {"atos.json", "innpro.json", "solight.json", "kb.json"}:
            continue
        obj, raw = read_json(p)
        if not obj or not isinstance(obj.get("pravidla"), dict):
            continue
        for src, target in list(obj["pravidla"].items()):
            obj["pravidla"][src] = migrate_path(target)
        new = dump_json(obj, raw)
        if new != raw:
            planned[p] = (raw, new)

    # Legacy/aux mappingy držíme konzistentné, hoci hlavný routing už ide cez data/kategorie.
    for name in ["atos-mapping.json", "innpro-mapping.json", "solight-mapping.json",
                 "kb-mapping.json", "penta-mapping.json"]:
        migrate_mapping_json(repo / "scripts" / name, planned)

    # Enforce-tree preklad starých feedov a ručné SKU korekcie.
    for rel in [
        "data/stary-novy-strom.json",
        "data/zlozene-cesty.json",
        "data/product-category-corrections.json",
        "data/approved-category-migration.json",
        "data/category-migration.json",
        "data/christmas-products.json",
        "scripts/heureka-hidden-categories.json",
    ]:
        migrate_recursive_json(repo / rel, planned, known_after=known_after)

    result = validate(repo, planned)
    stale = collect_stale_text_hits(repo, planned)
    return planned, result, stale

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--apply", action="store_true", help="Zapíše pripravené zmeny.")
    ap.add_argument("--check", action="store_true", help="Iba validácia aktuálneho/plánovaného stavu.")
    ap.add_argument("--root", default=".", help="Koreň repozitára (default: aktuálny adresár).")
    args = ap.parse_args()

    repo = Path(args.root).resolve()
    try:
        planned, result, stale = prepare(repo)
    except Exception as e:
        print(f"\nCHYBA: {e}", file=sys.stderr)
        sys.exit(2)

    print("\nPremiumStore — kategórie / mapovanie dodávateľov")
    print("=" * 58)
    print(f"Repo: {repo}")
    print(f"known-categories po migrácii: {result['known_count']}")
    print(f"Kontrolované nové URL: {result['new_categories_checked']}")
    print(f"Súborov s plánovanou zmenou: {len(planned)}")
    print()

    for p in sorted(planned, key=lambda x: x.as_posix()):
        old, new = planned[p]
        old_lines = old.count("\n")
        new_lines = new.count("\n")
        print(f"  {p.relative_to(repo)}  ({old_lines} -> {new_lines} riadkov)")

    if stale:
        print("\nUPOZORNENIE — po plánovaných zmenách zostali textové odkazy na staré cesty:")
        for p, needle in stale[:50]:
            print(f"  {p}: {needle}")
        print("Tieto výskyty môžu byť komentár/historická mapa, ale pred pushom ich skontroluj.")
    else:
        print("\nOK: v aktívnych data/scripts súboroch neostal známy starý Elektro target.")

    if args.check:
        print("\nCHECK OK — validácia prešla.")
        return

    if not args.apply:
        print("\nDRY RUN — nič nebolo zapísané.")
        print("Ak výstup vyzerá správne, spusti:")
        print("  python3 apply_elektro_category_migration.py --apply")
        return

    # Až po kompletnej príprave a validácii zapisujeme atomicky.
    for p, (_, new) in planned.items():
        tmp = p.with_suffix(p.suffix + ".tmp-category-migration")
        tmp.write_text(new, encoding="utf-8")
        tmp.replace(p)

    # Druhá validácia už nad reálne zapísaným stavom.
    try:
        planned2, result2, stale2 = prepare(repo)
    except Exception as e:
        print(f"\nZápis prebehol, ale následná validácia zlyhala: {e}", file=sys.stderr)
        print("Použi git diff / git checkout na návrat pred commitom.", file=sys.stderr)
        sys.exit(3)

    if planned2:
        # Idempotencia: po úspešnom apply nesmie druhý beh plánovať ďalšie zmeny.
        print("\nCHYBA: migrácia nie je idempotentná, druhý beh stále plánuje zmeny:", file=sys.stderr)
        for p in planned2:
            print("  " + str(p.relative_to(repo)), file=sys.stderr)
        sys.exit(4)

    print("\nAPPLY OK — zmeny zapísané a druhá validácia prešla.")
    if stale2:
        print("Pozor: ostali textové výskyty starých ciest; pozri upozornenie z dry-runu.")
    print("\nĎalšie kroky:")
    print("  git status")
    print("  git diff --stat")
    print("  git diff")
    print("  python3 apply_elektro_category_migration.py --check")
    print("  git add data scripts")
    print('  git commit -m "Migrate Elektro category mappings to new Shoptet tree"')
    print("  git push")

if __name__ == "__main__":
    main()
