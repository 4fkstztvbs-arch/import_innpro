#!/usr/bin/env node
/* Zlúči skripty z assets/ux do jedného súboru assets/ux/premiumstore-bundle-20261009.js.
   Každý zdroj beží vo vlastnom try/catch, takže chyba v jednom nezastaví ostatné.
   Po zmene ktoréhokoľvek zdroja spusti: node scripts/build-ux-js-bundle.js */
const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'assets', 'ux');
const SOURCES = [
  'premiumstore-cro.js',
  'premiumstore-pdp-final.js',
  'premiumstore-pdp-mobile-buybar.js',
  'premiumstore-pdp-conversion-20261004.js',
  'premiumstore-pdp-polish-20261008.js',
  'premiumstore-pdp-soldout-20261008.js',
  'premiumstore-audit-fixes-20261003.js',
  'premiumstore-home-desktop-20261009.js',
  'premiumstore-home-categories-mobile.js',
  'premiumstore-checkout-20261009.js',
  'premiumstore-category-20261009.js',
  'premiumstore-search-assist-20261009.js',
  'premiumstore-search-20261009.js', 'premiumstore-trust-20261009.js'
];
let out = '/* PremiumStore – spoločný skript (generované: node scripts/build-ux-js-bundle.js). Neupravovať ručne, upravuj zdrojové súbory.\n   Zdroje: ' + SOURCES.join(', ') + ' */\n';
for (const f of SOURCES) {
  const src = fs.readFileSync(path.join(dir, f), 'utf8');
  out += '\n/* ---- ' + f + ' ---- */\ntry {\n' + src + '\n} catch (e) { if (window.console) console.error("PS bundle: ' + f + '", e); }\n';
}
fs.writeFileSync(path.join(dir, 'premiumstore-bundle-20261009.js'), out);
console.log('OK', out.length, 'B');
