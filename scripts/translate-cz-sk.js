const fs = require('fs');
const path = require('path');

const dict = JSON.parse(fs.readFileSync(path.join(__dirname, 'cz-sk-dict.json'), 'utf-8'));
const PHRASE_OVERRIDES = dict.phraseOverrides;
const WORD_DICT = dict.wordDict;

// Translates a single category segment CZ -> SK, word by word (preserving capitalisation),
// with a small set of whole-phrase overrides checked first. Falls back to leaving a word
// untranslated if it's not in the dictionary (better an occasional Czech word slip through
// than a broken/garbled translation).
function translateCategoryName(name) {
  if (!name) return name;
  if (PHRASE_OVERRIDES[name]) return PHRASE_OVERRIDES[name];
  const parts = name.split(/(\s+|\/|,)/);
  return parts.map((part) => {
    if (/^\s+$|^\/$|^,$/.test(part)) return part;
    const lower = part.toLowerCase();
    const translated = WORD_DICT[lower];
    if (!translated || translated.toLowerCase() === lower) return part;
    if (part[0] === part[0].toUpperCase() && part.slice(1) === part.slice(1).toLowerCase()) {
      return translated.charAt(0).toUpperCase() + translated.slice(1);
    }
    if (part === part.toUpperCase()) return translated.toUpperCase();
    return translated;
  }).join('');
}

module.exports = { translateCategoryName };
