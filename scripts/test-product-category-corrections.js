'use strict';
const {test}=require('node:test');const assert=require('node:assert/strict');
const {apply,field,categories,stripGeneratedIntro}=require('./apply-product-category-corrections');
const tree=['R','R > Wrong','R > Right','Other'];
const xml=(code='a',ean='1',name='Drying rack',cat='R > Wrong')=>'<SHOPITEM><CODE>'+code+'</CODE><EAN>'+ean+'</EAN><NAME>'+name+'</NAME><MANUFACTURER>Brand</MANUFACTURER><PRICE_VAT>123.00</PRICE_VAT><VISIBILITY>hidden</VISIBILITY><URL>https://example.test/original</URL><CATEGORIES><CATEGORY>'+cat+'</CATEGORY></CATEGORIES><DESCRIPTION><![CDATA[<p>Original evidence.</p>]]></DESCRIPTION></SHOPITEM>';
const fixture=()=>({config:{schemaVersion:1,products:[{supplier:'s',code:'a',ean:'1',name:'Drying rack',current:['R > Wrong'],proposed:['R > Right'],cleanGeneratedIntro:true}]},files:[{name:'s',text:'<SHOP>'+xml()+'</SHOP>'}]});
test('exact identity correction preserves price, visibility, URL and original text; repeat is identical',()=>{
 const {files,config}=fixture();const r=apply(files,config,tree);
 assert.equal(r.report.categoryChanges,1);assert.deepEqual(categories(r.files[0].text),['R > Right','R']);
 const strip=s=>s.replace(/<CATEGORIES>[\s\S]*?<\/CATEGORIES>/g,'');assert.equal(strip(files[0].text),strip(r.files[0].text));
 assert.equal(apply(r.files,config,tree).files[0].text,r.files[0].text);
});
test('same code with two different EANs is not conflated',()=>{
 const {files,config}=fixture();files[0].text='<SHOP>'+xml('a','1')+xml('a','2')+'</SHOP>';
 const r=apply(files,config,tree);assert.equal(r.report.matched,1);assert.equal(r.report.categoryChanges,1);assert.ok(r.files[0].text.includes('<CATEGORY>R > Wrong</CATEGORY>'));
});
test('changed name/category is reported and left intact',()=>{
 for(const changed of [xml('a','1','Different'),xml('a','1','Drying rack','Other')]){
  const {config}=fixture();const files=[{name:'s',text:'<SHOP>'+changed+'</SHOP>'}];const r=apply(files,config,tree);assert.equal(r.report.skipped.length,1);assert.equal(r.files[0].text,files[0].text);
 }
});
test('wrong EAN and unreviewed product are untouched',()=>{
 const {config}=fixture();const files=[{name:'s',text:'<SHOP>'+xml('a','2')+xml('new','3')+'</SHOP>'}];const r=apply(files,config,tree);assert.equal(r.report.matched,0);assert.equal(r.files[0].text,files[0].text);
});
test('unknown targets, incomplete feed and repeated exact identity abort before write',()=>{
 const {files,config}=fixture();assert.throws(()=>apply(files,config,['R']),/unapproved/);
 assert.throws(()=>apply([{name:'s',text:xml()}],config,tree),/Incomplete/);
 assert.throws(()=>apply([{name:'s',text:'<SHOP>'+xml()+xml()+'</SHOP>'}],config,tree),/Repeated/);
});
test('only exact generated false intro is removed, original specifications survive',()=>{
 const s='<h3>Sušiak</h3><p>Žehlička Sušiak od Brand uľahčí žehlenie bielizne.</p><p>18 m sušiacej plochy.</p>';
 assert.equal(stripGeneratedIntro(s,'Sušiak','Brand'),'<h3>Sušiak</h3><p>18 m sušiacej plochy.</p>');
 const user='<p>Žehlička má novú vlastnosť od výrobcu.</p>';assert.equal(stripGeneratedIntro(user,'Sušiak','Brand'),user);
});
test('factual name correction leaves canonical URL unchanged and updates exact name references',()=>{
 const {files,config}=fixture();config.products[0].correctName='Correct rack';files[0].text=files[0].text.replace('Original evidence.','Drying rack. Original evidence.');
 const r=apply(files,config,tree);assert.equal(field(r.files[0].text,'NAME'),'Correct rack');assert.equal(field(r.files[0].text,'URL'),'https://example.test/original');assert.ok(field(r.files[0].text,'DESCRIPTION').includes('Correct rack. Original evidence.'));
 assert.equal(apply(r.files,config,tree).files[0].text,r.files[0].text);
});
