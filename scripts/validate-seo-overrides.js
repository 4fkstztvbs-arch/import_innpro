'use strict';
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { loadSeoOverrides, applyFeedOverrides, SUPPLIERS } = require('./seo-overrides');
const { inspectFeed, patchSeo } = require('./seo-feed-xml');
const ROOT = path.join(__dirname, '..');
const sha = value => crypto.createHash('sha256').update(value).digest('hex');
function resolveOutputIdentity(entry, items) {
  const found = items.filter(x => x.fields.CODE?.text === entry.code);
  if (found.length > 1) return { status: 'error', reason: 'duplicate-code' };
  if (found.length === 1) {
    if (entry.ean && found[0].fields.EAN?.text !== entry.ean) return { status: 'error', reason: 'ean-mismatch' };
    return { status: 'matched', item: found[0] };
  }
  const eanMatches = entry.ean ? items.filter(x => x.fields.EAN?.text === entry.ean) : [];
  if (eanMatches.length) return { status: 'error', reason: 'code-mismatch' };
  return { status: 'missing' };
}
function maskSeo(xml, items) {
  const spans=items.flatMap(x=>['SEO_TITLE','META_DESCRIPTION'].map(t=>x.fields[t]).filter(Boolean)).sort((a,b)=>a.start-b.start);
  const chunks=[];let cursor=0;for(const x of spans){chunks.push(xml.slice(cursor,x.start));cursor=x.end;}chunks.push(xml.slice(cursor));
  return chunks.join('');
}
function validate() {
  const config=loadSeoOverrides();
  const candidates=JSON.parse(fs.readFileSync(path.join(ROOT,'data/seo/ctr-test-candidates.json'),'utf8'));
  const baseline=JSON.parse(fs.readFileSync(path.join(ROOT,'reports/seo/ctr-baseline-evidence.json'),'utf8'));
  const evidence=JSON.parse(fs.readFileSync(path.join(ROOT,'reports/seo/ctr-mapping-evidence.json'),'utf8'));
  const errors=[], blockers=[], feeds=[], previews=[];
  if(baseline.baseline.from!==config.baseline.from||baseline.baseline.to!==config.baseline.to||baseline.dates.join('/')!=='2026-08-10/2026-09-16'||baseline.sha256!==config.baseline.sha256) errors.push('Baseline provenance mismatch');
  const members=[...config.products,...config.controls];
  for(const [i,x] of members.entries()) {
    const b=baseline.rows.find(r=>r.url===x.url), c=[...candidates.candidates,...candidates.controls].find(r=>r.url===x.url), e=evidence.rows[i];
    if(!b||!c||!e||e.url!==x.url) { errors.push(`Missing evidence: ${x.url}`);continue; }
    for(const k of ['supplier','code','ean','mappingStatus','out','transform','shoptetCode']) if(c[k]!==x[k]||e[k]!==x[k]) errors.push(`Mapping evidence mismatch ${k}: ${x.url}`);
    for(const k of ['clicks','impressions','ctr','position']) if(Math.abs(c[k]-b[k])>0.00001) errors.push(`Baseline metric mismatch ${k}: ${x.url}`);
    if(x.mappingStatus==='VERIFIED'&&(e.canonicalUrl!==x.url||e.currentUrl!==x.url||e.robots!=='index,follow')) errors.push(`Invalid current URL/indexability evidence: ${x.url}`);
    if(x.mappingStatus!=='VERIFIED') blockers.push({url:x.url,reason:x.mappingStatus});
  }
  const selection=JSON.parse(fs.readFileSync(path.join(ROOT,'reports/seo/ctr-cohort-selection.json'),'utf8'));
  if(selection.cohortRevision!==2||config.cohortRevision!==2||selection.pairs.length!==20) errors.push('Invalid cohort revision/pair count');
  const seen=new Set();
  for(const pair of selection.pairs) {
    const t=candidates.candidates.find(x=>x.url===pair.treatment),c=candidates.controls.find(x=>x.url===pair.control);
    if(!t||!c||t.pair!==pair.pair||c.pair!==pair.pair||seen.has(t.url)||seen.has(c.url)) { errors.push('Invalid frozen treatment/control pair');continue; }
    seen.add(t.url);seen.add(c.url);
    const originalOrder=selection.screened.filter(x=>x.selected&&(x.url===t.url||x.url===c.url));
    const bit=crypto.createHash('sha256').update(`CTR-2026-09-R2:pair:${pair.pair}`).digest()[0]%2;
    if(originalOrder.length!==2||originalOrder[bit].url!==t.url) errors.push('Frozen arm assignment changed');
  }
  if(seen.size!==40) errors.push('Not all cohort members have a unique frozen pair');
  for(const supplier of SUPPLIERS) {
    const file=path.join(ROOT,'output',`${supplier}.xml`),xml=fs.readFileSync(file,'utf8'),items=inspectFeed(xml);
    const inactive=applyFeedOverrides(xml,supplier,{...config,status:'PREPARED_NOT_ACTIVE'});
    if(inactive.xml!==xml) errors.push(`Inactive output changed: ${supplier}`);
    const changes=[];
    for(const entry of members.filter(x=>x.supplier===supplier&&x.mappingStatus==='VERIFIED')) {
      const identity=resolveOutputIdentity(entry,items);
      if(identity.status==='error') { errors.push(`Verified identity changed in OUT (${identity.reason}): ${supplier}/${entry.code}`);continue; }
      if(identity.status==='missing') {
        // The exact mapped product may be omitted by the supplier's current-stock filter.
        // Keep the frozen cohort intact, but make it explicit that activation is not ready.
        blockers.push({supplier,code:entry.code,reason:'NOT_IN_CURRENT_OUT'});
        continue;
      }
      if(config.products.includes(entry)) changes.push({item:identity.item,seoTitle:entry.seoTitle,metaDescription:entry.metaDescription});
    }
    // Preview only: low-level serialization validation, never an ACTIVE registry or write.
    const preview=patchSeo(xml,changes), after=inspectFeed(preview);
    const beforeNonSeo=sha(maskSeo(xml,items)),afterNonSeo=sha(maskSeo(preview,after));
    if(beforeNonSeo!==afterNonSeo) errors.push(`Non-SEO bytes changed: ${supplier}`);
    for(const change of changes) previews.push({supplier,code:change.item.fields.CODE.text,before:{seoTitle:change.item.fields.SEO_TITLE?.text,metaDescription:change.item.fields.META_DESCRIPTION?.text},after:{seoTitle:change.seoTitle,metaDescription:change.metaDescription}});
    feeds.push({supplier,items:items.length,sha256:sha(xml),inactiveSha256:sha(inactive.xml),previewProducts:changes.length,nonSeoBeforeSha256:beforeNonSeo,nonSeoAfterSha256:afterNonSeo});
  }
  if(!config.activation.approvalReference) blockers.push({reason:'EXPLICIT_USER_ACTIVATION_APPROVAL_MISSING'});
  if(!config.activation.preflightPassed) blockers.push({reason:'FULL_ACTIVATION_PREFLIGHT_NOT_PASSED'});
  return {experimentId:config.experimentId,status:config.status,baseline:config.baseline,preparationValid:errors.length===0,activationReady:errors.length===0&&blockers.length===0,errors,blockers,feeds,previews};
}
if(require.main===module){
  try{const result=validate();console.log(JSON.stringify(result,null,2));if(!result.preparationValid||(process.argv.includes('--require-ready')&&!result.activationReady))process.exitCode=1;}
  catch(error){console.error(error.message);process.exitCode=1;}
}
module.exports={validate,resolveOutputIdentity};
