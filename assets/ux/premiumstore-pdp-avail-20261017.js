/* PremiumStore – info okienko dostupnosti na produkte (pilot, produkty od KB).
   Hlavný text dostupnosti („21 a viac ks skladom“) sa nemení. Vedľa neho pribudne ikona „i“, ktorá otvorí
   okienko: Na predajni (0 ks / skladom) a U dodávateľa (1–2, 3–5, > 5 ks, odoslanie do 48–72 h).
   Zapína sa len s ?ps_avail=1 (zapamätá sa v prehliadači; ?ps_avail=0 ho vypne), alebo pre všetkých, ak PS_AVAIL_ALL = true.
   Údaje berie z textu dostupnosti, ktorý posiela feed KB (pásma 1–2, 3–5, 6–20, 21+), nič nedoťahuje zo servera. */
(function () {
  'use strict';
  if (!document.body || !document.body.classList.contains('type-detail')) return;

  var PS_AVAIL_ALL = false;
  var on = PS_AVAIL_ALL;
  try {
    var m = /[?&]ps_avail=(\d)/.exec(location.search);
    if (m) localStorage.setItem('ps_avail', m[1]);
    var saved = localStorage.getItem('ps_avail');
    if (saved === '1') on = true;
    if (saved === '0' && !PS_AVAIL_ALL) on = false;
  } catch (e) {
    if (/[?&]ps_avail=1/.test(location.search)) on = true;
  }
  if (!on) return;

  var SHIP = 'odoslanie do 48–72 h';

  function band(text) {
    var t = text.replace(/\s+/g, ' ').trim().toLowerCase();
    var r = /^(\d+)\s*[-–]\s*(\d+)\s*ks skladom/.exec(t);
    if (r) {
      var hi = parseInt(r[2], 10);
      if (hi <= 2) return '1–2 ks';
      if (hi <= 5) return '3–5 ks';
      return '> 5 ks';
    }
    if (/^21 a viac ks skladom/.test(t)) return '> 5 ks';
    return null;
  }

  function track(name, params) {
    try {
      var d = window.dataLayer || [];
      var granted = false;
      for (var i = d.length - 1; i >= 0; i--) {
        if (d[i] && d[i].cookie_consent) { granted = d[i].cookie_consent.analytics === 'granted'; break; }
      }
      if (granted && typeof window.gtag === 'function') window.gtag('event', name, params);
    } catch (e) {}
  }

  function build() {
    var label = document.querySelector('.availability-label');
    if (!label || label.parentNode.querySelector('.ps-av-info')) return !!label;
    var text = label.textContent;
    var onStore = /skladom na predajni/i.test(text);
    var supplier = band(text);
    if (!onStore && !supplier) return true;

    var wrap = document.createElement('span');
    wrap.className = 'ps-av-info';
    var id = 'ps-av-bubble';
    wrap.innerHTML =
      '<button type="button" class="ps-av-btn" aria-expanded="false" aria-controls="' + id + '" aria-label="Zobraziť dostupnosť podľa zdroja">i</button>' +
      '<span class="ps-av-bubble" id="' + id + '" role="dialog" aria-label="Dostupnosť podľa zdroja" hidden>' +
      '<span class="ps-av-row"><span>Na predajni<small>osobný odber zdarma</small></span><b>' + (onStore ? 'skladom' : '0 ks') + '</b></span>' +
      (supplier ? '<span class="ps-av-row"><span>U dodávateľa<small>' + SHIP + '</small></span><b>' + supplier + '</b></span>' : '') +
      '</span>';
    label.parentNode.insertBefore(wrap, label.nextSibling);

    var btn = wrap.querySelector('.ps-av-btn');
    var bub = wrap.querySelector('.ps-av-bubble');
    var opened = false;
    function place() {
      // okienko ostane celé v okne: posun doľava, ak by presiahlo pravý okraj; šípka ukazuje na ikonu
      bub.style.left = '-8px';
      var b = btn.getBoundingClientRect(), w = bub.getBoundingClientRect().width, wr = wrap.getBoundingClientRect();
      var left = Math.max(16, Math.min(b.left - 8, window.innerWidth - 16 - w));
      bub.style.left = (left - wr.left) + 'px';
      bub.style.setProperty('--ps-arrow', Math.max(10, b.left + b.width / 2 - left - 6) + 'px');
    }
    function set(open) {
      bub.hidden = !open;
      btn.setAttribute('aria-expanded', String(open));
      if (open) place();
      if (open && !opened) { opened = true; track('ps_avail_info_open', { ps_band: supplier || 'store' }); }
    }
    var inside = false; // kurzor je nad ikonou (zariadenie s myšou): kliknutie okienko nechá otvorené
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (inside) { set(true); return; }
      set(bub.hidden);
    });
    wrap.addEventListener('mouseenter', function () { if (window.matchMedia('(hover: hover)').matches) { inside = true; set(true); } });
    wrap.addEventListener('mouseleave', function () { inside = false; if (window.matchMedia('(hover: hover)').matches) set(false); });
    document.addEventListener('click', function (e) { if (!wrap.contains(e.target)) set(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
    return true;
  }

  var tries = 0;
  (function run() {
    if (build()) return;
    if (++tries < 12) setTimeout(run, 250);
  })();
})();
