'use strict';
// Presné opravy z auditu. Nevytvára kategórie, nemení SKU, EAN, URL, ceny ani viditeľnosť.
// Beží pred collapse-thin-categories.js; celý strom a nové L4/L5 sa schvaľujú osobitne.
const fs=require('node:fs');
const path=require('node:path');
const {INTROS,DEFAULT_INTRO,displayNameFor,escapeHtml}=require('./lib/kb-description-enrichment');
const {field,categories,leaves}=(()=>{
 const decode=s=>s.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&amp;/g,'&');
 const field=(s,t)=>{const m=s.match(new RegExp('<'+t+'>([\\s\\S]*?)</'+t+'>'));return m?(m[1].startsWith('<![CDATA[')?m[1].slice(9,-3):decode(m[1])).trim():'';};
 const categories=s=>[...(s.match(/<CATEGORIES>[\s\S]*?<\/CATEGORIES>/)?.[0]||'').matchAll(/<CATEGORY>([\s\S]*?)<\/CATEGORY>/g)].map(m=>field(m[0],'CATEGORY'));
 const leaves=a=>[...new Set(a)].filter(c=>!a.some(d=>d!==c&&d.startsWith(c+' > ')));
 return {field,categories,leaves};
})();
const cdata=s=>'<![CDATA['+s.replace(/]]>/g,']]]]><![CDATA[>')+']]>';
const same=(a,b)=>JSON.stringify([...a].sort())===JSON.stringify([...b].sort());
function stripGeneratedIntro(description,name,manufacturer) {
 const n=escapeHtml(displayNameFor(name)),b=escapeHtml(manufacturer||'overeného výrobcu');
 let result=description;
 for(const template of [...Object.values(INTROS).flat(),...DEFAULT_INTRO]) {
  const intro=template.replace(/\{name\}/g,n).replace(/\{brand\}/g,b);
  result=result.replace('<p>'+intro+'</p>','');
 }
 return result;
}
function apply(files,config,knownCategories) {
 if(config.schemaVersion!==1)throw new Error('Unsupported correction schema');
 const known=new Set(knownCategories),rules=new Map();
 for(const r of config.products) {
  const key=[r.supplier,r.code,r.ean].join('\0');
  if(rules.has(key))throw new Error('Duplicate approved identity: '+r.code);
  if(!r.proposed.length||!r.proposed.every(c=>known.has(c)))throw new Error('Correction would create an unapproved category: '+r.code);
  rules.set(key,r);
 }
 const report={products:0,matched:0,categoryChanges:0,nameChanges:0,descriptionChanges:0,skipped:[],unseen:[]},seen=new Set();
 const updated=files.map(f=>{
  if(!/<\/SHOP>\s*$/.test(f.text)||!/<SHOPITEM\b/.test(f.text))throw new Error('Incomplete feed '+f.name);
  const text=f.text.replace(/<SHOPITEM\b[^>]*>[\s\S]*?<\/SHOPITEM>/g,xml=>{
   report.products++;
   const code=field(xml,'CODE'),ean=field(xml,'EAN'),key=[f.name,code,ean].join('\0'),r=rules.get(key);
   if(!r)return xml;
   if(seen.has(key))throw new Error('Repeated supplier/code/EAN identity: '+f.name+'/'+code);
   seen.add(key);
   const name=field(xml,'NAME'),before=leaves(categories(xml));
   if(![r.name,r.correctName].filter(Boolean).includes(name)||(!same(before,r.current)&&!same(before,r.proposed))) {
    report.skipped.push({supplier:f.name,code,ean,reason:'Changed name or category; needs review'});return xml;
   }
   report.matched++;
   let after=xml;
   if(!same(before,r.proposed)||categories(xml)[0]!==r.proposed[0]) {
    const cats=[...r.proposed];
    for(const c of r.proposed){const parts=c.split(' > ');for(let i=1;i<parts.length;i++)cats.push(parts.slice(0,i).join(' > '));}
    const block='<CATEGORIES>'+[...new Set(cats)].map(c=>'<CATEGORY>'+cdata(c)+'</CATEGORY>').join('')+'</CATEGORIES>';
    if(!/<CATEGORIES>[\s\S]*?<\/CATEGORIES>/.test(after))throw new Error('Missing category block '+code);
    after=after.replace(/<CATEGORIES>[\s\S]*?<\/CATEGORIES>/,block);report.categoryChanges++;
   }
   if(r.cleanGeneratedIntro) {
    const old=field(after,'DESCRIPTION');
    const cleaned=stripGeneratedIntro(old,r.name,field(after,'MANUFACTURER'));
    if(cleaned!==old){after=after.replace(/<DESCRIPTION>[\s\S]*?<\/DESCRIPTION>/,'<DESCRIPTION>'+cdata(cleaned)+'</DESCRIPTION>');report.descriptionChanges++;}
   }
   if(r.correctName&&r.correctName!==name) {
    after=after.replace(/<NAME>[\s\S]*?<\/NAME>/,'<NAME>'+cdata(r.correctName)+'</NAME>');
    for(const tag of ['DESCRIPTION','SHORT_DESCRIPTION','SEO_TITLE','META_DESCRIPTION']){
     const old=field(after,tag);if(!old||!old.includes(name))continue;
     after=after.replace(new RegExp('<'+tag+'>[\\s\\S]*?</'+tag+'>'),'<'+tag+'>'+cdata(old.split(name).join(r.correctName))+'</'+tag+'>');
    }
    report.nameChanges++;
   }
   return after;
  });
  return {...f,text};
 });
 for(const [key,r] of rules)if(!seen.has(key))report.unseen.push({supplier:r.supplier,code:r.code,ean:r.ean});
 return {files:updated,report};
}
function main(){
 const args=process.argv.slice(2),root=path.resolve(args.find(a=>a.startsWith('--root='))?.slice(7)||path.join(__dirname,'..'));
 const config=JSON.parse(fs.readFileSync(path.join(root,'data/product-category-corrections.json'),'utf8'));
 const known=JSON.parse(fs.readFileSync(path.join(root,'data/known-categories.json'),'utf8'));
 const files=config.suppliers.map(name=>({name,file:path.join(root,'output',name+'.xml'),text:fs.readFileSync(path.join(root,'output',name+'.xml'),'utf8')}));
 const result=apply(files,config,known);
 // Všetky vstupy prešli validáciou pred prvým zápisom.
 if(args.includes('--write'))for(const f of result.files){if(f.text===files.find(x=>x.name===f.name).text)continue;fs.writeFileSync(f.file+'.corrections.tmp',f.text);fs.renameSync(f.file+'.corrections.tmp',f.file);}
 const reportDir=path.join(root,'reports');fs.mkdirSync(reportDir,{recursive:true});
 fs.writeFileSync(path.join(reportDir,'product-category-corrections-status.json'),JSON.stringify(result.report,null,2)+'\n');
 console.log(JSON.stringify({...result.report,skipped:result.report.skipped.length,unseen:result.report.unseen.length,mode:args.includes('--write')?'write':'dry-run'}));
}
module.exports={apply,stripGeneratedIntro,field,categories,leaves};
if(require.main===module)main();
