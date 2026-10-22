/* PremiumStore – A/B test mobilného menu, 2026-10-22.
   Variant A = pôvodné menu, variant B = nová spodná lišta (premiumstore-mobile-nav-20261022.js).
   Priradenie 50/50 na prvej mobilnej návšteve, uloží sa do localStorage + cookie (90 dní).
   Do GA4 posiela vlastnosť používateľa menu_variant a udalosti pmb_* (parameter menu_variant).
   Do Microsoft Clarity posiela tag menu_variant, ak je Clarity na stránke.
   Test na vlastnom zariadení: ?pmb_ab=A alebo ?pmb_ab=B (variant sa vynúti a udalosti sa neposielajú), ?pmb_ab=reset zruší.
   Vypnutie testu: SPLIT=1 (všetci B) alebo SPLIT=0 (všetci A). */
(function(){
  if(window.__pmbAb)return;window.__pmbAb=1;

  var SPLIT=0.5;                                     /* podiel návštevníkov s novou lištou (B) */
  var KEY='pmb_ab',KEY_X='pmb_ab_x';
  var MOBILE=window.matchMedia&&window.matchMedia('(max-width:767px)').matches;
  if(!MOBILE)return;

  function ls(k,v){try{if(v===undefined)return localStorage.getItem(k);if(v===null)localStorage.removeItem(k);else localStorage.setItem(k,v);}catch(e){}return null;}
  function ck(k){var m=document.cookie.match(new RegExp('(?:^|; )'+k+'=([^;]*)'));return m?m[1]:null;}
  function setCk(k,v,d){document.cookie=k+'='+v+';path=/;max-age='+(d*86400)+';SameSite=Lax';}

  var q=(location.search.match(/[?&]pmb_ab=([^&]*)/)||[])[1];
  if(q==='reset'){ls(KEY,null);ls(KEY_X,null);setCk(KEY,'',-1);setCk(KEY_X,'',-1);}
  var internal=false;
  if(q==='A'||q==='B'){ls(KEY,q);ls(KEY_X,'1');setCk(KEY,q,90);setCk(KEY_X,'1',90);}
  var v=ls(KEY)||ck(KEY);
  if(v!=='A'&&v!=='B'){v=Math.random()<SPLIT?'B':'A';}
  ls(KEY,v);setCk(KEY,v,90);
  internal=ls(KEY_X)==='1'||ck(KEY_X)==='1';
  window.__pmbVariant=v;
  document.documentElement.setAttribute('data-menu-variant',v);

  /* ===== meranie ===== */
  window.dataLayer=window.dataLayer||[];
  function g(){window.dataLayer.push(arguments);}
  function send(name,p){
    if(internal)return;
    p=p||{};p.menu_variant=v;
    try{(typeof window.gtag==='function'?window.gtag:g)('event',name,p);}catch(e){}
  }
  function tagClarity(){try{if(typeof window.clarity==='function'){window.clarity('set','menu_variant',v);}}catch(e){}}
  tagClarity();window.addEventListener('load',tagClarity);

  if(!internal){
    try{(typeof window.gtag==='function'?window.gtag:g)('set','user_properties',{menu_variant:v});}catch(e){}
    var seen=false;try{seen=sessionStorage.getItem('pmb_ab_seen')==='1';sessionStorage.setItem('pmb_ab_seen','1');}catch(e){}
    if(!seen)send('pmb_ab_assign',{page_path:location.pathname});
  }

  function txt(el){return ((el&&(el.textContent||el.getAttribute('aria-label')))||'').replace(/\s+/g,' ').trim().slice(0,60);}

  document.addEventListener('click',function(e){
    var t=e.target;if(!t||!t.closest)return;
    var c;
    if((c=t.closest('#pmb-bar [data-k]'))){
      var k=c.getAttribute('data-k');
      send(k==='menu'?'pmb_menu_open':k==='search'?'pmb_search_open':k==='cart'?'pmb_cart_click':k==='home'?'pmb_home_click':'pmb_account_click');
      return;
    }
    if(t.closest('#pmb-sheet')){
      if((c=t.closest('.searchWhisperer a')))return send('pmb_search_result_click',{item_name:txt(c)});
      if((c=t.closest('.pmb-subs a, .pmb-cat')))return send('pmb_category_click',{item_name:txt(c),link_url:(c.getAttribute('href')||'').slice(0,120)});
      if((c=t.closest('.pmb-chip, .pmb-rec')))return send('pmb_search_chip_click',{item_name:txt(c)});
      if((c=t.closest('a[href]')))return send('pmb_category_click',{item_name:txt(c),link_url:(c.getAttribute('href')||'').slice(0,120)});
      return;
    }
    /* pôvodné menu (a spoločné prvky) */
    if(t.closest('.ps-menu-trigger, a.toggle-window[data-target="navigation"]'))return send('pmb_menu_open');
    if(t.closest('a.toggle-window[data-target="search"]'))return send('pmb_search_open');
    if(t.closest('a.cart-count'))return send('pmb_cart_click');
    if((c=t.closest('.searchWhisperer a')))return send('pmb_search_result_click',{item_name:txt(c)});
    if((c=t.closest('#navigation a[href]:not([href="#"])')))return send('pmb_category_click',{item_name:txt(c),link_url:(c.getAttribute('href')||'').slice(0,120)});
  },true);

  document.addEventListener('submit',function(e){
    var f=e.target;if(!f||!f.matches||!f.matches('form.search-form, #pmb-sheet form'))return;
    var i=f.querySelector('input[name="string"], .js-search-input');
    send('pmb_search_submit',{search_term:((i&&i.value)||'').trim().slice(0,80)});
  },true);
})();
