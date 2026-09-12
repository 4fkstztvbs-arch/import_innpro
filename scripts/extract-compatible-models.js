// Extracts "compatible device model" lists from ATOS remote-control product descriptions and
// turns them into filterable Shoptet parameters (multiple <TEXT_PROPERTY> entries sharing the
// same <NAME>, one <VALUE> per model — the standard Shoptet pattern for a multi-select category
// filter, e.g. "Kompatibilný model TV").
//
// ATOS writes these as a fixed HTML pattern inside <DESCRIPTION>:
//   <p><ins><strong>Ovladač je kompatibilní s těmito modely televizorů:</strong></ins></p>
//   <p>MODEL1, MODEL2, MODEL3, ...</p>
// The device-type phrase before the colon varies (televizorů / DVB-T přijímačů / satelitních
// přijímačů / DVB-T2 přijímačů / Blu-ray přehrávačů / dálkových ovladačů <brand> / bare "modely:").
// Descriptions mix literal UTF-8 and HTML-entity-encoded text inconsistently, so decode entities
// first and match against the decoded text.

const he = require('he');

// Chvost hodnoty ("<p>MODEL1, MODEL2<br /> &nbsp;</p>") casto obsahuje osamotene <br /> (a/alebo
// &nbsp;) tesne pred zatvaracim </p> - povodny vzor to nedovolal (vyzadoval cisto text bez "<"),
// cim unikla velka cast produktov s inak zhodnou strukturou. Chvost sa preto tolerovat samostatne.
const HEADER_RE = /kompatibiln[ýí]\S*(?:\s+i)?\s+s\s+(?:těmito\s+|vět\S+\s+)?model\S*\s*([^:<]{0,60}):\s*<\/strong>\s*<\/ins>\s*<\/p>\s*<p>\s*([^<]{2,4000}?)(?:<br\s*\/?>\s*)*(?:&nbsp;\s*)*<\/p>/gi;

function paramSuffixForDeviceType(rawText) {
  const t = rawText.trim().toLowerCase();
  if (/ovlada/.test(t)) return null; // "...modely dálkových ovladačů Philips:" — different meaning, not a device model
  if (!t) return 'zariadenia';
  if (/televizor/.test(t)) return 'TV';
  if (/dvb-t2/.test(t)) return 'DVB-T2 prijímača';
  if (/dvb-t/.test(t)) return 'DVB-T prijímača';
  if (/satelitn/.test(t)) return 'satelitného prijímača';
  if (/blu-?ray/.test(t)) return 'Blu-ray prehrávača';
  if (/p[řr][ií]j[íi]mač/.test(t)) return 'prijímača'; // ATOS casto pise s preklepom "příjímač" (2x í)
  return null; // unrecognized device type — skip rather than guess wrong
}

function extractCompatibleModels(descriptionHtml) {
  if (!descriptionHtml) return [];
  const decoded = he.decode(descriptionHtml);
  const out = [];
  let m;
  HEADER_RE.lastIndex = 0;
  while ((m = HEADER_RE.exec(decoded))) {
    const suffix = paramSuffixForDeviceType(m[1]);
    if (!suffix) continue;
    const paramName = `Kompatibilný model ${suffix}`;
    const models = m[2]
      .replace(/&nbsp;/gi, ' ')
      .split(',')
      .map((s) => s.replace(/\s+/g, ' ').trim())
      .filter((s) => s && s.length <= 40 && /[a-zA-Z0-9]/.test(s));
    for (const model of models) out.push(`${paramName};${model}`);
  }
  return [...new Set(out)];
}

// --- Kompatibilná značka -------------------------------------------------------------------
// Zoznam kompatibilných MODELOV v popise (vyššie) takmer nikdy neobsahuje značku zariadenia -
// pri type "televizorů" sú to holé kódy modelov. Značka je ale spoľahlivo v názve produktu:
// "Diaľkový ovládač ALIEN {Značka} {kód pôvodného ovládača}". Overené na 610 reálnych produktoch
// z output/atos.xml: vzor sedí na 100 %, dá 82 rôznych značiek.
//
// Prečo nie "všetko okrem posledného tokenu": názvy často obsahujú zoznam viacerých pôvodných
// modelov ("Vantage HD 1100, 6000, 7100, 8000"), takže počet tokenov kolíše od 2 do 11 - značka
// je vždy len prvý token (resp. dvojslovný celok zo zoznamu nižšie).

const NAME_PREFIX_RE = /^(?:Di(?:aľ|áľ)kov[ýé]\s+ovl[áa]d(?:ač|anie)|D[áa]lkov[ýé]\s+ovlada[čc]|Vysiela[čc]\s+DO)\s+(?:ALIEN\s+)?(.+)$/i;

// Dvojslovné značky - musia sa skúšať pred jednoslovným fallbackom (najdlhšia zhoda vyhráva).
const TWO_WORD_BRANDS = ['AB IPBOX', 'AB CryptoBox', 'AZ BOX', 'Golden Media', 'Golden Interstar', 'New Digital'];

// Tá istá značka chodí od ATOSu v rôznom zápise - bez zjednotenia by sa vo filtri zobrazila
// dvakrát ako dve rôzne možnosti. Kľúč je lowercase, hodnota oficiálny zápis značky.
const BRAND_CANONICAL = {
  'amiko': 'Amiko',
  'bensat': 'BENsat',
  'gosat': 'GoSat',
  'hyundai': 'Hyundai',
  'technisat': 'TechniSat',
  'tesla': 'TESLA',
  'topfield': 'Topfield',
  'ab cryptobox': 'AB CryptoBox',
};

function extractCompatibleBrand(productName) {
  if (!productName) return null;
  const m = NAME_PREFIX_RE.exec(productName.trim());
  if (!m) return null;
  let rest = m[1]
    .replace(/\s*[-–]\s*n[áa]hrada.*$/i, '') // "... - náhrada za originál" chvost
    .trim()
    .replace(/^STB\s+/i, '') // generický popis "Set-Top-Box", nie značka
    .trim();
  if (!rest) return null;

  let brand = null;
  for (const two of TWO_WORD_BRANDS) {
    const lower = rest.toLowerCase(), t = two.toLowerCase();
    if (lower === t || lower.startsWith(t + ' ')) { brand = rest.slice(0, two.length); break; }
  }
  if (!brand) brand = rest.split(/\s+/)[0];
  brand = brand.replace(/[,;]+$/, '').trim();
  if (!brand || brand.length > 30 || !/[a-zA-Z]/.test(brand)) return null;

  return BRAND_CANONICAL[brand.toLowerCase()] || brand;
}

module.exports = { extractCompatibleModels, extractCompatibleBrand };
