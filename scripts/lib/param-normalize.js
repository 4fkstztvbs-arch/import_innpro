// Zjednotenie názvov a hodnôt parametrov produktov (TEXT_PROPERTY / INFORMATION_PARAMETER) po slovensky.
// Dodávatelia posielajú rovnaký parameter pod rôznymi názvami (Barva, Farba, Color), česky aj poľsky,
// čo v Shoptete vytvára viacero filtrov. Tu sa názvy zjednotia, hodnoty áno/nie a farby sa preložia.
const fs = require('fs');
const path = require('path');

const cfg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'param-dict-sk.json'), 'utf8'));
const NAME_MAP = cfg.names;        // celý názov (malými) -> kanonický názov
const DROP = new Set(cfg.drop);    // názvy (malými), ktoré sa nemajú dostať do feedu
const WORDS = cfg.words;           // slovo (malými) -> slovenské slovo
const COLORS = cfg.colors;         // farebný základ (malými) -> slovenská farba

const cap = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);
const matchCase = (src, out) => {
  if (src === src.toUpperCase() && src.length > 1) return out.toUpperCase();
  if (src.charAt(0) !== src.charAt(0).toLowerCase()) return cap(out);
  return out;
};
const wordRe = /[\p{L}]+/gu;

function translateWords(s, map) {
  return s.replace(wordRe, (w) => {
    const t = map[w.toLowerCase()];
    return t === undefined ? w : matchCase(w, t);
  });
}

function normalizeName(raw) {
  let s = String(raw || '').replace(/\s+/g, ' ').trim().replace(/\s*:+$/, '').trim();
  if (!s) return '';
  const key = s.toLowerCase();
  if (DROP.has(key)) return '';
  if (NAME_MAP[key]) return NAME_MAP[key];
  s = translateWords(s, WORDS);
  const k2 = s.toLowerCase();
  if (DROP.has(k2)) return '';
  if (NAME_MAP[k2]) return NAME_MAP[k2];
  return cap(s);
}

const isColorName = (name) => /farb|barv/i.test(name);
const PREFIX = { 'černo': 'čierno', 'čierno': 'čierno', 'šedo': 'sivo', 'sivo': 'sivo', 'bílo': 'bielo', 'bielo': 'bielo', 'zeleno': 'zeleno', 'modro': 'modro', 'červeno': 'červeno', 'žluto': 'žlto', 'žlto': 'žlto', 'hnědo': 'hnedo', 'hnedo': 'hnedo', 'stříbrno': 'striebro', 'strieborno': 'striebro', 'oranžo': 'oranžovo', 'růžo': 'ružovo', 'fialo': 'fialovo' };

function translateColor(v) {
  // "černo-zelená" -> "čierno-zelená": preloží sa každý tvar zvlášť, základ sa mapuje na ženský rod
  return v.replace(/[\p{L}]+/gu, (w, off, str) => {
    const lw = w.toLowerCase();
    if (str[off + w.length] === '-' && PREFIX[lw]) return matchCase(w, PREFIX[lw]);
    const t = COLORS[lw];
    if (t === undefined) return WORDS[lw] !== undefined ? matchCase(w, WORDS[lw]) : w;
    return matchCase(w, t);
  });
}

// "Biela" a "biela" by Shoptet viedol ako dve hodnoty filtra; farby sa píšu malými písmenami.
const lowerFirstWord = (s) => (/^\p{Lu}\p{Ll}+(?:[\s,/-]\p{Ll}+)*$/u.test(s) ? s.charAt(0).toLowerCase() + s.slice(1) : s);

function normalizeValue(name, raw) {
  let v = String(raw === undefined || raw === null ? '' : raw).trim();
  if (!v) return '';
  const l = v.toLowerCase();
  if (l === 'ano' || l === 'áno' || l === 'yes' || l === 'tak') return 'Áno';
  if (l === 'ne' || l === 'nie' || l === 'no' || l === 'nei') return 'Nie';
  if (isColorName(name)) return lowerFirstWord(translateColor(v));
  return translateWords(v, WORDS);
}

// params: [{name, values: [..]}] -> zjednotené, bez duplicít (vyhráva prvý výskyt), bez prázdnych.
function normalizeParams(params) {
  const out = [];
  const seen = new Set();
  for (const p of params) {
    const name = normalizeName(p.name);
    if (!name) continue;
    const values = p.values.map((v) => normalizeValue(name, v)).filter(Boolean);
    if (!values.length) continue;
    const k = name.toLowerCase();
    if (seen.has(k)) continue;
    seen.add(k);
    out.push({ name, values });
  }
  return out;
}

module.exports = { normalizeName, normalizeValue, normalizeParams };
