'use strict';
const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {createAs2NameOverride, CODE, EAN, NAME, SOURCE_NAME} = require('./innpro-as2-name');
const product = {code: CODE, ean: EAN, manufacturer: 'CYCPLUS', name: SOURCE_NAME};
const item = `<SHOPITEM>\n<NAME><![CDATA[${SOURCE_NAME}]]></NAME>\n<CODE>${CODE}</CODE><EAN>${EAN}</EAN><MANUFACTURER><![CDATA[CYCPLUS]]></MANUFACTURER><DESCRIPTION><![CDATA[Original <CODE>065095</CODE><EAN>123</EAN><MANUFACTURER><![CDATA[Other]]]]><![CDATA[> literal description]]></DESCRIPTION><TEXT_PROPERTIES><TEXT_PROPERTY><NAME><![CDATA[Model]]></NAME><VALUE>AS2</VALUE></TEXT_PROPERTY></TEXT_PROPERTIES><PRICE_VAT>99.00</PRICE_VAT></SHOPITEM>`;

test('only leading NAME changes; all literal XML in CDATA and parameter NAME stay identical', () => {
 const apply = createAs2NameOverride([product]);
 const expected = item.replace(SOURCE_NAME, NAME);
 assert.equal(apply(item,product), expected);
 assert.equal(apply(expected,product), expected);
 const updated = {...product,name:NAME};
 assert.equal(createAs2NameOverride([updated])(expected,updated),expected);
});
test('identity drift and duplicate targets fail closed for override, preserving entire supplier item', () => {
 for (const change of [{ean:'0'},{manufacturer:'Other'},{name:'Cycplus AS2 Pro mini electric pump'}]) {
  const drifted = {...product,...change};
  assert.equal(createAs2NameOverride([drifted])(item,drifted),item);
 }
 const duplicate = {...product};
 const apply = createAs2NameOverride([product,duplicate]);
 assert.equal(apply(item,product),item);
 assert.equal(apply(item,duplicate),item);
});
test('other codes containing literal target XML in DESCRIPTION never change or throw', () => {
 for (const code of ['65095','OTHER']) {
  const other = {...product,code};
  const apply = createAs2NameOverride([product,other]);
  assert.equal(apply(item,other),item);
 }
 assert.equal(createAs2NameOverride([])(item,product),item);
 assert.equal(createAs2NameOverride([product])(item,{...product}),item);
});
test('unexpected leading XML retains supplier bytes without failing full import', () => {
 const apply = createAs2NameOverride([product]);
 for (const xml of [item.replace(SOURCE_NAME,'Unknown AS2'),item.replace('<SHOPITEM>','<SHOPITEM id="x">')]) assert.equal(apply(xml,product),xml);
});
test('current committed feed: one NAME diff, all other bytes and items preserved', () => {
 const before = fs.readFileSync(path.join(__dirname,'../output/innpro.xml'),'utf8');
 const items = [...before.matchAll(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g)].map(m => m[0]);
 const targets = items.filter(x=>x.includes(`<CODE>${CODE}</CODE>`));
 assert.equal(targets.length,1);
 const old = targets[0];
 const apply = createAs2NameOverride([product]);
 const changed = apply(old,product);
 const after = before.replace(old,changed);
 assert.equal(changed, old.replace(`<NAME><![CDATA[${SOURCE_NAME}]]></NAME>`,`<NAME><![CDATA[${NAME}]]></NAME>`));
 assert.equal(after.replace(changed, old), before);
 assert.equal(apply(changed,product),changed);
 assert.equal(items.length, [...after.matchAll(/<SHOPITEM>/g)].length);
 console.log(`Verified ${items.length} SHOPITEMs; exactly one NAME changed.`);
});
