/* PremiumStore – rámec A/B testov na webe, 2026-11-12.
   Návštevník sa pri prvej návšteve náhodne zaradí do vetvy A alebo B (cookie + localStorage, 90 dní).
   Do GA4 pošle udalosť ps_experiment (experiment_id, variant) raz za reláciu, do Clarity tag ps_exp_<id>.
   Na <html> nastaví atribut data-ps-exp-<id>="A|B", podľa ktorého CSS/JS zobrazí úpravu len vetve B.
   Pridanie testu: doplniť riadok do EXPERIMENTS (id, podiel B, voliteľne cesta, na ktorej sa test spúšťa).
   Test na vlastnom zariadení: ?ps_exp=<id>:A alebo ?ps_exp=<id>:B (vynúti vetvu, udalosti sa neposielajú), ?ps_exp=reset zruší.
   Vypnutie testu: odstrániť riadok z EXPERIMENTS (atribút aj udalosti zmiznú, návštevníci vidia pôvodnú verziu). */
(function(){
  if(window.__psExp)return;window.__psExp=1;

  var EXPERIMENTS=[
    {id:'aa-20261112',split:0.5}      /* test A/A: obe vetvy rovnaké, overuje rovnomerné rozdelenie a meranie */
  ];

  function ls(k,v){try{if(v===undefined)return localStorage.getItem(k);if(v===null)localStorage.removeItem(k);else localStorage.setItem(k,v);}catch(e){}return null;}
  function ck(k){var m=document.cookie.match(new RegExp('(?:^|; )'+k+'=([^;]*)'));return m?m[1]:null;}
  function setCk(k,v,d){document.cookie=k+'='+v+';path=/;max-age='+(d*86400)+';SameSite=Lax';}

  var q=(location.search.match(/[?&]ps_exp=([^&]*)/)||[])[1];
  q=q?decodeURIComponent(q):'';
  window.dataLayer=window.dataLayer||[];
  function g(){window.dataLayer.push(arguments);}
  function gt(){try{(typeof window.gtag==='function'?window.gtag:g).apply(null,arguments);}catch(e){}}
  var internal=ls('ps_exp_x')==='1'||ck('ps_exp_x')==='1';

  EXPERIMENTS.forEach(function(ex){
    var key='ps_exp_'+ex.id;
    if(q==='reset'){ls(key,null);ls('ps_exp_x',null);setCk(key,'',-1);setCk('ps_exp_x','',-1);internal=false;}
    var m=q.match(/^([^:]+):([AB])$/);
    if(m&&m[1]===ex.id){ls(key,m[2]);setCk(key,m[2],90);ls('ps_exp_x','1');setCk('ps_exp_x','1',90);internal=true;}
    var v=ls(key)||ck(key);
    if(v!=='A'&&v!=='B'){v=Math.random()<ex.split?'B':'A';}
    ls(key,v);setCk(key,v,90);
    document.documentElement.setAttribute('data-ps-exp-'+ex.id,v);
    window.__psExpVariants=window.__psExpVariants||{};window.__psExpVariants[ex.id]=v;
    function tag(){try{if(typeof window.clarity==='function')window.clarity('set','ps_exp_'+ex.id,v);}catch(e){}}
    tag();window.addEventListener('load',tag);
    if(internal)return;
    var seenKey='ps_exp_seen_'+ex.id,seen=false;
    try{seen=sessionStorage.getItem(seenKey)==='1';sessionStorage.setItem(seenKey,'1');}catch(e){}
    if(!seen)gt('event','ps_experiment',{experiment_id:ex.id,variant:v,page_path:location.pathname,send_to:'GA4'});   /* skupina GA4, nie Google Ads */
  });
})();
