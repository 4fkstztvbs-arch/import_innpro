/*
 * PremiumStore.sk – UX/CRO doplnky pre Shoptet (šablóna Disco)
 * Nahrané do Shoptetu ako: <script src="https://4fkstztvbs-arch.github.io/import_innpro/assets/ux/premiumstore-cro.js"></script>
 * (Design -> Rozšírené nastavenia -> Vlastný HTML kód -> pätička, tesne pred </body>)
 *
 * Zodpovedajúce CSS patrí do hlavičky (Design -> Vlastné CSS), pozri
 * assets/ux/premiumstore-cro.css v tomto istom priečinku.
 *
 * Prvky sa vyhľadávajú podľa viditeľného textu, nie podľa CSS tried šablóny,
 * lebo tie sa medzi verziami/úpravami Shoptetu môžu líšiť.
 */
(function () {
  'use strict';

  // --- Nastavenia ---------------------------------------------------------
  var FREE_SHIP_THRESHOLD = 100; // € – uprav podľa reálnej hranice (musí sedieť s Nastavenia -> Doprava a platba)
  var SUPPORT_PHONE = '+421 48 4151999';

  // --- Pomocné funkcie -----------------------------------------------------
  function priceOf(text) {
    if (!text) return null;
    var m = text.replace(/\s/g, '').match(/([\d.,]+)\s?€/);
    if (!m) return null;
    return parseFloat(m[1].replace(/\./g, '').replace(',', '.'));
  }

  function findByText(selector, words) {
    var els = document.querySelectorAll(selector);
    for (var i = 0; i < els.length; i++) {
      var t = (els[i].value || els[i].textContent || '').trim().toLowerCase();
      for (var j = 0; j < words.length; j++) {
        if (t.indexOf(words[j]) !== -1) return els[i];
      }
    }
    return null;
  }

  function isCartPage() {
    return /kosik|cart/i.test(location.pathname);
  }

  // --- 1) Progress bar "doprava zadarmo od X €" (košík) --------------------
  function freeShippingBar() {
    if (!isCartPage()) return;

    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var node, anchor = null, total = null;
    while ((node = walker.nextNode())) {
      if (node.nodeValue.indexOf('Celkom za tovar') !== -1) {
        var container = node.parentElement.closest('tr, div, table, section') || node.parentElement;
        var matches = container.textContent.match(/([\d\s.,]+)\s?€/g);
        if (matches && matches.length) {
          total = priceOf(matches[matches.length - 1]);
          anchor = container;
        }
        break;
      }
    }
    if (total === null || !anchor) return;

    var remaining = FREE_SHIP_THRESHOLD - total;
    var pct = Math.min(100, Math.round((total / FREE_SHIP_THRESHOLD) * 100));
    var reached = remaining <= 0;

    var message = reached
      ? '<strong>Gratulujeme, máte dopravu zadarmo!</strong>'
      : 'Do dopravy zadarmo vám chýba <strong>' + remaining.toFixed(2).replace('.', ',') + ' €</strong>';

    var html =
      '<div class="ps-freeship-bar' + (reached ? ' is-reached' : '') + '">' +
        message +
        '<div class="ps-freeship-track"><div class="ps-freeship-fill" style="width:' + pct + '%"></div></div>' +
      '</div>';

    var existing = document.querySelector('.ps-freeship-bar');
    if (existing) {
      existing.outerHTML = html;
    } else {
      anchor.insertAdjacentHTML('beforebegin', html);
    }
  }

  // --- 2) Trust badges pri CTA (PDP a checkout) -----------------------------
  function trustBadges() {
    if (document.querySelector('.ps-trust-badges')) return;
    var btn = findByText('button, a, input[type="submit"]', ['do košíka', 'pokračovať']);
    if (!btn) return;

    var html =
      '<div class="ps-trust-badges">' +
        '<span>Doprava zadarmo nad ' + FREE_SHIP_THRESHOLD + ' €</span>' +
        '<span>Vrátenie tovaru do 14 dní</span>' +
        '<span>Zabezpečená platba</span>' +
        '<span>Podpora ' + SUPPORT_PHONE + '</span>' +
      '</div>';

    (btn.closest('form, div, section') || btn.parentElement).insertAdjacentHTML('afterend', html);
  }

  // --- 3) Sticky lišta cena + "Do košíka" (PDP, mobil/tablet) ---------------
  function stickyBuyBar() {
    if (isCartPage() || document.querySelector('.ps-sticky-buy')) return;
    var btn = findByText('button, a, input[type="submit"]', ['do košíka']);
    if (!btn) return;

    var priceMatch = document.body.textContent.match(/(\d[\d\s]*,\d{2})\s?€/);
    var price = priceMatch ? priceMatch[1] + ' €' : '';

    var bar = document.createElement('div');
    bar.className = 'ps-sticky-buy';
    bar.innerHTML =
      '<span class="ps-sticky-price">' + price + '</span>' +
      '<button type="button">Do košíka</button>';
    document.body.appendChild(bar);

    bar.querySelector('button').addEventListener('click', function () {
      btn.click();
    });

    window.addEventListener('scroll', function () {
      bar.classList.toggle('is-visible', btn.getBoundingClientRect().bottom < 0);
    });
  }

  // --- Spustenie -------------------------------------------------------------
  function run() {
    freeShippingBar();
    trustBadges();
    stickyBuyBar();
  }

  document.addEventListener('DOMContentLoaded', run);
  // Shoptet vie prepočítať košík cez AJAX bez reloadu stránky -> sledujeme zmeny DOM
  new MutationObserver(run).observe(document.body, { childList: true, subtree: true });
})();
