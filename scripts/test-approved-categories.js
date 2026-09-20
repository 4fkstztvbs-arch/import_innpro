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
test('an EAN filled in later still matches its approved rule', () => {
  // The normal course of events: the rule was approved before we knew the EAN, and the product
  // workflow has since found one. This must not disturb the run at all.
  const {config,files} = fixture();
  config.products[0].ean = '';
  const r = processFeeds(files,config);
  assert.equal(r.report.rejected.length,0);
  assert.equal(r.report.matchedRules,8);
  assert.equal(r.report.categories[0].active,true);
});
test('a changed EAN or a duplicated code skips that one product, never the run', () => {
  const {config,files} = fixture();
  const changed = processFeeds([{...files[0],text:files[0].text.replace('<EAN>0</EAN>','<EAN>changed</EAN>')}],config);
  assert.deepEqual(changed.report.rejected.map(r=>r.reason),['Reviewed EAN changed']);
  assert.equal(changed.report.matchedRules,7); // the other seven still applied
  const twice = processFeeds([{...files[0],text:files[0].text.replace('</SHOP>',item('c0','0')+'</SHOP>')}],config);
  assert.deepEqual(twice.report.rejected.map(r=>r.reason),['Ambiguous reviewed product code']);
  assert.equal(twice.report.matchedRules,8);
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
test('new named products use recurring rules, accessories and excluded identities stay in parent', () => {
  const {config,files}=fixture();
  config.dynamicRules=[{base:'Root > Parent',target:'Root > Parent > Child',pattern:'device',exclude:'accessory'}];
  config.dynamicExcludedProducts=[{supplier:'a',code:'excluded',ean:'excluded'}];
  const extra=[['new','Device'],['accessory','Device accessory'],['excluded','Device']].map(([code,name])=>item(code,code).replace('Preserve me',name)).join('');
  files[0].text=files[0].text.replace('</SHOP>',extra+'</SHOP>');
  const r=processFeeds(files,config);const items=r.files[0].text.match(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g).slice(-3);
  assert.equal(categories(items[0])[0],'Root > Parent > Child');
  assert.equal(categories(items[1])[0],'Root > Parent');assert.equal(categories(items[2])[0],'Root > Parent');
});
test('same SKU with distinct EANs is handled by exact identity; zero-prefixed EAN is deduplicated', () => {
  const {config,files}=fixture(7);
  config.products.push({...config.products[0],ean:'distinct'});
  files[0].text=files[0].text.replace('</SHOP>',item('c0','distinct')+'</SHOP>');
  const r=processFeeds(files,config);assert.equal(r.report.matchedRules,8);assert.equal(r.report.categories[0].visibleUnique,8);
  const d=fixture(7);d.files.push({name:'b',text:'<SHOP>'+item('x','0001','visible',['Root > Parent > Child'])+'</SHOP>'});
  assert.equal(processFeeds(d.files,d.config).report.categories[0].visibleUnique,7);
});
test('a reviewed removed branch stays removed after an earlier pass folded it into its parent', () => {
  const {applyRule}=require('./apply-approved-categories');
  assert.deepEqual(applyRule(['Root > Parent','Other'],{current:['Root > Parent > Old','Other'],proposed:['Other']}),['Other']);
  assert.deepEqual(applyRule(['Root > Parent > Unrelated','Other'],{current:['Root > Parent > Old','Other'],proposed:['Other']}),['Root > Parent > Unrelated','Other']);
});
