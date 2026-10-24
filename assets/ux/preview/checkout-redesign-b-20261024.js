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
  var t = null;
  new MutationObserver(function () { clearTimeout(t); t = setTimeout(run, 120); })
    .observe(document.body, { childList: true, subtree: true });
})();
