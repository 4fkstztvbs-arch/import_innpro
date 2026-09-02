/*
 * PremiumStore.sk – UX/CRO doplnky pre Shoptet (šablóna Disco)
 * Nahrané do Shoptetu ako: <script src="https://4fkstztvbs-arch.github.io/import_innpro/assets/ux/premiumstore-cro.js?v=N"></script>
 * (Design -> Rozšírené nastavenia -> Vlastný HTML kód -> pätička, tesne pred </body>)
 *
 * Zodpovedajúce CSS patrí do hlavičky (Design -> Vlastné CSS), pozri
 * assets/ux/premiumstore-cro.css v tomto istom priečinku.
 *
 * Selektory nižšie sú overené priamo z reálneho DOM premiumstore.sk
 * (Shoptet Disco, šablóna "template-13"):
 *   - #product-detail-form            ... existuje LEN na skutočnej PDP
 *   - meta[itemprop="name"] v .p-detail ... názov produktu
 *   - .price-final-holder             ... zobrazená cena
 *   - [data-testid="buttonAddToCart"] ... hlavné tlačidlo Do košíka
 *   - [data-testid="productDetailActionIcons"] ... riadok Tlač/Opýtať sa/Strážiť/Zdieľať
 * Ak Shoptet tieto triedy/atribúty v budúcnosti zmení pri aktualizácii šablóny,
 * treba selektory prekontrolovať v Inšpektore a upraviť tu.
 */
(function () {
  'use strict';

  // --- Nastavenia ---------------------------------------------------------
  var FREE_SHIP_THRESHOLD = 100; // € – zatiaľ nepoužité (freeShippingBar je vypnutý), pripravené na neskôr
  var SUPPORT_PHONE = '+421 48 4151999';

  // --- Pomocné funkcie -----------------------------------------------------
  function priceOf(text) {
    if (!text) return null;
    var m = text.replace(/\s/g, '').match(/([\d.,]+)\s?€/);
    if (!m) return null;
    return parseFloat(m[1].replace(/\./g, '').replace(',', '.'));
  }

  // excludeSelector: vynechá prvky vnútri napr. #cart-widget (vysúvacie
  // mini-okno košíka), ktoré má vlastné tlačidlo "Pokračovať do košíka" a
  // inak by ho hľadanie podľa textu omylom považovalo za checkout tlačidlo.
  function findByText(selector, words, excludeSelector) {
    var els = document.querySelectorAll(selector);
    for (var i = 0; i < els.length; i++) {
      if (excludeSelector && els[i].closest(excludeSelector)) continue;
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

  // #product-detail-form existuje len raz, výhradne na skutočnej stránke
  // produktu (súvisiace produkty/karty v zoznamoch ho nepoužívajú).
  function getPdpForm() {
    return document.getElementById('product-detail-form');
  }

  // --- 1) Progress bar "doprava zadarmo od X €" (košík) --------------------
  // Zatiaľ VYPNUTÉ (nezavolané z run()) - hranica FREE_SHIP_THRESHOLD nie je
  // ešte potvrdená s reálnym nastavením dopravy. Zapnúť neskôr pridaním
  // freeShippingBar() do run() nižšie.
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

  // --- 1b) Hlavička: presun Prihlásenie + support blok (PS + telefón + hodiny) ---
  // Beží na každej stránke (nie len PDP). Presúva SKUTOČNÝ existujúci prvok
  // #header .top-navigation-tools .top-nav-button-login (nie kópiu), aby
  // ostali zachované všetky Shoptet event-listenery na toggle-window/
  // data-target="login".
  function relocateLoginButton() {
    if (document.querySelector('.navigation-buttons .top-nav-button-login')) return;
    var loginBtn = document.querySelector('.top-navigation-tools .top-nav-button-login');
    var navButtons = document.querySelector('#header .navigation-buttons');
    if (loginBtn && navButtons) {
      navButtons.insertBefore(loginBtn, navButtons.firstChild);
    }
  }

  function headerSupportBlock() {
    if (document.querySelector('.ps-header-support')) return;
    var navButtons = document.querySelector('#header .navigation-buttons');
    if (!navButtons) return;
    var phoneDigits = SUPPORT_PHONE.replace(/\s+/g, '');
    var html =
      '<div class="ps-header-support">' +
        '<div class="ps-header-avatar">PS</div>' +
        '<div class="ps-header-support-text">' +
          '<a href="tel:' + phoneDigits + '">' + phoneDigits + '</a>' +
          '<span class="ps-header-support-hours">Po–Pia 9:00–17:00</span>' +
        '</div>' +
      '</div>';
    navButtons.insertAdjacentHTML('beforebegin', html);
  }

  // --- 2) Trust badges pri CTA (PDP a checkout) -----------------------------
  function trustBadges() {
    if (document.querySelector('.ps-trust-badges')) return;

    var anchor = null;
    var pdpForm = getPdpForm();
    if (pdpForm) {
      anchor = pdpForm.querySelector('.add-to-cart') || pdpForm.querySelector('[data-testid="buttonAddToCart"]');
    } else {
      var checkoutBtn = findByText('button, a, input[type="submit"]', ['pokračovať'], '#cart-widget');
      anchor = checkoutBtn ? (checkoutBtn.closest('form, div, section') || checkoutBtn.parentElement) : null;
    }
    if (!anchor) return;

    var phoneDigits = SUPPORT_PHONE.replace(/\s+/g, '');
    var html =
      '<div class="ps-trust-badges">' +
        '<span>Vrátenie tovaru do 14 dní</span>' +
        '<span>Zabezpečená platba</span>' +
        '<span>Podpora <a href="tel:' + phoneDigits + '">' + phoneDigits + '</a></span>' +
      '</div>';

    anchor.insertAdjacentHTML('afterend', html);
  }

  // --- 3) Sticky lišta názov + cena + "Do košíka" (PDP, mobil/tablet) -------
  function stickyBuyBar() {
    if (document.querySelector('.ps-sticky-buy')) return;
    var form = getPdpForm();
    if (!form) return;

    var btn = form.querySelector('[data-testid="buttonAddToCart"]') || form.querySelector('.add-to-cart-button');
    if (!btn) return;

    var nameMeta = document.querySelector('.p-detail meta[itemprop="name"]');
    var title = nameMeta ? (nameMeta.getAttribute('content') || '') : '';
    if (!title) {
      var h1 = document.querySelector('h1');
      title = h1 ? h1.textContent.trim() : '';
    }

    var priceEl = form.querySelector('.price-final-holder');
    var price = priceEl ? priceEl.textContent.trim() : '';

    var bar = document.createElement('div');
    bar.className = 'ps-sticky-buy';
    bar.innerHTML =
      '<span class="ps-sticky-title">' + title.replace(/</g, '&lt;') + '</span>' +
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

  // --- 4) Zoslabenie riadku Tlač / Opýtať sa / Strážiť / Zdieľať (PDP) ------
  function deemphasizeSecondaryActions() {
    var el = document.querySelector('[data-testid="productDetailActionIcons"]');
    if (el) el.classList.add('ps-secondary-actions');
  }

  // --- Spustenie -------------------------------------------------------------
  function run() {
    relocateLoginButton();
    headerSupportBlock();
    trustBadges();
    stickyBuyBar();
    deemphasizeSecondaryActions();
    // freeShippingBar(); // zatiaľ vypnuté, pozri poznámku vyššie
  }

  document.addEventListener('DOMContentLoaded', run);
  // Shoptet vie prepočítať košík cez AJAX bez reloadu stránky -> sledujeme zmeny DOM
  new MutationObserver(run).observe(document.body, { childList: true, subtree: true });
})();
