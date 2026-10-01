'use strict';
// Exact audited supplier/code/EAN allowlist. Changes reviewed Slovak names and SEO titles; preserves prices, stock, identifiers and visibility.
const fs=require('node:fs'),path=require('node:path');
const decode=s=>s.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&amp;/g,'&');
const field=(xml,tag)=>{const m=xml.match(new RegExp('<'+tag+'>([\\s\\S]*?)</'+tag+'>'));return m?(m[1].startsWith('<![CDATA[')?m[1].slice(9,-3):decode(m[1])).trim():''};
const cdata=s=>'<![CDATA['+s.replace(/]]>/g,']]]]><![CDATA[>')+']]>';
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const marker=/\s*<!-- ps-christmas:start -->[\s\S]*?<!-- ps-christmas:end -->\s*/g;
// apply-missing-availability intentionally emits minimal URL-only updates without
// names/categories. Other suppliers' workflows read these already-published rows.
const isUnavailableUpdate=xml=>!field(xml,'NAME')
 && field(xml,'VISIBILITY')==='detailOnly'
 && field(xml,'AVAILABILITY')===(process.env.MISSING_PRODUCT_AVAILABILITY||'Vypredané');
function bridge(rule,config){const url=config.groupUrls[rule.group]||config.url+'#ps-christmas-'+rule.group;return '<!-- ps-christmas:start --><div class="ps-christmas-bridge" data-christmas-group="'+esc(rule.group)+'"><strong>Vyberáte vianočné osvetlenie?</strong><span>Porovnajte svetielka podľa druhu, farby a miesta použitia.</span><div><a href="'+esc(url)+'" data-christmas-link="group">'+esc(config.groups[rule.group])+' →</a><a href="'+config.url+'" data-christmas-link="all">Všetko vianočné osvetlenie →</a></div></div><!-- ps-christmas:end -->';}
function apply(files,config){
 const rules=new Map(config.products.map(r=>[r.supplier+'\0'+r.code.toUpperCase(),r]));if(rules.size!==config.products.length)throw Error('Duplicate identity');
 const report={matched:0,changed:0,missing:[],skippedUnavailable:[],parameters:0},seen=new Set();
 const output=files.map(f=>({...f,text:f.text.replace(/<SHOPITEM\b[^>]*>[\s\S]*?<\/SHOPITEM>/g,xml=>{
 const key=f.name+'\0'+field(xml,'CODE').toUpperCase(),r=rules.get(key);if(!r)return xml;
 if(field(xml,'EAN')!==r.ean)throw Error('EAN changed: '+key);
 if(seen.has(key))throw Error('Duplicate source item: '+key);seen.add(key);
 // Keep identity checks above this guard; never enrich or reactivate a tombstone.
 if(isUnavailableUpdate(xml)){report.skippedUnavailable.push(r.shopCode);return xml;}
 report.matched++;
 let out=xml;
 if(r.nameSk)out=out.replace(/<NAME>[\s\S]*?<\/NAME>/,'<NAME>'+cdata(r.nameSk)+'</NAME>');
 if(r.seoTitleSk){const seo='<SEO_TITLE>'+cdata(r.seoTitleSk)+'</SEO_TITLE>';if(/<SEO_TITLE>/.test(out))out=out.replace(/<SEO_TITLE>[\s\S]*?<\/SEO_TITLE>/,seo);else out=out.replace('</SHOPITEM>',seo+'\n</SHOPITEM>');}
 const cats=[...xml.matchAll(/<CATEGORY>([\s\S]*?)<\/CATEGORY>/g)].map(m=>field(m[0],'CATEGORY'));
 // Solight finalization adds DEFAULT_CATEGORY. Preserve it on subsequent runs
 // (including runs started by another supplier), and retain Shoptet tag order.
 const defaultTag=xml.match(/<DEFAULT_CATEGORY\b[^>]*>[\s\S]*?<\/DEFAULT_CATEGORY>/)?.[0];
 const all=[...new Set([config.category,...cats])].filter(c=>!defaultTag||c!==field(defaultTag,'DEFAULT_CATEGORY'));
 out=out.replace(/<CATEGORIES>[\s\S]*?<\/CATEGORIES>/,'<CATEGORIES>\n'+all.map(c=>'  <CATEGORY>'+cdata(c)+'</CATEGORY>').join('\n')+(defaultTag?'\n  '+defaultTag:'')+'\n</CATEGORIES>');
 if(!out.includes('<CATEGORIES>'))throw Error('No categories '+key);
 const short=field(out,'SHORT_DESCRIPTION').replace(marker,'').trim();const val=bridge(r,config)+(short?'\n'+short:'');
 if(/<SHORT_DESCRIPTION>/.test(out))out=out.replace(/<SHORT_DESCRIPTION>[\s\S]*?<\/SHORT_DESCRIPTION>/,'<SHORT_DESCRIPTION>'+cdata(val)+'</SHORT_DESCRIPTION>');else out=out.replace('</NAME>','</NAME>\n<SHORT_DESCRIPTION>'+cdata(val)+'</SHORT_DESCRIPTION>');
 const long=field(out,'DESCRIPTION').replace(marker,'').trim();
 if(/<DESCRIPTION>/.test(out))out=out.replace(/<DESCRIPTION>[\s\S]*?<\/DESCRIPTION>/,'<DESCRIPTION>'+cdata(bridge(r,config)+(long?'\n'+long:''))+'</DESCRIPTION>');
 let infos=out.match(/<INFORMATION_PARAMETERS>[\s\S]*?<\/INFORMATION_PARAMETERS>/)?.[0]||'<INFORMATION_PARAMETERS></INFORMATION_PARAMETERS>';
 for(const [name,value] of Object.entries(r.parameters)){
 infos=infos.replace(/<INFORMATION_PARAMETER>[\s\S]*?<\/INFORMATION_PARAMETER>/g,block=>field(block,'NAME')===name?'':block);
 infos=infos.replace('</INFORMATION_PARAMETERS>','<INFORMATION_PARAMETER><NAME>'+cdata(name)+'</NAME><VALUE>'+cdata(value)+'</VALUE></INFORMATION_PARAMETER></INFORMATION_PARAMETERS>');report.parameters++;
 }
 if(/<INFORMATION_PARAMETERS>/.test(out))out=out.replace(/<INFORMATION_PARAMETERS>[\s\S]*?<\/INFORMATION_PARAMETERS>/,infos);else if(out.includes('</IMAGES>'))out=out.replace('</IMAGES>','</IMAGES>\n'+infos);else out=out.replace('</SHOPITEM>',infos+'\n</SHOPITEM>');
 if(out!==xml)report.changed++;return out;
 })}));for(const [key,r] of rules)if(!seen.has(key))report.missing.push(r.shopCode);return {files:output,report};
}
function main(){const root=path.resolve(__dirname,'..'),config=JSON.parse(fs.readFileSync(path.join(root,'data/christmas-products.json'),'utf8'));const suppliers=[...new Set(config.products.map(r=>r.supplier))];const files=suppliers.map(name=>({name,text:fs.readFileSync(path.join(root,'output',name+'.xml'),'utf8')}));const result=apply(files,config);if(process.argv.includes('--write'))for(const f of result.files)fs.writeFileSync(path.join(root,'output',f.name+'.xml'),f.text);fs.writeFileSync(path.join(root,'reports/christmas-products-status.json'),JSON.stringify(result.report,null,2)+'\n');console.log(result.report);}
module.exports={apply,field,bridge};if(require.main===module)main();
