// Jednorazovy patch: opravi uz nahrane <DESCRIPTION> v zivych output/*.xml, kde <img src="...">
// obsahuje nezakodovanu medzeru/diakritiku (viz scripts/lib/fix-description-image-urls.js).
// Root cause je uz opraveny v parse-atos.js / parse-penta.js / parse-product.js, takze buduci
// nocny sync uz vygeneruje spravne URL od zaciatku - tento skript len dorovna to, co uz bezi.
//
// Usage: node fix-live-description-image-urls.js --xml=output/atos.xml

const fs = require('fs');
const path = require('path');
const { fixDescriptionImageUrls } = require('./lib/fix-description-image-urls');

const XML_PATH = process.argv.find((a) => a.startsWith('--xml='))?.slice('--xml='.length);
if (!XML_PATH) { console.error('Usage: node fix-live-description-image-urls.js --xml=output/atos.xml'); process.exit(1); }

function main() {
  const xml = fs.readFileSync(XML_PATH, 'utf-8');
  let fixed = 0;
  const patched = xml.replace(/<DESCRIPTION><!\[CDATA\[([\s\S]*?)\]\]><\/DESCRIPTION>/g, (full, desc) => {
    const newDesc = fixDescriptionImageUrls(desc);
    if (newDesc !== desc) fixed++;
    return `<DESCRIPTION><![CDATA[${newDesc}]]></DESCRIPTION>`;
  });
  fs.writeFileSync(XML_PATH, patched, 'utf-8');
  console.log(`${path.basename(XML_PATH)}: opravených popisov s obrázkom: ${fixed}`);
}

main();
