'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const {applyProductContent,applyFeedContent}=require('./product-content-overrides');
const product={code:'BASYS-B 884367-0900',manufacturer:'Bose',price:185,stock:7,name:'Original',ean:'',description:'supplier'};
const changed=applyProductContent('basys',product);
assert.match(changed.description,/id="ps-qcsc"/);
for(const key of ['code','manufacturer','price','stock','name','ean']) assert.equal(changed[key],product[key]);
assert.equal(product.description,'supplier');
assert.equal(applyProductContent('innpro',product),product);
assert.equal(applyProductContent('basys',{...product,code:'other'}).description,'supplier');
assert.throws(()=>applyProductContent('basys',{...product,manufacturer:'Other'}),/mismatch/);
const registryCodes=new Set(Object.keys(require('../data/product-content/basys.json')));
const before=fs.readFileSync('output/basys.xml','utf8');
const after=applyFeedContent(before,'basys');
assert.equal(applyFeedContent(after,'basys'),after);
const items=x=>x.match(/<SHOPITEM>[\s\S]*?<\/SHOPITEM>/g);
const a=items(before),b=items(after);assert.equal(a.length,b.length);
let count=0;
for(let i=0;i<a.length;i++)if(a[i]!==b[i]){
 count++;
 const code=a[i].match(/<CODE>([^<]+)<\/CODE>/)?.[1];
 assert.ok(registryCodes.has(code),`Changed SHOPITEM has unregistered code: ${code}`);
 const strip=x=>x.replace(/<(DESCRIPTION|SHORT_DESCRIPTION|SEO_TITLE|META_DESCRIPTION|IMAGES)>[\s\S]*?<\/\1>/g,'');
 assert.equal(strip(a[i]),strip(b[i]));
}
assert.ok(count <= registryCodes.size, `Changed more SHOPITEMs (${count}) than registered overrides (${registryCodes.size})`);
assert.equal(changed.images.length,5);
assert.ok(changed.images.every(x=>x.includes('/user/documents/upload/')));

// EAN override: mutate the same (require-cached) registry object in place, no ean set yet on QCSC fixture.
const rawRegistry=require('../data/product-content/basys.json');
assert.equal(applyProductContent('basys',product).ean,'');
rawRegistry[product.code]={...rawRegistry[product.code],ean:'12345678'};
assert.equal(applyProductContent('basys',product).ean,'12345678');
rawRegistry[product.code]={...rawRegistry[product.code],ean:'not-a-number'};
assert.throws(()=>applyProductContent('basys',product),/Invalid EAN override/);
delete rawRegistry[product.code].ean;
console.log(`PASS: ${a.length} products, ${count} changed; only four content fields, idempotent, manufacturer guard`);
if(process.argv.includes('--write'))fs.writeFileSync('output/basys.xml',after);
