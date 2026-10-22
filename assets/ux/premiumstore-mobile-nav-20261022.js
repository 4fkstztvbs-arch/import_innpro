/* PremiumStore – mobilná spodná lišta (Domov, Menu, Košík, Hľadať, Účet), 2026-10-22.
   Menu = spodný panel s kategóriami z #navigation (harmonika). Hľadať = natívny .search (našepkávač a vlastné skripty
   premiumstore-search-*.js fungujú ďalej) presunutý do spodného panela. Skryje sa na /kosik/ a /objednavka/.
   Nastavenia sú hore v súbore. Zodpovedajúce CSS: premiumstore-mobile-nav-20261022.css. Len mobil (max-width:767px). */
(function(){
  if(window.__pmb)return;window.__pmb=1;

  /* ===== NASTAVENIA (upravte podľa potreby) ===== */
  var PHONE='+421484151999';
  var HIDE_ON=/^\/(kosik|objednavka)(\/|$)/;       /* na týchto stránkach sa lišta skryje */
  var HIDE_ON_SCROLL=true;                          /* skryť lištu pri skrolovaní nadol */
  var MAX_SUBS=8;                                   /* koľko podkategórií ukázať v harmonike */
  var BRANDS=['Samsung','Sonos','JBL','Xiaomi','TP-Link','Bose','Creality','HP'];
  var CAT_ICONS={                                   /* časť adresy kategórie -> ikona */
    'pocitace':'device-laptop','tv-foto':'device-tv','domace-spotrebice':'wash-machine',
    'smart-home':'bulb','fotovoltaika':'battery-charging','audio-technika':'microphone',
    '3d-tlac':'cube-3d-sphere','dielna':'tool','auto-moto':'car','cestovanie':'backpack',
    'zdravie':'heartbeat','chovatelske':'paw','black-friday':'flame','doprava':'truck-delivery','kontakty':'headset'
  };
  /* ============================================== */

  var ICONS={"search": "<path d=\"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0\" /><path d=\"M21 21l-6 -6\" />", "bulb": "<path d=\"M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7\" /><path d=\"M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3\" /><path d=\"M9.7 17l4.6 0\" />", "user": "<path d=\"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0\" /><path d=\"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\" />", "layout-grid": "<path d=\"M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z\" /><path d=\"M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z\" /><path d=\"M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z\" /><path d=\"M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z\" />", "home": "<path d=\"M5 12l-2 0l9 -9l9 9l-2 0\" /><path d=\"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7\" /><path d=\"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6\" />", "chevron-down": "<path d=\"M6 9l6 6l6 -6\" />", "backpack": "<path d=\"M5 18v-6a6 6 0 0 1 6 -6h2a6 6 0 0 1 6 6v6a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3z\" /><path d=\"M10 6v-1a2 2 0 1 1 4 0v1\" /><path d=\"M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4\" /><path d=\"M11 10h2\" />", "headset": "<path d=\"M4 14v-3a8 8 0 1 1 16 0v3\" /><path d=\"M18 19c0 1.657 -2.686 3 -6 3\" /><path d=\"M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z\" /><path d=\"M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z\" />", "microphone": "<path d=\"M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z\" /><path d=\"M5 10a7 7 0 0 0 14 0\" /><path d=\"M8 21l8 0\" /><path d=\"M12 17l0 4\" />", "paw": "<path d=\"M14.7 13.5c-1.1 -2 -1.441 -2.5 -2.7 -2.5c-1.259 0 -1.736 .755 -2.836 2.747c-.942 1.703 -2.846 1.845 -3.321 3.291c-.097 .265 -.145 .677 -.143 .962c0 1.176 .787 2 1.8 2c1.259 0 3 -1 4.5 -1s3.241 1 4.5 1c1.013 0 1.8 -.823 1.8 -2c0 -.285 -.049 -.697 -.146 -.962c-.475 -1.451 -2.512 -1.835 -3.454 -3.538z\" /><path d=\"M20.188 8.082a1.039 1.039 0 0 0 -.406 -.082h-.015c-.735 .012 -1.56 .75 -1.993 1.866c-.519 1.335 -.28 2.7 .538 3.052c.129 .055 .267 .082 .406 .082c.739 0 1.575 -.742 2.011 -1.866c.516 -1.335 .273 -2.7 -.54 -3.052z\" /><path d=\"M9.474 9c.055 0 .109 0 .163 -.011c.944 -.128 1.533 -1.346 1.32 -2.722c-.203 -1.297 -1.047 -2.267 -1.932 -2.267c-.055 0 -.109 0 -.163 .011c-.944 .128 -1.533 1.346 -1.32 2.722c.204 1.293 1.048 2.267 1.933 2.267z\" /><path d=\"M16.456 6.733c.214 -1.376 -.375 -2.594 -1.32 -2.722a1.164 1.164 0 0 0 -.162 -.011c-.885 0 -1.728 .97 -1.93 2.267c-.214 1.376 .375 2.594 1.32 2.722c.054 .007 .108 .011 .162 .011c.885 0 1.73 -.974 1.93 -2.267z\" /><path d=\"M5.69 12.918c.816 -.352 1.054 -1.719 .536 -3.052c-.436 -1.124 -1.271 -1.866 -2.009 -1.866c-.14 0 -.277 .027 -.407 .082c-.816 .352 -1.054 1.719 -.536 3.052c.436 1.124 1.271 1.866 2.009 1.866c.14 0 .277 -.027 .407 -.082z\" />", "x": "<path d=\"M18 6l-12 12\" /><path d=\"M6 6l12 12\" />", "chevron-right": "<path d=\"M9 6l6 6l-6 6\" />", "cube-3d-sphere": "<path d=\"M6 17.6l-2 -1.1v-2.5\" /><path d=\"M4 10v-2.5l2 -1.1\" /><path d=\"M10 4.1l2 -1.1l2 1.1\" /><path d=\"M18 6.4l2 1.1v2.5\" /><path d=\"M20 14v2.5l-2 1.12\" /><path d=\"M14 19.9l-2 1.1l-2 -1.1\" /><path d=\"M12 12l2 -1.1\" /><path d=\"M18 8.6l2 -1.1\" /><path d=\"M12 12l0 2.5\" /><path d=\"M12 18.5l0 2.5\" /><path d=\"M12 12l-2 -1.12\" /><path d=\"M6 8.6l-2 -1.1\" />", "arrow-right": "<path d=\"M5 12l14 0\" /><path d=\"M13 18l6 -6\" /><path d=\"M13 6l6 6\" />", "battery-charging": "<path d=\"M16 7h1a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v3a.5 .5 0 0 1 -.5 .5a.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-2\" /><path d=\"M8 7h-2a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h1\" /><path d=\"M12 8l-2 4h3l-2 4\" />", "tool": "<path d=\"M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5\" />", "category": "<path d=\"M4 4h6v6h-6z\" /><path d=\"M14 4h6v6h-6z\" /><path d=\"M4 14h6v6h-6z\" /><path d=\"M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\" />", "device-laptop": "<path d=\"M3 19l18 0\" /><path d=\"M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z\" />", "truck-delivery": "<path d=\"M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5\" /><path d=\"M3 9l4 0\" />", "phone": "<path d=\"M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2\" />", "car": "<path d=\"M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5\" />", "heartbeat": "<path d=\"M19.5 13.572l-7.5 7.428l-2.896 -2.868m-6.117 -8.104a5 5 0 0 1 9.013 -3.022a5 5 0 1 1 7.5 6.572\" /><path d=\"M3 13h2l2 3l2 -6l1 3h3\" />", "device-tv": "<path d=\"M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z\" /><path d=\"M16 3l-4 4l-4 -4\" />", "flame": "<path d=\"M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z\" />", "shopping-cart": "<path d=\"M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M17 17h-11v-14h-2\" /><path d=\"M6 5l14 1l-1 7h-13\" />", "history": "<path d=\"M12 8l0 4l2 2\" /><path d=\"M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5\" />", "wash-machine": "<path d=\"M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z\" /><path d=\"M12 14m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\" /><path d=\"M8 6h.01\" /><path d=\"M11 6h.01\" /><path d=\"M14 6h2\" /><path d=\"M8 14c1.333 -.667 2.667 -.667 4 0c1.333 .667 2.667 .667 4 0\" />"};
  function ic(n){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(ICONS[n]||ICONS['category']||'')+'</svg>';}
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function iconFor(href){href=href||'';for(var k in CAT_ICONS){if(href.indexOf(k)>-1)return CAT_ICONS[k];}return 'category';}

  function init(){
    if(document.getElementById('pmb-bar'))return;
    var path=location.pathname;
    if(HIDE_ON.test(path))return;
    document.body.classList.add('pmb-on');

    /* telefón v hlavičke */
    var hw=document.querySelector('#header .header-top-wrapper');
    if(hw){var ph=document.createElement('a');ph.id='pmb-phone';ph.href='tel:'+PHONE;ph.setAttribute('aria-label','Zavolať');ph.innerHTML=ic('phone');hw.appendChild(ph);}

    /* lišta */
    var bar=document.createElement('nav');bar.id='pmb-bar';bar.setAttribute('aria-label','Rýchla navigácia');
    bar.innerHTML=
      '<a class="pmb-it" data-k="home" href="/">'+ic('home')+'<span>Domov</span></a>'+
      '<button class="pmb-it" data-k="menu" type="button" aria-haspopup="dialog">'+ic('layout-grid')+'<span>Menu</span></button>'+
      '<a class="pmb-cart" data-k="cart" href="/kosik/" aria-label="Košík">'+ic('shopping-cart')+'<span class="pmb-cl">Košík</span><i class="pmb-badge"></i></a>'+
      '<button class="pmb-it" data-k="search" type="button" aria-haspopup="dialog">'+ic('search')+'<span>Hľadať</span></button>'+
      '<a class="pmb-it" data-k="user" href="/klient/">'+ic('user')+'<span>Účet</span></a>';
    document.body.appendChild(bar);

    var ov=document.createElement('div');ov.id='pmb-ov';document.body.appendChild(ov);
    var sh=document.createElement('div');sh.id='pmb-sheet';sh.setAttribute('role','dialog');sh.setAttribute('aria-modal','true');document.body.appendChild(sh);

    /* aktívna položka */
    function setActive(k){[].forEach.call(bar.querySelectorAll('.pmb-it'),function(e){e.classList.toggle('on',e.getAttribute('data-k')===k);});}
    var pageKey=path==='/'?'home':(/^\/klient/.test(path)?'user':'');
    setActive(pageKey);

    /* ---- Menu ---- */
    function buildMenu(){
      var h='<div class="pmb-grab"></div><div class="pmb-top"><h3>Produkty</h3><button class="pmb-x" type="button" aria-label="Zavrieť">'+ic('x')+'</button></div><div class="pmb-body">';
      var items=document.querySelectorAll('#navigation .menu-level-1 > li');
      var links='';
      [].forEach.call(items,function(li){
        var a=li.querySelector(':scope > a');if(!a)return;
        var href=a.getAttribute('href'),name=a.textContent.replace(/\s+/g,' ').trim();
        var subs=li.querySelectorAll(':scope > ul > li > div > a, :scope > ul > li > a:not(.menu-image)');
        var hot=/black-friday/.test(href);
        if(!subs.length){
          links+='<a class="pmb-cat'+(hot?' hot':'')+'" href="'+esc(href)+'"><span class="pmb-ic">'+ic(iconFor(href))+'</span><span class="pmb-t">'+esc(name)+'</span>'+ic('chevron-right').replace('<svg','<svg class="pmb-ch"')+'</a>';
          return;
        }
        var sl='<a href="'+esc(href)+'">Zobraziť všetko</a>';
        [].slice.call(subs,0,MAX_SUBS).forEach(function(s){
          var t=s.textContent.replace(/\s+/g,' ').trim();if(t)sl+='<a href="'+esc(s.getAttribute('href'))+'">'+esc(t)+'</a>';
        });
        h+='<button class="pmb-cat" type="button" aria-expanded="false"><span class="pmb-ic">'+ic(iconFor(href))+'</span><span class="pmb-t">'+esc(name)+'</span>'+ic('chevron-down').replace('<svg','<svg class="pmb-ch"')+'</button><div class="pmb-subs">'+sl+'</div>';
      });
      h+='<div class="pmb-gap"></div>'+links+'</div>';
      sh.innerHTML=h;
    }

    /* ---- Hľadanie ---- */
    function getRecent(){try{return JSON.parse(localStorage.getItem('pmb_recent')||'[]');}catch(e){return[];}}
    function saveRecent(q){try{var r=getRecent().filter(function(x){return x!==q;});r.unshift(q);localStorage.setItem('pmb_recent',JSON.stringify(r.slice(0,5)));}catch(e){}}
    function go(q){q=(q||'').trim();if(!q)return;saveRecent(q);location.href='/vyhladavanie/?string='+encodeURIComponent(q);}
    var nat=document.querySelector('.search'),home=null,homeNext=null;
    function releaseSearch(){if(nat&&home&&nat.parentNode!==home)home.insertBefore(nat,homeNext);}
    function buildSearch(){
      var h='<div class="pmb-grab"></div><div class="pmb-top"><h3>Hľadať</h3><button class="pmb-x" type="button" aria-label="Zavrieť">'+ic('x')+'</button></div><div class="pmb-body">';
      h+=nat?'<div id="pmb-slot"></div>':
        '<form class="pmb-sf" action="/vyhladavanie/" method="get">'+ic('search')+'<input type="search" name="string" placeholder="Značka, produkt alebo kód" autocomplete="off" enterkeyhint="search" aria-label="Vyhľadávanie"><button type="submit">Hľadať</button></form>';
      h+='<div class="pmb-extra"><div class="pmb-h">Obľúbené značky</div><div>';
      BRANDS.forEach(function(b){h+='<button class="pmb-chip" type="button" data-q="'+esc(b)+'">'+esc(b)+'</button>';});
      h+='</div>';
      var rec=getRecent();
      if(rec.length){
        h+='<div class="pmb-h">Naposledy hľadané <button class="pmb-clear" type="button" data-clear="1">Vymazať</button></div>';
        rec.forEach(function(r){h+='<button class="pmb-rec" type="button" data-q="'+esc(r)+'">'+ic('history')+esc(r)+'</button>';});
      }
      h+='</div></div>';
      sh.innerHTML=h;
      if(nat){home=nat.parentNode;homeNext=nat.nextSibling;sh.querySelector('#pmb-slot').appendChild(nat);}
    }
    function searchInput(){return sh.querySelector('.js-search-input')||sh.querySelector('input[type=search]');}
    function fillSearch(q){
      var i=searchInput();if(!i){go(q);return;}
      i.value=q;i.focus();
      ['input','keyup'].forEach(function(t){i.dispatchEvent(new Event(t,{bubbles:true}));});
      toggleExtra();
    }
    function toggleExtra(){var i=searchInput(),x=sh.querySelector('.pmb-extra');if(x)x.classList.toggle('hide',!!(i&&i.value.trim()));}

    var cur='';
    function open(k){
      if(cur===k){close();return;}
      releaseSearch();
      if(k==='menu')buildMenu();else buildSearch();
      cur=k;setActive(k);
      ov.classList.add('open');sh.classList.add('open');
      document.documentElement.style.overflow='hidden';
      bar.classList.remove('pmb-hide');document.body.classList.remove('pmb-hid');
      if(k==='search'){setTimeout(function(){var i=searchInput();if(i)i.focus();},280);}
    }
    function close(){
      cur='';setActive(pageKey);
      releaseSearch();
      ov.classList.remove('open');sh.classList.remove('open');
      document.documentElement.style.overflow='';
    }

    bar.addEventListener('click',function(e){
      var b=e.target.closest('[data-k]');if(!b)return;
      var k=b.getAttribute('data-k');
      if(k==='menu'||k==='search'){e.preventDefault();open(k);}
      else if(cur){close();}
    });
    ov.addEventListener('click',close);
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&cur)close();});
    sh.addEventListener('click',function(e){
      if(e.target.closest('.pmb-x')){close();return;}
      var c=e.target.closest('button.pmb-cat');
      if(c){var s=c.nextElementSibling,o=!s.classList.contains('open');s.classList.toggle('open',o);c.classList.toggle('open',o);c.setAttribute('aria-expanded',o);return;}
      var q=e.target.closest('[data-q]');if(q){fillSearch(q.getAttribute('data-q'));return;}
      if(e.target.closest('[data-clear]')){try{localStorage.removeItem('pmb_recent');}catch(x){}releaseSearch();buildSearch();return;}
    });
    sh.addEventListener('submit',function(e){
      var i=searchInput(),v=i&&i.value.trim();if(v)saveRecent(v);
      if(!nat){e.preventDefault();go(v);}
    });
    sh.addEventListener('input',toggleExtra);

    /* ---- Počet kusov a suma košíka ---- */
    var cartA=document.querySelector('a.cart-count');
    function syncCart(){
      var n='',p='';
      if(cartA){
        var i=cartA.querySelector('i');if(i)n=i.textContent.replace(/\D/g,'');
        var pe=cartA.querySelector('.cart-price');if(pe)p=pe.textContent.replace(/\s+/g,' ').trim();
      }
      var has=n&&+n>0;
      bar.querySelector('.pmb-badge').textContent=has?n:'';
      bar.querySelector('.pmb-cl').textContent=has&&p&&!/pr[aá]zdn/i.test(p)?p:'Košík';
    }
    syncCart();
    if(cartA&&window.MutationObserver){new MutationObserver(syncCart).observe(cartA,{childList:true,subtree:true,characterData:true});}
    document.addEventListener('ShoptetCartUpdated',syncCart);
    document.addEventListener('ShoptetDOMCartCountUpdated',syncCart);

    /* ---- Cookie lišta: lišta sa posunie nad ňu ---- */
    function syncCookie(){
      var c=document.querySelector('.siteCookies'),h=0;
      if(c&&c.offsetHeight>0&&getComputedStyle(c).position==='fixed'){
        var r=c.getBoundingClientRect();
        if(r.bottom>=window.innerHeight-4)h=Math.round(c.offsetHeight);
      }
      document.documentElement.style.setProperty('--pmb-b',h+'px');
    }
    syncCookie();
    setInterval(syncCookie,600);
    document.addEventListener('click',function(){setTimeout(syncCookie,150);setTimeout(syncCookie,700);},true);
    window.addEventListener('resize',syncCookie);

    /* ---- Skrytie pri skrolovaní nadol ---- */
    if(HIDE_ON_SCROLL){
      var last=window.pageYOffset,tick=false;
      window.addEventListener('scroll',function(){
        if(tick||cur)return;tick=true;
        requestAnimationFrame(function(){
          var y=window.pageYOffset,d=y-last;
          if(Math.abs(d)>8){var hd=d>0&&y>120;bar.classList.toggle('pmb-hide',hd);document.body.classList.toggle('pmb-hid',hd);last=y;}
          tick=false;
        });
      },{passive:true});
    }
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
