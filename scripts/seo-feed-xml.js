'use strict';
const sax = require('sax');
// Parse identity and source offsets; never reserialize unrelated XML fields.
function inspectFeed(xml) {
  const parser = sax.parser(true, { trim: false, normalize: false, position: true });
  const stack = [], items = [];
  let item, field, rootSeen = false;
  parser.ondoctype = () => { throw new Error('SEO: DTD is not allowed'); };
  parser.onopentag = node => {
    stack.push(node.name);
    if (stack.length === 1) {
      if (node.name !== 'SHOP' || rootSeen) throw new Error('SEO: expected one SHOP root');
      rootSeen = true;
    }
    if (stack.length === 2 && node.name === 'SHOPITEM') {
      item = { start: parser.startTagPosition - 1, fields: {} };
    } else if (item && stack.length === 3 && ['CODE', 'EAN', 'NAME', 'SEO_TITLE', 'META_DESCRIPTION'].includes(node.name)) {
      if (item.fields[node.name]) throw new Error(`SEO: duplicate ${node.name} in SHOPITEM`);
      field = { start: parser.startTagPosition - 1, text: '' };
      item.fields[node.name] = field;
    } else if (field && stack.length > 3) {
      throw new Error('SEO: identity and SEO fields must contain text only');
    }
  };
  parser.ontext = parser.oncdata = text => { if (field) field.text += text; };
  parser.onclosetag = name => {
    if (field && stack.length === 3) { field.end = parser.position; field = null; }
    if (item && stack.length === 2 && name === 'SHOPITEM') {
      item.end = parser.position;
      item.closeStart = xml.lastIndexOf('</SHOPITEM', item.end);
      items.push(item); item = null;
    }
    stack.pop();
  };
  parser.write(xml).close();
  if (!rootSeen) throw new Error('SEO: missing SHOP root');
  return items;
}
function escapeXml(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}
function patchSeo(xml, changes) {
  const edits = [];
  for (const { item, seoTitle, metaDescription } of changes) {
    let append = '';
    for (const [tag, value] of [['SEO_TITLE', seoTitle], ['META_DESCRIPTION', metaDescription]]) {
      const replacement = `<${tag}>${escapeXml(value)}</${tag}>`;
      const old = item.fields[tag];
      if (old) {
        if (old.text !== value) edits.push({ start: old.start, end: old.end, replacement });
      } else append += replacement;
    }
    if (append) edits.push({ start: item.closeStart, end: item.closeStart, replacement: append });
  }
  edits.sort((a, b) => b.start - a.start);
  for (const edit of edits) xml = xml.slice(0, edit.start) + edit.replacement + xml.slice(edit.end);
  return xml;
}
module.exports = { inspectFeed, patchSeo };
