/* PremiumStore – objednávka: lepkavá lišta s CTA a zhrnutie hore (mobil). */
(function () {
  'use strict';
  if (!document.body || !document.body.classList.contains('ordering-process')) return;
  var mq = window.matchMedia('(max-width: 767px)');
  var CTA_SEL = '#submit-order, #orderFormButton, #continue-order-button';

  var css = '' +
    '#ps-bar{display:none;position:fixed;left:0;right:0;bottom:0;z-index:998;align-items:center;gap:12px;padding:10px 16px calc(10px + env(safe-area-inset-bottom,0px));background:#fff;border-top:1px solid #e0e0e0;box-shadow:0 -4px 12px rgba(0,0,0,.08)}' +
    '#ps-bar.is-on{display:flex}' +
    '#ps-bar .ps-bar-sum{display:flex;flex-direction:column;line-height:1.2;min-width:0}' +
    '#ps-bar .ps-bar-sum small{font-size:12px;color:#5b6b6f}' +
    '#ps-bar .ps-bar-sum b{font-size:19px;color:#111;white-space:nowrap}' +
    '#ps-bar button{flex:1;min-height:52px;border:0;border-radius:10px;background:#167450;color:#fff;font-size:16px;font-weight:700;padding:0 12px;cursor:pointer}' +
    '#ps-sum{display:none;margin:0 0 12px}' +
    '#ps-sum-head{width:100%;display:flex;justify-content:space-between;align-items:center;padding:12px 14px;border:1.5px solid #c5d3d6;border-radius:10px;background:#f6f9f9;font-size:15px;font-weight:600;color:#111;cursor:pointer}' +
    '#ps-sum-head span:last-child{color:#167450;font-weight:700}' +
    '#ps-sum-head i{display:inline-block;margin-left:6px;transition:transform .2s}' +
    '#ps-sum.is-open #ps-sum-head i{transform:rotate(180deg)}' +
    '#ps-sum-body{display:none;margin-top:8px;padding:12px 14px;border:1px solid #e0e0e0;border-radius:10px;background:#fff;font-size:14px}' +
    '#ps-sum.is-open #ps-sum-body{display:block}' +
    '#ps-sum-body h2{display:none}' +
    '@media (max-width:767px){body.ps-has-sum #summary-box>*:not(.next-step):not(.next-step-wrapper){display:none!important}body.ps-has-sum #summary-box{padding-top:0!important;border:0!important;background:none!important;box-shadow:none!important}#ps-sum.is-on{display:block}body.ordering-process{padding-bottom:84px}}' +
    'body.ordering-process #submit-order .order-button-text,body.ordering-process #submit-order .order-button-suffix{font-weight:700}' +
    'body.ordering-process .next-step .btn,body.ordering-process #orderFormButton,body.ordering-process #continue-order-button{font-weight:700}';
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  var css2 = '' +
    '#ps-cart-extra{order:2}#ps-rel{order:3}.ps-note{display:block;margin:10px 0;padding:10px 12px;border-radius:10px;background:#eef6f2;color:#0e3d2b;font-size:13.5px;line-height:1.4}' +
    '.ps-trust{display:flex;flex-wrap:wrap;gap:8px 18px;margin:14px 0;padding:0;list-style:none;font-size:13px;color:#33424a}' +
    '.ps-trust li{display:flex;align-items:center;gap:6px;margin:0;padding:0}' +
    '.ps-trust li::before{content:"\\2713";display:inline-grid;place-items:center;width:18px;height:18px;border-radius:50%;background:#167450;color:#fff;font-size:11px;font-weight:700}' +
    '#ps-rel{margin:22px 0}#ps-rel h2{font-size:18px;margin:0 0 10px}' +
    '#ps-rel .ps-rel-list{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:6px}' +
    '#ps-rel .ps-rel-item{flex:0 0 160px;scroll-snap-align:start;border:1px solid #e0e0e0;border-radius:12px;padding:10px;background:#fff;font-size:13px;line-height:1.3}' +
    '#ps-rel .ps-rel-item img{display:block;width:100%;height:110px;object-fit:contain;margin-bottom:8px}' +
    '#ps-rel .ps-rel-item a{color:#111;text-decoration:none}#ps-rel .ps-rel-item b{display:block;margin-top:6px;font-size:15px}' +
    '.ps-more-btn{display:block;width:100%;margin:8px 0 0;padding:12px;border:1.5px dashed #c5d3d6;border-radius:10px;background:#fff;color:#167450;font-size:14px;font-weight:600;cursor:pointer}' +
    'html body.ordering-process #order-form .radio-wrapper.ps-hidden-opt{display:none!important}';
  var st2 = document.createElement('style');
  st2.textContent = css2;
  document.head.appendChild(st2);

  var NOTE = '<b>Skladom na predajni</b> odosielame v ten istý deň, ostatný tovar zvyčajne do 48–72 hodín.';

  /* Košík: doprava od, poznámka o odoslaní, dôvody dôvery, súvisiaci tovar */
  var cartDone = false;
  function buildCart() {
    if (cartDone || location.pathname.indexOf('/kosik') !== 0) return;
    var c = document.getElementById('continue-order-button');
    if (!c) return;
    cartDone = true;
    var box = document.createElement('div');
    box.id = 'ps-cart-extra';
    box.innerHTML = '<div class="ps-note">Doprava od <b>4,90 €</b>, presnú cenu uvidíte v ďalšom kroku. ' + NOTE + '</div>' +
      '<ul class="ps-trust"><li>Bezpečná platba</li><li>Vrátenie tovaru do 14 dní</li><li>Poradíme na 0484151999</li></ul>';
    var anchor = c.closest('.cart-content') || c.parentNode;
    var sumRow = c.closest('.row.summary');
    var row = sumRow || document.querySelector('table.cart-table') || c.parentNode;
    row.parentNode.insertBefore(box, row);
    loadRelated(anchor);
  }

  function loadRelated(anchor) {
    var link = document.querySelector('table.cart-table tr.removeable a.main-link');
    if (!link || !window.fetch) return;
    fetch(link.getAttribute('href'), { credentials: 'same-origin' }).then(function (r) { return r.text(); }).then(function (html) {
      var doc = new DOMParser().parseFromString(html, 'text/html');
      var items = doc.querySelectorAll('.products-related .product, #productsRelated .product, .p-related .product');
      if (!items.length) return;
      var wrap = document.createElement('section');
      wrap.id = 'ps-rel';
      wrap.innerHTML = '<h2>Mohlo by vám chýbať</h2><div class="ps-rel-list"></div>';
      var list = wrap.lastChild, n = 0;
      for (var i = 0; i < items.length && n < 6; i++) {
        var a = items[i].querySelector('a[href]'), img = items[i].querySelector('img'), nm = items[i].querySelector('.name, [data-testid="productCardName"]'), pr = items[i].querySelector('.price-final, .price');
        if (!a || !nm) continue;
        var d = document.createElement('div');
        d.className = 'ps-rel-item';
        var im = img ? '<img loading="lazy" alt="" src="' + (img.getAttribute('data-src') || img.getAttribute('src') || '') + '">' : '';
        d.innerHTML = '<a href="' + a.getAttribute('href') + '">' + im + '<span></span></a><b></b>';
        d.querySelector('span').textContent = nm.textContent.replace(/\s+/g, ' ').trim();
        d.querySelector('b').textContent = pr ? pr.textContent.replace(/\s+/g, ' ').trim() : '';
        list.appendChild(d);
        n++;
      }
      if (n) {
        var ex = document.getElementById('ps-cart-extra');
        if (ex) ex.parentNode.insertBefore(wrap, ex.nextSibling);
      }
    }).catch(function () {});
  }

  /* Krok Doprava & platba: skrátený zoznam + „Ďalšie spôsoby“, poznámka o odoslaní */
  function shortlist(id, keep, label) {
    var cont = document.getElementById(id);
    if (!cont || cont.getAttribute('data-ps-short')) return;
    var opts = [].slice.call(cont.querySelectorAll('.radio-wrapper')).filter(function (o) { return getComputedStyle(o).display !== 'none' || o.classList.contains('ps-hidden-opt'); });
    if (opts.length <= keep + 1) return;
    cont.setAttribute('data-ps-short', '1');
    var shown = 0, hid = 0;
    opts.forEach(function (o) {
      var checked = o.querySelector('input:checked') || o.classList.contains('active');
      if (checked) return;
      if (shown < keep) { shown++; } else { o.classList.add('ps-hidden-opt'); hid++; }
    });
    if (!hid) return;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'ps-more-btn';
    btn.textContent = label + ' (' + hid + ')';
    btn.addEventListener('click', function () {
      opts.forEach(function (o) { o.classList.remove('ps-hidden-opt'); });
      btn.remove();
    });
    cont.parentNode.insertBefore(btn, cont.nextSibling);
  }
  function buildStep1() {
    if (!document.getElementById('orderFormButton')) return;
    shortlist('order-shipping-methods', 3, 'Ďalšie spôsoby dopravy');
    shortlist('order-billing-methods', 3, 'Ďalšie spôsoby platby');
    var h = document.querySelector('.co-delivery-method h2');
    if (h && !document.getElementById('ps-dispatch')) {
      var n = document.createElement('div');
      n.id = 'ps-dispatch';
      n.className = 'ps-note';
      n.innerHTML = NOTE;
      h.parentNode.insertBefore(n, h.nextSibling);
    }
  }

  var bar = document.createElement('div');
  bar.id = 'ps-bar';
  bar.innerHTML = '<div class="ps-bar-sum"><small>Celkom</small><b></b></div><button type="button"></button>';
  document.body.appendChild(bar);
  var barTotal = bar.querySelector('b');
  var barBtn = bar.querySelector('button');

  var sum = null, sumHead = null, sumBody = null;

  function cta() { return document.querySelector(CTA_SEL); }
  function total() {
    var el = document.querySelector('[data-testid="recapFullPrice"]');
    return el ? el.textContent.replace(/\s+/g, ' ').trim() : '';
  }
  function ctaText() {
    var c = cta();
    if (!c) return '';
    var t = c.querySelector('.order-button-text');
    return ((t || c).textContent || c.value || '').replace(/\s+/g, ' ').trim();
  }

  function buildSummary() {
    var side = document.getElementById('checkoutSidebar');
    var step = location.pathname.indexOf('/objednavka/') === 0 && !document.getElementById('submit-order');
    if (sum || !side || !step) return;
    var row = side.parentNode;
    sum = document.createElement('div');
    sum.id = 'ps-sum';
    sum.innerHTML = '<button type="button" id="ps-sum-head"><span>Zhrnutie objednávky<i>▾</i></span><span></span></button><div id="ps-sum-body"></div>';
    row.parentNode.insertBefore(sum, row);
    document.body.classList.add('ps-has-sum');
    sumHead = sum.querySelector('#ps-sum-head');
    sumBody = sum.querySelector('#ps-sum-body');
    sumHead.addEventListener('click', function () {
      var open = !sum.classList.contains('is-open');
      if (open) {
        var box = document.getElementById('summary-box');
        sumBody.innerHTML = box ? box.innerHTML : '';
        var junk = sumBody.querySelectorAll('.next-step, .btn, button, [id]');
        for (var i = 0; i < junk.length; i++) { if (junk[i].id) junk[i].removeAttribute('id'); if (/^(BUTTON|A)$/.test(junk[i].tagName) || junk[i].classList.contains('next-step')) junk[i].remove(); }
      }
      sum.classList.toggle('is-open', open);
    });
  }

  function modalOpen() {
    return !!document.querySelector('.modal.in, .modal.show, .colorbox-open, #colorbox[style*="block"], #cboxOverlay[style*="block"]');
  }

  function update() {
    var c = cta(), t = total();
    var ck = document.querySelector('.siteCookies');
    var h = ck && getComputedStyle(ck).position === 'fixed' && ck.offsetHeight ? ck.offsetHeight : 0;
    var r = c ? c.getBoundingClientRect() : null;
    var visible = !!r && r.height > 0 && r.top >= 0 && r.bottom <= window.innerHeight - h;
    var on = mq.matches && !!t && !!c && !visible && !modalOpen();
    if (barTotal.textContent !== t) barTotal.textContent = t;
    var ct = ctaText();
    if (barBtn.textContent !== ct) barBtn.textContent = ct;
    bar.style.bottom = h + 'px';
    bar.classList.toggle('is-on', on);
    buildSummary();
    buildCart();
    buildStep1();
    if (sum) {
      sum.classList.toggle('is-on', mq.matches);
      if (sumHead.lastChild.textContent !== t) sumHead.lastChild.textContent = t;
    }
  }

  barBtn.addEventListener('click', function () {
    var c = cta();
    if (c) c.click();
  });

  var timer = null;
  new MutationObserver(function () {
    clearTimeout(timer);
    timer = setTimeout(update, 120);
  }).observe(document.body, { childList: true, subtree: true, characterData: true });
  window.addEventListener('resize', update);
  window.addEventListener('scroll', update, { passive: true });
  update();
})();
