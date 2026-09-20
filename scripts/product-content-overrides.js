'use strict';
const registry = { basys: require('../data/product-content/basys.json') };
const fields = {description:'DESCRIPTION',shortDescription:'SHORT_DESCRIPTION',seoTitle:'SEO_TITLE',metaDescription:'META_DESCRIPTION'};
function applyProductContent(supplier, product) {
  const override = registry[supplier]?.[product.code];
  if (!override) return product;
  if (product.manufacturer !== override.manufacturer) throw new Error(`Content override manufacturer mismatch: ${supplier}/${product.code}`);
  const result = {...product};
  for (const key of Object.keys(fields)) {
    if (typeof override[key] !== 'string' || !override[key].trim()) throw new Error(`Empty content override: ${key}`);
    result[key] = override[key];
  }
  if (override.images) {
    // premiumstore.sk/user/documents/upload/ = curated fotky nahrané cez Shoptet filemanager (QCSC pilot).
    // cloud.basys.cz/... = overené reálne fotky priamo z BASYS dodávateľského CDN, "zamknuté" v override,
    // aby sa nezmenili/nezmizli, keby BASYS niekedy prestavil svoj vlastný feed/CDN.
    // assets.bosecreative.com = oficiálne produktové fotky priamo od výrobcu (Bose), použité len keď
    // dodávateľský feed nemá funkčnú vlastnú fotku pre daný farebný variant.
    const ALLOWED_IMAGE_HOSTS = [
      /^https:\/\/www\.premiumstore\.sk\/user\/documents\/upload\/[^<>"&]+$/,
      /^https:\/\/cloud\.basys\.cz\/remote\.php\/dav\/public-files\/[^<>"&]+$/,
      /^https:\/\/assets\.bosecreative\.com\/transform\/[^<>"]+$/,
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
    const product = applyProductContent(supplier, {code,manufacturer});
    for (const [key, tag] of Object.entries(fields)) {
      const re = new RegExp(`<${tag}>[\\s\\S]*?</${tag}>`, 'g');
      if ((item.match(re)||[]).length !== 1) throw new Error(`Expected one ${tag}: ${code}`);
      const value = product[key].replace(/\]\]>/g, ']]]]><![CDATA[>');
      item = item.replace(re, () => `<${tag}><![CDATA[${value}]]></${tag}>`);
    }
    if (product.images) {
      if ((item.match(/<IMAGES>/g)||[]).length !== 1) throw new Error(`Expected one IMAGES: ${code}`);
      const rawAlt = registry[supplier][code].imageAlt || product.seoTitle;
      const alt = rawAlt.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      const xmlEscapeUrl = u => u.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      item = item.replace(/<IMAGES>[\s\S]*?<\/IMAGES>/, () => '<IMAGES>\n' + product.images.map((url, i) => `  <IMAGE description="${alt} - obrázok ${i+1}">${xmlEscapeUrl(url)}</IMAGE>`).join('\n') + '\n</IMAGES>');
    }
    return item;
  });
}
module.exports = {applyProductContent,applyFeedContent};
