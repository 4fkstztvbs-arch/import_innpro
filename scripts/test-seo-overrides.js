'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { validateRegistry, loadSeoOverrides, applyFeedOverrides, SUPPLIERS } = require('./seo-overrides');
const { inspectFeed } = require('./seo-feed-xml');
const { run } = require('./apply-seo-overrides');
function entry(supplier, code, url) {
  return { supplier, code, ean: '0123456789012', shoptetCode: code, url: `https://www.premiumstore.sk/${url}/`, currentUrl: `https://www.premiumstore.sk/${url}/`, transform: `scripts/transform-${supplier}.js`, out: `output/${supplier}.xml`, mappingStatus: 'VERIFIED', evidenceRef: 'synthetic-test-fixture', seoTitle: 'Nový názov & <test> ]]> Ž', metaDescription: 'Nový popis "test" & viac.' };
}
function fixture() {
  const products = Array.from({ length: 20 }, (_, i) => entry(SUPPLIERS[i % 8], String(i).padStart(6, '0'), `test-${i}`));
  return { schemaVersion: 2, experimentId: 'CTR-2026-09', status: 'ACTIVE', baseline: { from: '2026-08-10', to: '2026-09-16', verified: true }, activation: { approvedBy: 'TEST ONLY', approvedAt: '2026-09-18', approvalReference: 'fixture', preflightPassed: true }, products, controls: [entry('innpro','CONTROL1','control-1'),entry('kb','CONTROL2','control-2')] };
}
function item(code, ean = '0123456789012', price = 17, tags = '<SEO_TITLE><![CDATA[Old title]]></SEO_TITLE><META_DESCRIPTION>Old meta</META_DESCRIPTION>') {
  return `<SHOPITEM><CODE>${code}</CODE><EAN>${ean}</EAN><NAME>Žltý produkt</NAME><PRICE_VAT>${price}</PRICE_VAT><STOCK><AMOUNT>8</AMOUNT></STOCK><AVAILABILITY_IN>3 dni</AVAILABILITY_IN><URL>keep-url</URL><DESCRIPTION><![CDATA[Keep <SHOPITEM><CODE>fake</CODE></SHOPITEM>]]></DESCRIPTION><IMAGES><IMAGE>x.jpg</IMAGE></IMAGES>${tags}</SHOPITEM>`;
}
const wrap = content => `<?xml version="1.0" encoding="utf-8"?>\n<SHOP>\n${content}\n</SHOP>\n`;
function withoutSeo(xml) {
  // Independent semantic comparison, alongside exact preservation checks below.
  const spans = inspectFeed(xml).flatMap(x => ['SEO_TITLE','META_DESCRIPTION'].map(t=>x.fields[t]).filter(Boolean));
  for (const f of spans.sort((a,b)=>b.start-a.start)) xml=xml.slice(0,f.start)+xml.slice(f.end);
  return xml;
}
for (const status of ['PREPARED_NOT_ACTIVE','PAUSED']) test(`${status}: byte-identical no-op`,()=>{
  const c=fixture(); c.status=status; const xml=wrap(item('000000'));
  assert.equal(applyFeedOverrides(xml,'innpro',c).xml,xml);
});
for (const supplier of SUPPLIERS) test(`${supplier}: only two SEO fields change; XML remains valid`,()=>{
  const c=fixture(), members=c.products.filter(x=>x.supplier===supplier);
  const before=wrap(members.map(x=>item(x.code)).join('\n')+item('UNSELECTED')+item(supplier==='kb'?'CONTROL2':'CONTROL1'));
  const {xml,report}=applyFeedOverrides(before,supplier,c,{strict:true});
  assert.equal(report.applied,members.length);
  assert.equal(withoutSeo(xml),withoutSeo(before));
  assert.ok(xml.includes(item('UNSELECTED')));
  assert.ok(xml.includes(item(supplier==='kb'?'CONTROL2':'CONTROL1')));
  assert.equal(inspectFeed(xml)[0].fields.SEO_TITLE.text,members[0].seoTitle);
  assert.equal(applyFeedOverrides(xml,supplier,c,{strict:true}).xml,xml);
});
test('supplier namespace prevents a CODE collision',()=>{
  const c=fixture();c.products[1].code=c.products[0].code;c.products[1].seoTitle='KB specific';
  const xml=wrap(item('000000'));
  assert.equal(inspectFeed(applyFeedOverrides(xml,'kb',c).xml)[0].fields.SEO_TITLE.text,'KB specific');
  assert.equal(inspectFeed(applyFeedOverrides(xml,'innpro',c).xml)[0].fields.SEO_TITLE.text,c.products[0].seoTitle);
});
test('exact codes preserve leading zeroes and reject storefront prefixes',()=>{
  const c=fixture(),xml=wrap(item('0')+item('INN_000000'));
  const r=applyFeedOverrides(xml,'innpro',c);assert.equal(r.xml,xml);assert.equal(r.report.applied,0);
});
test('daily missing or changed identity is skipped without freezing new prices',()=>{
  const c=fixture(),xml=wrap(item('000000','9999999999999',99));
  const r=applyFeedOverrides(xml,'innpro',c);assert.equal(r.xml,xml);assert.ok(r.report.issues.some(x=>x.reason==='ean-mismatch'));assert.ok(r.report.issues.some(x=>x.reason==='missing'));
  assert.throws(()=>applyFeedOverrides(xml,'innpro',c,{strict:true}),/SEO preflight/);
});
test('duplicate CODE is never applied',()=>{
  const c=fixture(),xml=wrap(item('000000')+item('000000'));
  const r=applyFeedOverrides(xml,'innpro',c);assert.equal(r.xml,xml);assert.equal(r.report.issues[0].reason,'duplicate-code');
});
test('absent and self-closing SEO tags are filled without changing other bytes',()=>{
  for(const tags of ['', '<SEO_TITLE/><META_DESCRIPTION />']){
    const c=fixture(),before=wrap(item('000000',undefined,17,tags)),after=applyFeedOverrides(before,'innpro',c).xml;
    assert.equal(withoutSeo(before),withoutSeo(after));assert.equal(inspectFeed(after)[0].fields.META_DESCRIPTION.text,c.products[0].metaDescription);
  }
});
test('subsequent daily price, stock and availability remain fresh',()=>{
  const c=fixture();let xml=applyFeedOverrides(wrap(item('000000')),'innpro',c).xml;
  xml=xml.replace('<PRICE_VAT>17</PRICE_VAT>','<PRICE_VAT>21</PRICE_VAT>').replace('<AMOUNT>8</AMOUNT>','<AMOUNT>0</AMOUNT>').replace('3 dni','Na objednávku');
  const result=applyFeedOverrides(xml,'innpro',c).xml;assert.equal(result,xml);
});
for(const [name,mutate,pattern] of [
 ['baseline',c=>c.baseline.from='2026-08-09',/baseline/],
 ['approval',c=>c.activation.approvalReference=null,/approval/],
 ['unverified mapping',c=>c.products[19].mappingStatus='NOT_IN_CURRENT_OUT',/unverified mapping/],
 ['null CODE',c=>c.products[0].code=null,/unverified mapping/],
 ['numeric CODE',c=>c.products[0].code=123,/CODE/],
 ['wrong OUT',c=>c.products[0].out='output/kb.xml',/wrong transform\/OUT/],
 ['control overlap',c=>c.controls[0]={...c.products[0]},/overlap/],
 ['unknown supplier',c=>c.products[0].supplier='other',/supplier/],
 ['price override',c=>c.products[0].price=10,/unsupported override field/],
 ['long title',c=>c.products[0].seoTitle='a'.repeat(71),/SEO_TITLE/],
 ['empty meta',c=>c.products[0].metaDescription='',/META_DESCRIPTION/],
 ['XML control character',c=>c.products[0].seoTitle='Bad\u0001',/SEO_TITLE/],
 ['missing member',c=>c.products.pop(),/20 candidates/],
 ['unverified baseline',c=>c.baseline.verified=false,/baseline/],
 ['missing preflight',c=>c.activation.preflightPassed=false,/preflight/]
]) test(`guard: ${name}`,()=>{const c=fixture();mutate(c);assert.throws(()=>validateRegistry(c),pattern);});
test('malformed XML and DTD are rejected',()=>{
  assert.throws(()=>inspectFeed('<SHOP><SHOPITEM></SHOP>'));
  assert.throws(()=>inspectFeed('<!DOCTYPE SHOP><SHOP/>'),/DTD/);
  assert.throws(()=>inspectFeed(wrap('<SHOPITEM><CODE>x</CODE><CODE>y</CODE></SHOPITEM>')),/duplicate CODE/);
});
test('committed registry cannot be activated by only flipping status',()=>{
  const c=loadSeoOverrides();assert.equal(c.status,'PREPARED_NOT_ACTIVE');c.status='ACTIVE';assert.throws(()=>validateRegistry(c),/unverified mapping/);
});
test('strict multi-feed failure occurs before any file is written',()=>{
  const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'ctr-'));
  try{
    fs.mkdirSync(path.join(tmp,'output'));const c=fixture();const f=path.join(tmp,'registry.json');fs.writeFileSync(f,JSON.stringify(c));
    const before=wrap(c.products.filter(x=>x.supplier==='innpro').map(x=>item(x.code)).join(''));
    fs.writeFileSync(path.join(tmp,'output/innpro.xml'),before);
    assert.throws(()=>run({root:tmp,registryPath:f,write:true,strict:true}),/Missing supplier OUT/);
    assert.equal(fs.readFileSync(path.join(tmp,'output/innpro.xml'),'utf8'),before);
  }finally{fs.rmSync(tmp,{recursive:true,force:true});}
});
test('inactive CLI does not need OUT files or change files',()=>{
  const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'ctr-'));
  try{const c=fixture();c.status='PREPARED_NOT_ACTIVE';const f=path.join(tmp,'registry.json');fs.writeFileSync(f,JSON.stringify(c));assert.equal(run({root:tmp,registryPath:f,write:true}).feeds.length,0);assert.deepEqual(fs.readdirSync(tmp),['registry.json']);}
  finally{fs.rmSync(tmp,{recursive:true,force:true});}
});
test('all automated OUT writers finalize SEO after product/category changes',()=>{
  const root=path.join(__dirname,'..');
  for(const name of ['innpro-sync','kb-sync','atos-sync','basys-sync','monacor-sync','penta-sync','solight-sync','heureka-price-report','product-category-corrections']){
    const text=fs.readFileSync(path.join(root,'.github/workflows',name+'.yml'),'utf8');
    assert.ok(text.includes("if: github.ref == 'refs/heads/main'"),name+' must not publish from preparation branch');
    const hook=text.indexOf('node scripts/apply-seo-overrides.js --write');assert.ok(hook>=0,name);
    for(const line of ['node scripts/transform-','node scripts/apply-product-category-corrections.js --write','node scripts/apply-approved-categories.js --write']) {
      const at=text.indexOf(line);if(at>=0)assert.ok(at<hook,name+' ordering');
    }
    assert.ok(hook<text.indexOf('git add '),name+' must finalize before staging');
  }
});
