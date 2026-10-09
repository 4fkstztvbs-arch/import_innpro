/* PremiumStore – pomocník vyhľadávania (2026-10-09): "Mysleli ste…?" pri preklepe a pravidlá pre konkrétne výrazy (banner/rozcestník).
   Beží v našeptávači (okno pod políčkom) aj na stránke výsledkov. Nové pravidlá pridávaj do RULES nižšie. */
(function () {
  var DICT_URL = 'https://4fkstztvbs-arch.github.io/import_innpro/assets/ux/premiumstore-search-dict-20261009.js?v=1';
  try {
    var cs = document.currentScript && document.currentScript.src;
    if (cs) DICT_URL = cs.replace(/[^\/]*$/, '') + 'premiumstore-search-dict-20261009.js?v=1';
  } catch (e) {}

  // Pravidlá pre konkrétne výrazy. test = regulárny výraz na text bez diakritiky a malými písmenami.
  var RULES = [
    { test: /vianoc|retaz|cencul|girland|stromcek|svetelne zavesy|svetelny retaz/, href: '/vianocne-osvetlenie/', eyebrow: 'Vianoce sú za dverami', title: 'Vianočné osvetlenie a dekorácie', text: 'LED reťaze, cencúle, závesy a svietiace dekorácie. Vyberte podľa miesta.', cta: 'Pozrieť ponuku', xmas: true },
    { test: /^tv$|televiz|smart tv|oled|qled/, href: '/televizory/', eyebrow: 'Rozcestník', title: 'Televízory', text: 'Vyberte podľa uhlopriečky a typu displeja.', cta: 'Zobraziť televízory' },
    { test: /powerbank|power bank|powerbanka/, href: '/powerbanky/', eyebrow: 'Rozcestník', title: 'Powerbanky', text: 'Mobilné batérie rôznych kapacít a výkonov.', cta: 'Zobraziť powerbanky' },
    { test: /slucha|earbuds|airpods|tws/, href: '/sluchadla/', eyebrow: 'Rozcestník', title: 'Slúchadlá', text: 'Drôtové, bezdrôtové, TWS aj náhlavné.', cta: 'Zobraziť slúchadlá' },
    { test: /doprav|dodani|postovn|platb/, href: '/doprava-a-platba/', eyebrow: 'Informácie', title: 'Doprava a platba', text: 'Spôsoby dopravy, ceny a možnosti platby.', cta: 'Zobraziť' }
  ];

  function norm(s) {
    s = (s || '').toLowerCase();
    return (s.normalize ? s.normalize('NFD').replace(/[̀-ͯ]/g, '') : s).replace(/\s+/g, ' ').trim();
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  // Vzdialenosť s prehodením susedných znakov (Damerau-Levenshtein, obmedzená).
  function dist(a, b, max) {
    if (Math.abs(a.length - b.length) > max) return max + 1;
    var prev2 = null, prev = [], cur, i, j;
    for (j = 0; j <= b.length; j++) prev[j] = j;
    for (i = 1; i <= a.length; i++) {
      cur = [i];
      var rowMin = i;
      for (j = 1; j <= b.length; j++) {
        var cost = a.charAt(i - 1) === b.charAt(j - 1) ? 0 : 1;
        var v = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
        if (prev2 && i > 1 && j > 1 && a.charAt(i - 1) === b.charAt(j - 2) && a.charAt(i - 2) === b.charAt(j - 1)) v = Math.min(v, prev2[j - 2] + 1);
        cur[j] = v;
        if (v < rowMin) rowMin = v;
      }
      if (rowMin > max) return max + 1;
      prev2 = prev; prev = cur;
    }
    return prev[b.length];
  }
  function limit(len) { return len <= 3 ? 0 : len <= 5 ? 1 : len <= 9 ? 2 : 3; }

  var dictState = 0, waiters = [];
  function withDict(cb) {
    if (window.PS_SEARCH_DICT) return cb(window.PS_SEARCH_DICT);
    waiters.push(cb);
    if (dictState) return;
    dictState = 1;
    var s = document.createElement('script');
    s.src = DICT_URL; s.async = true;
    s.onload = function () { var w = waiters; waiters = []; w.forEach(function (f) { f(window.PS_SEARCH_DICT); }); };
    s.onerror = function () { waiters = []; };
    document.head.appendChild(s);
  }

  var prepared;
  function prep(d) {
    if (prepared) return prepared;
    prepared = { b: d.b.map(function (n) { return { label: n, n: norm(n), href: '/vyhladavanie/?string=' + encodeURIComponent(n) }; }),
                 c: d.c.map(function (x) { return { label: x[0], n: norm(x[0]), href: x[1], words: norm(x[0]).split(/[\s,\-–]+/).filter(function (w) { return w.length >= 4; }) }; }) };
    return prepared;
  }

  function suggest(q, d) {
    var nq = norm(q);
    if (nq.length < 3) return [];
    var p = prep(d), out = [], i, k, lim = limit(nq.length);
    function push(x, dd) { out.push({ label: x.label, href: x.href, d: dd, brand: !!x.isBrand }); }
    for (i = 0; i < p.b.length; i++) {
      var b = p.b[i], dd = dist(nq, b.n, lim);
      if (dd <= lim && dd > 0) { b.isBrand = true; push(b, dd); }
    }
    if (nq.indexOf(' ') < 0) {
      for (i = 0; i < p.c.length; i++) {
        var c = p.c[i], best = 99;
        for (k = 0; k < c.words.length; k++) { var wd = dist(nq, c.words[k], lim); if (wd < best) best = wd; }
        if (best <= lim && best > 0) push(c, best + 0.5);
      }
    }
    out.sort(function (a, b) { return a.d - b.d || a.label.length - b.label.length; });
    var seen = {}, res = [];
    for (i = 0; i < out.length && res.length < 4; i++) { if (!seen[out[i].label]) { seen[out[i].label] = 1; res.push(out[i]); } }
    return res;
  }

  function suggestHtml(items) {
    if (!items.length) return '';
    return '<div class="ps-did"><span class="ps-did__q">Mysleli ste:</span> ' + items.map(function (x) {
      return '<a class="ps-did__a" href="' + esc(x.href) + '">' + esc(x.label) + '</a>';
    }).join('') + '</div>';
  }

  function rule(q) {
    var nq = norm(q);
    if (nq.length < 2) return null;
    for (var i = 0; i < RULES.length; i++) if (RULES[i].test.test(nq)) return RULES[i];
    return null;
  }
  function ruleHtml(r, compact) {
    return '<a class="ps-sr-rule' + (r.xmas ? ' ps-sr-rule--xmas' : '') + (compact ? ' ps-sr-rule--compact' : '') + '" href="' + esc(r.href) + '">' +
      '<span class="ps-sr-rule__eyebrow">' + esc(r.eyebrow) + '</span>' +
      '<span class="ps-sr-rule__title">' + esc(r.title) + '</span>' +
      '<span class="ps-sr-rule__text">' + esc(r.text) + '</span>' +
      '<span class="ps-sr-rule__cta">' + esc(r.cta) + '</span></a>';
  }

  window.PSSearchAssist = { norm: norm, rule: rule, ruleHtml: ruleHtml, suggest: suggest, suggestHtml: suggestHtml, withDict: withDict };

  // Našeptávač: pravidlo hore, "Mysleli ste…?" pri prázdnom výsledku.
  var input = document.querySelector('.js-search-input');
  var box = document.querySelector('.search');
  if (!input || !box) return;
  var busy = false, timer = null;
  function enhance() {
    var w = box.querySelector('.searchWhisperer');
    if (!w || busy) return;
    busy = true;
    try {
      var q = input.value || '';
      var r = rule(q), old = w.querySelector('.ps-sr-rule'), want = r ? r.href + q : '';
      if (old && old.getAttribute('data-want') !== want) { old.remove(); old = null; }
      if (r && !old) {
        var holder = document.createElement('div');
        holder.innerHTML = ruleHtml(r, true);
        var node = holder.firstChild;
        node.setAttribute('data-want', want);
        w.insertBefore(node, w.firstChild);
      }
      var empty = w.querySelector('.searchWhisperer__content--empty');
      var did = w.querySelector('.ps-did');
      if (empty && !did) {
        withDict(function (d) {
          var e2 = box.querySelector('.searchWhisperer__content--empty');
          if (!e2 || e2.querySelector('.ps-did')) return;
          var html = suggestHtml(suggest(input.value || '', d));
          if (html) { busy = true; e2.insertAdjacentHTML('beforeend', html); setTimeout(function () { busy = false; }, 0); }
        });
      } else if (!empty && did) { did.remove(); }
    } finally { setTimeout(function () { busy = false; }, 0); }
  }
  if (window.MutationObserver) {
    new MutationObserver(function () { clearTimeout(timer); timer = setTimeout(enhance, 60); }).observe(box, { childList: true, subtree: true });
  }
  input.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(enhance, 400); });
})();
