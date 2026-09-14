// Shared lookup for the Heureka.sk comparison-shopping category ID (HEUREKA_CATEGORY_ID),
// keyed by our own resolved Shoptet category path (the same string written to <CATEGORIES>).
//
// scripts/heureka-mapping.json only covers the categories we're confident enough about to
// publish (~56% of the catalog as of 2026-08-07 — see reports/heureka-mapovanie-navrh-*.xlsx
// for the full review, including the categories intentionally left out pending better matching).
// A category not in the map simply gets no HEUREKA_CATEGORY_ID; Shoptet/Heureka fall back to
// their own category-pairing mechanism for those products.

const fs = require('fs');
const path = require('path');

const MAPPING_PATH = path.join(__dirname, 'heureka-mapping.json');
const MAPPING = JSON.parse(fs.readFileSync(MAPPING_PATH, 'utf-8'));

// Podkategória dedí Heureka kategóriu po najbližšom predkovi, ktorý ju má. Bez toho by každé
// prehĺbenie stromu zhodilo Heureka ID tovaru, ktorý ho dovtedy mal: po pridaní 4. úrovne
// 14. 9. 2026 by ho naraz stratilo 11 487 produktov, hoci ide o ten istý tovar, len zaradený o
// úroveň nižšie. Dedenie presne zachováva stav spred rozdelenia; keď si niektorá podkategória
// zaslúži inú Heureka kategóriu, pridá sa do heureka-mapping.json vlastným záznamom a ten
// dedeniu prirodzene prebije, lebo sa hľadá od najhlbšej cesty.
function heurekaCategoryIdFor(categoryPath) {
  if (!categoryPath) return null;
  const segs = String(categoryPath).split(' > ');
  for (let d = segs.length; d > 0; d--) {
    const id = MAPPING[segs.slice(0, d).join(' > ')];
    if (id) return id;
  }
  return null;
}

// HEUREKA_HIDDEN — vylúčenie z rozšíreného Heureka CPC feedu podľa kategórie a/alebo nízkej ceny.
// Oboje sú obchodné rozhodnutia (návrh v reports/heureka-kategorie-marza.md pre kategórie; cenový
// strop pridaný na žiadosť 2026-08-11 — lacné produkty sa na Heureke neoplatia propagovať), nie
// automaticky odvodené — uprav scripts/heureka-hidden-categories.json.
//
// Zoznam pracuje s CESTAMI, nie len s koreňmi (2026-09-13). Dôvod: rozhodnutie stálo na zisku na
// kus a nový strom zlúčil kategórie s veľmi rozdielnou maržou pod jeden koreň — "Elektroinštalačný
// materiál" (3,88 €/ks, vypnúť) a "Bezpečnosť a smart domácnosť" (6,13 €/ks, propagovať) sú dnes
// obe pod "Elektro, Smart Home a osvetlenie". Pri kontrole podľa koreňa by sa 956 produktov prestalo
// propagovať a 199 začalo, bez toho, aby to bolo niečie rozhodnutie.
//
// Záznam sa porovnáva ako prefix celej cesty, takže "A > B" pokryje aj "A > B > C", a `exceptions`
// vie vetvu z vylúčenia späť vybrať (vyhráva najdlhšia zhoda — konkrétnejšie pravidlo).
const HIDDEN_PATH = path.join(__dirname, 'heureka-hidden-categories.json');
const HIDDEN_CONFIG = JSON.parse(fs.readFileSync(HIDDEN_PATH, 'utf-8'));
const norm = (s) => String(s).trim().replace(/\s*>\s*/g, ' > ');
const HIDDEN_PATHS = (HIDDEN_CONFIG.categories || []).map(norm);
const HIDDEN_EXCEPTIONS = (HIDDEN_CONFIG.exceptions || []).map(norm);
const HIDDEN_PRICE_BELOW = Number.isFinite(HIDDEN_CONFIG.priceBelow) ? HIDDEN_CONFIG.priceBelow : 0;

// Najdlhšie pravidlo, ktoré je prefixom cesty (alebo sa jej rovná); null = žiadne.
function longestMatch(list, categoryPath) {
  let best = null;
  for (const rule of list) {
    if (categoryPath === rule || categoryPath.startsWith(rule + ' > ')) {
      if (!best || rule.length > best.length) best = rule;
    }
  }
  return best;
}

function isHeurekaHidden(categoryPath, priceInclVat) {
  if (Number.isFinite(priceInclVat) && HIDDEN_PRICE_BELOW > 0 && priceInclVat < HIDDEN_PRICE_BELOW) return true;
  if (!categoryPath) return false;
  const p = norm(categoryPath);
  const hide = longestMatch(HIDDEN_PATHS, p);
  if (!hide) return false;
  const keep = longestMatch(HIDDEN_EXCEPTIONS, p);
  return !(keep && keep.length > hide.length);
}

module.exports = { heurekaCategoryIdFor, isHeurekaHidden };
