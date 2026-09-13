# Staré zaradenia, ktoré v e-shope zostali

Shoptet pri importe produktov kategórie **pridáva, neodstraňuje**. Overené: ručný import InnPro
o 22:55 už bežal na správnom feede, a produkty aj tak zostali v starých kategóriách.

Zaradenia sú z ranného importu (starý strom). Keďže import kategórií páruje podľa URL, časť
starých kategórií sa premenovala na nové uzly — a práve tam je staré zaradenie vidno.

- **12476** zaradení mieri na kategórie, ktoré sú dnes skryté → v e-shope ich nevidno
- **455** zaradení mieri na živé kategórie, kde produkt nemá byť → tieto treba odstrániť
- 61741 starých ciest sa nedalo vyhodnotiť (stará mapa URL pokrýva 1047 z 2928 uzlov),
  takže druhé číslo je **dolný odhad**, nie presný počet

| Živá kategória, z ktorej odstrániť | Produktov |
|---|---:|
| Auto-moto | 290 |
| Zdravie a starostlivosť | 134 |
| Energia a napájanie | 23 |
| Profesionálna audio technika | 5 |
| Dielňa, náradie a záhrada > Záhrada a bazén | 3 |
