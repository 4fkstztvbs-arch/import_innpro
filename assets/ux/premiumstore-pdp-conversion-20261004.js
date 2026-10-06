/*
 * PremiumStore PDP: konverzné úpravy z auditu 4. 10. 2026 (audit/produkty-pdp-audit-baymard-2026-10-03.md).
 *
 * 1) Cookie lišta na mobile je kompaktnejšia a lepkavý panel "Do košíka" sa zobrazí NAD ňou
 *    (predtým ho lišta s vyšším z-indexom úplne zakrývala).
 * 2) Detail produktu: kompaktnejší blok nad zhybom (miniatúry, dostupnosť), prázdne hviezdičky
 *    "Neohodnotené" sa skryjú, hviezdy sa ukážu hneď ako produkt hodnotenie má.
 * 3) Riadok "Doprava od 4,90 €, doručenie od 2 dní" je hneď pod dostupnosťou (nad cenou a tlačidlom
 *    "Do košíka") a nahrádza natívny odkaz "Možnosti doručenia". Je klikateľný (zvýraznený rámik,
 *    šípka) a po kliknutí otvorí natívne okno s možnosťami doručenia. Pod tlačidlom ostáva
 *    presunutý natívny blok istôt (Rýchle doručenie, Garancia, Vrátenie).
 *    Okno "Možnosti doručenia" má prepracovaný vzhľad (desktop aj mobil).
 * 5) Desktop (od 992 px): hlavný obrázok sa zmenší presne natoľko, aby miniatúry končili v rovnakej
 *    výške ako pravý box s cenou (popis produktu sa tým posunie vyššie). Mobil sa nemení.
 * 4) Rozšírené popisy (.ps-product): nadpisy v úvodnom bloku s nízkym kontrastom dostanú
 *    čitateľnú farbu.
 *
 * Samostatný súbor, nemení premiumstore-cro.js ani buybar. Rollback = odstrániť jeden <script> odkaz.
 * V Shoptete: <script src="https://4fkstztvbs-arch.github.io/import_innpro/assets/ux/premiumstore-pdp-conversion-20261004.js?v=7"></script>
 * v pätičke za premiumstore-pdp-mobile-buybar.js.
 */
(function () {
  'use strict';
  if (window.__psPdpConversion) return;
  window.__psPdpConversion = true;

  // Najnižšia cena dopravy (potvrdil Martin 4. 10. 2026). Doprava zadarmo od sumy zatiaľ nie je.
  var SHIP_FROM = '4,90 €';
  var SHIP_FROM_TV = '9,90 €';
  var DELIVERY_FROM = 'od 2 dní';

  var CSS = [
    /* --- 1) Cookie lišta (mobil): text na celú šírku, Nastavenie + dve tlačidlá v jednom riadku --- */
    '@media (max-width:767px){',
    '.siteCookies .siteCookies__form{display:grid!important;grid-template-columns:auto 1fr 1fr;gap:6px 8px;align-items:center;padding:10px 12px!important;}',
    '.siteCookies .siteCookies__content,.siteCookies .siteCookies__buttonWrap{display:contents!important;}',
    '.siteCookies .siteCookies__text{grid-column:1/-1;font-size:12px!important;line-height:1.35!important;margin:0!important;}',
    '.siteCookies .siteCookies__links{margin:0!important;padding:0!important;}',
    '.siteCookies .siteCookies__link{padding:4px 2px!important;font-size:13px!important;}',
    '.siteCookies .siteCookies__button{height:44px!important;min-height:44px!important;font-size:14px!important;padding:0 8px!important;margin:0!important;}',
    '}',
    /* Lepkavý panel sedí nad cookie lištou; schovaný panel nesmie presvitať ani chytať kliknutia. */
    '.ps-buybar{bottom:var(--ps-cookie-h,0px)!important;transition:transform .25s ease,bottom .2s ease,visibility 0s linear .25s;}',
    '.ps-buybar:not(.is-visible){visibility:hidden;pointer-events:none;}',
    '.ps-buybar.is-visible,.ps-buybar.ps-covered{transition:transform .25s ease,bottom .2s ease,visibility 0s;}',
    /* Natívne tlačidlo je pod cookie lištou (aj keď je technicky vo viewporte): panel sa ukáže. */
    '.ps-buybar.ps-covered{visibility:visible;pointer-events:auto;transform:translateY(0);}',

    /* --- 2) Kompaktný blok nad zhybom --- */
    'body.type-detail .stars-wrapper.ps-no-rating{display:none!important;}',
    '@media (max-width:767px){',
    'body.type-detail .p-thumbnails-wrapper,body.type-detail .p-thumbnails-wrapper .row{margin-top:2px!important;margin-bottom:2px!important;}',
    'body.type-detail .p-image-wrapper>.row{margin-top:0!important;margin-bottom:0!important;}',
    'body.type-detail .p-thumbnails.p-thumbnails-horizontal{max-height:64px;overflow:hidden;}',
    'body.type-detail .p-thumbnails-wrapper .p-thumbnail img{max-height:56px;width:auto;}',
    'body.type-detail .p-data-wrapper .shipping-options-layout th,body.type-detail .p-data-wrapper .shipping-options-layout td{padding-top:2px!important;padding-bottom:2px!important;line-height:1.3;}',
    'body.type-detail .p-data-wrapper .shipping-options-layout{margin-bottom:6px!important;}',
    '}',

    /* --- 3) Doprava a istoty pod tlačidlom --- */
    'a.ps-ship{display:flex;align-items:center;gap:10px;width:100%;box-sizing:border-box;min-height:48px;margin:8px 0 12px;padding:10px 12px;background:#f2f8f5;border:1.5px solid #167450;border-radius:10px;font-size:14px;line-height:1.3;color:#1b3a2c!important;text-decoration:none!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease;-webkit-tap-highlight-color:transparent;}',
    'a.ps-ship:hover{background:#e3f1ea;box-shadow:0 2px 8px rgba(22,116,80,.18);}',
    'a.ps-ship:active{background:#d6eadf;}',
    'a.ps-ship:focus-visible{outline:3px solid #145e41;outline-offset:2px;}',
    '.ps-ship__icon{flex:0 0 22px;width:22px;height:22px;fill:none;stroke:#167450;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;}',
    '.ps-ship__text{flex:1 1 auto;min-width:0;}',
    '.ps-ship__text strong{font-weight:700;white-space:nowrap;}',
    '.ps-ship__more{flex:0 0 auto;display:inline-flex;align-items:center;gap:2px;font-size:13px;font-weight:600;color:#167450;white-space:nowrap;}',
    '.ps-ship__more svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;transition:transform .15s ease;}',
    'a.ps-ship:hover .ps-ship__more{text-decoration:underline;}',
    'a.ps-ship:hover .ps-ship__more svg{transform:translateX(3px);}',
    '@media (max-width:767px){a.ps-ship{min-height:52px;padding:10px 12px;}.ps-ship__more span{display:none;}.ps-ship__more svg{width:22px;height:22px;}}',
    '@media (max-width:359px){.ps-ship__text strong{white-space:normal;}}',
    'body.type-detail .shipping-options-layout tr.ps-ship-native{display:none!important;}',
    'a.ps-ship.ps-ship--free,a.ps-ship.ps-ship--free:visited{background:#167450!important;color:#fff!important;}a.ps-ship.ps-ship--free:hover,a.ps-ship.ps-ship--free:active{background:#145e41!important;color:#fff!important;}a.ps-ship--free .ps-ship__text,a.ps-ship--free .ps-ship__text strong,a.ps-ship--free .ps-ship__more{color:#fff!important;}a.ps-ship--free .ps-ship__icon{stroke:#fff;}',

    /* --- Okno "Možnosti doručenia" --- */
    '.shipping-options-popup{padding:32px 32px 24px!important;max-width:560px;margin:0 auto;box-sizing:border-box;}',
    '.shipping-options-popup h1{text-align:left!important;font-size:22px!important;line-height:1.25!important;margin:0 0 6px!important;}',
    '.shipping-options-popup>p{margin:0 0 14px!important;font-size:13.5px!important;line-height:1.45!important;color:#5b6670!important;}',
    '.shipping-options-popup .shipping-row{display:grid!important;grid-template-columns:64px minmax(0,1fr) auto;align-items:center!important;column-gap:12px!important;padding:14px 0!important;border-top:1px solid #e3e9ee!important;}',
    '.shipping-options-popup .shipping-row .payment-logo{grid-column:1;grid-row:1;order:0!important;margin:0!important;display:flex;align-items:center;justify-content:center;width:64px;height:40px;}',
    '.shipping-options-popup .shipping-row .payment-logo img{max-width:64px!important;max-height:34px!important;width:auto;height:auto;object-fit:contain;}',
    '.shipping-options-popup .shipping-row .payment-info{grid-column:2;grid-row:1;width:auto!important;max-width:none!important;flex:none!important;display:flex;align-items:center;gap:6px;min-width:0;}',
    '.shipping-options-popup .shipping-row:not(:has(.payment-logo)) .payment-info{grid-column:1/3;}',
    '.shipping-options-popup .shipping-row .payment-info b{display:inline!important;width:auto!important;font-weight:600!important;letter-spacing:0!important;font-size:15px;line-height:1.3;overflow-wrap:normal;word-break:normal;}',
    '.shipping-options-popup .question-tooltip{flex:0 0 auto;display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:50%;background:#e8eef2;color:#4a5560;font-size:11px;font-weight:700;cursor:help;}',
    '.shipping-options-popup .shipping-row .payment-shipping-price{grid-column:3;grid-row:1;font-weight:700!important;letter-spacing:0!important;font-size:16px;color:#17283c!important;white-space:nowrap;font-variant-numeric:tabular-nums;text-align:right;}',
    '.shipping-options-popup .shipping-row .payment-shipping-price.for-free{color:#167450!important;}',
    '@media (max-width:499px){.shipping-options-popup{padding:20px 14px 14px!important;}.shipping-options-popup h1{font-size:19px!important;}.shipping-options-popup .shipping-row{grid-template-columns:48px minmax(0,1fr) auto;column-gap:10px!important;padding:12px 0!important;}.shipping-options-popup .shipping-row .payment-logo{width:48px;}.shipping-options-popup .shipping-row .payment-logo img{max-width:48px!important;}.shipping-options-popup .shipping-row .payment-info b{font-size:14px;}.shipping-options-popup .shipping-row .payment-shipping-price{font-size:15px;}}',
    'body.type-detail .benefitBanner.ps-benefit-moved{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr));gap:4px 16px;align-items:start;margin:10px 0 0!important;padding:0!important;width:auto!important;}',
    'body.type-detail .benefitBanner.ps-benefit-moved .benefitBanner__item{display:flex!important;align-items:flex-start!important;justify-content:flex-start!important;text-align:left!important;gap:10px!important;margin:0!important;padding:6px 0!important;width:auto!important;flex:none!important;min-width:0;}',
    'body.type-detail .benefitBanner.ps-benefit-moved .benefitBanner__picture{flex:0 0 22px!important;width:22px!important;min-width:22px!important;max-width:22px!important;height:22px!important;margin:1px 0 0!important;padding:0!important;}',
    'body.type-detail .benefitBanner.ps-benefit-moved .benefitBanner__img{width:22px!important;height:22px!important;margin:0!important;}',
    'body.type-detail .benefitBanner.ps-benefit-moved .benefitBanner__content{flex:1 1 auto;min-width:0;margin:0!important;padding:0!important;text-align:left!important;}',
    'body.type-detail .benefitBanner.ps-benefit-moved .benefitBanner__title{font-size:13px!important;line-height:1.25!important;display:block;width:auto!important;text-align:left!important;}',
    'body.type-detail .benefitBanner.ps-benefit-moved .benefitBanner__data{font-size:12px!important;line-height:1.3!important;color:#555;text-align:left!important;}',
    '@media (max-width:420px){body.type-detail .benefitBanner.ps-benefit-moved{gap:2px 10px;}body.type-detail .benefitBanner.ps-benefit-moved .benefitBanner__item{gap:8px!important;}body.type-detail .benefitBanner.ps-benefit-moved .benefitBanner__item:nth-child(3){grid-column:1/-1;}body.type-detail .benefitBanner.ps-benefit-moved .benefitBanner__title{font-size:12.5px!important;}body.type-detail .benefitBanner.ps-benefit-moved .benefitBanner__data{font-size:11.5px!important;}}',
    'body.type-detail .benefitBanner.ps-benefit-moved .ps-benefit-dup{display:none!important;}',

    /* --- 4) Rozšírený popis: zalamovanie čísiel/faktov --- */
    '.ps-product .ps-facts span{overflow-wrap:break-word;hyphens:auto;-webkit-hyphens:auto;}',
    '@media (max-width:767px){.ps-product .ps-facts strong{font-size:clamp(18px,5.4vw,24px);}.ps-product .ps-facts span{font-size:14px;}}',
    /* --- 6) Štítok "Doprava zadarmo" (výpisy, detail): zaoblený štítok namiesto kruhu 66 px. Bundle nastavuje
          .flags-extra .flag na 13 px !important, text sa v kruhu lámal a orezával. --- */
    '.flags-extra .flag.flag-freeshipping{display:inline-flex!important;flex-direction:row!important;align-items:center;justify-content:center;width:auto!important;height:auto!important;min-width:0!important;min-height:0!important;padding:6px 12px!important;margin:0 8px 8px 0!important;border-radius:999px!important;background:#167450!important;color:#fff!important;font-size:12px!important;font-weight:700!important;line-height:1.2!important;white-space:nowrap!important;word-break:normal!important;hyphens:none!important;box-shadow:0 1px 4px rgba(0,0,0,.18);}',
    '.flags-extra .flag.flag-freeshipping .icon-van{display:none!important;}',
    '.p-image-wrapper .flags-extra .flag.flag-freeshipping{padding:8px 16px!important;font-size:14px!important;min-width:0!important;min-height:0!important;}',
    '.columns-mobile-2 .products-block>div .flags.flags-extra .flag.flag-freeshipping{min-width:0!important;flex:0 0 auto!important;margin:0 0 6px 6px!important;}',
    '.columns-mobile-2 .products-block>div .flags.flags-extra{display:flex!important;justify-content:flex-end;width:100%;}'
  ].join('');

  function addStyle() {
    if (document.getElementById('ps-pdp-conv-css')) return;
    var s = document.createElement('style');
    s.id = 'ps-pdp-conv-css';
    s.appendChild(document.createTextNode(CSS));
    document.head.appendChild(s);
  }

  /* --- 1) výška cookie lišty -> CSS premenná pre lepkavý panel --- */
  function measureCookie() {
    var el = document.querySelector('.siteCookies');
    var h = 0;
    if (el && el.offsetHeight > 0 && getComputedStyle(el).position === 'fixed') {
      var r = el.getBoundingClientRect();
      // Iba lišta prilepená k spodku okna.
      if (r.bottom >= window.innerHeight - 2) h = Math.round(r.height);
    }
    document.documentElement.style.setProperty('--ps-cookie-h', h + 'px');
    watchCovered(h);
  }

  /* Pri viditeľnej cookie lište sleduje, či je natívne tlačidlo celé nad ňou; ak nie, ukáže lepkavý panel. */
  var coveredIO = null, coveredH = -1;
  function watchCovered(h) {
    if (h === coveredH) return;
    coveredH = h;
    if (coveredIO) { coveredIO.disconnect(); coveredIO = null; }
    var bar = document.querySelector('.ps-buybar');
    var form = document.getElementById('product-detail-form');
    var btn = form && (form.querySelector('[data-testid="buttonAddToCart"]') || form.querySelector('.add-to-cart-button'));
    if (!bar || !btn || !('IntersectionObserver' in window)) return;
    if (!h) { bar.classList.remove('ps-covered'); return; }
    coveredIO = new IntersectionObserver(function (entries) {
      bar.classList.toggle('ps-covered', entries[0].intersectionRatio < 0.99);
    }, { threshold: [0, 0.25, 0.5, 0.75, 0.99, 1], rootMargin: '0px 0px -' + h + 'px 0px' });
    coveredIO.observe(btn);
  }

  function watchCookie() {
    measureCookie();
    window.addEventListener('resize', measureCookie);
    window.addEventListener('load', function () { coveredH = -1; measureCookie(); });
    if (window.MutationObserver) {
      var mo = new MutationObserver(measureCookie);
      mo.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class', 'style'] });
    }
    if (window.ResizeObserver) {
      var el = document.querySelector('.siteCookies');
      if (el) new ResizeObserver(measureCookie).observe(el);
    }
  }

  /* --- 2) prázdne hviezdičky --- */
  function hideEmptyRating() {
    var wraps = document.querySelectorAll('.stars-wrapper');
    for (var i = 0; i < wraps.length; i++) {
      if (/neohodnoten/i.test(wraps[i].textContent) && !/^[1-5]/.test(wraps[i].textContent.trim())) {
        wraps[i].classList.add('ps-no-rating');
      }
    }
  }

  /* --- 3) riadok dopravy (klikateľný, nahrádza "Možnosti doručenia") + presun istôt --- */
  function addShipping(form) {
    if (document.querySelector('.ps-ship')) return;
    var block = form.querySelector('.p-to-cart-block');
    if (!block) return;
    var nativeLink = form.querySelector('a.shipping-options');
    // Televízory idú atypickou dopravou (SPS/Geis) - od 9,90 €.
    var crumbs = document.querySelector('.breadcrumbs, #navigation, [itemtype*="BreadcrumbList"]');
    var shipFrom = crumbs && /Telev[ií]zor/i.test(crumbs.textContent) ? SHIP_FROM_TV : SHIP_FROM;
    var table = form.querySelector('table.shipping-options-layout');
    // Produkt s príznakom "Doprava zadarmo" v Shoptete má natívny štítok .flag-freeshipping
    // (zadarmo je len Packeta na výdajné miesto / do Z-BOXu, ostatné dopravy ostávajú platené).
    var isFree = !!document.querySelector('.p-image .flag-freeshipping');

    var ship = document.createElement('a');
    ship.className = 'ps-ship' + (isFree ? ' ps-ship--free' : '');
    ship.setAttribute('href', nativeLink ? nativeLink.getAttribute('href') : '#');
    ship.setAttribute('aria-haspopup', 'dialog');
    var shipLabel = isFree ? 'Doprava zadarmo cez Packetu na výdajné miesto, doručenie ' + DELIVERY_FROM : 'Doprava od ' + shipFrom + ', doručenie ' + DELIVERY_FROM;
    ship.setAttribute('aria-label', shipLabel + '. Zobraziť možnosti doručenia');
    ship.innerHTML =
      '<svg class="ps-ship__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h11v10H3zM14 9h4l3 3v4h-7z"/><circle cx="7" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/></svg>' +
      '<span class="ps-ship__text">' + (isFree
        ? '<strong>Doprava zadarmo</strong> na výdajné miesto Packety, doručenie ' + DELIVERY_FROM
        : '<strong>Doprava od ' + shipFrom + '</strong>, doručenie ' + DELIVERY_FROM) + '</span>' +
      '<span class="ps-ship__more"><span>Možnosti</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg></span>';

    // Klik otvorí natívne okno Shoptetu; ak by odkaz chýbal, ostáva obyčajný odkaz.
    ship.addEventListener('click', function (e) {
      var nl = form.querySelector('a.shipping-options');
      if (nl) { e.preventDefault(); nl.click(); }
    });

    // Vyššie: hneď pod tabuľkou s dostupnosťou (nad cenou a tlačidlom "Do košíka").
    if (table && table.parentNode) {
      table.parentNode.insertBefore(ship, table.nextSibling);
      var row = nativeLink && nativeLink.closest ? nativeLink.closest('tr') : null;
      if (row) row.classList.add('ps-ship-native');
    } else {
      block.parentNode.insertBefore(ship, block);
    }

    var benefit = document.querySelector('.benefitBanner.position--benefitProduct') || document.querySelector('.benefitBanner');
    if (benefit && !benefit.classList.contains('ps-benefit-moved')) {
      var items = benefit.querySelectorAll('.benefitBanner__item');
      for (var i = 0; i < items.length; i++) {
        var t = items[i].querySelector('.benefitBanner__title');
        if (t && /doru[čc]enie\s+u[žz]\s+od/i.test(t.textContent)) items[i].classList.add('ps-benefit-dup');
      }
      benefit.classList.add('ps-benefit-moved');
      block.parentNode.insertBefore(benefit, block.nextSibling);
    }
  }

  /* --- 4) kontrast nadpisov v úvode rozšíreného popisu --- */
  function parseRgb(c) {
    var m = /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/.exec(c || '');
    return m ? { r: +m[1], g: +m[2], b: +m[3], a: m[4] === undefined ? 1 : +m[4] } : null;
  }
  function lum(c) {
    var f = function (v) { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
    return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b);
  }
  function ratio(a, b) {
    var l1 = lum(a), l2 = lum(b);
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  }
  function bgOf(el) {
    while (el && el.nodeType === 1) {
      var c = parseRgb(getComputedStyle(el).backgroundColor);
      if (c && c.a > 0.5) return c;
      el = el.parentElement;
    }
    return { r: 255, g: 255, b: 255, a: 1 };
  }
  function fixHeroContrast() {
    var els = document.querySelectorAll('.ps-product .ps-intro h1,.ps-product .ps-intro h2,.ps-product .ps-intro h3');
    for (var i = 0; i < els.length; i++) {
      var fg = parseRgb(getComputedStyle(els[i]).color);
      if (!fg) continue;
      var bg = bgOf(els[i]);
      if (ratio(fg, bg) < 3) {
        var white = { r: 255, g: 255, b: 255 }, dark = { r: 17, g: 17, b: 17 };
        els[i].style.setProperty('color', ratio(white, bg) >= ratio(dark, bg) ? '#fff' : '#111', 'important');
      }
    }
  }

  /* --- 5) desktop: obrázok končí v rovnakej výške ako pravý box --- */
  var MIN_IMG_H = 340;
  function alignGallery() {
    var wrap = document.querySelector('.p-image-wrapper');
    var data = document.querySelector('.p-data-wrapper');
    var holder = wrap && wrap.querySelector('.p-image');
    var img = holder && holder.querySelector('img');
    if (!wrap || !data || !img) return;
    img.style.removeProperty('max-height');
    holder.style.removeProperty('min-height');
    if (window.innerWidth < 992) return;
    var imgH = img.offsetHeight;
    if (!imgH) return;
    var extra = wrap.getBoundingClientRect().bottom - data.getBoundingClientRect().bottom;
    if (extra > 4) {
      var target = Math.max(MIN_IMG_H, Math.floor(imgH - extra));
      if (target < imgH) {
        // Shoptet drží kontajner na pôvodnej minimálnej výške, preto ju uvoľníme.
        holder.style.setProperty('min-height', '0', 'important');
        img.style.setProperty('max-height', target + 'px', 'important');
        img.style.setProperty('width', 'auto', 'important');
        img.style.setProperty('max-width', '100%', 'important');
        img.style.setProperty('margin', '0 auto', 'important');
        img.style.setProperty('display', 'block', 'important');
      }
    }
  }
  var galleryTimer = null;
  function scheduleGallery() {
    clearTimeout(galleryTimer);
    galleryTimer = setTimeout(alignGallery, 80);
  }
  function watchGallery() {
    alignGallery();
    window.addEventListener('resize', scheduleGallery);
    window.addEventListener('load', alignGallery);
    var img = document.querySelector('.p-image-wrapper .p-image img');
    if (img && !img.complete) img.addEventListener('load', alignGallery);
    var data = document.querySelector('.p-data-wrapper');
    if (data && window.ResizeObserver) new ResizeObserver(scheduleGallery).observe(data);
    // Zmena hlavného obrázka v galérii (iný pomer strán).
    var holder = document.querySelector('.p-image-wrapper .p-image');
    if (holder && window.MutationObserver) {
      new MutationObserver(scheduleGallery).observe(holder, { childList: true, subtree: true, attributes: true, attributeFilter: ['src'] });
    }
  }

  function init() {
    addStyle();
    watchCookie();
    var form = document.getElementById('product-detail-form');
    if (!form) return;
    hideEmptyRating();
    addShipping(form);
    fixHeroContrast();
    watchGallery();
    // Shoptet dokresľuje časti stránky neskôr (lazy bloky, varianty).
    window.addEventListener('load', function () {
      hideEmptyRating();
      addShipping(form);
      fixHeroContrast();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
