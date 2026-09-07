// Jednorazovy patch: predchadzajuci fix (scripts/fix-live-description-image-urls.js) mrtve ATOS
// boilerplate obrazky ("Alien 4v1" tlacitka, "Top quality" ramcek) z popisu len ODSTRANIL. Na
// ziadost pouzivatela ich teraz nahradzame skutocnou fotkou produktu (rovnaky princip ako pri
// obohacovani chudobnych K-B popisov) namiesto ich uplneho vynechania.
//
// Kedze aktualny (uz ocisteny) output/atos.xml uz neobsahuje povodne <img> tagy s presnym src,
// nedalo by sa bezpecne najst presne miesto na vlozenie spatne (biele znaky/HTML sa medzi
// produktmi mierne lisia). Namiesto toho pouzivame zalohu spred prveho fixu (git commit
// 55a7640~1), kde tieto tagy este existuju - over ime produkt po produkte, ze zaloha "ocistena
// rovnakym sposobom ako predtym" sa PRESNE zhoduje so sucasnym zivym popisom (t.j. odvtedy sa
// nezmenilo nic ine ako mrtve obrazky) - a len pre tieto zhodne pripady preprocessuje zalohovy
// popis (s dead-image nahradou za skutocnu fotku) a nou nahradi aktualny popis. Produkty, kde sa
// text odvtedy zmenil (nocny sync), sa preskocia a vypisu na manualnu kontrolu.
//
// Usage: node fix-live-atos-remote-images.js --old=/tmp/atos_before_strip.xml --xml=output/atos.xml

const fs = require('fs');
const path = require('path');
const { replaceDeadAtosImages } = require('./lib/fix-description-image-urls');

const OLD_PATH = process.argv.find((a) => a.startsWith('--old='))?.slice('--old='.length);
const XML_PATH = process.argv.find((a) => a.startsWith('--xml='))?.slice('--xml='.length);
if (!OLD_PATH || !XML_PATH) {
  console.error('Usage: node fix-live-atos-remote-images.js --old=... --xml=...');
  process.exit(1);
}

const DEAD_SRCS = [
  'http://www.atoselektro.cz/images_galerieobr/0_207.jpg',
  'http://www.atoselektro.cz/images_galerieobr/0_212.jpg',
];

function stripDeadOld(html) {
  let out = html;
  for (const src of DEAD_SRCS) {
    const re = new RegExp(`<img\\b[^>]*\\bsrc="${src.replace(/[.]/g, '\\.')}"[^>]*/?>`, 'gi');
    out = out.replace(re, '');
  }
  return out;
}

function main() {
  const oldXml = fs.readFileSync(OLD_PATH, 'utf-8');
  const oldByCode = new Map();
  for (const rest of oldXml.split('<SHOPITEM>').slice(1)) {
    const codeM = rest.match(/<CODE>(.*?)<\/CODE>/);
    const descM = rest.match(/<DESCRIPTION><!\[CDATA\[([\s\S]*?)\]\]><\/DESCRIPTION>/);
    if (codeM && descM && (descM[1].includes('0_207.jpg') || descM[1].includes('0_212.jpg'))) {
      oldByCode.set(codeM[1], descM[1]);
    }
  }

  const xml = fs.readFileSync(XML_PATH, 'utf-8');
  const items = xml.split('<SHOPITEM>');
  const head = items.shift();
  let fixed = 0, mismatched = [];

  const patched = items.map((rest) => {
    const codeM = rest.match(/<CODE>(.*?)<\/CODE>/);
    if (!codeM || !oldByCode.has(codeM[1])) return rest;

    const nameM = rest.match(/<NAME><!\[CDATA\[([\s\S]*?)\]\]><\/NAME>/);
    const descM = rest.match(/<DESCRIPTION><!\[CDATA\[([\s\S]*?)\]\]><\/DESCRIPTION>/);
    const imgM = rest.match(/<IMAGES>\s*<IMAGE[^>]*>([^<]*)<\/IMAGE>/);
    if (!descM) return rest;

    const oldDesc = oldByCode.get(codeM[1]);
    if (stripDeadOld(oldDesc) !== descM[1]) { mismatched.push(codeM[1]); return rest; }

    const productImage = imgM ? imgM[1] : '';
    const productName = nameM ? nameM[1] : '';
    const newDesc = replaceDeadAtosImages(oldDesc, productImage, productName);
    fixed++;
    return rest.replace(descM[0], `<DESCRIPTION><![CDATA[${newDesc}]]></DESCRIPTION>`);
  });

  fs.writeFileSync(XML_PATH, head + patched.map((p) => '<SHOPITEM>' + p).join(''), 'utf-8');
  console.log(`${path.basename(XML_PATH)}: obnovených s vlastnou fotkou: ${fixed}, nezhoda (preskočené): ${mismatched.length}`);
  if (mismatched.length) console.log('Nezhoda pri kódoch:', mismatched.join(', '));
}

main();
