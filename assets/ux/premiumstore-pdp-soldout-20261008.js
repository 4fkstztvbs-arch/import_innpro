/*
 * PremiumStore PDP: vypredaný produkt (8. 10. 2026).
 *
 * Problém: na vypredanom produkte (blok "Položka bola vypredaná…", bez tlačidla Do košíka) zostáva
 * riadok dostupnosti "1-2 ks skladom" (K-B import v Shoptete ho neprepíše) a odkaz na doručenie.
 * Zákazník vidí rozporuplnú stránku bez ďalšieho kroku.
 *
 * Čo skript robí iba na vypredanom produkte (iné stránky nechá na pokoji):
 *  1) Štítok dostupnosti prepíše na "Vypredané" a skryje doručenie (nemá zmysel).
 *  2) Pod blok vloží "Podobné produkty skladom": z rodičovskej kategórie vyberie až 4 skladom
 *     produkty s najbližšou cenou (načíta HTML kategórie, žiadne API, žiadny zásah do šablóny).
 *     Ak je v kategórii menej ako 3 vhodné, skúsi nadradenú kategóriu. Ak nenájde nič,
 *     ukáže aspoň odkaz späť do kategórie.
 *
 * Samostatný súbor, nemení ostatné skripty. Rollback = odstrániť jeden <script> odkaz.
 * V Shoptete (pätička, za premiumstore-pdp-conversion-20261004.js):
 * <script src="https://4fkstztvbs-arch.github.io/import_innpro/assets/ux/premiumstore-pdp-soldout-20261008.js?v=1"></script>
 */
(function () {
  'use strict';
  if (window.__psPdpSoldout) return;
  window.__psPdpSoldout = true;

  var MAX_ITEMS = 4;
  var MIN_ITEMS = 3;

  var CSS = [
    '.ps-soldout-label{color:#b42318!important;font-weight:700;}',
    'body.type-detail .ps-soldout-hide{display:none!important;}',
    '.ps-alt{margin:16px 0 8px;padding:14px 12px 10px;border:1px solid #d9e2dc;border-radius:10px;background:#f6faf7;clear:both;}',
    '.ps-alt__title{margin:0 0 10px;font-size:16px;line-height:1.3;font-weight:700;color:#14301f;}',
    '.ps-alt__list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin:0;padding:0;list-style:none;}',
    '.ps-alt__item{margin:0;padding:0;}',
    '.ps-alt__card{display:flex;flex-direction:column;height:100%;padding:8px;border:1px solid #e3e8e5;border-radius:8px;background:#fff;color:inherit;text-decoration:none!important;}',
    '.ps-alt__img{display:block;width:100%;aspect-ratio:1/1;object-fit:contain;margin-bottom:6px;}',
    '.ps-alt__name{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;font-size:13px;line-height:1.3;color:#1a1a1a;min-height:3.9em;}',
    '.ps-alt__price{margin-top:6px;font-size:16px;font-weight:700;color:#14301f;}',
    '.ps-alt__stock{font-size:12px;color:#1c7a45;}',
    '.ps-alt__more{display:block;margin-top:10px;text-align:center;font-size:14px;font-weight:600;color:#14301f;min-height:44px;line-height:44px;}',
    '@media (min-width:1200px){.ps-alt__list{grid-template-columns:repeat(4,minmax(0,1fr));}}'
  ].join('');

  function addStyle() {
    var s = document.createElement('style');
    s.setAttribute('data-ps-soldout', '');
    s.appendChild(document.createTextNode(CSS));
    document.head.appendChild(s);
  }

  function parsePrice(text) {
    var n = parseFloat(String(text || '').replace(/\s/g, '').replace(',', '.'));
    return isFinite(n) ? n : 0;
  }

  function currentPrice() {
    var m = document.querySelector('#product-detail-form meta[itemprop="price"]');
    return m ? parsePrice(m.getAttribute('content')) : 0;
  }

  /* Odkazy kategórií z omrvinkovej navigácie, od najkonkrétnejšej po najvšeobecnejšiu. */
  function categoryLinks() {
    var links = [].slice.call(document.querySelectorAll('.breadcrumbs a[href]'));
    var out = [];
    for (var i = links.length - 1; i >= 0; i--) {
      var href = links[i].getAttribute('href');
      if (href && href !== '/' && out.indexOf(href) === -1) out.push(href);
    }
    return out;
  }

  function parseCards(html, selfPath, price) {
    var doc = new DOMParser().parseFromString(html, 'text/html');
    var cards = [].slice.call(doc.querySelectorAll('#products .product'));
    var items = [];
    cards.forEach(function (card) {
      var offer = card.querySelector('[data-micro="offer"]');
      var link = card.querySelector('a.name');
      if (!offer || !link) return;
      if ((offer.getAttribute('data-micro-availability') || '').indexOf('InStock') === -1) return;
      var availEl = card.querySelector('.availability');
      var avail = availEl ? availEl.textContent.replace(/\s+/g, ' ').trim() : '';
      if (/vypredan|nedostupn/i.test(avail)) return;
      var href = link.getAttribute('href');
      if (!href || href === selfPath) return;
      var p = parsePrice(offer.getAttribute('data-micro-price'));
      if (!p) return;
      var img = card.querySelector('img[data-src]');
      var nameEl = card.querySelector('[data-micro="name"]');
      items.push({
        href: href,
        name: (nameEl ? nameEl.textContent : link.textContent).replace(/\s+/g, ' ').trim(),
        price: p,
        priceText: (card.querySelector('.price-final strong') || {textContent: ''}).textContent.replace(/\s+/g, ' ').trim(),
        img: img ? img.getAttribute('data-src') : '',
        stock: avail,
        dist: price ? Math.abs(Math.log(p / price)) : 0
      });
    });
    items.sort(function (a, b) { return a.dist - b.dist; });
    return items;
  }

  function fetchCategory(path) {
    return fetch(path, {credentials: 'same-origin'}).then(function (r) {
      if (!r.ok) throw new Error('http ' + r.status);
      return r.text();
    });
  }

  function collect(paths, selfPath, price) {
    var seen = {};
    var result = [];
    function next(i) {
      if (i >= paths.length || result.length >= MIN_ITEMS || i >= 2) return Promise.resolve();
      return fetchCategory(paths[i]).then(function (html) {
        parseCards(html, selfPath, price).forEach(function (it) {
          if (!seen[it.href] && result.length < MAX_ITEMS) { seen[it.href] = 1; result.push(it); }
        });
      }).catch(function () {}).then(function () { return next(i + 1); });
    }
    return next(0).then(function () { return result; });
  }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }

  function render(form, items, categoryPath) {
    var box = el('section', 'ps-alt');
    box.setAttribute('aria-label', 'Podobné produkty skladom');
    box.appendChild(el('h2', 'ps-alt__title', items.length ? 'Podobné produkty skladom' : 'Tento produkt je vypredaný'));
    if (items.length) {
      var list = el('ul', 'ps-alt__list');
      items.forEach(function (it) {
        var li = el('li', 'ps-alt__item');
        var a = el('a', 'ps-alt__card');
        a.href = it.href;
        if (it.img) {
          var img = el('img', 'ps-alt__img');
          img.src = it.img; img.alt = ''; img.loading = 'lazy'; img.width = 140; img.height = 140;
          a.appendChild(img);
        }
        a.appendChild(el('span', 'ps-alt__name', it.name));
        a.appendChild(el('span', 'ps-alt__price', it.priceText || (it.price.toFixed(2).replace('.', ',') + ' €')));
        if (it.stock) a.appendChild(el('span', 'ps-alt__stock', it.stock));
        li.appendChild(a);
        list.appendChild(li);
      });
      box.appendChild(list);
    }
    if (categoryPath) {
      var more = el('a', 'ps-alt__more', 'Zobraziť ďalšie produkty v kategórii');
      more.href = categoryPath;
      box.appendChild(more);
    }
    form.insertAdjacentElement('afterend', box);
  }

  function init() {
    if (!document.body.classList.contains('type-detail')) return;
    var form = document.getElementById('product-detail-form');
    if (!form || !form.querySelector('.sold-out-wrapper')) return;
    if (document.querySelector('.ps-alt')) return;

    addStyle();

    var label = form.querySelector('.availability-label');
    if (label) {
      label.textContent = 'Vypredané';
      label.classList.add('ps-soldout-label');
    }
    [].forEach.call(form.querySelectorAll('.shipping-options-row, .ps-ship'), function (n) {
      n.classList.add('ps-soldout-hide');
    });

    var cats = categoryLinks();
    var selfPath = location.pathname;
    collect(cats, selfPath, currentPrice()).then(function (items) {
      render(form, items, cats[0] || '');
    }).catch(function () {
      render(form, [], cats[0] || '');
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
