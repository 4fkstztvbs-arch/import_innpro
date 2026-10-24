/* PremiumStore – NÁVRH nového vzhľadu objednávky (preview). Len vizuálna vrstva: ikony, štítky, odkazy.
   Neprepisuje polia ani logiku Shoptetu. */
(function () {
  'use strict';
  var b = document.body;
  if (!b || !b.classList.contains('ordering-process')) return;
  b.classList.add('ps-rd');

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return [].slice.call((r || document).querySelectorAll(s)); }
  function svg(p) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + '</svg>'; }
  var ICON = {
    store: svg('<path d="M4 9.5 5.5 4h13L20 9.5"/><path d="M4 9.5a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0 2.7 2.7 0 0 0 5.3 0"/><path d="M5.5 12.5V20h13v-7.5"/><path d="M10 20v-4.5h4V20"/>'),
    home: svg('<path d="M3.5 11 12 4l8.5 7"/><path d="M5.5 9.5V20h13V9.5"/><path d="M10 20v-5h4v5"/>'),
    truck: svg('<path d="M3 6.5h11v10H3z"/><path d="M14 10h4l3 3.2v3.3h-7"/><circle cx="7.5" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>'),
    locker: svg('<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16M12 4v16"/><path d="M8 8h.01M16 8h.01M8 16h.01M16 16h.01"/>'),
    pallet: svg('<path d="M4 8h16v7H4z"/><path d="M3 15h18v3H3z"/><path d="M8 8v7M12 8v7M16 8v7"/>'),
    cash: svg('<rect x="3" y="6.5" width="18" height="11" rx="2"/><circle cx="12" cy="12" r="2.6"/><path d="M6.5 9.5h.01M17.5 14.5h.01"/>'),
    cod: svg('<path d="M12 3 20 7.2v9.6L12 21l-8-4.2V7.2z"/><path d="M4 7.2 12 11.4 20 7.2M12 11.4V21"/>'),
    bank: svg('<path d="M3.5 9 12 4l8.5 5"/><path d="M5 9.5h14M6.5 12v5M10.2 12v5M13.8 12v5M17.5 12v5M4 19.5h16"/>'),
    card: svg('<rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3 10h18M7 15h4"/>'),
    wallet: svg('<path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18v3"/><path d="M4 7.5V17a2 2 0 0 0 2 2h13V8H6.5A2.5 2.5 0 0 1 4 7.5z"/><circle cx="16" cy="13.5" r="1"/>')
  };

  function iconFor(wrapper) {
    var inp = $('input', wrapper); if (!inp) return null;
    var code = inp.getAttribute('data-code') || '';
    var type = inp.getAttribute('data-payment-type') || '';
    var name = (($('.shipping-billing-name', wrapper) || {}).textContent || '').toLowerCase();
    if (code === 'personal-collection') return ICON.store;
    if (/geis|paleta|pallet/.test(code + name)) return ICON.pallet;
    if (/balíkobox|alzabox|box/.test(name)) return ICON.locker;
    if (/pošta na adresu|kuri|doručenie na adresu|na adresu/.test(name)) return ICON.truck;
    if (type === 'cash') return ICON.cash;
    if (type === 'cashOnDelivery') return ICON.cod;
    if (/prevod|bank/.test(type + name)) return ICON.bank;
    if (/kart|card/.test(type + name)) return ICON.card;
    if (/pošta|sps|packeta|balík|zásiel/.test(code + name)) return ICON.truck;
    return inp.name === 'billingId' ? ICON.wallet : ICON.truck;
  }

  function decorate() {
    $$('#order-shipping-methods .radio-wrapper, #order-billing-methods .radio-wrapper').forEach(function (w) {
      var label = $('label', w); if (!label) return;
      var hasLogo = !!$('.payment-logo img', w);
      var ico = $('.ps-ico', w);
      if (hasLogo) { if (ico) ico.remove(); }
      else if (!ico) {
        var html = iconFor(w);
        if (html) {
          ico = document.createElement('span'); ico.className = 'ps-ico'; ico.innerHTML = html;
          label.insertBefore(ico, label.firstChild);
        }
      }
      var pr = $('.payment-shipping-price', w);
      if (pr) pr.classList.toggle('ps-free', /zadarmo|0\s?€/i.test(pr.textContent.trim()) && !/[1-9]/.test(pr.textContent.replace(/0[,.]?0*\s?€/, '')));
    });
  }

  function labels() {
    var s3 = $('ol.cart-header li.step-3 span'); if (s3 && /Informácie/.test(s3.textContent)) s3.textContent = 'Vaše údaje';
    var s2 = $('ol.cart-header li.step-2 span'); if (s2 && /Doprava/.test(s2.textContent)) s2.textContent = 'Doprava a platba';
    var s1 = $('ol.cart-header li.step-1 span'); if (s1 && /košík/i.test(s1.textContent)) s1.textContent = 'Košík';
    // Texty tlačidiel Pokračovať / Objednať sa zobrazujú cez CSS (::before / ::after); Shoptet ich prepisuje späť, takže ich JS nesmie meniť.
  }

  function trust() {
    if ($('.ps-trust2')) return;
    var host = $('.order-summary-inner') || null; if (!host) return;
    var ul = document.createElement('ul'); ul.className = 'ps-trust2';
    ul.innerHTML = '<li>Bezpečná platba a šifrované spojenie</li><li>Vrátenie tovaru do 14 dní</li><li>Poradíme: <a href="tel:0484151999">0484 151 999</a></li>';
    host.appendChild(ul);
  }

  function change() {
    if (!b.classList.contains('in-krok-2')) return;
    $$('.order-recapitulation .recapitulation-single, .order-summary-inner .order-summary-item').forEach(function () {});
    var recap = $('#shipping-billing-summary') || $('.order-recapitulation');
    if (recap && !$('.ps-change', recap.parentNode)) {
      var a = document.createElement('a'); a.href = '/objednavka/krok-1/'; a.className = 'ps-change'; a.textContent = 'Zmeniť dopravu a platbu';
      a.style.cssText = 'display:block;margin:2px 0 8px;color:#167450;font-weight:700;font-size:13px;text-decoration:none';
      recap.parentNode.insertBefore(a, recap.nextSibling);
    }
  }

  function run() { decorate(); labels(); trust(); change(); }
  run();
  var t = null;
  new MutationObserver(function () { clearTimeout(t); t = setTimeout(run, 120); })
    .observe(document.body, { childList: true, subtree: true });
})();

/* PremiumStore – NÁVRH B (mobile-first): plochý zoznam, tenký indikátor krokov, pevná spodná lišta s cenou a tlačidlom.
   Beží NAD variantom A (ps-rd) – A rieši logá/ikony/štítky, B mení iba rozloženie. PREVIEW, nenasadené. */
(function () {
  'use strict';
  var b = document.body;
  if (!b || !b.classList.contains('ordering-process')) return;
  b.classList.add('ps-rb');

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return [].slice.call((r || document).querySelectorAll(s)); }

  function stepText() {
    var h = $('ol.cart-header'); if (!h) return;
    var steps = $$('li.step', h);
    var idx = steps.findIndex(function (x) { return x.classList.contains('active'); });
    if (idx < 0) return;
    var label = ($('span', steps[idx]) || {}).textContent || '';
    var line = $('.ps-stepline');
    if (!line) { line = document.createElement('div'); line.className = 'ps-stepline'; h.parentNode.insertBefore(line, h); }
    var txt = 'Krok ' + (idx + 1) + ' z 3 · ' + label.trim();
    if (line.textContent !== txt) line.textContent = txt;
  }

  function total() {
    var p = $('strong.price-primary');
    return p ? p.textContent.replace(/\s+/g, ' ').trim() : '';
  }

  /* Pevná spodná lišta: cena + hlavné tlačidlo (kliká na pôvodné tlačidlo Shoptetu). */
  function bar() {
    var real = $('#continue-order-button, #orderFormButton');
    if (!real || b.classList.contains('in-krok-2')) { var o = $('.ps-bar'); if (o) o.remove(); return; }
    var el = $('.ps-bar');
    if (!el) {
      el = document.createElement('div'); el.className = 'ps-bar';
      el.innerHTML = '<div class="ps-bar-sum"><span>Spolu</span><strong></strong></div><button type="button" class="ps-bar-btn"></button>';
      document.body.appendChild(el);
      $('.ps-bar-btn', el).addEventListener('click', function () {
        var r = $('#continue-order-button, #orderFormButton'); if (r) r.click();
      });
    }
    var t = total(); if (t) $('strong', el).textContent = t;
    var txt = b.classList.contains('in-kosik') ? 'Pokračovať' : 'Pokračovať k údajom';
    var btn = $('.ps-bar-btn', el); if (btn.textContent !== txt) btn.textContent = txt;
  }

  function run() { stepText(); bar(); }
  run();
  /* Shoptet prepíše sumu bez zmeny štruktúry, ktorú pozoruje MutationObserver – spodná lišta preto sumu pravidelne dopočíta. */
  setInterval(bar, 400);
  var t = null;
  new MutationObserver(function () { clearTimeout(t); t = setTimeout(run, 120); })
    .observe(document.body, { childList: true, subtree: true });
})();

/* Meranie: Clarity a GA4 dostanú značku verzie checkoutu, aby sa dalo porovnať pred/po nasadení (PS-20261024-CHECKOUT-REDESIGN). */
(function () {
  'use strict';
  var b = document.body;
  if (!b || !b.classList.contains('ordering-process')) return;
  var v = 'redesign-20261024-' + (window.innerWidth <= 991 ? 'B-mobil' : 'B-desktop');
  try { if (typeof window.clarity === 'function') { window.clarity('set', 'checkout_design', v); } } catch (e) {}
  try { if (typeof window.gtag === 'function') { window.gtag('set', 'user_properties', { checkout_design: v }); } } catch (e) {}
})();
