'use strict';
const registry = {
  basys: require('../data/product-content/basys.json'),
  kb: require('../data/product-content/kb.json'),
  penta: require('../data/product-content/penta.json'),
};
Object.assign(registry.basys, require('../data/product-content/basys-catalog.json'));
const fields = {name:'NAME',description:'DESCRIPTION',shortDescription:'SHORT_DESCRIPTION',seoTitle:'SEO_TITLE',metaDescription:'META_DESCRIPTION'};
function applyProductContent(supplier, product) {
  const override = registry[supplier]?.[product.code];
  if (!override) return product;
  if (product.manufacturer !== override.manufacturer) throw new Error(`Content override manufacturer mismatch: ${supplier}/${product.code}`);
  if (supplier === 'penta') {
    if (!override.expectedEan || product.ean !== override.expectedEan) throw new Error(`Content override EAN mismatch: ${supplier}/${product.code}`);
    if (!override.expectedName || ![override.expectedName, override.name].includes(product.name)) throw new Error(`Content override name drift: ${supplier}/${product.code}`);
    if (Object.keys(override).some(k => !['manufacturer','expectedEan','expectedName','name'].includes(k))) throw new Error('Penta pilot only permits a name override');
    if (typeof override.name !== 'string' || !override.name.trim()) throw new Error('Empty content override: name');
  } else if (override.expectedName && product.name !== override.expectedName) {
    throw new Error(`Content override name drift: ${supplier}/${product.code}`);
  }
  const result = {...product};
  for (const key of Object.keys(fields)) {
    if (key === 'name' && supplier !== 'penta') continue;
    if (supplier === 'penta' && key !== 'name') continue;
    if (typeof override[key] !== 'string' || !override[key].trim()) throw new Error(`Empty content override: ${key}`);
    result[key] = override[key];
  }
  if (override.images) {
    // premiumstore.sk/user/documents/upload/ = curated fotky nahrané cez Shoptet filemanager (QCSC pilot).
    // cloud.basys.cz/... = overené reálne fotky priamo z BASYS dodávateľského CDN, "zamknuté" v override,
    // aby sa nezmenili/nezmizli, keby BASYS niekedy prestavil svoj vlastný feed/CDN.
    // assets.bosecreative.com = oficiálne produktové fotky priamo od výrobcu (Bose), použité len keď
    // dodávateľský feed nemá funkčnú vlastnú fotku pre daný farebný variant.
    // assets.boseprofessional.com = oficiálne produktové fotky Bose Professional (B2B/inštalačný sortiment).
    const ALLOWED_IMAGE_HOSTS = [
      /^https:\/\/www\.premiumstore\.sk\/user\/documents\/upload\/[^<>"&]+$/,
      /^https:\/\/cloud\.basys\.cz\/remote\.php\/dav\/public-files\/[^<>"&]+$/,
      /^https:\/\/assets\.bosecreative\.com\/transform\/[^<>"]+$/,
      /^https:\/\/assets\.boseprofessional\.com\/transform\/[^<>"]+$/,
    ];
    if (!Array.isArray(override.images) || !override.images.length || override.images.some(x => !ALLOWED_IMAGE_HOSTS.some(re => re.test(x)))) throw new Error(`Invalid image override: ${product.code}`);
    result.images = [...override.images];
  }
  if (override.ean) {
    // Dohľadaný a overený EAN (napr. keď ho BASYS feed pre daný kód neposiela) — rovnaký formát
    // ako ostatné EAN v surových feedoch, teda 8-13 číslic bez medzier/pomlčiek.
    if (typeof override.ean !== 'string' || !/^[0-9]{8,13}$/.test(override.ean)) throw new Error(`Invalid EAN override: ${product.code}`);
    result.ean = override.ean;
  }
  return result;
}
function applyFeedContent(xml, supplier) {
  const seen = new Set();
  return xml.replace(/<SHOPITEM(?:\s[^>]*)?>[\s\S]*?<\/SHOPITEM>/g, item => {
    const code = item.match(/<CODE>([^<]+)<\/CODE>/)?.[1];
    if (!registry[supplier]?.[code]) return item;
    if (seen.has(code)) throw new Error(`Duplicate content target: ${code}`);
    seen.add(code);
    const manufacturer = item.match(/<MANUFACTURER><!\[CDATA\[([\s\S]*?)\]\]><\/MANUFACTURER>/)?.[1];
    const name = item.match(/<NAME><!\[CDATA\[([\s\S]*?)\]\]><\/NAME>/)?.[1];
    const ean = item.match(/<EAN>([^<]+)<\/EAN>/)?.[1];
    const product = applyProductContent(supplier, {code,manufacturer,name,ean});
    for (const [key, tag] of Object.entries(fields)) {
      if (key === 'name' && supplier !== 'penta') continue;
      if (supplier === 'penta' && key !== 'name') continue;
      // Penta emits the product NAME immediately after SHOPITEM; parameter NAMEs must remain untouched.
      const re = key === 'name'
        ? /^<SHOPITEM(?:\s[^>]*)?>\s*<NAME>[\s\S]*?<\/NAME>/g
        : new RegExp(`<${tag}>[\\s\\S]*?</${tag}>`, 'g');
      if ((item.match(re)||[]).length !== 1) throw new Error(`Expected one ${tag}: ${code}`);
      const value = product[key].replace(/\]\]>/g, ']]]]><![CDATA[>');
      item = item.replace(re, match => (key === 'name' ? match.slice(0, match.indexOf('<NAME>')) : '') + `<${tag}><![CDATA[${value}]]></${tag}>`);
    }
    if (product.images) {
      if ((item.match(/<IMAGES>/g)||[]).length !== 1) throw new Error(`Expected one IMAGES: ${code}`);
      const rawAlt = registry[supplier][code].imageAlt || product.seoTitle;
      const alt = rawAlt.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      const xmlEscapeUrl = u => u.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      item = item.replace(/<IMAGES>[\s\S]*?<\/IMAGES>/, () => '<IMAGES>\n' + product.images.map((url, i) => `  <IMAGE description="${alt} - obrázok ${i+1}">${xmlEscapeUrl(url)}</IMAGE>`).join('\n') + '\n</IMAGES>');
    }
    if (product.ean) {
      // applyProductContent už ean overil (8-13 číslic); tu ho len zapíšeme do XML, buď
      // prepísaním existujúceho <EAN>, alebo (feed bez EAN) vložením pred <CATEGORIES>.
      if (/<EAN>[^<]*<\/EAN>/.test(item)) {
        item = item.replace(/<EAN>[^<]*<\/EAN>/, `<EAN>${product.ean}</EAN>`);
      } else {
        item = item.replace('<CATEGORIES>', `<EAN>${product.ean}</EAN>\n<CATEGORIES>`);
      }
    }
    return item;
  });
}
module.exports = {applyProductContent,applyFeedContent};
