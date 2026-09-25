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
function categoryBlock(target) {
 const cats=[target],parts=target.split(' > ');
 for(let i=1;i<parts.length;i++)cats.push(parts.slice(0,i).join(' > '));
 return '<CATEGORIES>'+[...new Set(cats)].map(c=>'<CATEGORY>'+cdata(c)+'</CATEGORY>').join('')+'</CATEGORIES>';
}
function replaceCategory(xml,target) {
 if(!/<CATEGORIES>[\s\S]*?<\/CATEGORIES>/.test(xml))throw new Error('Missing category block for '+target);
 return xml.replace(/<CATEGORIES>[\s\S]*?<\/CATEGORIES>/,categoryBlock(target));
}
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
 const known=new Set(knownCategories),rules=new Map(),automaticRules=config.automaticCategoryRules||[];
 for(const r of config.products) {
  const key=[r.supplier,r.code,r.ean].join('\0');
  if(rules.has(key))throw new Error('Duplicate approved identity: '+r.code);
  if(!r.proposed.length||!r.proposed.every(c=>known.has(c)))throw new Error('Correction would create an unapproved category: '+r.code);
  rules.set(key,r);
 }
 for(const rule of automaticRules) {
  if(!known.has(rule.sourceCategory))throw new Error('Automatic rule source is not an approved category: '+rule.sourceCategory);
  if(!Array.isArray(rule.families)||!rule.families.length)throw new Error('Automatic rule has no material families: '+rule.supplier);
  for(const family of rule.families) {
   if(!known.has(family.target))throw new Error('Automatic rule target is not an approved category: '+family.target);
   if(!Array.isArray(family.patterns)||!family.patterns.length)throw new Error('Automatic rule has no patterns: '+family.target);
   for(const pattern of family.patterns)new RegExp(pattern,'iu');
  }
 }
 const report={products:0,matched:0,categoryChanges:0,nameChanges:0,descriptionChanges:0,automaticCategoryChanges:0,automaticCategoryUnclassified:[],automaticCategoryAmbiguous:[],skipped:[],unseen:[]},seen=new Set();
 const updated=files.map(f=>{
  if(!/<\/SHOP>\s*$/.test(f.text)||!/<SHOPITEM\b/.test(f.text))throw new Error('Incomplete feed '+f.name);
  const text=f.text.replace(/<SHOPITEM\b[^>]*>[\s\S]*?<\/SHOPITEM>/g,xml=>{
   report.products++;
   let currentXml=xml;
   const automaticRule=automaticRules.find(rule=>rule.supplier===f.name&&leaves(categories(currentXml)).includes(rule.sourceCategory));
   if(automaticRule) {
    const automaticName=field(currentXml,'NAME');
    const matches=automaticRule.families.filter(family=>family.patterns.some(pattern=>new RegExp(pattern,'iu').test(automaticName)));
    const targets=[...new Set(matches.map(family=>family.target))];
    const detail={supplier:f.name,code:field(currentXml,'CODE'),ean:field(currentXml,'EAN'),name:automaticName};
    if(targets.length===1) {
     if(!leaves(categories(currentXml)).includes(targets[0])) {
      currentXml=replaceCategory(currentXml,targets[0]);report.automaticCategoryChanges++;
     }
    } else if(targets.length===0) report.automaticCategoryUnclassified.push(detail);
    else report.automaticCategoryAmbiguous.push({...detail,targets});
   }
   const code=field(currentXml,'CODE'),ean=field(currentXml,'EAN'),key=[f.name,code,ean].join('\0'),r=rules.get(key);
   if(!r)return currentXml;
   if(seen.has(key))throw new Error('Repeated supplier/code/EAN identity: '+f.name+'/'+code);
   seen.add(key);
   const name=field(currentXml,'NAME'),before=leaves(categories(currentXml));
   if(![r.name,r.correctName].filter(Boolean).includes(name)||(!same(before,r.current)&&!same(before,r.proposed))) {
    report.skipped.push({supplier:f.name,code,ean,reason:'Changed name or category; needs review'});return currentXml;
   }
   report.matched++;
   let after=currentXml;
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
