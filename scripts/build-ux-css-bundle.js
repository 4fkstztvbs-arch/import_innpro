// Zlúči CSS súbory do jedného: assets/ux/premiumstore-all-20261009.css (po úprave zdroja spusti znova).
const fs = require('fs'), path = require('path');
const dir = path.join(__dirname, '..', 'assets', 'ux');
const sources = ['premiumstore-bundle-20261003.css', 'premiumstore-home-categories-mobile.css', 'premiumstore-header-cart-20261008.css',
  'premiumstore-home-desktop-20261009.css', 'premiumstore-checkout-20261009.css', 'premiumstore-category-20261009.css', 'premiumstore-search-20261009.css'];
const out = '/* PremiumStore – spojené CSS (generované: node scripts/build-ux-css-bundle.js) */\n' +
  sources.map(f => '\n/* ===== ' + f + ' ===== */\n' + fs.readFileSync(path.join(dir, f), 'utf8')).join('');
const target = path.join(dir, 'premiumstore-all-20261009.css');
fs.writeFileSync(target, out);
// minifikácia (npm i -g csso-cli); bez csso zostane nezmenšený súbor
try {
  require('child_process').execFileSync('csso', [target, '-o', target], { stdio: 'inherit' });
} catch (e) { console.log('csso nie je nainštalované, súbor nie je minifikovaný'); }
console.log('premiumstore-all-20261009.css', fs.statSync(target).size, 'B');
