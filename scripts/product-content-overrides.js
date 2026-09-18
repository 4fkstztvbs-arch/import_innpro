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
    if (!Array.isArray(override.images) || !override.images.length || override.images.some(x => !/^https:\/\/www\.premiumstore\.sk\/user\/documents\/upload\/[^<>"&]+$/.test(x))) throw new Error(`Invalid image override: ${product.code}`);
    result.images = [...override.images];
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
      item = item.replace(/<IMAGES>[\s\S]*?<\/IMAGES>/, () => '<IMAGES>\n' + product.images.map((url, i) => `  <IMAGE description="Bose QuietComfort SC čierne - obrázok ${i+1}">${url}</IMAGE>`).join('\n') + '\n</IMAGES>');
    }
    return item;
  });
}
module.exports = {applyProductContent,applyFeedContent};
