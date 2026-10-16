/* PremiumStore – pilot produktovej stránky „Svetlý retail“ (návrh 1).
   Zapnuté pre všetkých (PILOT_ALL = true, 16. 10. 2026). Pri PILOT_ALL = false sa zapína len s ?ps_pilot=1
   (zapamätá sa v prehliadači; ?ps_pilot=0 ho vypne). Trieda html.ps-pilot-on sa nastavuje už v HEAD (malý skript), aby sa vzhľad
   nemenil až po načítaní; html.ps-pilot-ready zruší rezervované miesto pre vložené bloky. Mení iba vzhľad a poradie: kľúčové parametre pri cene, jeden riadok istôt
   namiesto štyroch blokov, kontakt (telefón, e-mail) a „V balení“ ako zbaliteľný blok.
   Nahrádza, nepridáva: pôvodný blok istôt a odznak „Doprava zadarmo“ na fotke sa v pilote skryjú. */
(function () {
  'use strict';
  if (!document.body || !document.body.classList.contains('type-detail')) return;

  var PILOT_ALL = true;
  var on = PILOT_ALL;
  try {
    var m = /[?&]ps_pilot=(\d)/.exec(location.search);
    if (m) localStorage.setItem('ps_pilot', m[1]);
    var saved = localStorage.getItem('ps_pilot');
    if (saved === '1') on = true;
    if (saved === '0' && !PILOT_ALL) on = false;
  } catch (e) {
    if (/[?&]ps_pilot=1/.test(location.search)) on = true;
  }
  if (!on) return;
  document.body.classList.add('ps-pilot-pdp');
  document.documentElement.classList.add('ps-pilot-on');
  var ready = function () { document.documentElement.classList.add('ps-pilot-ready'); };
  setTimeout(ready, 3000);

  var ALLOW = /^(procesor|cpu|ram|pam[äa][ťt]|[úu]lo[žz]isko|displej|uhlopriečka|rozl[ií]senie|v[ýy]kon|kapacita|bat[ée]ria|pripojenie|wi-?fi|bluetooth|[šs]tandard|trieda|frekvencia|nap[äa]tie|pr[ií]kon|dosah|sn[ií]ma[čc]|opera[čc]n[ýy] syst[ée]m|syst[ée]m|rozhranie|podpora)/i;
  var ICON = {
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
    ret: '<path d="M4 8h11a5 5 0 0 1 0 10H8"/><path d="M8 4 4 8l4 4"/>',
    store: '<path d="M4 9l1.5-5h13L20 9M4 9v10h16V9M4 9c0 2 3 2 4 0 1 2 3 2 4 0 1 2 3 2 4 0 1 2 4 2 4 0"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    chat: '<path d="M4 5h16v11H10l-4 4v-4H4z"/>'
  };
  function ic(n) {
    return '<svg class="ps-pic" viewBox="0 0 24 24" aria-hidden="true">' + ICON[n] + '</svg>';
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  }

  function paramsTable() {
    var tables = document.querySelectorAll('#description table, #extendedDescription table, .p-detail-tabs-wrapper table');
    for (var i = 0; i < tables.length; i++) {
      if (tables[i].classList.contains('detail-parameters')) continue;
      if (tables[i].rows.length >= 6) return tables[i];
    }
    return null;
  }

  function keyParams() {
    var t = paramsTable();
    if (!t) return [];
    var out = [];
    for (var i = 0; i < t.rows.length && out.length < 4; i++) {
      var c = t.rows[i].cells;
      if (c.length < 2) continue;
      var label = c[0].textContent.replace(/\s+/g, ' ').trim().replace(/:$/, '');
      var val = c[1].textContent.replace(/\([^)]*\)/g, '').replace(/\s+/g, ' ').trim();
      if (!label || !val || !ALLOW.test(label) || val.length > 26 || val.length < 2) continue;
      out.push([label, val]);
    }
    return out;
  }

  function packItems() {
    var hs = document.querySelectorAll('#description h2, #description h3, #description h4, #description strong');
    for (var i = 0; i < hs.length; i++) {
      if (/s[úu][čc]as[ťt]\s+balenia|v\s+balen[ií]/i.test(hs[i].textContent) && hs[i].textContent.length < 40) {
        var n = hs[i].nextElementSibling;
        if (!n && hs[i].parentElement) n = hs[i].parentElement.nextElementSibling;
        if (n && (n.tagName === 'UL' || n.tagName === 'OL')) {
          var li = n.querySelectorAll('li'), out = [];
          for (var j = 0; j < li.length; j++) out.push(li[j].textContent.replace(/\s+/g, ' ').trim());
          return out.filter(Boolean);
        }
      }
    }
    return [];
  }

  function build() {
    var form = document.querySelector('#product-detail-form') || document.querySelector('form.pr-action');
    if (!form || form.querySelector('.ps-kp, .ps-trust')) return !!form;
    var ship = form.querySelector('.ps-ship');
    var cart = form.querySelector('.p-to-cart-block');
    var pay = form.querySelector('.ps-pay');
    if (!cart) return false;

    var kp = keyParams();
    if (kp.length >= 3) {
      var k = document.createElement('div');
      k.className = 'ps-kp';
      k.setAttribute('role', 'list');
      k.innerHTML = kp.map(function (p) {
        return '<div role="listitem"><b>' + esc(p[1]) + '</b><span>' + esc(p[0]) + '</span></div>';
      }).join('');
      // Pod tlačidlom, aby sa tlačidlo „Do košíka“ po načítaní neposúvalo.
      cart.parentNode.insertBefore(k, pay || cart.nextSibling);
    }

    var anchor = pay || cart;
    var trust = document.createElement('div');
    trust.className = 'ps-trust';
    trust.innerHTML =
      '<span>' + ic('shield') + 'Garancia nepoškodeného tovaru</span>' +
      '<span>' + ic('ret') + 'Vrátenie do 14 dní</span>' +
      '<span>' + ic('store') + 'Predajňa Banská Bystrica</span>';
    anchor.parentNode.insertBefore(trust, anchor.nextSibling);

    // Jeden box „Poradíme / Opýtať sa“: otvorí natívne okno „Otázka na predajcu“ (rovnaké ako odkaz Opýtať sa).
    var exp = document.createElement('a');
    exp.className = 'ps-exp';
    exp.href = '#';
    exp.setAttribute('role', 'button');
    exp.innerHTML =
      '<span class="ps-exp__av">' + ic('chat') + '</span>' +
      '<span><b>Potrebujete poradiť?</b><small>Opýtajte sa nás</small></span>';
    exp.addEventListener('click', function (e) {
      e.preventDefault();
      var n = document.querySelector('.link-icon.chat');
      if (n) n.click(); else location.href = 'mailto:obchod@premiumstore.sk';
    });
    trust.parentNode.insertBefore(exp, trust.nextSibling);

    var pack = packItems();
    if (pack.length) {
      var d = document.createElement('details');
      d.className = 'ps-pack';
      d.innerHTML = '<summary>V balení</summary><ul>' + pack.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
      exp.parentNode.insertBefore(d, exp.nextSibling);
    }
    return true;
  }

  var tries = 0;
  (function run() {
    if (build() && document.querySelector('.ps-ship')) { ready(); return; }
    if (++tries < 12) setTimeout(run, 250);
    else { build(); ready(); }
  })();
})();
