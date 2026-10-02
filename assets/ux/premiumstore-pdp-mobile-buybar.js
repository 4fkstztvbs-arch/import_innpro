/*
 * PremiumStore PDP: mobilná sticky lišta "Do košíka" + kompaktnejšia galéria.
 *
 * Samostatný súbor (CSS sa vloží zo skriptu), takže v Shoptete stačí jeden
 * <script> odkaz za premiumstore-cro.js a pdp-final.js. Nič iné sa nemení.
 * Odstránenie = zmazať tento jeden odkaz.
 *
 * Lišta sa ukáže vždy, keď natívne tlačidlo "Do košíka" nie je vo viewporte
 * (pod zhybom aj po prescrollovaní), len na mobile a tablete.
 */
(function () {
  'use strict';
  if (window.__psPdpBuyBar) return;
  window.__psPdpBuyBar = true;

  var CSS = [
    '.ps-buybar{position:fixed;left:0;right:0;bottom:0;z-index:999;display:flex;align-items:center;gap:12px;',
    'padding:10px 16px calc(10px + env(safe-area-inset-bottom,0px));background:#fff;border-top:1px solid #e0e0e0;',
    'box-shadow:0 -4px 12px rgba(0,0,0,.08);transform:translateY(110%);transition:transform .25s ease;}',
    '.ps-buybar.is-visible{transform:translateY(0);}',
    '.ps-buybar__title{flex:1 1 auto;min-width:0;font-size:13px;line-height:1.25;color:#444;display:-webkit-box;',
    '-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}',
    '.ps-buybar__price{flex:0 0 auto;font-weight:700;font-size:18px;white-space:nowrap;color:#111;}',
    '.ps-buybar__btn{flex:0 0 auto;background:#167450;color:#fff;border:0;border-radius:999px;padding:12px 22px;',
    'font-weight:600;font-size:16px;cursor:pointer;}',
    '.ps-buybar__btn:active{background:#145e41;}',
    '@media (min-width:1024px){.ps-buybar{display:none;}}',
    /* Kompaktnejšia galéria na mobile: tlačidlo Do košíka sa dostane vyššie. */
    '@media (max-width:767px){',
    'body.type-detail .p-image-wrapper .p-main-image img,body.type-detail .p-image-wrapper .p-image img{',
    'max-height:42vh;width:auto;max-width:100%;object-fit:contain;margin-left:auto;margin-right:auto;}',
    'body.type-detail .p-thumbnails-wrapper .p-thumbnail img{max-height:56px;width:auto;}',
    'body.type-detail .p-thumbnails-wrapper{margin-top:4px;margin-bottom:4px;}',
    '}'
  ].join('');

  function addStyle() {
    if (document.getElementById('ps-buybar-css')) return;
    var s = document.createElement('style');
    s.id = 'ps-buybar-css';
    s.appendChild(document.createTextNode(CSS));
    document.head.appendChild(s);
  }

  function init() {
    var form = document.getElementById('product-detail-form');
    if (!form || document.querySelector('.ps-buybar')) return;
    var btn = form.querySelector('[data-testid="buttonAddToCart"]') || form.querySelector('.add-to-cart-button');
    if (!btn) return;

    addStyle();

    var nameMeta = document.querySelector('.p-detail meta[itemprop="name"]');
    var title = nameMeta ? (nameMeta.getAttribute('content') || '') : '';
    if (!title) {
      var h1 = document.querySelector('h1');
      title = h1 ? h1.textContent.trim() : '';
    }

    var bar = document.createElement('div');
    bar.className = 'ps-buybar';
    var t = document.createElement('span');
    t.className = 'ps-buybar__title';
    t.textContent = title;
    var p = document.createElement('span');
    p.className = 'ps-buybar__price';
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'ps-buybar__btn';
    b.textContent = 'Do košíka';
    bar.appendChild(t);
    bar.appendChild(p);
    bar.appendChild(b);
    document.body.appendChild(bar);

    function readPrice() {
      var el = form.querySelector('.price-final-holder');
      var txt = el ? el.textContent.replace(/\s+/g, ' ').trim() : '';
      if (p.textContent !== txt) p.textContent = txt;
    }
    readPrice();
    if (window.MutationObserver) {
      new MutationObserver(readPrice).observe(form, { childList: true, characterData: true, subtree: true });
    }

    function needsVariant() {
      var sel = form.querySelectorAll('select');
      for (var i = 0; i < sel.length; i++) {
        if (sel[i].offsetParent !== null && !sel[i].value) return true;
      }
      return false;
    }

    b.addEventListener('click', function () {
      if (needsVariant()) {
        btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
      btn.click();
    });

    function setVisible(visible) {
      bar.classList.toggle('is-visible', visible);
    }

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        setVisible(!entries[0].isIntersecting);
      }, { threshold: 0 }).observe(btn);
    } else {
      var onScroll = function () {
        var r = btn.getBoundingClientRect();
        setVisible(r.bottom < 0 || r.top > window.innerHeight);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
