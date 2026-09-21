'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const {applyProductContent,applyFeedContent}=require('./product-content-overrides');
assert.equal(applyProductContent('kb',{code:'no-such-code',manufacturer:'Samsung'}).manufacturer,'Samsung');
const rawRegistry=require('../data/product-content/kb.json');
const registryCodes=new Set(Object.keys(rawRegistry));
if(registryCodes.size){
 const sampleCode=[...registryCodes][0];
 assert.throws(()=>applyProductContent('kb',{code:sampleCode,manufacturer:'Wrong Manufacturer Xyz'}),/mismatch/);
}
const before=fs.readFileSync('output/kb.xml','utf8');
const after=applyFeedContent(before,'kb');
assert.equal(applyFeedContent(after,'kb'),after);
const items=x=>x.match(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g);
const a=items(before),b=items(after);assert.equal(a.length,b.length);
let count=0;
for(let i=0;i<a.length;i++)if(a[i]!==b[i]){
 count++;
 const code=a[i].match(/<CODE>([^<]+)<\/CODE>/)?.[1];
 assert.ok(registryCodes.has(code),`Changed SHOPITEM has unregistered code: ${code}`);
 const strip=x=>x.replace(/<(DESCRIPTION|SHORT_DESCRIPTION|SEO_TITLE|META_DESCRIPTION|IMAGES)>[\s\S]*?<\/\1>/g,'').replace(/<EAN>[^<]*<\/EAN>\n?/g,'');
 assert.equal(strip(a[i]),strip(b[i]));
}
assert.ok(count <= registryCodes.size, `Changed more SHOPITEMs (${count}) than registered overrides (${registryCodes.size})`);
console.log(`PASS: ${a.length} products, ${count} changed; only four content fields, idempotent, manufacturer guard`);
if(process.argv.includes('--write'))fs.writeFileSync('output/kb.xml',after);
