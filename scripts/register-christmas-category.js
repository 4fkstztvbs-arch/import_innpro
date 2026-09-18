'use strict';
const fs=require('node:fs'),path=require('node:path'),root=path.resolve(__dirname,'..');
const cfg=JSON.parse(fs.readFileSync(path.join(root,'data/christmas-products.json'),'utf8'));
for(const file of ['known-categories.json','approved-category-migration.json','category-urls.json']){
 const p=path.join(root,'data',file);let data=JSON.parse(fs.readFileSync(p,'utf8'));
 if(file==='known-categories.json')data=[...new Set([...data,cfg.category])].sort();
 else if(file==='approved-category-migration.json')data.tree=[...new Set([...data.tree,cfg.category])].sort();
 else data[cfg.category]=cfg.url;
 fs.writeFileSync(p,JSON.stringify(data,null,2)+'\n');
}
