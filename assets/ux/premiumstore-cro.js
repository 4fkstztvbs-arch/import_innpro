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

  // Hlavné menu (#navigation) má tisíce odkazov (celý strom kategórií +
  // značky) a je MIMO #content - hľadanie textu preto obmedzujeme na
  // #content, nech sa táto obrovská vetva DOM vôbec neprehľadáva (výkon).
  function getSearchRoot() {
    return document.getElementById('content') || document.body;
  }

  // excludeSelector: vynechá prvky vnútri napr. #cart-widget (vysúvacie
  // mini-okno košíka), ktoré má vlastné tlačidlo "Pokračovať do košíka" a
  // inak by ho hľadanie podľa textu omylom považovalo za checkout tlačidlo.
  function findByText(selector, words, excludeSelector) {
    var els = getSearchRoot().querySelectorAll(selector);
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

  function supportBlockHtml(extraClass) {
    var phoneDigits = SUPPORT_PHONE.replace(/\s+/g, '');
    return (
      '<div class="ps-header-support' + (extraClass ? ' ' + extraClass : '') + '">' +
        '<div class="ps-header-avatar">PS</div>' +
        '<div class="ps-header-support-text">' +
          '<a href="tel:' + phoneDigits + '">' + phoneDigits + '</a>' +
          '<span class="ps-header-support-hours">Po–Pia 9:00–17:00</span>' +
        '</div>' +
      '</div>'
    );
  }

  // Mobil: tlačidlo "Menu" pred logom (ikonka + popisok pod ňou), podľa
  // vzoru denatura.cz. NEPRESÚVA skutočné hamburger tlačidlo (to by
  // rozbilo natívne display:none/ikonku/otváranie - vid. komentár pri
  // headerSupportBlock vyššie) - namiesto toho vytvorí VLASTNÉ tlačidlo,
  // ktoré len "prepošle" klik na skutočné tlačidlo. Pôvodné tlačidlo sa
  // v rade ikoniek skryje cez CSS, nech tam nie je duplicitne.
  function menuTrigger() {
    if (document.querySelector('.ps-menu-trigger')) return;
    var wrapper = document.querySelector('#header .header-top-wrapper');
    var realHamburger = document.querySelector('#header .navigation-buttons a[data-target="navigation"]');
    if (!wrapper || !realHamburger) return;

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'ps-menu-trigger';
    btn.setAttribute('aria-label', 'Menu');
    btn.innerHTML =
      '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
        '<line x1="3" y1="6" x2="21" y2="6"></line>' +
        '<line x1="3" y1="12" x2="21" y2="12"></line>' +
        '<line x1="3" y1="18" x2="21" y2="18"></line>' +
      '</svg>' +
      '<span class="ps-menu-trigger-label">Menu</span>';

    btn.addEventListener('click', function () {
      realHamburger.click();
      btn.classList.toggle('is-open');
    });

    wrapper.insertBefore(btn, wrapper.firstChild);
  }

  // Mobil: kópia PS bloku (avatar+telefón+hodiny) do vysúvacieho menu
  // (#navigation .navigationActions), podľa vzoru denatura.cz. Čisto
  // informačný blok (len tel: odkaz) - kópia HTML je v poriadku, na
  // rozdiel od Prihlásenia nemá vlastné Shoptet event-listenery.
  function mobileMenuSupportBlock() {
    // Blok sa vkladá AFTER .navigationActions (ako súrodenec, nie
    // potomok) - kontrola preto musí hľadať cez triedu, ktorá je
    // unikátna pre toto miesto, nie cez ".navigationActions .ps-..."
    // (descendant selektor by nikdy nenašiel súrodenca a spôsobil by
    // opakované vkladanie duplikátov pri každom behu run()).
    if (document.querySelector('.ps-header-support--mobile-menu')) return;
    var actions = document.querySelector('#navigation .navigationActions');
    if (!actions) return;
    actions.insertAdjacentHTML('afterend', supportBlockHtml('ps-header-support--mobile-menu'));
  }

  function headerSupportBlock() {
    if (document.querySelector('#header .navigation-buttons .ps-header-support')) return;
    var navButtons = document.querySelector('#header .navigation-buttons');
    if (!navButtons) return;
    var html = supportBlockHtml();
    // Vkladá sa DOVNÚTRA .navigation-buttons (nie vedľa neho ako nový
    // súrodenec) - #header .header-top-wrapper>div má flex-basis:33.33%
    // na každé priame dieťa, takže samostatný 4. stĺpec by pretiekol
    // 100% šírky a vynútil zalomenie riadku hlavičky.
    navButtons.insertAdjacentHTML('afterbegin', html);
  }

  // --- 2) Trust badges pri CTA (len checkout) --------------------------------
  // Na PDP sa už NEPOUŽÍVA - nahradené natívnym Shoptet blokom "Konkurenčné
  // výhody" (ikony pod tlačidlom Do košíka), ktorý vyzerá lepšie a je
  // spravovateľný priamo v administrácii. Tu ostáva len pre checkout krok.
  function trustBadges() {
    if (document.querySelector('.ps-trust-badges')) return;
    if (getPdpForm()) return; // na PDP zámerne nič - nahradené natívnym blokom

    var checkoutBtn = findByText('button, a, input[type="submit"]', ['pokračovať'], '#cart-widget');
    var anchor = checkoutBtn ? (checkoutBtn.closest('form, div, section') || checkoutBtn.parentElement) : null;
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
    menuTrigger();
    mobileMenuSupportBlock();
    trustBadges();
    stickyBuyBar();
    deemphasizeSecondaryActions();
    // freeShippingBar(); // zatiaľ vypnuté, pozri poznámku vyššie
  }

  // run() sa NESMIE spúšťať synchrónne pri každej jednotlivej zmene DOM -
  // stránka má obrovské menu a pri načítaní beží veľa mutácií naraz
  // (obrázky, reklamy...), čo bez debounce mohlo zamraziť hlavné vlákno.
  // Počkáme 200ms od poslednej zmeny a spustíme run() len raz.
  var _runTimer = null;
  function scheduleRun() {
    if (_runTimer) clearTimeout(_runTimer);
    _runTimer = setTimeout(run, 200);
  }

  document.addEventListener('DOMContentLoaded', run);
  // Shoptet vie prepočítať košík cez AJAX bez reloadu stránky -> sledujeme zmeny DOM
  new MutationObserver(scheduleRun).observe(document.body, { childList: true, subtree: true });
})();
