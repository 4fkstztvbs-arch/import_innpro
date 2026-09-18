'use strict';
const {test} = require('node:test');
const assert = require('node:assert/strict');
const {processFeeds, categories, leaves} = require('./apply-approved-categories');
const item = (code, ean, visibility = 'visible', cats = ['Root > Parent', 'Root', 'Other']) => '<SHOPITEM><CODE>'+code+'</CODE><EAN>'+ean+'</EAN><NAME>Preserve me</NAME><PRICE_VAT>123</PRICE_VAT><VISIBILITY>'+visibility+'</VISIBILITY><CATEGORIES>'+cats.map(c => '<CATEGORY><![CDATA['+c+']]></CATEGORY>').join('')+'</CATEGORIES><DESCRIPTION><![CDATA[Unchanged <b>text</b>]]></DESCRIPTION></SHOPITEM>';
function fixture(n = 8) {
  const products = Array.from({length:n}, (_, i) => ({supplier:'a', code:'c'+i, ean:String(i),current:['Root > Parent','Other'],proposed:['Root > Parent > Child','Other']}));
  const config = {minimum:8,tree:['Root','Root > Parent','Root > Parent > Child','Other'],newCategories:['Root > Parent > Child'],retired:{},products};
  return {config,files:[{name:'a',text:'<SHOP>'+products.map(p => item(p.code,p.ean)).join('')+'</SHOP>'}]};
}
test('8 qualifies, default branch survives, unrelated fields preserved, repeated run is identical', () => {
  const {config,files} = fixture();
  const r = processFeeds(files,config);
  assert.equal(r.report.changedProducts,8);
  assert.equal(r.report.categories[0].active,true);
  assert.equal(categories(r.files[0].text)[0],'Root > Parent > Child');
  assert.ok(leaves(categories(r.files[0].text)).includes('Other'));
  const strip = s => s.replace(/<CATEGORIES>[\s\S]*?<\/CATEGORIES>/g,'');
  assert.equal(strip(r.files[0].text),strip(files[0].text));
  assert.equal(processFeeds(r.files,config).files[0].text,r.files[0].text);
});
test('7 remains in parent; hidden products cannot bring it to 8', () => {
  const {config,files} = fixture();
  files[0].text=files[0].text.replace('<VISIBILITY>visible</VISIBILITY>','<VISIBILITY>hidden</VISIBILITY>');
  const r=processFeeds(files,config);
  assert.equal(r.report.categories[0].visibleUnique,7);
  assert.equal(r.report.categories[0].active,false);
  assert.ok(!r.files[0].text.includes('Parent > Child'));
});
test('duplicate EAN across suppliers counts once', () => {
  const {config,files} = fixture(7);
  files.push({name:'b',text:'<SHOP>'+item('duplicate','0','visible',['Root > Parent > Child'])+'</SHOP>'});
  const r=processFeeds(files,config);
  assert.equal(r.report.categories[0].visibleUnique,7);
  assert.ok(!r.files[1].text.includes('Parent > Child'));
});
test('new unreviewed SKU stays in existing parent', () => {
  const {config,files} = fixture(); files[0].text=files[0].text.replace('</SHOP>',item('new','new')+'</SHOP>');
  const r=processFeeds(files,config);
  assert.equal(r.report.matchedRules,8);
  const last=r.files[0].text.match(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g).at(-1);
  assert.equal(categories(last)[0],'Root > Parent');
});
test('EAN changes and ambiguous reviewed codes stop before writes', () => {
  const {config,files} = fixture();
  assert.throws(()=>processFeeds([{...files[0],text:files[0].text.replace('<EAN>0</EAN>','<EAN>changed</EAN>')}],config),/EAN changed/);
  assert.throws(()=>processFeeds([{...files[0],text:files[0].text.replace('</SHOP>',item('c0','0')+'</SHOP>')}],config),/Ambiguous/);
});
test('retirement only removes the retired branch; parent with few direct items remains', () => {
  const {config,files}=fixture(); config.retired['Root > Retired']='Root';
  files[0].text=files[0].text.replace('</SHOP>',item('old','old','visible',['Root > Retired','Other'])+'</SHOP>');
  const r=processFeeds(files,config);
  assert.ok(!r.files[0].text.includes('Root > Retired'));
  const last=r.files[0].text.match(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g).at(-1);
  assert.deepEqual(leaves(categories(last)),['Root','Other']);
  assert.equal(r.report.categories[0].active,true);
});
