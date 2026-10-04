/*
 * PremiumStore PDP: konverzné úpravy z auditu 4. 10. 2026 (audit/produkty-pdp-audit-baymard-2026-10-03.md).
 *
 * 1) Cookie lišta na mobile je kompaktnejšia a lepkavý panel "Do košíka" sa zobrazí NAD ňou
 *    (predtým ho lišta s vyšším z-indexom úplne zakrývala).
 * 2) Detail produktu: kompaktnejší blok nad zhybom (miniatúry, dostupnosť), prázdne hviezdičky
 *    "Neohodnotené" sa skryjú, hviezdy sa ukážu hneď ako produkt hodnotenie má.
 * 3) Pod tlačidlom "Do košíka": riadok s cenou dopravy a termínom, pod ním presunutý natívny
 *    blok istôt (Rýchle doručenie, Garancia, Vrátenie).
 * 4) Rozšírené popisy (.ps-product): nadpisy v úvodnom bloku s nízkym kontrastom dostanú
 *    čitateľnú farbu.
 *
 * Samostatný súbor, nemení premiumstore-cro.js ani buybar. Rollback = odstrániť jeden <script> odkaz.
 * V Shoptete: <script src="https://4fkstztvbs-arch.github.io/import_innpro/assets/ux/premiumstore-pdp-conversion-20261004.js?v=1"></script>
 * v pätičke za premiumstore-pdp-mobile-buybar.js.
 */
(function () {
  'use strict';
  if (window.__psPdpConversion) return;
  window.__psPdpConversion = true;

  // Najnižšia cena dopravy (potvrdil Martin 4. 10. 2026). Doprava zadarmo od sumy zatiaľ nie je.
  var SHIP_FROM = '4,90 €';
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
    '.ps-ship{display:flex;align-items:center;gap:8px;margin:10px 0 0;padding:8px 10px;background:#f2f8f5;border-radius:8px;font-size:14px;line-height:1.3;color:#1b3a2c;}',
    '.ps-ship svg{flex:0 0 20px;width:20px;height:20px;fill:none;stroke:#167450;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;}',
    '.ps-ship strong{font-weight:700;white-space:nowrap;}',
    'body.type-detail .benefitBanner.ps-benefit-moved{display:grid!important;grid-template-columns:1fr 1fr;gap:6px 10px;margin:10px 0 0!important;padding:0!important;width:auto!important;}',
    'body.type-detail .benefitBanner.ps-benefit-moved .benefitBanner__item{display:flex!important;align-items:center;gap:8px!important;margin:0!important;padding:4px 0!important;width:auto!important;flex:none!important;min-width:0;}',
    'body.type-detail .benefitBanner.ps-benefit-moved .benefitBanner__picture{flex:0 0 22px;width:22px!important;height:22px!important;margin:0!important;}',
    'body.type-detail .benefitBanner.ps-benefit-moved .benefitBanner__img{width:22px!important;height:22px!important;}',
    'body.type-detail .benefitBanner.ps-benefit-moved .benefitBanner__title{font-size:12.5px!important;line-height:1.2!important;display:block;}',
    'body.type-detail .benefitBanner.ps-benefit-moved .benefitBanner__data{font-size:11.5px!important;line-height:1.2!important;color:#555;}',
    'body.type-detail .benefitBanner.ps-benefit-moved .ps-benefit-dup{display:none!important;}',

    /* --- 4) Rozšírený popis: zalamovanie čísiel/faktov --- */
    '.ps-product .ps-facts span{overflow-wrap:break-word;hyphens:auto;-webkit-hyphens:auto;}',
    '@media (max-width:767px){.ps-product .ps-facts strong{font-size:clamp(18px,5.4vw,24px);}.ps-product .ps-facts span{font-size:14px;}}'
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

  /* --- 3) riadok dopravy + presun istôt --- */
  function addShipping(form) {
    if (document.querySelector('.ps-ship')) return;
    var block = form.querySelector('.p-to-cart-block');
    if (!block) return;
    var ship = document.createElement('div');
    ship.className = 'ps-ship';
    ship.innerHTML =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h11v10H3zM14 9h4l3 3v4h-7z"/><circle cx="7" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/></svg>' +
      '<span><strong>Doprava od ' + SHIP_FROM + '</strong>, doručenie ' + DELIVERY_FROM + '</span>';
    block.parentNode.insertBefore(ship, block.nextSibling);

    var benefit = document.querySelector('.benefitBanner.position--benefitProduct') || document.querySelector('.benefitBanner');
    if (benefit && !benefit.classList.contains('ps-benefit-moved')) {
      var items = benefit.querySelectorAll('.benefitBanner__item');
      for (var i = 0; i < items.length; i++) {
        var t = items[i].querySelector('.benefitBanner__title');
        if (t && /doru[čc]enie\s+u[žz]\s+od/i.test(t.textContent)) items[i].classList.add('ps-benefit-dup');
      }
      benefit.classList.add('ps-benefit-moved');
      ship.parentNode.insertBefore(benefit, ship.nextSibling);
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

  function init() {
    addStyle();
    watchCookie();
    var form = document.getElementById('product-detail-form');
    if (!form) return;
    hideEmptyRating();
    addShipping(form);
    fixHeroContrast();
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
