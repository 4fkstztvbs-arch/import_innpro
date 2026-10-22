/* PremiumStore – spoločný skript (generované: node scripts/build-ux-js-bundle.js). Neupravovať ručne, upravuj zdrojové súbory.
   Zdroje: premiumstore-cro.js, premiumstore-pdp-final.js, premiumstore-pdp-mobile-buybar.js, premiumstore-pdp-conversion-20261004.js, premiumstore-pdp-polish-20261008.js, premiumstore-pdp-soldout-20261008.js, premiumstore-audit-fixes-20261003.js, premiumstore-home-desktop-20261009.js, premiumstore-home-v2-20261012.js, premiumstore-home-categories-mobile.js, premiumstore-checkout-20261009.js, premiumstore-category-20261009.js, premiumstore-search-assist-20261009.js, premiumstore-search-20261009.js, premiumstore-search-bestseller-20261016.js, premiumstore-trust-20261009.js, premiumstore-checkout-pickup-20261016.js, premiumstore-pdp-pilot-20261016.js, premiumstore-pdp-avail-20261017.js, premiumstore-mobile-nav-20261022.js */

/* ---- premiumstore-cro.js ---- */
try {
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
        '<div class="ps-header-avatar"><img src="https://4fkstztvbs-arch.github.io/import_innpro/assets/ux/support-person.jpg" alt="" width="56" height="56"></div>' +
        '<div class="ps-header-support-text">' +
          '<a href="tel:' + phoneDigits + '">' + SUPPORT_PHONE + '</a>' +
          '<span class="ps-header-support-hours">Po–Pia 9:00–17:00</span>' +
        '</div>' +
        '<div class="ps-header-support-text">' +
          '<a href="mailto:obchod@premiumstore.sk">obchod@premiumstore.sk</a>' +
          '<span class="ps-header-support-hours">Odpovieme čo najskôr</span>' +
        '</div>' +
      '</div>'
    );
  }

  function menuTrigger() {
    if (document.querySelector('.ps-menu-trigger')) return;
    // Na checkoute (ordering-process) Shoptet zámerne nerenderuje obsah
    // #navigation (zákazník nemá odchádzať prezerať kategórie počas
    // objednávky) - tlačidlo Menu by tam otváralo prázdne menu (skryté aj
    // cez CSS, pozri .header-bottom v premiumstore-cro.css). Zvyšok
    // hlavičky (telefón, prihlásenie) ostáva na checkoute nezmenený.
    if (document.body.classList.contains('ordering-process')) return;
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

  // Desktopové menu Produkty. Natívny strom zostáva na mobile aj ako fallback.
  function catalogMenu() {
    if (document.querySelector('.ps-catalog-nav') || document.body.classList.contains('ordering-process')) return;
    var nativeNav = document.querySelector('#header #navigation');
    var wrapper = document.querySelector('#header .header-bottom-wrapper');
    if (!nativeNav || !wrapper) return;

    // ID hlavných kategórií z aktuálneho Shoptet menu; názvy a URL čítame z DOM.
    // Pri pridaní ďalšej hlavnej kategórie doplň jej ID (ikona môže zostať predvolená).
    var icons = {
      '49635': '<path d="M6 18V5h20v13M4 18h24v12H4zM10 25h12M12 5v6h8V5M16 11v5"/>',
      '49644': '<ellipse cx="10" cy="10" rx="3" ry="4"/><ellipse cx="22" cy="10" rx="3" ry="4"/><ellipse cx="4" cy="17" rx="2" ry="3"/><ellipse cx="28" cy="17" rx="2" ry="3"/><path d="M8 26c0-5 5-10 8-10s8 5 8 10c0 5-5 2-8 2s-8 3-8-2z"/>',
      '49659': '<rect x="3" y="5" width="22" height="16" rx="2"/><path d="M10 27h10M15 21v6"/><rect x="23" y="15" width="7" height="14" rx="1"/>',
      '49647': '<path d="M21 3a8 8 0 0 0-9 10L3 24a3 3 0 0 0 5 5l11-10a8 8 0 0 0 10-9l-6 6-6-6z"/>',
      '49668': '<path d="M16 28S3 20 3 10a7 7 0 0 1 13-3 7 7 0 0 1 13 3c0 10-13 18-13 18zM6 16h6l3-6 3 11 3-5h5"/>',
      '49638': '<path d="M4 16l3-9h18l3 9M3 16h26v10H3zM7 26v3M25 26v3M7 21h3M22 21h3"/>',
      '49650': '<rect x="6" y="2" width="20" height="28" rx="2"/><circle cx="16" cy="19" r="7"/><path d="M6 9h20M10 6h1M15 6h1M10 19c4-4 8 4 12 0"/>',
      '49641': '<path d="M2 28L13 6l8 14 4-7 6 15H2zM9 14l4 3 4-3"/><circle cx="25" cy="5" r="3"/>',
      '49662': '<rect x="4" y="2" width="17" height="28" rx="2"/><circle cx="12.5" cy="20" r="5.5"/><circle cx="12.5" cy="8" r="2"/><path d="M26 9v14M30 5v22"/>',
      '49653': '<path d="M10 22C-1 11 7 2 16 2s17 9 6 20M10 22h12v5H10zM13 30h6M16 9v10M12 12l4 3 4-3"/>',
      '49656': '<rect x="3" y="7" width="24" height="20" rx="2"/><path d="M27 13h3v8h-3M17 10l-6 9h7l-3 5"/>',
      '49665': '<rect x="2" y="5" width="28" height="20" rx="2"/><path d="M10 30h12M16 25v5M13 10l9 5-9 5z"/>'
    };
    var deliveryLink = nativeNav.querySelector('.menu-item-39 > a[href="/obchodne-podmienky/"]');
    if (deliveryLink) {
      deliveryLink.setAttribute('href', '/doprava-a-platba/');
      deliveryLink.textContent = 'Doprava a platba';
    }
    var items = Array.prototype.slice.call(nativeNav.querySelectorAll('.menu-level-1 > li'));
    var categories = items.filter(function (item) {
      return Object.keys(icons).some(function (id) { return item.classList.contains('menu-item-' + id); });
    });
    // Nezakryť natívne menu, ak sa zmení jeho štruktúra alebo chýbajú kategórie.
    if (categories.length !== Object.keys(icons).length) return;

    // Shoptet neposiela obrázok koreňovej kategórie v každom type menu.
    // Voliteľná JSON mapa v HTML hlavičke: #ps-category-images, kľúč = ID kategórie.
    // Overený obrázok hlavnej kategórie z jej Shoptet og:image (2026-09-15).
    // Pri zmene URL obrázka aktualizovať mapu alebo prekryť cez #ps-category-images.
    var categoryImages = { '49635': 'https://www.premiumstore.sk/user/categories/orig/bamboo-x1-carbon-combo.png' };
    var imageConfig = document.getElementById('ps-category-images');
    if (imageConfig) {
      try { Object.assign(categoryImages, JSON.parse(imageConfig.textContent) || {}); } catch (ignore) { /* Predvolené obrázky a ikony zostanú. */ }
    }
    // Index vytvoríme len raz; pri prechode mobilným menu neprehľadávame celý strom.
    var imageByPath = Object.create(null);
    Array.prototype.forEach.call(document.querySelectorAll('#navigation a.menu-image, .subcategories a'), function (link) {
      var img = link.querySelector('img');
      if (img && link.getAttribute('href')) imageByPath[new URL(link.getAttribute('href'), location.href).pathname] = img;
    });
    function categoryImage(item) {
      var match = item.className.match(/(?:^|\s)menu-item-(\d+)(?:\s|$)/);
      var configured = match && categoryImages[match[1]];
      // Len obrázok PRÍSLUŠNEJ kategórie, nie prvého potomka.
      var nativeImage = item.querySelector(':scope > a.menu-image img, :scope > div > a.menu-image img');
      var sourceLink = categoryAnchor(item);
      if (!nativeImage && sourceLink) {
        nativeImage = imageByPath[new URL(sourceLink.getAttribute('href'), location.href).pathname] || null;
      }
      var source = configured || (nativeImage && (nativeImage.getAttribute('data-src') || nativeImage.getAttribute('src')));
      if (typeof source !== 'string' || !source.trim() || /(?:\/folder\.svg|\/no-image|\/noimage)/i.test(source)) return null;
      try {
        var url = new URL(source, location.href);
        return /^https?:$/.test(url.protocol) ? url.href : null;
      } catch (ignore) { return null; }
    }
    function applyCategoryImage(holder, item) {
      var source = categoryImage(item);
      if (!source) return;
      var img = document.createElement('img');
      img.alt = ''; // Názov je už v rovnakom odkaze vedľa obrázka.
      img.width = 100;
      img.height = 100;
      img.loading = 'lazy';
      img.decoding = 'async';
      img.addEventListener('load', function () { holder.classList.add('ps-category-image-loaded'); });
      img.addEventListener('error', function () { img.remove(); holder.classList.remove('ps-category-image-loaded'); });
      img.src = source;
      holder.appendChild(img);
    }

    var nav = document.createElement('nav');
    nav.className = 'ps-catalog-nav';
    nav.setAttribute('aria-label', 'Kategórie a informácie');
    var trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'ps-catalog-trigger';
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-controls', 'ps-catalog-panel');
    trigger.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M4 6h16M4 12h11M4 18h6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg><span>Produkty</span>';
    nav.appendChild(trigger);
    var panel = document.createElement('div');
    panel.id = 'ps-catalog-panel';
    panel.className = 'ps-catalog-panel';
    panel.hidden = true;
    var list = document.createElement('ul');
    list.className = 'ps-catalog-grid';
    categories.forEach(function (item) {
      var source = item.querySelector('a');
      if (!source) return;
      var id = Object.keys(icons).filter(function (key) { return item.classList.contains('menu-item-' + key); })[0];
      var li = document.createElement('li');
      var link = document.createElement('a');
      link.className = 'ps-catalog-card';
      link.setAttribute('href', source.getAttribute('href'));
      var illustration = document.createElement('span');
      illustration.className = 'ps-catalog-icon';
      illustration.innerHTML = '<svg viewBox="0 0 32 32" width="64" height="64" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + icons[id] + '</svg>';
      var label = document.createElement('span');
      label.className = 'ps-catalog-label';
      label.textContent = source.textContent.trim();
      applyCategoryImage(illustration, item);
      link.appendChild(illustration);
      link.appendChild(label);
      li.appendChild(link);
      list.appendChild(li);
    });
    panel.appendChild(list);
    nav.appendChild(panel);
    items.filter(function (item) { return categories.indexOf(item) === -1; }).forEach(function (item) {
      var source = item.querySelector('a');
      if (!source) return;
      var link = document.createElement('a');
      link.className = 'ps-catalog-info';
      link.setAttribute('href', source.getAttribute('href'));
      link.textContent = source.textContent.trim();
      link.addEventListener('pointerenter', function () { if (finePointer.matches) close(false); });
      link.addEventListener('focus', function () { close(false); });
      nav.appendChild(link);
    });
    var backdrop = document.createElement('div');
    backdrop.className = 'ps-catalog-backdrop';
    backdrop.setAttribute('aria-hidden', 'true');
    var desktop = window.matchMedia('(min-width: 992px)');
    var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    var closeTimer;
    function open() {
      clearTimeout(closeTimer);
      if (!desktop.matches) return;
      panel.hidden = false;
      trigger.setAttribute('aria-expanded', 'true');
      nav.classList.add('is-open');
      wrapper.classList.add('ps-catalog-active');
      document.body.classList.add('ps-catalog-open');
      // Pri nízkom okne zostáva celý panel dostupný vnútorným posúvaním.
      panel.style.maxHeight = Math.max(120, window.innerHeight - panel.getBoundingClientRect().top - 16) + 'px';
    }
    function close(returnFocus) {
      clearTimeout(closeTimer);
      panel.hidden = true;
      trigger.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
      wrapper.classList.remove('ps-catalog-active');
      document.body.classList.remove('ps-catalog-open');
      if (returnFocus) trigger.focus();
    }
    function delayedClose() {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(function () {
        if (!panel.contains(document.activeElement)) close(false);
      }, 180);
    }
    trigger.addEventListener('pointerenter', function () { if (finePointer.matches) open(); });
    trigger.addEventListener('click', function (event) {
      if (panel.hidden || (finePointer.matches && event.detail > 0)) open();
      else close(false);
    });
    trigger.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowDown') { event.preventDefault(); open(); list.querySelector('a').focus(); }
    });
    nav.addEventListener('pointerleave', delayedClose);
    panel.addEventListener('pointerenter', function () { clearTimeout(closeTimer); });
    nav.addEventListener('focusout', function (event) { if (!nav.contains(event.relatedTarget)) close(false); });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !panel.hidden) { event.preventDefault(); close(true); }
    });
    document.addEventListener('pointerdown', function (event) { if (!nav.contains(event.target)) close(false); });
    window.addEventListener('resize', function () { close(false); });
    window.addEventListener('scroll', function () { if (!panel.hidden) close(false); }, { passive: true });
    // Mobil: natívny Shoptet drawer a jeho otváranie zostávajú zachované.
    // Meníme iba obsah; podkategórie sa čítajú z pôvodného stromu na požiadanie.
    var mobile = document.createElement('div');
    mobile.className = 'ps-mobile-catalog';
    var mobileTrail = [];
    function updateTabletMenuTop() {
      if (window.innerWidth < 768 || window.innerWidth >= 992) return;
      var header = document.getElementById('header');
      var top = Math.max(0, Math.min(window.innerHeight - 100, header.getBoundingClientRect().bottom));
      header.style.setProperty('--ps-tablet-menu-top', top + 'px');
    }
    window.addEventListener('resize', function () {
      if (desktop.matches && document.body.classList.contains('navigation-window-visible')) {
        var toggle = document.querySelector('#header .navigation-buttons a[data-target="navigation"]');
        if (toggle) toggle.click();
      }
      updateTabletMenuTop();
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !desktop.matches && document.body.classList.contains('navigation-window-visible')) {
        var toggle = document.querySelector('#header .navigation-buttons a[data-target="navigation"]');
        if (toggle) toggle.click();
        var button = document.querySelector('.ps-menu-trigger');
        if (button) button.focus();
      }
    });

    function categoryAnchor(item) {
      return item.querySelector(':scope > a:not(.menu-image), :scope > div > a:not(.menu-image)');
    }
    function categoryChildren(item) {
      var ul = item.querySelector(':scope > ul, :scope > div > ul');
      return ul ? Array.prototype.slice.call(ul.children).filter(function (el) { return el.tagName === 'LI'; }) : [];
    }
    function mobileScreen(focusBack) {
      mobile.replaceChildren();
      var screen = mobileTrail[mobileTrail.length - 1];
      var heading = document.createElement('button');
      heading.type = 'button';
      heading.className = 'ps-mobile-heading';
      if (screen) {
        heading.textContent = '‹  ' + screen.title;
        heading.setAttribute('aria-label', 'Späť z kategórie ' + screen.title);
        heading.addEventListener('click', function () { mobileTrail.pop(); mobileScreen(true); });
      } else {
        heading.textContent = 'Produkty  ›';
        heading.setAttribute('aria-label', 'Zobraziť kategórie produktov');
        heading.addEventListener('click', function () {
          mobileTrail.push({ title: 'Produkty', items: categories });
          mobileScreen(true);
        });
      }
      mobile.appendChild(heading);
      var rows = document.createElement('ul');
      rows.className = 'ps-mobile-rows';
      if (screen && screen.href) {
        var all = document.createElement('li');
        var allLink = document.createElement('a');
        allLink.href = screen.href;
        allLink.textContent = 'Všetko v kategórii';
        allLink.className = 'ps-mobile-all';
        all.appendChild(allLink);
        rows.appendChild(all);
      }
      (screen ? screen.items : items.filter(function (item) { return categories.indexOf(item) === -1; })).forEach(function (item) {
        var source = categoryAnchor(item);
        if (!source) return;
        var row = document.createElement('li');
        var link = document.createElement('a');
        link.href = source.getAttribute('href');
        var iconId = Object.keys(icons).filter(function (id) { return item.classList.contains('menu-item-' + id); })[0];
        if (screen && (iconId || categoryImage(item))) {
          var icon = document.createElement('span');
          icon.className = 'ps-mobile-icon';
          icon.innerHTML = '<svg viewBox="0 0 32 32" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (icons[iconId] || '<rect x="4" y="6" width="24" height="20" rx="2"/>') + '</svg>';
          applyCategoryImage(icon, item);
          link.appendChild(icon);
        }
        var text = document.createElement('span');
        text.textContent = source.textContent.trim();
        link.appendChild(text);
        row.appendChild(link);
        // Informačné odkazy (napr. Značky) ostávajú priame odkazy.
        var children = screen ? categoryChildren(item) : [];
        if (children.length) {
          var next = document.createElement('button');
          next.type = 'button';
          next.className = 'ps-mobile-next';
          next.textContent = '›';
          next.setAttribute('aria-label', 'Podkategórie: ' + text.textContent);
          next.addEventListener('click', function () {
            mobileTrail.push({ title: text.textContent, href: link.getAttribute('href'), items: children });
            mobileScreen(true);
          });
          row.appendChild(next);
        }
        rows.appendChild(row);
      });
      mobile.appendChild(rows);
      if (focusBack) heading.focus({ preventScroll: true });
      var scrollContainer = nativeNav.querySelector('.navigation-in');
      if (scrollContainer) scrollContainer.scrollTop = 0;
      nativeNav.scrollTop = 0;
    }
    mobileScreen(false);
    var nativeInner = nativeNav.querySelector('.navigation-in');
    if (nativeInner) {
      nativeInner.insertBefore(mobile, nativeInner.firstChild);
      nativeNav.classList.add('ps-mobile-catalog-ready');
      var menuButton = document.querySelector('.ps-menu-trigger');
      if (menuButton) {
        menuButton.setAttribute('aria-controls', 'navigation');
        function menuState() {
          var isMenuOpen = document.body.classList.contains('navigation-window-visible');
          menuButton.setAttribute('aria-expanded', String(isMenuOpen));
          if (isMenuOpen) updateTabletMenuTop();
          if (!isMenuOpen && mobileTrail.length) { mobileTrail = []; mobileScreen(false); }
        }
        menuState();
        new MutationObserver(menuState).observe(document.body, { attributes: true, attributeFilter: ['class'] });
      }
    }

    backdrop.addEventListener('click', function () {
      if (window.matchMedia('(max-width: 991px)').matches && document.body.classList.contains('navigation-window-visible')) {
        var nativeToggle = document.querySelector('#header .navigation-buttons a[data-target="navigation"]');
        if (nativeToggle) nativeToggle.click();
      }
    });
    wrapper.insertBefore(nav, nativeNav);
    document.body.appendChild(backdrop);
    wrapper.classList.add('ps-catalog-ready');
  }

  // --- 6) Presun tlačidla "Pokračovať" (.next-step) do karty zhrnutia
  // objednávky (checkout, krok "Doprava & platba") ---------------------------
  // Natívne je .next-step samostatný súrodenec za .order-summary. Aj po
  // vynulovaní všetkých okolitých marginov/box-shadow cez CSS medzi kartou a
  // tlačidlom zostávala medzera (pravdepodobne ďalšie staršie pravidlo v
  // administrácii, ktoré odtiaľto nevidno) - najspoľahlivejšie riešenie je
  // presunúť SKUTOČNÝ element (nie kópiu) dovnútra karty ako posledné
  // dieťa, aby vôbec nemohol byť oddelený marginom medzi súrodencami.
  // Zachováva submit na #order-form. Zodpovedajúce CSS je v
  // assets/ux/premiumstore-cro.css, sekcia "Checkout Doprava & platba".
  function relocateCheckoutNextStep() {
    var summaryBox = document.querySelector('#checkoutSidebar .order-summary-inner');
    var nextStep = document.querySelector('#checkoutSidebar .next-step');
    if (!summaryBox || !nextStep) return;
    if (nextStep.parentElement === summaryBox) return;
    summaryBox.appendChild(nextStep);
  }

  function renameContinueButton() {
    var span = document.querySelector('#checkoutSidebar #orderFormButton .order-button-text');
    if (!span) return;
    if (span.textContent.trim() === 'Pokračovať v objednávke') return;
    span.textContent = 'Pokračovať v objednávke';
  }

  // Kompaktná hlavička používa pôvodné ovládanie Shoptetu.
  function compactHeader() {
    var header = document.getElementById('header');
    if (!header || header.classList.contains('ps-compact-header') || document.body.classList.contains('ordering-process')) return;
    var top = header.querySelector('.header-top-wrapper');
    var bottom = header.querySelector('.header-bottom-wrapper');
    var catalog = header.querySelector('.ps-catalog-nav');
    var search = top && top.querySelector('.search');
    var buttons = top && top.querySelector('.navigation-buttons');
    if (!top || !bottom || !catalog || !search || !buttons) return;
    var searchPlaceholder = 'Čo hľadáte? Skúste značku, produkt alebo kód…';
    function applySearchPlaceholder() {
      var searchInput = search.querySelector('.search-input');
      if (searchInput && searchInput.placeholder !== searchPlaceholder) searchInput.placeholder = searchPlaceholder;
    }
    applySearchPlaceholder();
    new MutationObserver(applySearchPlaceholder).observe(search, { attributes: true, attributeFilter: ['placeholder'], childList: true, subtree: true });
    var login = buttons.querySelector('.top-nav-button-login');
    if (login && !login.getAttribute('aria-label')) login.setAttribute('aria-label', 'Prihlásenie');
    var phone = document.createElement('a');
    phone.className = 'ps-header-phone';
    phone.href = 'tel:' + SUPPORT_PHONE.replace(/\s+/g, '');
    phone.setAttribute('aria-label', 'Zavolať na ' + SUPPORT_PHONE);
    phone.innerHTML = '<svg viewBox="0 0 24 24" width="23" height="23" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3 4 4c-3 5 11 19 16 16l1-4-5-2-2 2a16 16 0 0 1-6-6l2-2Z"/></svg>';
    buttons.insertBefore(phone, buttons.firstChild);
    var desktop = window.matchMedia('(min-width: 992px)');
    function placeCatalog() {
      if (desktop.matches) top.insertBefore(catalog, search);
      else bottom.insertBefore(catalog, bottom.firstChild);
    }
    placeCatalog();
    desktop.addEventListener('change', placeCatalog);
    header.classList.add('ps-compact-header');
  }

  // Pätička zachová pôvodné bloky a ich metadata; doplní rozdelenie odkazov.
  function footerLayout() {
    var footer = document.getElementById('footer');
    var rows = footer && footer.querySelector('.footer-rows');
    if (!rows || rows.querySelector('.ps-footer-grid')) return;
    var articles = rows.querySelector('.custom-footer__articles');
    var contact = rows.querySelector('.custom-footer__contact');
    if (!articles || !contact) return;
    var holder = document.createElement('div');
    holder.innerHTML = "<div class=\"ps-footer-grid\">\n<section><h3>Nakupovanie</h3><ul>\n<li><a href=\"/doprava-a-platba/\">Doprava a platba</a></li>\n<li><a href=\"/moja-objednavka/\">Moja objednávka</a></li>\n<li><a href=\"https://www.premiumstore.sk/znacka/\">Značky</a></li>\n<li><a href=\"/kontakty/\">Pomoc s nákupom</a></li></ul></section>\n<section><h3>Sortiment</h3><ul>\n<li><a href=\"/pocitace-mobily-a-tablety/\">Počítače, mobily a tablety</a></li>\n<li><a href=\"/tv-foto-audio-video/\">TV, audio, video a foto</a></li>\n<li><a href=\"/domace-spotrebice/\">Domáce spotrebiče</a></li>\n<li><a href=\"/elektro-smart-home-a-osvetlenie/\">Smart Home a osvetlenie</a></li>\n<li><a href=\"/3d-tlac-a-digitalna-vyroba/\">3D tlač a digitálna výroba</a></li></ul></section>\n<section><h3>Užitočné informácie</h3><ul>\n<li><a href=\"/obchodne-podmienky/\">Obchodné podmienky</a></li>\n<li><a href=\"/podmienky-ochrany-osobnych-udajov/\">Ochrana osobných údajov</a></li>\n<li><a href=\"/kontakty/\">Kontakty</a></li></ul></section>\n<section class=\"ps-footer-help\"><h3>Poradíme vám</h3>\n<div class=\"ps-footer-person\"><img src=\"https://4fkstztvbs-arch.github.io/import_innpro/assets/ux/support-person.jpg\" alt=\"\" width=\"56\" height=\"56\" loading=\"lazy\" decoding=\"async\"><div><a href=\"tel:+421484151999\">+421 48 4151999</a><span>Po–Pia 9:00–17:00</span></div></div>\n<a href=\"mailto:obchod@premiumstore.sk\">obchod@premiumstore.sk</a><p>Odpovieme čo najskôr.</p></section>\n</div>";
    var grid = holder.firstElementChild;
    var originals = Array.prototype.slice.call(articles.querySelectorAll('a[href]'));
    var used = [];
    grid.querySelectorAll('ul a[href]').forEach(function (link) {
      var path = new URL(link.href, location.href).pathname;
      var source = originals.find(function (a) { return new URL(a.href, location.href).pathname === path; });
      if (source) {
        link.href = source.href;
        if (path !== '/kontakty/' && path !== '/podmienky-ochrany-osobnych-udajov/') link.textContent = source.textContent.trim();
        used.push(source);
      }
    });
    // Nové odkazy z administrácie sa nestratia: zobrazia sa v informačnom stĺpci.
    originals.filter(function (a) { return used.indexOf(a) === -1; }).forEach(function (a) {
      var li = document.createElement('li');
      li.appendChild(a.cloneNode(true));
      grid.querySelectorAll('section ul')[2].appendChild(li);
    });
    // Na mobile sú odkazy zbalené; kontakt zostáva stále viditeľný.
    var mobileFooter = window.matchMedia('(max-width: 991px)');
    var footerPanels = [];
    grid.querySelectorAll('section:not(.ps-footer-help)').forEach(function (section, index) {
      var heading = section.querySelector('h3');
      var list = section.querySelector('ul');
      if (!heading || !list) return;
      var label = document.createElement('span');
      label.className = 'ps-footer-label';
      label.textContent = heading.textContent;
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'ps-footer-toggle';
      button.setAttribute('aria-label', label.textContent);
      list.id = 'ps-footer-links-' + index;
      button.setAttribute('aria-controls', list.id);
      heading.textContent = '';
      heading.appendChild(label);
      heading.appendChild(button);
      section.classList.add('ps-footer-collapsible');
      var expanded = false;
      function sync() {
        var mobile = mobileFooter.matches;
        label.hidden = false;
        button.hidden = !mobile;
        button.setAttribute('aria-expanded', String(!mobile || expanded));
        list.hidden = mobile && !expanded;
      }
      button.addEventListener('click', function () {
        expanded = !expanded;
        sync();
      });
      footerPanels.push(sync);
      sync();
    });
    mobileFooter.addEventListener('change', function () {
      footerPanels.forEach(function (sync) { sync(); });
    });
    rows.insertBefore(grid, rows.firstChild);
    [articles, contact].forEach(function (el) { el.classList.add('ps-footer-source'); el.hidden = true; });
    var originalRow = articles.parentElement;
    if (originalRow === contact.parentElement && Array.prototype.every.call(originalRow.children, function (el) { return el.hidden || el.tagName === 'SCRIPT'; })) {
      originalRow.classList.add('ps-footer-source'); originalRow.hidden = true;
    }
  }

  // --- Popis kategórie --------------------------------------------------------
  function relocateCategoryDescription() {
    if (!document.body.classList.contains('type-category')) return;
    var main = document.querySelector('main');
    var content = main && main.querySelector('.category-content-wrapper');
    var perex = main && main.querySelector('.category-top > .category-perex');
    if (!content || !perex) return;
    // Rozcestník Vianočného osvetlenia (#psx-hub) má zostať nad produktmi.
    if (perex.querySelector('#psx-hub')) return;
    content.appendChild(perex);
  }

  // --- Navigácia k podkategóriám --------------------------------------------
  function keepCategoryTilesNearTop() {
    if (!document.body.classList.contains('type-category')) return;
    var main = document.querySelector('main');
    var categoryTop = main && main.querySelector('.category-top');
    var perex = main && main.querySelector('.category-content-wrapper > .category-perex');
    var nativeTiles = categoryTop && categoryTop.querySelector('.subcategories.with-image');
    if (!categoryTop || !perex || !nativeTiles || window.getComputedStyle(nativeTiles).display !== 'none') return;
    if (categoryTop.querySelector('.ps-grid')) return;

    var grid = perex.querySelector('.ps-grid');
    var tileSection = grid && grid.closest('section[id^="ps-cat-"]');
    var outerSection = tileSection && tileSection.parentElement && tileSection.parentElement.closest('section[id^="ps-cat-"]');
    var title = categoryTop.querySelector('.category-title');
    var heading = tileSection && tileSection.querySelector(':scope > .ps-head');
    if (!tileSection || !outerSection || tileSection === outerSection || !title || !heading || grid.parentElement !== tileSection) return;

    var intro = tileSection.querySelector(':scope > .ps-intro');
    var brands = tileSection.querySelector(':scope > .ps-brands');
    if (intro) outerSection.appendChild(intro);
    if (brands) outerSection.appendChild(brands);
    var oldWrapper = tileSection.parentElement;
    title.insertAdjacentElement('afterend', tileSection);
    if (oldWrapper && oldWrapper !== outerSection && oldWrapper.classList.contains('ps-intro') && !oldWrapper.children.length) {
      oldWrapper.remove();
    }
  }

  // --- Spustenie -------------------------------------------------------------
  function run() {
    relocateCategoryDescription();
    keepCategoryTilesNearTop();
    relocateLoginButton();
    headerSupportBlock();
    menuTrigger();
    catalogMenu();
    compactHeader();
    footerLayout();
    mobileMenuSupportBlock();
    relocateCheckoutNextStep();
    renameContinueButton();
    // freeShippingBar(); // zatiaľ vypnuté, pozri poznámku vyššie
  }

  // This script is loaded at the end of BODY, after the static markup it
  // enhances has been parsed. Run immediately, then do one bounded retry at
  // DOMContentLoaded in case Shoptet finishes adding a static enhancement host.
  run();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true });
  }

  // Only checkout summary controls can be replaced during Shoptet AJAX updates.
  // Keep the observer scoped there and avoid rerunning header, menu, PDP and
  // footer setup after unrelated page mutations.
  var checkoutSidebar = document.getElementById('checkoutSidebar');
  if (checkoutSidebar && window.MutationObserver) {
    var checkoutTimer = null;
    new MutationObserver(function () {
      clearTimeout(checkoutTimer);
      checkoutTimer = setTimeout(function () {
        relocateCheckoutNextStep();
        renameContinueButton();
      }, 80);
    }).observe(checkoutSidebar, { childList: true, subtree: true });
  }
})();

} catch (e) { if (window.console) console.error("PS bundle: premiumstore-cro.js", e); }

/* ---- premiumstore-pdp-final.js ---- */
try {
/*
 * =========================================================
 * PremiumStore.sk – PRODUCT DETAIL
 * FINAL STABLE VERSION
 * 2026-09-21
 *
 * FINAL baseline pred systematickou lokalizaciou produktov.
 * =========================================================
 */

(function () {
  'use strict';

  var BODY_CLASS = 'ps-pdp-v1';
  var BRAND_BASE_PATH =
    '/user/documents/upload/brand-';

  /* Značky, ktorých logo je skutočne nahrané (overené 2026-10-03).
     Ostatné nevolajú neexistujúci súbor (404 na každom detaile). */
  var BRANDS_WITH_LOGO = { 'bose': true };


  function getProductForm() {
    return document.getElementById(
      'product-detail-form'
    );
  }


  function isRealProductDetail() {
    return !!getProductForm();
  }


  function clean(value) {
    return String(value || '')
      .replace(/\s+/g, ' ')
      .trim();
  }


  function normalizeBrandName(value) {
    if (!value) {
      return '';
    }

    if (typeof value === 'string') {
      return clean(value);
    }

    if (typeof value === 'object') {
      return clean(
        value.name ||
        value.title ||
        value.label ||
        value.value ||
        ''
      );
    }

    return clean(value);
  }


  function getBrandFromShoptetDataLayer() {
    if (
      typeof window.getShoptetDataLayer !==
      'function'
    ) {
      return '';
    }

    try {
      var product =
        window.getShoptetDataLayer('product');

      if (!product) {
        return '';
      }

      if (
        Object.prototype.toString.call(product) ===
        '[object Array]'
      ) {
        product = product[0];
      }

      if (!product) {
        return '';
      }

      return normalizeBrandName(
        product.manufacturer ||
        product.brand ||
        product.manufacturerName
      );

    } catch (e) {
      return '';
    }
  }


  function getBrandFromPage() {

    var brandMeta =
      document.querySelector(
        'meta[itemprop="brand"]'
      );

    if (brandMeta) {
      var metaValue =
        brandMeta.getAttribute('content');

      if (metaValue) {
        return clean(metaValue);
      }
    }


    var brandElement =
      document.querySelector(
        '[itemprop="brand"]'
      ) ||
      document.querySelector(
        '.p-detail .manufacturer'
      ) ||
      document.querySelector(
        '.p-detail .brand'
      );


    if (brandElement) {

      var content =
        brandElement.getAttribute &&
        brandElement.getAttribute('content');

      if (content) {
        return clean(content);
      }

      return clean(
        brandElement.textContent
      );
    }


    return '';
  }


  function getBrandFromTitle() {

    var title =
      document.querySelector(
        '.p-data-wrapper h1, ' +
        '.p-data-wrapper .h1, ' +
        '.p-detail h1, ' +
        '.p-detail .h1'
      );


    if (!title) {
      return '';
    }


    var text =
      clean(title.textContent);


    /*
     * Bezpecny fallback iba pre znacky,
     * pre ktore mame vlastne logo.
     * Neskor sem mozeme pridavat dalsie.
     */

    if (/^bose\b/i.test(text)) {
      return 'Bose';
    }


    return '';
  }


  function getBrandName() {
    return (
      getBrandFromShoptetDataLayer() ||
      getBrandFromPage() ||
      getBrandFromTitle()
    );
  }


  function slugifyBrand(value) {

    var slug = clean(value)
      .toLowerCase();


    if (
      typeof slug.normalize ===
      'function'
    ) {
      slug = slug
        .normalize('NFD')
        .replace(
          /[\u0300-\u036f]/g,
          ''
        );
    }


    return slug
      .replace(/&/g, ' and ')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }


  function createBrandLogo(
    brandName,
    brandSlug
  ) {

    var wrapper =
      document.createElement('div');

    wrapper.className =
      'ps-brand-logo';

    wrapper.setAttribute(
      'data-brand',
      brandSlug
    );


    var image =
      document.createElement('img');

    image.src =
      BRAND_BASE_PATH +
      brandSlug +
      '.png';

    image.alt =
      'Logo ' +
      brandName;

    image.decoding =
      'async';


    image.addEventListener(
      'error',
      function () {

        /*
         * Ak logo pre znacku este nie je
         * nahrate, nevytvarame ziadnu
         * rozbitu ikonku ani fallback.
         */

        if (wrapper.parentNode) {
          wrapper.parentNode.removeChild(
            wrapper
          );
        }

      }
    );


    wrapper.appendChild(image);

    return wrapper;
  }


  function insertLogoIntoHeader(
    header,
    brandName,
    brandSlug
  ) {

    if (!header || !BRANDS_WITH_LOGO[brandSlug]) {
      return;
    }


    if (
      header.querySelector(
        '.ps-brand-logo'
      )
    ) {
      return;
    }


    var title =
      header.querySelector('h1') ||
      header.querySelector('.h1');


    if (!title) {
      return;
    }


    var logo =
      createBrandLogo(
        brandName,
        brandSlug
      );


    if (title.nextSibling) {

      title.parentNode.insertBefore(
        logo,
        title.nextSibling
      );

    } else {

      title.parentNode.appendChild(
        logo
      );

    }

  }


  function enhanceBrand() {

    var brandName =
      getBrandName();

    if (!brandName) {
      return false;
    }


    var brandSlug =
      slugifyBrand(brandName);

    if (!brandSlug) {
      return false;
    }


    var desktopHeader =
      document.querySelector(
        '.p-detail-inner-header'
      );


    var mobileHeader =
      document.querySelector(
        '.p-detail-inner-header-mobile'
      );


    insertLogoIntoHeader(
      desktopHeader,
      brandName,
      brandSlug
    );


    insertLogoIntoHeader(
      mobileHeader,
      brandName,
      brandSlug
    );


    /*
     * Disco nema na kazdom PDP rovnaku header strukturu.
     * Na niektorych produktoch je viditelny H1 priamo
     * v .p-data-wrapper, preto pridavame bezpecny fallback.
     */

    var visibleDesktopTitle =
      document.querySelector(
        '.p-data-wrapper h1, ' +
        '.p-data-wrapper .h1'
      );


    if (
      BRANDS_WITH_LOGO[brandSlug] &&
      visibleDesktopTitle &&
      visibleDesktopTitle.parentNode &&
      !visibleDesktopTitle.parentNode.querySelector(
        '.ps-brand-logo'
      )
    ) {

      var fallbackLogo =
        createBrandLogo(
          brandName,
          brandSlug
        );


      if (visibleDesktopTitle.nextSibling) {

        visibleDesktopTitle.parentNode.insertBefore(
          fallbackLogo,
          visibleDesktopTitle.nextSibling
        );

      } else {

        visibleDesktopTitle.parentNode.appendChild(
          fallbackLogo
        );

      }

    }


    document.body.setAttribute(
      'data-ps-brand',
      brandSlug
    );


    return true;
  }



  /* PDP V1.4 MOBILE PARENT LINK */


  function ensureMobileParentLink() {

    if (
      document.querySelector(
        '.ps-mobile-parent-link'
      )
    ) {
      return;
    }


    var breadcrumb =
      document.querySelector(
        '.breadcrumbs.navigation-home-icon-wrapper'
      );


    if (!breadcrumb) {
      return;
    }


    /*
     * Posledny klikatelny breadcrumb pred produktom
     * je jeho bezprostredna nadradena kategoria.
     */

    var links =
      breadcrumb.querySelectorAll(
        'a[href]'
      );


    if (!links.length) {
      return;
    }


    var parentLink =
      links[links.length - 1];


    var label =
      clean(
        parentLink.textContent
      );


    if (!label) {
      return;
    }


    var mobileLink =
      document.createElement('a');


    mobileLink.className =
      'ps-mobile-parent-link';


    mobileLink.href =
      parentLink.href;


    mobileLink.setAttribute(
      'aria-label',
      'Späť do kategórie ' + label
    );


    var span =
      document.createElement('span');


    span.textContent =
      label;


    mobileLink.appendChild(
      span
    );


    breadcrumb.insertAdjacentElement(
      'afterend',
      mobileLink
    );

  }


  function enhanceProductDetail() {

    if (!isRealProductDetail()) {
      return;
    }


    document.body.classList.add(
      BODY_CLASS
    );


    enhanceBrand();

    ensureMobileParentLink();
  }


  var timer = null;


  function scheduleEnhance() {

    if (timer) {
      clearTimeout(timer);
    }


    timer = setTimeout(
      enhanceProductDetail,
      120
    );
  }


  if (
    document.readyState ===
    'loading'
  ) {

    document.addEventListener(
      'DOMContentLoaded',
      enhanceProductDetail
    );

  } else {

    enhanceProductDetail();

  }


  document.addEventListener(
    'ShoptetDataLayerUpdated',
    scheduleEnhance
  );


  // Product parameters can be refreshed after initial render. Keep this
  // observer inside the product form instead of scanning the entire page.
  var productForm = getProductForm();
  if (productForm && window.MutationObserver) {
    new MutationObserver(scheduleEnhance).observe(productForm, {
      childList: true,
      subtree: true
    });
  }

})();

} catch (e) { if (window.console) console.error("PS bundle: premiumstore-pdp-final.js", e); }

/* ---- premiumstore-pdp-mobile-buybar.js ---- */
try {
/*
 * PremiumStore PDP: mobilná sticky lišta "Do košíka" + kompaktnejšia galéria.
 *
 * Samostatný súbor (CSS sa vloží zo skriptu), takže v Shoptete stačí jeden
 * <script> odkaz za premiumstore-cro.js a pdp-final.js. Nič iné sa nemení.
 * Odstránenie = zmazať tento jeden odkaz.
 *
 * Lišta sa ukáže vždy, keď natívne tlačidlo "Do košíka" nie je vo viewporte
 * (pod zhybom aj po prescrollovaní), len na mobile a tablete.
 */
(function () {
  'use strict';
  if (window.__psPdpBuyBar) return;
  window.__psPdpBuyBar = true;

  var CSS = [
    '.ps-buybar{position:fixed;left:0;right:0;bottom:0;z-index:999;display:flex;align-items:center;gap:12px;',
    'padding:10px 16px calc(10px + env(safe-area-inset-bottom,0px));background:#fff;border-top:1px solid #e0e0e0;',
    'box-shadow:0 -4px 12px rgba(0,0,0,.08);transform:translateY(110%);transition:transform .25s ease;}',
    '.ps-buybar.is-visible{transform:translateY(0);}',
    '.ps-buybar__title{flex:1 1 auto;min-width:0;font-size:13px;line-height:1.25;color:#444;display:-webkit-box;',
    '-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}',
    '.ps-buybar__price{flex:0 0 auto;font-weight:700;font-size:18px;white-space:nowrap;color:#111;}',
    '.ps-buybar__btn{flex:0 0 auto;background:#167450;color:#fff;border:0;border-radius:999px;padding:12px 22px;',
    'font-weight:600;font-size:16px;cursor:pointer;}',
    '.ps-buybar__btn:active{background:#145e41;}',
    /* Počas okna "Pridané do košíka" lištu skryť. */
    'html:has(#cboxOverlay[style*="block"]) .ps-buybar,html:has(#colorbox[style*="block"]) .ps-buybar{display:none;}',
    '@media (min-width:1024px){.ps-buybar{display:none;}}',
    /* Tlačidlá mimo hlavného formulára (okno po pridaní do košíka, karty súvisiacich produktov)
       na stránke produktu: po cleanupe z 1. 10. mali predvolenú žltú. */
    '#colorbox a.btn,#cboxContent a.btn,#colorbox .btn.btn-conversion,#cboxContent .btn.btn-conversion,body.type-detail .btn.btn-conversion:not(.add-to-cart-button),body.type-detail a.btn.btn-cart:not(.add-to-cart-button),',
    'body.type-detail .btn.btn-cart:not(.add-to-cart-button){background-color:#167450!important;border-color:#167450!important;',
    'border-radius:999px!important;color:#fff!important;font-weight:600!important;box-shadow:none!important;}',
    '#colorbox a.btn:hover,#cboxContent a.btn:hover,body.type-detail .btn.btn-conversion:not(.add-to-cart-button):hover,body.type-detail .btn.btn-cart:not(.add-to-cart-button):hover{',
    'background-color:#145e41!important;border-color:#145e41!important;}',
    /* Kompaktnejšia galéria na mobile: tlačidlo Do košíka sa dostane vyššie. */
    '@media (max-width:767px){',
    'body.type-detail .p-image-wrapper .p-main-image img,body.type-detail .p-image-wrapper .p-image img{',
    'max-height:42vh;width:auto;max-width:100%;object-fit:contain;margin-left:auto;margin-right:auto;}',
    'body.type-detail .p-thumbnails-wrapper .p-thumbnail img{max-height:56px;width:auto;}',
    'body.type-detail .p-thumbnails-wrapper{margin-top:4px;margin-bottom:4px;}',
    '}'
  ].join('');

  function addStyle() {
    if (document.getElementById('ps-buybar-css')) return;
    var s = document.createElement('style');
    s.id = 'ps-buybar-css';
    s.appendChild(document.createTextNode(CSS));
    document.head.appendChild(s);
  }

  function init() {
    var form = document.getElementById('product-detail-form');
    if (!form || document.querySelector('.ps-buybar')) return;
    var btn = form.querySelector('[data-testid="buttonAddToCart"]') || form.querySelector('.add-to-cart-button');
    if (!btn) return;

    addStyle();

    var nameMeta = document.querySelector('.p-detail meta[itemprop="name"]');
    var title = nameMeta ? (nameMeta.getAttribute('content') || '') : '';
    if (!title) {
      var h1 = document.querySelector('h1');
      title = h1 ? h1.textContent.trim() : '';
    }

    var bar = document.createElement('div');
    bar.className = 'ps-buybar';
    var t = document.createElement('span');
    t.className = 'ps-buybar__title';
    t.textContent = title;
    var p = document.createElement('span');
    p.className = 'ps-buybar__price';
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'ps-buybar__btn';
    b.textContent = 'Do košíka';
    bar.appendChild(t);
    bar.appendChild(p);
    bar.appendChild(b);
    document.body.appendChild(bar);

    function readPrice() {
      var el = form.querySelector('.price-final-holder');
      var txt = el ? el.textContent.replace(/\s+/g, ' ').trim() : '';
      if (p.textContent !== txt) p.textContent = txt;
    }
    readPrice();
    if (window.MutationObserver) {
      new MutationObserver(readPrice).observe(form, { childList: true, characterData: true, subtree: true });
    }

    function needsVariant() {
      var sel = form.querySelectorAll('select');
      for (var i = 0; i < sel.length; i++) {
        if (sel[i].offsetParent !== null && !sel[i].value) return true;
      }
      return false;
    }

    b.addEventListener('click', function () {
      if (needsVariant()) {
        btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
      btn.click();
    });

    function setVisible(visible) {
      bar.classList.toggle('is-visible', visible);
    }

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        setVisible(!entries[0].isIntersecting);
      }, { threshold: 0 }).observe(btn);
    } else {
      var onScroll = function () {
        var r = btn.getBoundingClientRect();
        setVisible(r.bottom < 0 || r.top > window.innerHeight);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

} catch (e) { if (window.console) console.error("PS bundle: premiumstore-pdp-mobile-buybar.js", e); }

/* ---- premiumstore-pdp-conversion-20261004.js ---- */
try {
/*
 * PremiumStore PDP: konverzné úpravy z auditu 4. 10. 2026 (audit/produkty-pdp-audit-baymard-2026-10-03.md).
 *
 * 1) Cookie lišta na mobile je kompaktnejšia a lepkavý panel "Do košíka" sa zobrazí NAD ňou
 *    (predtým ho lišta s vyšším z-indexom úplne zakrývala).
 * 2) Detail produktu: kompaktnejší blok nad zhybom (miniatúry, dostupnosť), prázdne hviezdičky
 *    "Neohodnotené" sa skryjú, hviezdy sa ukážu hneď ako produkt hodnotenie má.
 * 3) Riadok "Doprava od 4,90 €, doručenie od 2 dní" je hneď pod dostupnosťou (nad cenou a tlačidlom
 *    "Do košíka") a nahrádza natívny odkaz "Možnosti doručenia". Je klikateľný (zvýraznený rámik,
 *    šípka) a po kliknutí otvorí natívne okno s možnosťami doručenia. Pod tlačidlom ostáva
 *    presunutý natívny blok istôt (Rýchle doručenie, Garancia, Vrátenie).
 *    Okno "Možnosti doručenia" má prepracovaný vzhľad (desktop aj mobil).
 * 5) Desktop (od 992 px): hlavný obrázok sa zmenší presne natoľko, aby miniatúry končili v rovnakej
 *    výške ako pravý box s cenou (popis produktu sa tým posunie vyššie). Mobil sa nemení.
 * 4) Rozšírené popisy (.ps-product): nadpisy v úvodnom bloku s nízkym kontrastom dostanú
 *    čitateľnú farbu.
 *
 * Samostatný súbor, nemení premiumstore-cro.js ani buybar. Rollback = odstrániť jeden <script> odkaz.
 * V Shoptete: <script src="https://4fkstztvbs-arch.github.io/import_innpro/assets/ux/premiumstore-pdp-conversion-20261004.js?v=9"></script>
 * v pätičke za premiumstore-pdp-mobile-buybar.js.
 */
(function () {
  'use strict';
  if (window.__psPdpConversion) return;
  window.__psPdpConversion = true;

  // Najnižšia cena dopravy (potvrdil Martin 4. 10. 2026). Doprava zadarmo od sumy zatiaľ nie je.
  var SHIP_FROM = '4,90 €';
  var SHIP_FROM_TV = '9,90 €';
  var DELIVERY_FROM = 'od 2 dní';

  var CSS = [
    /* --- 1) Cookie lišta (mobil): text na celú šírku, Nastavenie + dve tlačidlá v jednom riadku --- */
    '@media (max-width:767px){',
    '.siteCookies .siteCookies__form{display:grid!important;grid-template-columns:auto 1fr 1fr;gap:6px 8px;align-items:center;padding:10px 12px!important;}',
    '.siteCookies .siteCookies__content,.siteCookies .siteCookies__buttonWrap{display:contents!important;}',
    '.siteCookies .siteCookies__text{grid-column:1/-1;font-size:12px!important;line-height:1.35!important;margin:0!important;}',
    '.siteCookies .siteCookies__links{margin:0!important;padding:0!important;}',
    '.siteCookies .siteCookies__link{padding:4px 2px!important;font-size:13px!important;}',
    '.siteCookies .siteCookies__button{height:44px!important;min-height:44px!important;font-size:14px!important;padding:0 8px!important;margin:0!important;}',
    '}',
    /* Lepkavý panel sedí nad cookie lištou; schovaný panel nesmie presvitať ani chytať kliknutia. */
    '.ps-buybar{bottom:var(--ps-cookie-h,0px)!important;transition:transform .25s ease,bottom .2s ease,visibility 0s linear .25s;}',
    '.ps-buybar:not(.is-visible){visibility:hidden;pointer-events:none;}',
    '.ps-buybar.is-visible,.ps-buybar.ps-covered{transition:transform .25s ease,bottom .2s ease,visibility 0s;}',
    /* Natívne tlačidlo je pod cookie lištou (aj keď je technicky vo viewporte): panel sa ukáže. */
    '.ps-buybar.ps-covered{visibility:visible;pointer-events:auto;transform:translateY(0);}',

    /* --- 2) Kompaktný blok nad zhybom --- */
    'body.type-detail .stars-wrapper.ps-no-rating{display:none!important;}',
    '@media (max-width:767px){',
    'body.type-detail .p-thumbnails-wrapper,body.type-detail .p-thumbnails-wrapper .row{margin-top:2px!important;margin-bottom:2px!important;}',
    'body.type-detail .p-image-wrapper>.row{margin-top:0!important;margin-bottom:0!important;}',
    'body.type-detail .p-thumbnails.p-thumbnails-horizontal{max-height:64px;overflow:hidden;}',
    'body.type-detail .p-thumbnails-wrapper .p-thumbnail img{max-height:56px;width:auto;}',
    'body.type-detail .p-data-wrapper .shipping-options-layout th,body.type-detail .p-data-wrapper .shipping-options-layout td{padding-top:2px!important;padding-bottom:2px!important;line-height:1.3;}',
    'body.type-detail .p-data-wrapper .shipping-options-layout{margin-bottom:6px!important;}',
    '}',

    /* --- 3) Doprava a istoty pod tlačidlom --- */
    'a.ps-ship{display:flex;align-items:center;gap:10px;width:100%;box-sizing:border-box;min-height:48px;margin:8px 0 12px;padding:10px 12px;background:#f2f8f5;border:1.5px solid #167450;border-radius:10px;font-size:14px;line-height:1.3;color:#1b3a2c!important;text-decoration:none!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease;-webkit-tap-highlight-color:transparent;}',
    'a.ps-ship:hover{background:#e3f1ea;box-shadow:0 2px 8px rgba(22,116,80,.18);}',
    'a.ps-ship:active{background:#d6eadf;}',
    'a.ps-ship:focus-visible{outline:3px solid #145e41;outline-offset:2px;}',
    '.ps-ship__icon{flex:0 0 22px;width:22px;height:22px;fill:none;stroke:#167450;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;}',
    '.ps-ship__text{flex:1 1 auto;min-width:0;}',
    '.ps-ship__text strong{font-weight:700;white-space:nowrap;}',
    '.ps-ship__more{flex:0 0 auto;display:inline-flex;align-items:center;gap:2px;font-size:13px;font-weight:600;color:#167450;white-space:nowrap;}',
    '.ps-ship__more svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;transition:transform .15s ease;}',
    'a.ps-ship:hover .ps-ship__more{text-decoration:underline;}',
    'a.ps-ship:hover .ps-ship__more svg{transform:translateX(3px);}',
    '@media (max-width:767px){a.ps-ship{min-height:52px;padding:10px 12px;}.ps-ship__more span{display:none;}.ps-ship__more svg{width:22px;height:22px;}}',
    '@media (max-width:359px){.ps-ship__text strong{white-space:normal;}}',
    'body.type-detail .shipping-options-layout tr.ps-ship-native{display:none!important;}',
    'a.ps-ship.ps-ship--free,a.ps-ship.ps-ship--free:visited{background:#167450!important;color:#fff!important;}a.ps-ship.ps-ship--free:hover,a.ps-ship.ps-ship--free:active{background:#145e41!important;color:#fff!important;}a.ps-ship--free .ps-ship__text,a.ps-ship--free .ps-ship__text strong,a.ps-ship--free .ps-ship__more{color:#fff!important;}a.ps-ship--free .ps-ship__icon{stroke:#fff;}',

    /* --- Okno "Možnosti doručenia" --- */
    '.shipping-options-popup{padding:32px 32px 24px!important;max-width:560px;margin:0 auto;box-sizing:border-box;}',
    '.shipping-options-popup h1{text-align:left!important;font-size:22px!important;line-height:1.25!important;margin:0 0 6px!important;}',
    '.shipping-options-popup>p{margin:0 0 14px!important;font-size:13.5px!important;line-height:1.45!important;color:#5b6670!important;}',
    '.shipping-options-popup .shipping-row{display:grid!important;grid-template-columns:64px minmax(0,1fr) auto;align-items:center!important;column-gap:12px!important;padding:14px 0!important;border-top:1px solid #e3e9ee!important;}',
    '.shipping-options-popup .shipping-row .payment-logo{grid-column:1;grid-row:1;order:0!important;margin:0!important;display:flex;align-items:center;justify-content:center;width:64px;height:40px;}',
    '.shipping-options-popup .shipping-row .payment-logo img{max-width:64px!important;max-height:34px!important;width:auto;height:auto;object-fit:contain;}',
    '.shipping-options-popup .shipping-row .payment-info{grid-column:2;grid-row:1;width:auto!important;max-width:none!important;flex:none!important;display:flex;align-items:center;gap:6px;min-width:0;}',
    '.shipping-options-popup .shipping-row:not(:has(.payment-logo)) .payment-info{grid-column:1/3;}',
    '.shipping-options-popup .shipping-row .payment-info b{display:inline!important;width:auto!important;font-weight:600!important;letter-spacing:0!important;font-size:15px;line-height:1.3;overflow-wrap:normal;word-break:normal;}',
    '.shipping-options-popup .question-tooltip{flex:0 0 auto;display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:50%;background:#e8eef2;color:#4a5560;font-size:11px;font-weight:700;cursor:help;}',
    '.shipping-options-popup .shipping-row .payment-shipping-price{grid-column:3;grid-row:1;font-weight:700!important;letter-spacing:0!important;font-size:16px;color:#17283c!important;white-space:nowrap;font-variant-numeric:tabular-nums;text-align:right;}',
    '.shipping-options-popup .shipping-row .payment-shipping-price.for-free{color:#167450!important;}',
    '@media (max-width:499px){.shipping-options-popup{padding:20px 14px 14px!important;}.shipping-options-popup h1{font-size:19px!important;}.shipping-options-popup .shipping-row{grid-template-columns:48px minmax(0,1fr) auto;column-gap:10px!important;padding:12px 0!important;}.shipping-options-popup .shipping-row .payment-logo{width:48px;}.shipping-options-popup .shipping-row .payment-logo img{max-width:48px!important;}.shipping-options-popup .shipping-row .payment-info b{font-size:14px;}.shipping-options-popup .shipping-row .payment-shipping-price{font-size:15px;}}',
    'body.type-detail .benefitBanner.ps-benefit-moved{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr));gap:4px 16px;align-items:start;margin:10px 0 0!important;padding:0!important;width:auto!important;}',
    'body.type-detail .benefitBanner.ps-benefit-moved .benefitBanner__item{display:flex!important;align-items:flex-start!important;justify-content:flex-start!important;text-align:left!important;gap:10px!important;margin:0!important;padding:6px 0!important;width:auto!important;flex:none!important;min-width:0;}',
    'body.type-detail .benefitBanner.ps-benefit-moved .benefitBanner__picture{flex:0 0 22px!important;width:22px!important;min-width:22px!important;max-width:22px!important;height:22px!important;margin:1px 0 0!important;padding:0!important;}',
    'body.type-detail .benefitBanner.ps-benefit-moved .benefitBanner__img{width:22px!important;height:22px!important;margin:0!important;}',
    'body.type-detail .benefitBanner.ps-benefit-moved .benefitBanner__content{flex:1 1 auto;min-width:0;margin:0!important;padding:0!important;text-align:left!important;}',
    'body.type-detail .benefitBanner.ps-benefit-moved .benefitBanner__title{font-size:13px!important;line-height:1.25!important;display:block;width:auto!important;text-align:left!important;}',
    'body.type-detail .benefitBanner.ps-benefit-moved .benefitBanner__data{font-size:12px!important;line-height:1.3!important;color:#555;text-align:left!important;}',
    '@media (max-width:420px){body.type-detail .benefitBanner.ps-benefit-moved{gap:2px 10px;}body.type-detail .benefitBanner.ps-benefit-moved .benefitBanner__item{gap:8px!important;}body.type-detail .benefitBanner.ps-benefit-moved .benefitBanner__item:nth-child(3){grid-column:1/-1;}body.type-detail .benefitBanner.ps-benefit-moved .benefitBanner__title{font-size:12.5px!important;}body.type-detail .benefitBanner.ps-benefit-moved .benefitBanner__data{font-size:11.5px!important;}}',
    'body.type-detail .benefitBanner.ps-benefit-moved .ps-benefit-dup{display:none!important;}',

    /* --- 4) Rozšírený popis: zalamovanie čísiel/faktov --- */
    '.ps-product .ps-facts span{overflow-wrap:break-word;hyphens:auto;-webkit-hyphens:auto;}',
    '@media (max-width:767px){.ps-product .ps-facts strong{font-size:clamp(18px,5.4vw,24px);}.ps-product .ps-facts span{font-size:14px;}}',
    /* --- 6) Štítok "Doprava zadarmo" (výpisy, detail): zaoblený štítok namiesto kruhu 66 px. Bundle nastavuje
          .flags-extra .flag na 13 px !important, text sa v kruhu lámal a orezával. --- */
    '.flags-extra .flag.flag-freeshipping{display:inline-flex!important;flex-direction:row!important;align-items:center;justify-content:center;width:auto!important;height:auto!important;min-width:0!important;min-height:0!important;padding:6px 12px!important;margin:0 8px 8px 0!important;border-radius:999px!important;background:#167450!important;color:#fff!important;font-size:12px!important;font-weight:700!important;line-height:1.2!important;white-space:nowrap!important;word-break:normal!important;hyphens:none!important;box-shadow:0 1px 4px rgba(0,0,0,.18);}',
    '.flags-extra .flag.flag-freeshipping .icon-van{display:none!important;}',
    '.p-image-wrapper .flags-extra .flag.flag-freeshipping{padding:8px 16px!important;font-size:14px!important;min-width:0!important;min-height:0!important;}',
    '.columns-mobile-2 .products-block>div .flags.flags-extra .flag.flag-freeshipping{min-width:0!important;flex:0 0 auto!important;margin:0 0 6px 6px!important;}',
    '.columns-mobile-2 .products-block>div .flags.flags-extra{display:flex!important;justify-content:flex-end;width:100%;}'
  ].join('');

  function addStyle() {
    if (document.getElementById('ps-pdp-conv-css')) return;
    var s = document.createElement('style');
    s.id = 'ps-pdp-conv-css';
    s.appendChild(document.createTextNode(CSS));
    document.head.appendChild(s);
  }

  /* --- 1) výška cookie lišty -> CSS premenná pre lepkavý panel --- */
  function measureCookie() {
    var el = document.querySelector('.siteCookies');
    var h = 0;
    if (el && el.offsetHeight > 0 && getComputedStyle(el).position === 'fixed') {
      var r = el.getBoundingClientRect();
      // Iba lišta prilepená k spodku okna.
      if (r.bottom >= window.innerHeight - 2) h = Math.round(r.height);
    }
    document.documentElement.style.setProperty('--ps-cookie-h', h + 'px');
    watchCovered(h);
  }

  /* Pri viditeľnej cookie lište sleduje, či je natívne tlačidlo celé nad ňou; ak nie, ukáže lepkavý panel. */
  var coveredIO = null, coveredH = -1;
  function watchCovered(h) {
    if (h === coveredH) return;
    coveredH = h;
    if (coveredIO) { coveredIO.disconnect(); coveredIO = null; }
    var bar = document.querySelector('.ps-buybar');
    var form = document.getElementById('product-detail-form');
    var btn = form && (form.querySelector('[data-testid="buttonAddToCart"]') || form.querySelector('.add-to-cart-button'));
    if (!bar || !btn || !('IntersectionObserver' in window)) return;
    if (!h) { bar.classList.remove('ps-covered'); return; }
    coveredIO = new IntersectionObserver(function (entries) {
      bar.classList.toggle('ps-covered', entries[0].intersectionRatio < 0.99);
    }, { threshold: [0, 0.25, 0.5, 0.75, 0.99, 1], rootMargin: '0px 0px -' + h + 'px 0px' });
    coveredIO.observe(btn);
  }

  function watchCookie() {
    measureCookie();
    window.addEventListener('resize', measureCookie);
    window.addEventListener('load', function () { coveredH = -1; measureCookie(); });
    if (window.MutationObserver) {
      var mo = new MutationObserver(measureCookie);
      mo.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class', 'style'] });
    }
    if (window.ResizeObserver) {
      var el = document.querySelector('.siteCookies');
      if (el) new ResizeObserver(measureCookie).observe(el);
    }
  }

  /* --- 2) prázdne hviezdičky --- */
  function hideEmptyRating() {
    var wraps = document.querySelectorAll('.stars-wrapper');
    for (var i = 0; i < wraps.length; i++) {
      if (/neohodnoten/i.test(wraps[i].textContent) && !/^[1-5]/.test(wraps[i].textContent.trim())) {
        wraps[i].classList.add('ps-no-rating');
      }
    }
  }

  /* --- 3) riadok dopravy (klikateľný, nahrádza "Možnosti doručenia") + presun istôt --- */
  function addShipping(form) {
    if (document.querySelector('.ps-ship')) return;
    var block = form.querySelector('.p-to-cart-block');
    if (!block) return;
    var nativeLink = form.querySelector('a.shipping-options');
    // Televízory idú atypickou dopravou (SPS/Geis) - od 9,90 €.
    var crumbs = document.querySelector('.breadcrumbs, [itemtype*="BreadcrumbList"]');
    var shipFrom = crumbs && /Telev[ií]zor/i.test(crumbs.textContent) ? SHIP_FROM_TV : SHIP_FROM;
    var table = form.querySelector('table.shipping-options-layout');
    // Produkt s príznakom "Doprava zadarmo" v Shoptete má natívny štítok .flag-freeshipping
    // (zadarmo je len Packeta na výdajné miesto / do Z-BOXu, ostatné dopravy ostávajú platené).
    var isFree = !!document.querySelector('.p-image .flag-freeshipping');

    var ship = document.createElement('a');
    ship.className = 'ps-ship' + (isFree ? ' ps-ship--free' : '');
    ship.setAttribute('href', nativeLink ? nativeLink.getAttribute('href') : '#');
    ship.setAttribute('aria-haspopup', 'dialog');
    var shipLabel = isFree ? 'Doprava zadarmo cez Packetu na výdajné miesto, doručenie ' + DELIVERY_FROM : 'Doprava od ' + shipFrom + ', doručenie ' + DELIVERY_FROM;
    ship.setAttribute('aria-label', shipLabel + '. Zobraziť možnosti doručenia');
    ship.innerHTML =
      '<svg class="ps-ship__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h11v10H3zM14 9h4l3 3v4h-7z"/><circle cx="7" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/></svg>' +
      '<span class="ps-ship__text">' + (isFree
        ? '<strong>Doprava zadarmo</strong> na výdajné miesto Packety, doručenie ' + DELIVERY_FROM
        : '<strong>Doprava od ' + shipFrom + '</strong>, doručenie ' + DELIVERY_FROM) + '</span>' +
      '<span class="ps-ship__more"><span>Možnosti</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg></span>';

    // Klik otvorí natívne okno Shoptetu; ak by odkaz chýbal, ostáva obyčajný odkaz.
    ship.addEventListener('click', function (e) {
      var nl = form.querySelector('a.shipping-options');
      if (nl) { e.preventDefault(); nl.click(); }
    });

    // Vyššie: hneď pod tabuľkou s dostupnosťou (nad cenou a tlačidlom "Do košíka").
    if (table && table.parentNode) {
      table.parentNode.insertBefore(ship, table.nextSibling);
      var row = nativeLink && nativeLink.closest ? nativeLink.closest('tr') : null;
      if (row) row.classList.add('ps-ship-native');
    } else {
      block.parentNode.insertBefore(ship, block);
    }

    var benefit = document.querySelector('.benefitBanner.position--benefitProduct') || document.querySelector('.benefitBanner');
    if (benefit && !benefit.classList.contains('ps-benefit-moved')) {
      var items = benefit.querySelectorAll('.benefitBanner__item');
      for (var i = 0; i < items.length; i++) {
        var t = items[i].querySelector('.benefitBanner__title');
        if (t && /doru[čc]enie\s+u[žz]\s+od/i.test(t.textContent)) items[i].classList.add('ps-benefit-dup');
      }
      benefit.classList.add('ps-benefit-moved');
      block.parentNode.insertBefore(benefit, block.nextSibling);
    }
  }

  /* --- 4) kontrast nadpisov v úvode rozšíreného popisu --- */
  function parseRgb(c) {
    var m = /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/.exec(c || '');
    return m ? { r: +m[1], g: +m[2], b: +m[3], a: m[4] === undefined ? 1 : +m[4] } : null;
  }
  function lum(c) {
    var f = function (v) { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
    return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b);
  }
  function ratio(a, b) {
    var l1 = lum(a), l2 = lum(b);
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  }
  function bgOf(el) {
    while (el && el.nodeType === 1) {
      var c = parseRgb(getComputedStyle(el).backgroundColor);
      if (c && c.a > 0.5) return c;
      el = el.parentElement;
    }
    return { r: 255, g: 255, b: 255, a: 1 };
  }
  function fixHeroContrast() {
    var els = document.querySelectorAll('.ps-product .ps-intro h1,.ps-product .ps-intro h2,.ps-product .ps-intro h3');
    for (var i = 0; i < els.length; i++) {
      var fg = parseRgb(getComputedStyle(els[i]).color);
      if (!fg) continue;
      var bg = bgOf(els[i]);
      if (ratio(fg, bg) < 3) {
        var white = { r: 255, g: 255, b: 255 }, dark = { r: 17, g: 17, b: 17 };
        els[i].style.setProperty('color', ratio(white, bg) >= ratio(dark, bg) ? '#fff' : '#111', 'important');
      }
    }
  }

  /* --- 5) desktop: obrázok končí v rovnakej výške ako pravý box --- */
  var MIN_IMG_H = 340;
  function alignGallery() {
    var wrap = document.querySelector('.p-image-wrapper');
    var data = document.querySelector('.p-data-wrapper');
    var holder = wrap && wrap.querySelector('.p-image');
    var img = holder && holder.querySelector('img');
    if (!wrap || !data || !img) return;
    img.style.removeProperty('max-height');
    holder.style.removeProperty('min-height');
    if (window.innerWidth < 992) return;
    var imgH = img.offsetHeight;
    if (!imgH) return;
    var extra = wrap.getBoundingClientRect().bottom - data.getBoundingClientRect().bottom;
    if (extra > 4) {
      var target = Math.max(MIN_IMG_H, Math.floor(imgH - extra));
      if (target < imgH) {
        // Shoptet drží kontajner na pôvodnej minimálnej výške, preto ju uvoľníme.
        holder.style.setProperty('min-height', '0', 'important');
        img.style.setProperty('max-height', target + 'px', 'important');
        img.style.setProperty('width', 'auto', 'important');
        img.style.setProperty('max-width', '100%', 'important');
        img.style.setProperty('margin', '0 auto', 'important');
        img.style.setProperty('display', 'block', 'important');
      }
    }
  }
  var galleryTimer = null;
  function scheduleGallery() {
    clearTimeout(galleryTimer);
    galleryTimer = setTimeout(alignGallery, 80);
  }
  function watchGallery() {
    alignGallery();
    window.addEventListener('resize', scheduleGallery);
    window.addEventListener('load', alignGallery);
    var img = document.querySelector('.p-image-wrapper .p-image img');
    if (img && !img.complete) img.addEventListener('load', alignGallery);
    var data = document.querySelector('.p-data-wrapper');
    if (data && window.ResizeObserver) new ResizeObserver(scheduleGallery).observe(data);
    // Zmena hlavného obrázka v galérii (iný pomer strán).
    var holder = document.querySelector('.p-image-wrapper .p-image');
    if (holder && window.MutationObserver) {
      new MutationObserver(scheduleGallery).observe(holder, { childList: true, subtree: true, attributes: true, attributeFilter: ['src'] });
    }
  }

  /* --- 7) obrázky v popise od InnPro: relatívna cesta /data/include/cms/... vedie na náš shop (404),
         reálne ležia na b2b.innpro.pl --- */
  function fixInnproDescriptionImages() {
    var imgs = document.querySelectorAll('img[src^="/data/include/cms/"]');
    for (var i = 0; i < imgs.length; i++) {
      imgs[i].setAttribute('src', 'https://b2b.innpro.pl' + imgs[i].getAttribute('src'));
    }
  }

  function init() {
    fixInnproDescriptionImages();
    addStyle();
    watchCookie();
    var form = document.getElementById('product-detail-form');
    if (!form) return;
    hideEmptyRating();
    addShipping(form);
    fixHeroContrast();
    watchGallery();
    // Shoptet dokresľuje časti stránky neskôr (lazy bloky, varianty).
    window.addEventListener('load', function () {
      fixInnproDescriptionImages();
      hideEmptyRating();
      addShipping(form);
      fixHeroContrast();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

} catch (e) { if (window.console) console.error("PS bundle: premiumstore-pdp-conversion-20261004.js", e); }

/* ---- premiumstore-pdp-polish-20261008.js ---- */
try {
/*
 * PremiumStore PDP: drobné úpravy hornej časti detailu (návrh z 8. 10. 2026).
 *
 * 1) Zberná značka "Ostatní / Ostatné" sa na detaile skryje (odkaz na zbernú značku nemá hodnotu).
 * 2) Riadok "Kód" je menší a nezalamuje sa (dlhé kódy ako AT_ABL-30-B3-075 zabrali dva riadky).
 *
 * Samostatný súbor, nemení ostatné skripty. Rollback = odstrániť jeden <script> odkaz.
 * V Shoptete: <script src="https://4fkstztvbs-arch.github.io/import_innpro/assets/ux/premiumstore-pdp-polish-20261008.js?v=1"></script>
 * v pätičke za premiumstore-pdp-conversion-20261004.js.
 */
(function () {
  'use strict';
  if (window.__psPdpPolish) return;
  window.__psPdpPolish = true;
  if (!document.body || !document.body.classList.contains('type-detail')) return;

  var s = document.createElement('style');
  s.id = 'ps-pdp-polish-css';
  s.appendChild(document.createTextNode([
    'body.type-detail .brand-wrapper.ps-brand-generic{display:none!important;}',
    'body.type-detail .p-data-wrapper tr.ps-code-row td,body.type-detail .p-data-wrapper tr.ps-code-row th{font-size:13px!important;color:#5b6670;white-space:nowrap;}',
    'body.type-detail .p-data-wrapper tr.ps-code-row td{overflow-wrap:normal;word-break:normal;}'
  ].join('')));
  document.head.appendChild(s);

  function run() {
    var b = document.querySelector('.brand-wrapper');
    var a = b && b.querySelector('a');
    if (a && /^\s*Ostatn[íié]\s*$/i.test(a.textContent)) b.classList.add('ps-brand-generic');
    var ths = document.querySelectorAll('.p-data-wrapper th');
    for (var i = 0; i < ths.length; i++) {
      if (/^\s*K[óo]d\s*:?\s*$/i.test(ths[i].textContent) && ths[i].parentNode) {
        ths[i].parentNode.classList.add('ps-code-row');
      }
    }
  }
  run();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  window.addEventListener('load', run);
})();

} catch (e) { if (window.console) console.error("PS bundle: premiumstore-pdp-polish-20261008.js", e); }

/* ---- premiumstore-pdp-soldout-20261008.js ---- */
try {
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

} catch (e) { if (window.console) console.error("PS bundle: premiumstore-pdp-soldout-20261008.js", e); }

/* ---- premiumstore-audit-fixes-20261003.js ---- */
try {
/* PremiumStore audit fixes – 2026-10-03 (JS)
   1) Stránka značky bez produktov -> <meta name="robots" content="noindex,follow">.
      Google JS vykresľuje, takže tag zachytí; trvalé riešenie je skryť značku v Shoptete (viď docs/audit-fixes-20261003.md).
   Rollback = odstrániť <script>. */
(function () {
  'use strict';

  function markEmptyBrandNoindex() {
    if (!/^\/znacka\/[^/]+\/?$/.test(location.pathname)) return;
    var perex = document.querySelector('.category-perex');
    if (!perex || !/Žiadne produkty značky/i.test(perex.textContent)) return;
    if (document.querySelector('.products-block .product, .products .product')) return;
    var meta = document.querySelector('meta[name="robots"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'robots');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'noindex,follow');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', markEmptyBrandNoindex);
  } else {
    markEmptyBrandNoindex();
  }
})();

/* Prístupnosť: prihlasovacie tlačidlo bez textu dostane názov. */
(function () {
  function labelControls() {
    var login = document.querySelector('.top-nav-button-login');
    if (login && !login.getAttribute('aria-label') && !(login.textContent || '').trim()) {
      login.setAttribute('aria-label', 'Prihlásenie');
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', labelControls);
  } else {
    labelControls();
  }
})();

} catch (e) { if (window.console) console.error("PS bundle: premiumstore-audit-fixes-20261003.js", e); }

/* ---- premiumstore-home-desktop-20261009.js ---- */
try {
/* PremiumStore – úvodná stránka na desktope (2026-10-09): tlačidlo „Zobraziť viac“ pri úvodnom texte.
   CSS skracuje text na dva riadky; skript len pridá tlačidlo, ktoré ho rozbalí. Idempotentné. */
(function () {
  'use strict';
  function init() {
    var w = document.querySelector('body.type-index .welcome-wrapper .welcome');
    if (!w || w.querySelector('.ps-more')) return;
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'ps-more';
    b.textContent = 'Zobraziť viac';
    b.setAttribute('aria-expanded', 'false');
    b.addEventListener('click', function () {
      var open = w.classList.toggle('ps-open');
      b.textContent = open ? 'Zobraziť menej' : 'Zobraziť viac';
      b.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    w.appendChild(b);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

} catch (e) { if (window.console) console.error("PS bundle: premiumstore-home-desktop-20261009.js", e); }

/* ---- premiumstore-home-v2-20261012.js ---- */
try {
/* PremiumStore – úvodná stránka, desktop (2026-10-12): vkladá blok „Značky v ponuke“, banner 3D tlač a dvojicu
   bannerov Smart Home + Dielňa do main#content. Poradie blokov a vzhľad riadi premiumstore-home-v2-20261012.css
   (iba od 992 px; pod touto šírkou skript nič nevkladá). Idempotentné, nemení produkty, ceny ani košík.
   Meranie: odkazy majú data-ps-track (brand-<slug>, brands-all, banner-3d, banner-smart-home, banner-dielna);
   skript pri kliknutí pošle udalosť ps_home_click (parameter ps_block) do GA4 cez gtag a do dataLayer. Rollback = odstrániť zdroj z build skriptov. */
(function () {
  'use strict';
  if (!window.matchMedia || !window.matchMedia('(min-width: 992px)').matches) return;

  var SCRIPT = document.currentScript && document.currentScript.src;
  var BASE = (SCRIPT ? SCRIPT.replace(/[^\/]*$/, '') : 'https://4fkstztvbs-arch.github.io/import_innpro/assets/ux/') + 'home-v2/';
  // [slug značkovej stránky, názov, farba po prejdení myšou, viewBox, šírka, výška, SVG cesta] (glyfy: Simple Icons, CC0)
  var BRANDS = [
    ['samsung', 'Samsung', '#1428A0', '0.00 10.17 24.00 3.67', 86, 13.1, 'M19.8166 10.2808l.0459 2.6934h-.023l-.7793-2.6934h-1.2837v3.3925h.8481l-.0458-2.785h.023l.8366 2.785h1.2264v-3.3925zm-16.149 0l-.6418 3.427h.9284l.4699-3.1175h.0229l.4585 3.1174h.9169l-.6304-3.4269zm5.1805 0l-.424 2.6132h-.023l-.424-2.6132H6.5788l-.0688 3.427h.8596l.023-3.0832h.0114l.573 3.0831h.8711l.5731-3.083h.023l.0228 3.083h.8596l-.0802-3.4269zm-7.2664 2.4527c.0343.0802.0229.1949.0114.2522-.0229.1146-.1031.2292-.3324.2292-.2177 0-.3438-.126-.3438-.3095v-.3323H0v.2636c0 .7679.6074.9971 1.2493.9971.6189 0 1.1346-.2178 1.2149-.7794.0458-.298.0114-.4928 0-.5616-.1605-.722-1.467-.9283-1.5588-1.3295-.0114-.0688-.0114-.1375 0-.1834.023-.1146.1032-.2292.3095-.2292.2063 0 .321.126.321.3095v.2063h.8595v-.2407c0-.745-.6762-.8596-1.1576-.8596-.6074 0-1.1117.2063-1.2034.7564-.023.149-.0344.2866.0114.4585.1376.7106 1.364.9169 1.5358 1.3524m11.152 0c.0343.0803.0228.1834.0114.2522-.023.1146-.1032.2292-.3324.2292-.2178 0-.3438-.126-.3438-.3095v-.3323h-.917v.2636c0 .7564.596.9857 1.2379.9857.6189 0 1.1232-.2063 1.2034-.7794.0459-.298.0115-.4814 0-.5616-.1375-.7106-1.4327-.9284-1.5243-1.318-.0115-.0688-.0115-.1376 0-.1835.0229-.1146.1031-.2292.3094-.2292.1948 0 .321.126.321.3095v.2063h.848v-.2407c0-.745-.6647-.8596-1.146-.8596-.6075 0-1.1004.1948-1.192.7564-.023.149-.023.2866.0114.4585.1376.7106 1.341.9054 1.513 1.3524m2.8882.4585c.2407 0 .3094-.1605.3323-.2522.0115-.0343.0115-.0917.0115-.126v-2.533h.871v2.4642c0 .0688 0 .1948-.0114.2292-.0573.6419-.5616.8482-1.192.8482-.6303 0-1.1346-.2063-1.192-.8482 0-.0344-.0114-.1604-.0114-.2292v-2.4642h.871v2.533c0 .0458 0 .0916.0115.126 0 .0917.0688.2522.3095.2522m7.1518-.0344c.2522 0 .3324-.1605.3553-.2522.0115-.0343.0115-.0917.0115-.126v-.4929h-.3553v-.5043H24v.917c0 .0687 0 .1145-.0115.2292-.0573.6303-.596.8481-1.2034.8481-.6075 0-1.1461-.2178-1.2034-.8481-.0115-.1147-.0115-.1605-.0115-.2293v-1.444c0-.0574.0115-.172.0115-.2293.0802-.6419.596-.8482 1.2034-.8482s1.1347.2063 1.2034.8482c.0115.1031.0115.2292.0115.2292v.1146h-.8596v-.1948s0-.0803-.0115-.1261c-.0114-.0802-.0802-.2521-.3438-.2521-.2521 0-.321.1604-.3438.2521-.0115.0458-.0115.1032-.0115.1605v1.5702c0 .0458 0 .0916.0115.126 0 .0917.0917.2522.3323.2522'],
    ['sonos', 'Sonos', '#000000', '0.00 9.66 24.00 4.67', 86, 16.7, 'M12.988 12.36l-2.813-2.634v4.429h.837V11.7l2.813 2.633V9.905h-.837zM6.464 9.665A2.3 2.3 0 0 0 4.13 12c0 1.257 1.077 2.334 2.334 2.334A2.3 2.3 0 0 0 8.798 12a2.3 2.3 0 0 0-2.334-2.334m0 3.83A1.482 1.482 0 0 1 4.968 12c0-.838.658-1.496 1.496-1.496S7.96 11.162 7.96 12s-.658 1.496-1.496 1.496M2.694 12c-.24-.18-.54-.3-.958-.419-.838-.24-.838-.479-.838-.598 0-.24.299-.48.718-.48.36 0 .658.18.778.24l.06.06.658-.479-.06-.06s-.538-.598-1.436-.598c-.419 0-.838.12-1.137.359-.3.24-.479.598-.479.958s.18.718.479.957c.24.18.538.3.957.42.838.239.838.478.838.598 0 .239-.299.478-.718.478-.359 0-.658-.18-.778-.239l-.06-.06-.658.479.06.06s.538.598 1.436.598c.42 0 .838-.12 1.137-.359.3-.24.48-.598.48-.957 0-.36-.18-.659-.48-.958m14.843-2.334A2.3 2.3 0 0 0 15.202 12a2.337 2.337 0 0 0 2.334 2.334A2.3 2.3 0 0 0 19.87 12a2.337 2.337 0 0 0-2.334-2.334m0 3.83A1.482 1.482 0 0 1 16.04 12c0-.838.658-1.496 1.496-1.496s1.496.658 1.496 1.496-.718 1.496-1.496 1.496m3.77-1.556c.24.18.54.3.958.42.838.239.838.478.838.598 0 .239-.299.478-.718.478-.36 0-.658-.18-.778-.239h-.06l-.658.479.06.06s.538.598 1.436.598c.419 0 .838-.12 1.137-.359s.479-.598.479-.958-.18-.718-.479-.957c-.24-.18-.538-.3-.957-.42-.838-.239-.838-.478-.838-.598 0-.239.299-.478.718-.478.359 0 .658.18.778.239l.06.06.658-.479-.06-.06s-.538-.598-1.436-.598c-.42 0-.838.12-1.137.359-.3.24-.48.598-.48.957-.059.36.12.659.48.898'],
    ['bose', 'Bose', '#000000', '0.00 10.59 24.00 2.83', 86, 10.1, 'M14.052 10.589a.69.69 0 0 0-.588.332l-.54.915c-.114.19.036.399.235.399h1.873l-.336.568a.274.274 0 0 1-.24.139h-.29a.113.113 0 0 1-.102-.164c.035-.062.112-.19.112-.19h-1.699l-.246.418c-.115.194.038.405.232.405h3.174a.692.692 0 0 0 .598-.34c.12-.206.405-.69.527-.896.123-.205-.032-.41-.228-.41h-1.873l.347-.586a.276.276 0 0 1 .231-.123h.292c.095 0 .135.102.105.155-.03.053-.117.199-.117.199h1.696l.254-.43c.094-.16-.023-.392-.24-.392h-3.18.003zm-1.344 0H9.537c-.23 0-.47.12-.592.329-.124.207-1.13 1.911-1.24 2.096-.109.185.042.397.236.397h3.177c.255 0 .48-.141.592-.33.111-.188 1.13-1.915 1.237-2.094.106-.18-.03-.4-.24-.4v.002zm-1.598.636c-.045.076-.89 1.505-.936 1.585a.276.276 0 0 1-.236.134h-.295c-.094 0-.138-.102-.102-.163l.94-1.592a.274.274 0 0 1 .235-.13h.296c.085 0 .143.091.097.167l.001-.001zm-2.919-.636H4.61l-1.39 2.354H0v.47h6.598a.69.69 0 0 0 .596-.336l.41-.697c.085-.145-.004-.331-.164-.379a.703.703 0 0 0 .583-.329c.115-.193.298-.506.402-.682a.266.266 0 0 0-.234-.4v-.001zM6.29 12.402l-.243.411a.267.267 0 0 1-.233.132h-.9l.419-.708h.857a.11.11 0 0 1 .099.166zm.694-1.178-.242.41a.266.266 0 0 1-.233.131h-.9l.418-.708h.858c.09 0 .14.093.098.167h.001zm11.194-.635-1.667 2.823h4.042l.276-.469h-2.345l.418-.707h2.345l.278-.47H19.18l.418-.709H24v-.468h-5.822z'],
    ['jbl', 'JBL', '#FF3300', '0.00 5.26 24.00 13.47', 64.1, 36, 'M0 5.2645l2.0221 4.5892 2.0217-4.5892zm2.0221 7.601c.6982 0 1.2656-.5655 1.2656-1.2606 0-.6985-.5674-1.2618-1.2656-1.2618-.7003 0-1.2661.5633-1.2661 1.2618 0 .6951.5658 1.2607 1.2661 1.2607zm-1.0937 3.361c0 .9572.862 2.509 3.3142 2.509 2.4529 0 3.3154-1.1872 3.3154-2.509V5.2645H5.3693l.0011 11.3428c0 .6196-.5037 1.1392-1.1261 1.1392-.6231 0-1.1279-.5045-1.1279-1.124l-.0016-2.3108H.9284zm8.2885 2.3119V5.2645h4.3745c.8441 0 2.187.693 2.187 2.1628v2.2611c0 .6612-.5798 1.8328-1.4412 1.8328.8614 0 1.4412.7422 1.4412 1.3045v3.9788c0 .6767-.5463 1.7339-2.187 1.7339zm3.3802-7.559c.7955 0 .9944-.134.9944-2.2147 0-2.0801-.199-2.246-.9944-2.246h-1.1948v4.4575zm.9944 3.8108c0-2.0812 0-2.6906-.8636-2.6906h-1.3256v5.3482l1.3255.0027c.8636 0 .8636-.5807.8636-2.6603zm3.779 3.7482H24v-4.2267h-2.1886l.0016 2.3107c0 .6196-.5047 1.1241-1.1273 1.1241-.622 0-1.1273-.5045-1.1273-1.124V5.2644h-2.188Z'],
    ['tp-link', 'TP-Link', '#00A6B8', '0.12 0.00 23.77 24.00', 35.7, 36, 'M15.185 0C10.218 0 6.25 3.984 6.25 8.903V10.8h4.99V8.903c0-2.135 1.736-3.863 3.946-3.863 2.187 0 3.708 1.536 3.708 3.815 0 2.257-1.64 3.912-3.827 3.912h-1.878v5.039h1.878c4.874 0 8.819-4.007 8.819-8.952C23.885 3.72 20.2 0 15.185 0zM.115 12.6v4.103c0 .624.523 1.248 1.236 1.248h4.753v4.801c0 .624.523 1.248 1.236 1.248h4.065V12.6Z'],
    ['xiaomi', 'Xiaomi', '#FF6900', '0.00 0.00 24.00 24.00', 36.0, 36, 'M12 0C8.016 0 4.756.255 2.493 2.516.23 4.776 0 8.033 0 12.012c0 3.98.23 7.235 2.494 9.497C4.757 23.77 8.017 24 12 24c3.983 0 7.243-.23 9.506-2.491C23.77 19.247 24 15.99 24 12.012c0-3.984-.233-7.243-2.502-9.504C19.234.252 15.978 0 12 0zM4.906 7.405h5.624c1.47 0 3.007.068 3.764.827.746.746.827 2.233.83 3.676v4.54a.15.15 0 0 1-.152.147h-1.947a.15.15 0 0 1-.152-.148V11.83c-.002-.806-.048-1.634-.464-2.051-.358-.36-1.026-.441-1.72-.458H7.158a.15.15 0 0 0-.151.147v6.98a.15.15 0 0 1-.152.148H4.906a.15.15 0 0 1-.15-.148V7.554a.15.15 0 0 1 .15-.149zm12.131 0h1.949a.15.15 0 0 1 .15.15v8.892a.15.15 0 0 1-.15.148h-1.949a.15.15 0 0 1-.151-.148V7.554a.15.15 0 0 1 .151-.149zM8.92 10.948h2.046c.083 0 .15.066.15.147v5.352a.15.15 0 0 1-.15.148H8.92a.15.15 0 0 1-.152-.148v-5.352a.15.15 0 0 1 .152-.147Z'],
    ['anycubic', 'Anycubic', '#476695', '0.00 0.53 24.00 22.93', 37.7, 36, 'm6.762.534 8.728 3.481 8.469 7.449-6.494-.631L6.762.534Zm10.72 10.463 6.518.581-7.826 8.749-8.649 3.139 9.957-12.469ZM6.592.601l10.699 10.331L7.355 23.44 0 12.465 6.592.601Z'],
    ['creality', 'Creality', '#000000', '0.00 10.33 24.00 3.34', 86, 12.0, 'm3.215 10.33-1.772.01c-.785.029-1.42.737-1.443 1.613v.088c.018.903.69 1.629 1.51 1.629h1.705c.01 0 .02-.011.02-.024v-.603a.022.022 0 0 0-.02-.022H1.508c-.501 0-.92-.443-.928-1.001-.007-.569.405-1.034.912-1.034l1.723-.007c.01 0 .02-.01.02-.022v-.603c0-.013-.01-.024-.02-.024zm.412 0c-.011 0-.02.011-.02.024v3.292c0 .013.009.024.02.024h.54c.012 0 .02-.011.02-.024V11c0-.012.009-.021.02-.021h1.606c.168 0 .314.145.32.333.006.198-.137.36-.313.36l-1.533.002c-.018 0-.028.023-.016.037l1.75 1.95c.004.005.009.009.014.009H6.8c.017 0 .026-.025.014-.04L5.64 12.32h.183c.496 0 .898-.454.89-1.01-.006-.546-.416-.98-.905-.98h-2.18Zm4.873 0c-.827 0-1.5.75-1.5 1.67 0 .92.673 1.67 1.5 1.67h1.68c.01 0 .02-.011.02-.024v-.603c0-.012-.01-.022-.02-.022H8.5c-.404 0-.75-.292-.871-.697h2.55c.012 0 .02-.01.02-.023v-.604c0-.012-.008-.021-.02-.021h-2.55c.123-.405.468-.697.872-.697h1.68c.01 0 .02-.012.02-.024v-.601c0-.013-.01-.024-.02-.024zm3.709 0c-.013 0-.026.009-.033.024l-1.7 3.28c-.007.016 0 .036.016.036h.625a.02.02 0 0 0 .018-.012l1.056-2.045a.02.02 0 0 1 .036 0l.71 1.375c.008.015-.002.033-.017.033h-.928c-.007 0-.012.005-.015.012l-.313.602c-.008.015.002.033.018.033h2.242c.015 0 .025-.018.017-.033l-1.697-3.281a.041.041 0 0 0-.035-.024zm2.03.002c-.01 0-.02.01-.02.022v2.94c0 .207.15.376.336.376h2.148c.01 0 .022-.011.022-.024v-.603a.022.022 0 0 0-.022-.022H14.82A.022.022 0 0 1 14.8 13v-2.646c0-.013-.01-.022-.02-.022h-.54zm2.84 0c-.01 0-.02.01-.02.022v3.292c0 .013.01.024.02.024h.542c.01 0 .02-.011.02-.024v-3.292c0-.013-.01-.022-.02-.022h-.54zm.85 0c-.01 0-.02.01-.02.022v.601c0 .012.01.024.02.024h1.169c.01 0 .02.009.02.021v2.646c0 .013.01.022.02.022h.54c.01 0 .02-.01.02-.022V11a.02.02 0 0 1 .02-.021h1.172a.02.02 0 0 1 .015.007l1.018 1.354a.02.02 0 0 1 .004.014v1.292c0 .013.008.024.02.024h.54c.011 0 .02-.011.02-.024v-1.292c0-.006.003-.01.006-.014l1.482-1.97c.011-.016.001-.038-.016-.038h-.705a.02.02 0 0 0-.015.008l-1.026 1.363a.02.02 0 0 1-.03 0l-1.026-1.363a.02.02 0 0 0-.016-.008z'],
    ['hp', 'HP', '#0096D6', '0.00 0.00 24.00 24.00', 36.0, 36, 'M12.0069 24h-.3572l2.459-6.7453h3.3796c.5907 0 1.2364-.4533 1.4424-1.0166l2.6652-7.3085c.4396-1.1952-.2473-2.1706-1.525-2.1706h-4.6983l-3.929 10.798-2.2255 6.127C3.929 22.434 0 17.6806 0 12.007 0 6.498 3.7092 1.8546 8.7647.4396L6.4705 6.759 2.6514 17.2547h2.5415L8.4488 8.339h1.9095l-3.2558 8.9158H9.644l3.0223-8.3251c.4396-1.1952-.2473-2.1706-1.525-2.1706h-2.143l2.459-6.7453C11.636 0 11.8145 0 11.9931 0 18.6285 0 24 5.3715 24 12.007c.0137 6.6216-5.3578 11.993-11.9931 11.993zM19.2742 8.325h-1.9096l-2.6789 7.336h1.9096l2.6789-7.336z']
  ];

  function el(html) { var t = document.createElement('div'); t.innerHTML = html.trim(); return t.firstChild; }

  function brands() {
    var h = '<section class="ps-v2-brands" aria-label="Značky v ponuke"><h2>Značky v ponuke</h2><div class="ps-v2-brand-row">';
    BRANDS.forEach(function (b) {
      h += '<a class="ps-v2-brand" href="/znacka/' + b[0] + '/" style="--bc:' + b[2] + '" data-ps-track="brand-' + b[0] + '" aria-label="' + b[1] + ' – zobraziť produkty značky" title="' + b[1] + '">' +
        '<svg viewBox="' + b[3] + '" width="' + b[4] + '" height="' + b[5] + '" aria-hidden="true" focusable="false"><path d="' + b[6] + '"/></svg></a>';
    });
    h += '<a class="ps-v2-brand all" href="/znacka/" data-ps-track="brands-all">Všetky značky →</a></div></section>';
    return el(h);
  }

  function wide() {
    return el('<section class="ps-v2-wide" aria-label="3D tlač"><div class="ps-v2-copy"><span class="ps-v2-eyebrow">3D tlač a digitálna výroba</span>' +
      '<h2>Od nápadu k hotovému dielu.</h2><p>Tlačiarne, filamenty a živice na jednom mieste. Začnite s živicou Anycubic a prvý model máte za večer.</p>' +
      '<a class="ps-v2-btn brand" href="/3d-tlac-a-digitalna-vyroba/" data-ps-track="banner-3d">Vstúpiť do sveta 3D tlače →</a></div>' +
      '<div class="ps-v2-media"><img src="' + BASE + 'bambu-x1-carbon.png" alt="3D tlačiareň Bambu Lab X1 Carbon Combo" width="400" height="400" loading="lazy" decoding="async">' +
      '<img src="' + BASE + 'anycubic-zivica.jpg" alt="Živica Anycubic" width="200" height="300" loading="lazy" decoding="async">' +
      '</div></section>');
  }

  function duo() {
    return el('<section class="ps-v2-duo" aria-label="Smart Home a Dielňa">' +
      '<a class="ps-v2-promo ice" href="/elektro-smart-home-a-osvetlenie/" data-ps-track="banner-smart-home"><div class="ps-v2-copy"><span class="ps-v2-eyebrow">Smart Home</span>' +
      '<h3>Bezpečný domov bez kompromisov</h3><p>Kamerové sety TP-Link Tapo s hubom H500. Dohľad nad domom z mobilu.</p><span class="ps-v2-btn brand">Pozrieť set</span></div>' +
      '<img src="' + BASE + 'tapo-kamerovy-set.jpg" alt="Kamerový set TP-Link Tapo" width="300" height="300" loading="lazy" decoding="async"></a>' +
      '<a class="ps-v2-promo cream" href="/dielna-a-zahrada/" data-ps-track="banner-dielna"><div class="ps-v2-copy"><span class="ps-v2-eyebrow">Dielňa a náradie</span>' +
      '<h3>Meranie bez hádania</h3><p>Multimetre a testery pre dielňu aj domácnosť.</p><span class="ps-v2-btn ghost">Do dielne</span></div>' +
      '<img src="' + BASE + 'uni-t-ut133a.jpg" alt="Multimeter UNI-T UT133A" width="300" height="300" loading="lazy" decoding="async"></a></section>');
  }

  function track(e) {
    var a = e.target.closest && e.target.closest('[data-ps-track]');
    if (!a) return;
    var block = a.getAttribute('data-ps-track');
    // GA4 beží cez gtag (bez GTM); gtag rešpektuje nastavenie súhlasu s cookies.
    // send_to je nutné: bez neho udalosť odíde len k reklamným značkám AW a do GA4 (G-D0V10RN09V) nedorazí.
    if (typeof window.gtag === 'function') window.gtag('event', 'ps_home_click', { ps_block: block, send_to: 'G-D0V10RN09V', transport_type: 'beacon' });
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'ps_home_click', ps_block: block });
  }

  function init() {
    var main = document.querySelector('body.type-index main#content');
    if (!main || main.querySelector('.ps-v2-brands')) return;
    main.appendChild(brands());
    main.appendChild(wide());
    main.appendChild(duo());
    main.addEventListener('click', track);
    main.classList.add('ps-v2-ready');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

} catch (e) { if (window.console) console.error("PS bundle: premiumstore-home-v2-20261012.js", e); }

/* ---- premiumstore-home-categories-mobile.js ---- */
try {
/* PremiumStore – dlaždice hlavných kategórií na úvodnej stránke (2026-10-03)
   Vloží blok .ps-home-cats na začiatok main#content; zobrazuje ho iba CSS na mobile.
   Idempotentné, nemení nič iné. Rollback = odstrániť <script> a <link>. */
(function () {
  'use strict';

  var CATS = [
    ['/pocitace-mobily-a-tablety/', 'Počítače, mobily', '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>', 'pc'],
    ['/tv-foto-audio-video/', 'TV, audio, foto', '<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>', 'tv'],
    ['/domace-spotrebice/', 'Domáce spotrebiče', '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>', 'dom'],
    ['/elektro-smart-home-a-osvetlenie/', 'Smart Home, svetlá', '<path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.7.6 1 1.4 1 2.3h6c0-.9.3-1.7 1-2.3A7 7 0 0 0 12 2z"/>', 'smart'],
    ['/fotovoltaika-a-energie/', 'Energia, napájanie', '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>', 'energia'],
    ['/profesionalna-audio-technika/', 'Profi audio', '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4"/>', 'proaudio'],
    ['/3d-tlac-a-digitalna-vyroba/', '3D tlač', '<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M12 12l9-5M12 12L3 7M12 12v10"/>', '3d'],
    ['/dielna-a-zahrada/', 'Dielňa, záhrada', '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.4 2.4-2.6-.6-.6-2.6z"/>', 'dielna'],
    ['/auto-moto/', 'Auto-moto', '<path d="M5 16l1.5-6A2 2 0 0 1 8.4 8.5h7.2a2 2 0 0 1 1.9 1.5L19 16"/><rect x="3" y="16" width="18" height="4" rx="1"/><circle cx="7.5" cy="18" r=".5"/><circle cx="16.5" cy="18" r=".5"/>', 'auto'],
    ['/cestovanie-sport-a-outdoor/', 'Šport, outdoor', '<path d="M3 20l6-11 4 6 2-3 6 8z"/><circle cx="17" cy="6" r="2"/>', 'sport'],
    ['/zdravie-a-starostlivost/', 'Zdravie', '<path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z"/>', 'zdravie'],
    ['/chovatelske-potreby/', 'Pre zvieratá', '<circle cx="6" cy="10" r="2"/><circle cx="10" cy="5.5" r="2"/><circle cx="15" cy="5.5" r="2"/><circle cx="19" cy="10" r="2"/><path d="M12.5 12c-3 0-5.5 3-5.5 5.5 0 1.7 1.3 2.5 3 2.5 1 0 1.5-.5 2.5-.5s1.5.5 2.5.5c1.7 0 3-.8 3-2.5 0-2.5-2.5-5.5-5.5-5.5z"/>', 'chov']
  ];

  // 'images' = fotky kategórií, 'icons' = ikony; prepíše sa cez window.PS_HOME_CATS_MODE
  var MODE = window.PS_HOME_CATS_MODE || 'images';
  var SCRIPT = document.currentScript && document.currentScript.src;
  var BASE = SCRIPT ? SCRIPT.replace(/[^\/]*$/, '') + 'home-cats/' : '';

  function build() {
    var main = document.querySelector('body.type-index main#content');
    if (!main || main.querySelector('.ps-home-cats')) return;
    var ul = document.createElement('ul');
    ul.className = 'ps-home-cats' + (MODE === 'images' && BASE ? ' ps-home-cats--img' : '');
    ul.setAttribute('aria-label', 'Hlavné kategórie');
    CATS.forEach(function (c) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = c[0];
      if (ul.className.indexOf('--img') > -1) {
        a.innerHTML = '<img width="240" height="240" loading="lazy" decoding="async" alt=""><span></span>';
        a.firstChild.src = BASE + c[3] + '.webp';
      } else {
        a.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + c[2] + '</svg><span></span>';
      }
      a.lastChild.textContent = c[1];
      li.appendChild(a);
      ul.appendChild(li);
    });
    var h1 = main.querySelector('h1');
    if (h1 && h1.parentNode === main) h1.insertAdjacentElement('afterend', ul);
    else main.insertBefore(ul, main.firstChild);
    main.classList.add('ps-home-cats-ready');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
})();

} catch (e) { if (window.console) console.error("PS bundle: premiumstore-home-categories-mobile.js", e); }

/* ---- premiumstore-checkout-20261009.js ---- */
try {
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
    '@media (max-width:767px){body.ps-has-sum #checkoutSidebar{display:none!important}#ps-sum.is-on{display:block}body.ordering-process{padding-bottom:84px}}' +
    'body.ordering-process #submit-order .order-button-text,body.ordering-process #submit-order .order-button-suffix{font-weight:700}' +
    'body.ordering-process .next-step .btn,body.ordering-process #orderFormButton,body.ordering-process #continue-order-button{font-weight:700}';
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  var css2 = '' +
    '#ps-cart-extra{order:2}#ps-rel{order:5}.ps-note{display:block;margin:10px 0;padding:10px 12px;border-radius:10px;background:#eef6f2;color:#0e3d2b;font-size:13.5px;line-height:1.4}' +
    '.ps-trust{display:flex;flex-wrap:wrap;gap:8px 18px;margin:14px 0;padding:0;list-style:none;font-size:13px;color:#33424a}' +
    '.ps-trust li{display:flex;align-items:center;gap:6px;margin:0;padding:0}' +
    '.ps-trust li::before{content:"\\2713";display:inline-grid;place-items:center;width:18px;height:18px;border-radius:50%;background:#167450;color:#fff;font-size:11px;font-weight:700}' +
    '#ps-rel{margin:22px 0}#ps-rel h2{font-size:18px;margin:0 0 10px}' +
    '#ps-rel .ps-rel-list{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:6px}' +
    '#ps-rel .ps-rel-item{flex:0 0 160px;scroll-snap-align:start;border:1px solid #e0e0e0;border-radius:12px;padding:10px;background:#fff;font-size:13px;line-height:1.3}' +
    '#ps-rel .ps-rel-item img{display:block;width:100%;height:110px;object-fit:contain;margin-bottom:8px}' +
    '@media (min-width:992px){.row.summary>.col-md-8{height:auto!important}#ps-rel{margin:0 24px 0 0}#ps-rel h2{font-size:16px;margin:0 0 8px;text-align:left}#ps-rel .ps-rel-list{overflow:hidden;gap:10px}#ps-rel .ps-rel-item{flex:0 0 calc(25% - 8px);padding:8px}#ps-rel .ps-rel-item:nth-child(n+5){display:none}#ps-rel .ps-rel-item img{height:84px;margin-bottom:6px}#ps-rel .ps-rel-item a span{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}}' +
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
    var self = link;
    fetch(link.getAttribute('href'), { credentials: 'same-origin' }).then(function (r) { return r.text(); }).then(function (html) {
      var doc = new DOMParser().parseFromString(html, 'text/html');
      var items = doc.querySelectorAll('.products-related .product, #productsRelated .product, .p-related .product');
      if (items.length) return render(items, link.getAttribute('href'));
      /* záloha: produkty z poslednej kategórie v omrvinkovej navigácii */
      var crumbs = doc.querySelectorAll('#navigation .breadcrumbs a[href], .breadcrumbs a[href], [data-testid="breadcrumbs"] a[href]');
      var cat = null;
      for (var k = crumbs.length - 1; k >= 0; k--) {
        var h = crumbs[k].getAttribute('href');
        if (h && h !== '/' && h.indexOf('/' ) === 0 && h !== link.getAttribute('href')) { cat = h; break; }
      }
      if (!cat) return;
      return fetch(cat, { credentials: 'same-origin' }).then(function (r) { return r.text(); }).then(function (ch) {
        var cd = new DOMParser().parseFromString(ch, 'text/html');
        var cards = [].slice.call(cd.querySelectorAll('#products .product, .products-block .product'));
        var own = link.getAttribute('href');
        cards = cards.filter(function (c) { var a1 = c.querySelector('a[href]'); return a1 && a1.getAttribute('href') !== own; });
        render(cards, own);
      });
    }).catch(function () {});
    function render(items, own) {
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
        var dmq = window.matchMedia('(min-width:992px)');
        var place = function () {
          var col = document.querySelector('.row.summary > .col-md-8'), ex = document.getElementById('ps-cart-extra');
          if (dmq.matches && col) col.appendChild(wrap);
          else if (ex) ex.parentNode.insertBefore(wrap, ex.nextSibling);
        };
        place();
        if (dmq.addEventListener) dmq.addEventListener('change', place);
      }
    }
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
    var on = mq.matches && !!t && !!c && (!visible || document.body.classList.contains('ps-has-sum')) && !modalOpen();
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

} catch (e) { if (window.console) console.error("PS bundle: premiumstore-checkout-20261009.js", e); }

/* ---- premiumstore-category-20261009.js ---- */
try {
/* PremiumStore – stránka kategórie (2026-10-09): presun "Najpredávanejšie" pod zoznam, stav skladu, alt texty. */
(function () {
  if (!document.body) return;
  var isCat = document.body.classList.contains('type-category');
  if (!isCat && !document.body.classList.contains('type-search')) return;

  function moveTop() {
    var top = document.querySelector('.category-top > .products-top-wrapper');
    if (!top || top.classList.contains('ps-moved')) return;
    var listing = document.querySelector('.category-content-wrapper .listingControls');
    var anchor = listing || document.querySelector('.category-content-wrapper #products');
    if (!anchor || !anchor.parentNode) return;
    anchor.parentNode.insertBefore(top, anchor.nextSibling);
    top.classList.add('ps-moved');
  }

  function stock(scope) {
    var els = (scope || document).querySelectorAll('#products .product .availability:not([data-ps-stock])');
    for (var i = 0; i < els.length; i++) {
      var el = els[i], txt = (el.textContent || '').replace(/\s+/g, ' ').trim();
      el.setAttribute('data-ps-stock', '1');
      var m = txt.match(/^(\d+)\s*(?:-\s*(\d+)|a viac)?\s*ks skladom/i);
      if (!m) continue;
      var max = m[2] ? parseInt(m[2], 10) : parseInt(m[1], 10);
      var low = !/a viac/i.test(txt) && max <= 2;
      var span = el.querySelector('span') || el;
      el.title = txt;
      span.textContent = low ? 'Posledné kusy' : 'Skladom';
      el.classList.add('ps-stock');
      if (low) el.classList.add('ps-stock-low');
    }
  }

  function alts() {
    var imgs = document.querySelectorAll('#products .product .image img, #productsTop .product .image img');
    for (var i = 0; i < imgs.length; i++) {
      var im = imgs[i];
      if (im.getAttribute('alt')) continue;
      var n = im.closest('.product');
      n = n && n.querySelector('.name');
      var t = n && n.textContent.replace(/\s+/g, ' ').trim();
      if (t) im.setAttribute('alt', t);
    }
  }

  function run() { if (isCat) moveTop(); stock(); alts(); }
  run();
  var list = document.getElementById('products');
  if (list && window.MutationObserver) {
    new MutationObserver(function () { stock(); alts(); }).observe(list, { childList: true });
  }
})();

} catch (e) { if (window.console) console.error("PS bundle: premiumstore-category-20261009.js", e); }

/* ---- premiumstore-search-assist-20261009.js ---- */
try {
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

} catch (e) { if (window.console) console.error("PS bundle: premiumstore-search-assist-20261009.js", e); }

/* ---- premiumstore-search-20261009.js ---- */
try {
/* PremiumStore – výsledky vyhľadávania (2026-10-09): sezónny banner (vianočné osvetlenie) a pomoc pri nulových výsledkoch. */
(function () {
  if (!document.body || !document.body.classList.contains('type-search')) return;
  var h2 = document.querySelector('#content > h2');
  if (!h2) return;

  var q = '';
  try { q = (new URLSearchParams(location.search).get('string') || '').toLowerCase(); } catch (e) {}
  var plain = q.normalize ? q.normalize('NFD').replace(/[̀-ͯ]/g, '') : q;

  // Pravidlo pre konkrétny výraz (rozcestník), okrem vianočných, tie rieši sezónny banner nižšie.
  var A = window.PSSearchAssist, rl = A && A.rule(q);
  if (rl && !rl.xmas) {
    var rh = document.createElement('div');
    rh.innerHTML = A.ruleHtml(rl, false);
    h2.parentNode.insertBefore(rh.firstChild, h2.nextSibling);
  }

  // Sezónny banner do 24. 12. 2026 (aj pri vianočných dopytoch ako rozcestník).
  var now = new Date();
  var seasonOn = now < new Date(2026, 11, 25) && !(rl && !rl.xmas);
  if (seasonOn) {
    var a = document.createElement('a');
    a.className = 'ps-season';
    a.href = '/vianocne-osvetlenie/';
    a.innerHTML = '<span><span class="ps-season__eyebrow">Vianoce sú za dverami</span>' +
      '<span class="ps-season__title">Vianočné osvetlenie a dekorácie</span>' +
      '<span class="ps-season__text">Rozsvieťte stromček, okná aj záhradu: LED reťaze, cencúle, závesy a svietiace dekorácie.</span>' +
      '<span class="ps-season__btn">Pozrieť ponuku</span></span>' +
      '<span class="ps-season__imgs" aria-hidden="true"><span class="ps-season__img ps-season__img--a"></span><span class="ps-season__img ps-season__img--b"></span><span class="ps-season__img ps-season__img--c"></span></span>' +
      '<span class="ps-season__scene" aria-hidden="true"></span>';
    var base = 'https://cdn.myshoptet.com/usr/www.premiumstore.sk/user/shop/big/';
    var pics = { a: '628470_solight-led-vianocna-hviezda-3d--150-led--60cm--ip44--tepla-biela--casovac-obrazok-1.jpg',
      b: '642570_solight-led-vonkajsia-vanocna-retaz--100-led--10m--privod-3m--8-funkcii--casovac--ip44--tepla-biela-obrazok-1.jpg',
      c: '628449_solight-led-vianocna-girlanda--cencule--200-led--10m--ip44--teple-biele-svetlo-obrazok-1.jpg' };
    for (var k in pics) a.querySelector('.ps-season__img--' + k).style.backgroundImage = 'url(' + base + pics[k] + ')';
    h2.parentNode.insertBefore(a, h2.nextSibling);
  }

  // Žiadne výsledky: čo skúsiť a kam ďalej.
  var found = document.getElementById('products-found');
  var none = found && !found.querySelector('.product');
  if (none) {
    var d = document.createElement('div');
    d.className = 'ps-noresults';
    d.innerHTML = '<h3>Skúste to inak</h3>' +
      '<p>Skontrolujte preklepy, použite kratší výraz alebo značku a model. Alebo začnite v niektorej z kategórií:</p>' +
      '<ul><li><a href="/televizory/">Televízory</a></li><li><a href="/sluchadla/">Slúchadlá</a></li><li><a href="/powerbanky/">Powerbanky</a></li>' +
      '<li><a href="/domace-spotrebice/">Domáce spotrebiče</a></li><li><a href="/vianocne-osvetlenie/">Vianočné osvetlenie</a></li></ul>' +
      '<p>Produkt nevidíte? <a href="/kontakty/">Napíšte nám</a> alebo zavolajte na +421 48 4151999 (Po–Pia 9:00–17:00), poradíme a zistíme dostupnosť.</p>';
    found.appendChild(d);
    if (A) A.withDict(function (dict) {
      var html = A.suggestHtml(A.suggest(q, dict));
      if (html) d.insertAdjacentHTML('afterbegin', html);
    });
  }
})();

} catch (e) { if (window.console) console.error("PS bundle: premiumstore-search-20261009.js", e); }

/* ---- premiumstore-search-bestseller-20261016.js ---- */
try {
/* PremiumStore – najpredávanejší produkt v našeptávači (2026-10-16): pri vyhľadávaní značky/témy ukáže v ľavom stĺpci kartu bestsellera.
Nadväzuje na premiumstore-search-assist (PSSearchAssist.norm). Nové pravidlá pridávaj do BEST nižšie.
Názov, cenu a obrázok si berie živo zo stránky produktu (cache 6 h), takže sa nemusia prepisovať. Ak produkt nie je skladom, karta sa nezobrazí. */
(function () {
// test = regulárny výraz na text bez diakritiky a malými písmenami (rovnako ako RULES v search-assist).
// href = adresa najpredávanejšieho produktu. Obnov raz za pár týždňov podľa Štatistiky > Produkty v administrácii.
// Zdroj: Shoptet > Štatistiky > Produkty (predané kusy, stav 16. 10. 2026). Konkrétnejšie pravidlá patria vyššie.
var BEST = [
// Flytec: V060 GPS 12 000 mAh (10 ks)
{ test: /flytec|lodk|lodic|zavaz|navnad/, href: '/zavazacia-lodka-flytec-v060-gps--12-000-mah/', label: 'Najpredávanejšie' },
// Bose slúchadlá: QuietComfort Headphones Club SC (4 + 1 ks). Pozor: dostupnosť je „Na objednávku".
{ test: /quietcomfort|bose.*slucha|slucha.*bose/, href: '/bose-quietcomfort-headphones-club-sc-bluetooth-sluchadla-s-potlacenim-okoliteho-hluku--cierne/', label: 'Najpredávanejšie' },
// Bose všeobecne: DesignMax DM3C biele (7 ks, 560 €)
{ test: /bose/, href: '/bose-designmax-dm3c-instalacne-reproduktory--biele-2/', label: 'Najpredávanejšie' },
// HTVRONT: trblietavá fólia strieborná (5 ks)
{ test: /htv\s?-?ront/, href: '/htvront---trblietava-folia-na-termotransfer--30-5-cm--90-cm--strieborna/', label: 'Najpredávanejšie' },
// Carlinkit: MINI ULTRA 5 (4 + 2 ks, dva záznamy v štatistike)
{ test: /carlin?kit|carlink|carplay/, href: '/bezdrotovy-adapter-carlinkit-mini-ultra-5-pre-carplay-android-auto/', label: 'Najpredávanejšie' }
// Zatiaľ vypnuté, slabé alebo nepoužiteľné dáta:
// Yamaha: najpredávanejšie NS-AW392 (6 ks) a NS-F51 (1 ks) sa vo vyhľadávaní na webe nenašli (skryté alebo zmazané). Doplň, keď bude predávaný produkt.
// { test: /yamaha/, href: '/…/', label: 'Najpredávanejšie' },
// Sonos: jediný predaj sú nástenné držiaky Era 100 (2 ks), nie je to to, čo pri „sonos" ľudia hľadajú: '/sonos-era-100-mount-pair-black/'
// RingConn: každá veľkosť je samostatný produkt a predal sa po 1 ks, bestseller sa nedá určiť.
];

function norm(s) {
if (window.PSSearchAssist && window.PSSearchAssist.norm) return window.PSSearchAssist.norm(s);
s = (s || '').toLowerCase();
return (s.normalize ? s.normalize('NFD').replace(/[̀-ͯ]/g, '') : s).replace(/\s+/g, ' ').trim();
}
function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

function find(q) {
var nq = norm(q);
if (nq.length < 3) return null;
for (var i = 0; i < BEST.length; i++) if (BEST[i].test.test(nq)) return BEST[i];
return null;
}

// Údaje o produkte zo stránky produktu (cache v sessionStorage).
function load(href, cb) {
var key = 'ps-bs:' + href, c = null;
try { c = JSON.parse(sessionStorage.getItem(key) || 'null'); } catch (e) {}
if (c && Date.now() - c.t < 6 * 36e5) return cb(c.d);
fetch(href, { credentials: 'same-origin' }).then(function (r) { return r.ok ? r.text() : Promise.reject(); }).then(function (html) {
var d = new DOMParser().parseFromString(html, 'text/html');
var t = d.querySelector('meta[property="og:title"]'), im = d.querySelector('meta[property="og:image"]');
var pr = d.querySelector('.p-final-price-wrapper .price-final-holder') || d.querySelector('.price-final');
var av = d.querySelector('.availability-label');
var data = {
name: t ? t.content : '',
img: im ? im.content.replace('/big/', '/related/') : '',
price: pr ? pr.textContent.replace(/\s+/g, ' ').trim() : '',
stock: av ? av.textContent.replace(/\s+/g, ' ').trim() : '',
ok: !/vypredan|nedostup|nie je skladom/i.test(av ? av.textContent : '')
};
try { sessionStorage.setItem(key, JSON.stringify({ t: Date.now(), d: data })); } catch (e) {}
cb(data);
}).catch(function () {});
}

function css() {
if (document.getElementById('ps-bs-css')) return;
var s = document.createElement('style');
s.id = 'ps-bs-css';
s.textContent = '.ps-bs{display:block;margin:16px 0 0;padding:10px;border:1px solid rgba(0,0,0,.1);border-radius:10px;background:#fff;color:inherit;text-decoration:none;text-align:center}' +
'.ps-bs:hover{border-color:var(--color-primary,#1f6b4a)}' +
'.ps-bs__tag{display:inline-block;margin-bottom:8px;padding:2px 8px;border-radius:99px;background:var(--color-primary,#1f6b4a);color:#fff;font-size:11px;font-weight:700}' +
'.ps-bs__img{display:block;height:90px;margin:0 auto 8px;object-fit:contain;max-width:100%}' +
'.ps-bs__name{display:block;font-size:13px;line-height:1.3;max-height:3.9em;overflow:hidden}' +
'.ps-bs__stock{display:block;margin-top:4px;font-size:12px;color:#3c840f}' +
'.ps-bs__price{display:block;margin-top:4px;font-size:15px;font-weight:700}';
document.head.appendChild(s);
}

var input = document.querySelector('.js-search-input');
var box = document.querySelector('.search');
if (!input || !box) return;
var timer = null, seq = 0;

function clean() {
var own = box.querySelector('.ps-bs-side'), old = box.querySelector('.ps-bs');
if (own) own.remove(); else if (old) old.remove();
}
function enhance() {
var w = box.querySelector('.searchWhisperer');
var old = box.querySelector('.ps-bs');
var q = input.value || '', r = find(q);
if (!w || !r) { clean(); return; }
if (old && old.getAttribute('data-want') === r.href) return;
clean();
var mine = ++seq;
load(r.href, function (d) {
if (mine !== seq || !d || !d.ok || !d.name) return;
var w2 = box.querySelector('.searchWhisperer'), prods = w2 && w2.querySelector('.searchWhisperer__products');
if (!prods || w2.querySelector('.ps-bs')) return;
// Keď Shoptet nenašiel kategóriu ani značku, ľavý stĺpec nevznikne. Vytvoríme ho sami, aby karta mala kde byť.
var side2 = w2.querySelector('.searchWhisperer__additionalResults');
if (!side2) {
side2 = document.createElement('div');
side2.className = 'searchWhisperer__additionalResults ps-bs-side';
prods.parentNode.insertBefore(side2, prods);
}
css();
var a = document.createElement('a');
a.className = 'ps-bs';
a.href = r.href;
a.setAttribute('data-want', r.href);
a.innerHTML = '<span class="ps-bs__tag">' + esc(r.label || 'Najpredávanejšie') + '</span>' +
(d.img ? '<img class="ps-bs__img" src="' + esc(d.img) + '" alt="" loading="lazy">' : '') +
'<span class="ps-bs__name">' + esc(d.name) + '</span>' +
(d.stock ? '<span class="ps-bs__stock">' + esc(d.stock) + '</span>' : '') +
(d.price ? '<span class="ps-bs__price">' + esc(d.price) + '</span>' : '');
side2.appendChild(a);
});
}
if (window.MutationObserver) {
new MutationObserver(function () { clearTimeout(timer); timer = setTimeout(enhance, 80); }).observe(box, { childList: true, subtree: true });
}
input.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(enhance, 400); });
})();

} catch (e) { if (window.console) console.error("PS bundle: premiumstore-search-bestseller-20261016.js", e); }

/* ---- premiumstore-trust-20261009.js ---- */
try {
/* PremiumStore – dôvera a prístupnosť (2026-10-09):
   ikony platieb pri tlačidle Do košíka a v košíku, JSON-LD obchodu na úvodnej stránke,
   drobné opravy prístupnosti (názvy dialógov, tlačidiel, rámov a prázdnych nadpisov). */
(function () {
  'use strict';

  var PAY = [
    ['visa', 'Visa'], ['mc', 'Mastercard'], ['apple', 'Apple Pay'], ['google', 'Google Pay'],
    ['qr', 'QR platba'], ['cod', 'Dobierka']
  ];

  function payBlock() {
    var d = document.createElement('div');
    d.className = 'ps-pay';
    var html = '<span class="ps-pay__label">Bezpečná platba</span><ul class="ps-pay__list" aria-label="Spôsoby platby: karta Visa a Mastercard, Apple Pay, Google Pay, QR platba, dobierka">';
    PAY.forEach(function (p) {
      html += '<li class="ps-pay__item ps-pay__item--' + p[0] + '" aria-hidden="true">' +
        (p[0] === 'mc' ? '<i class="ps-pay__mc"></i>' : '') + '<span>' + p[1] + '</span></li>';
    });
    d.innerHTML = html + '</ul>';
    return d;
  }

  function addPay() {
    if (document.querySelector('.ps-pay')) return;
    var anchor = null;
    if (document.body.classList.contains('type-detail')) anchor = document.querySelector('.p-to-cart-block');
    else if (document.body.classList.contains('in-kosik')) anchor = document.querySelector('.next-step--cart');
    if (anchor) anchor.insertAdjacentElement('afterend', payBlock());
  }

  function addStoreLd() {
    if (!document.body.classList.contains('type-index') || document.getElementById('ps-store-ld')) return;
    var og = document.querySelector('meta[property="og:image"]');
    var ld = {
      '@context': 'https://schema.org',
      '@type': 'OnlineStore',
      '@id': 'https://www.premiumstore.sk/#store',
      name: 'PremiumStore.sk',
      url: 'https://www.premiumstore.sk/',
      email: 'obchod@premiumstore.sk',
      telephone: '+421484151999',
      address: { '@type': 'PostalAddress', streetAddress: 'Národná 2', postalCode: '974 01', addressLocality: 'Banská Bystrica', addressCountry: 'SK' },
      openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' }],
      hasMerchantReturnPolicy: { '@type': 'MerchantReturnPolicy', applicableCountry: 'SK', returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow', merchantReturnDays: 14 }
    };
    if (og && og.content) ld.logo = og.content;
    var s = document.createElement('script');
    s.type = 'application/ld+json';
    s.id = 'ps-store-ld';
    s.textContent = JSON.stringify(ld);
    document.head.appendChild(s);
  }

  function a11y() {
    var c = document.querySelector('.siteCookies');
    if (c && !c.hasAttribute('aria-label') && !c.hasAttribute('aria-labelledby')) c.setAttribute('aria-label', 'Súhlas s používaním cookies');
    document.querySelectorAll('.top-nav-button-login:not([aria-label])').forEach(function (b) {
      b.setAttribute('aria-label', 'Prihlásenie');
    });
    document.querySelectorAll('a[href*="objednavka/krok-1"]:not([aria-label])').forEach(function (a) {
      var t = a.textContent.replace(/[\s\u00a0]+/g, ' ').trim();
      if (t) a.setAttribute('aria-label', t);
    });
    document.querySelectorAll('iframe:not([title])').forEach(function (f) {
      f.setAttribute('title', /openstreetmap|google\.[a-z.]+\/maps/.test(f.src || '') ? 'Mapa s polohou predajne PremiumStore' : 'Vložený obsah');
    });
    document.querySelectorAll('h2, h3, h4, h5, h6').forEach(function (h) {
      if (!h.hasAttribute('aria-hidden') && !h.querySelector('img, svg') && !h.textContent.replace(/[\s\u00a0]+/g, '')) h.setAttribute('aria-hidden', 'true');
    });
  }

  function run() {
    try { addPay(); } catch (e) {}
    try { addStoreLd(); } catch (e) {}
    try { a11y(); } catch (e) {}
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
  window.addEventListener('load', function () { run(); setTimeout(run, 1500); setTimeout(run, 4000); });
})();

} catch (e) { if (window.console) console.error("PS bundle: premiumstore-trust-20261009.js", e); }

/* ---- premiumstore-checkout-pickup-20261016.js ---- */
try {
/* PremiumStore – objednávka krok 1: výber výdajného miesta.
   Ak je zvolená doprava na výdajné miesto (Packeta, Balíkobox, SPS...) a miesto nie je vybrané,
   „Pokračovať“ neodošle formulár naprázdno: stránka sa posunie k riadku dopravy, zvýrazní ho
   a otvorí výber miesta. To isté sa stane po návrate s chybou „Výdajné miesto dopravy ... nebolo vybrané“.
   Po prepnutí na takú dopravu sa výber miesta otvorí hneď. */
(function () {
  'use strict';
  if (!document.body || !document.body.classList.contains('in-krok-1')) return;

  var CHOOSE_SEL = '.sublabel'; // Packeta (new-widget-choose), Balíkobox/Pošta (pickup-point-choose), SPS (externý widget)
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function activeWrapper() {
    var r = document.querySelector('#order-shipping-methods input[name="shippingId"]:checked');
    return r ? r.closest('.radio-wrapper') : null;
  }

  function chooseLink(wrapper) {
    if (!wrapper) return null;
    var links = wrapper.querySelectorAll(CHOOSE_SEL + ' a');
    for (var i = 0; i < links.length; i++) {
      if (/Zvoľte odberné miesto/i.test(links[i].textContent)) return links[i];
    }
    return null;
  }

  function needsPoint() {
    return chooseLink(activeWrapper());
  }

  function hint(wrapper) {
    var h = wrapper.querySelector('.ps-pickup-hint');
    if (!h) {
      h = document.createElement('div');
      h.className = 'ps-pickup-hint';
      h.setAttribute('role', 'alert');
      h.textContent = 'Vyberte výdajné miesto, kam vám zásielku doručíme.';
      wrapper.appendChild(h);
    }
  }

  function clearHint(wrapper) {
    wrapper.classList.remove('ps-pickup-needed');
    var h = wrapper.querySelector('.ps-pickup-hint');
    if (h) h.remove();
  }

  function prompt(openPicker) {
    var wrapper = activeWrapper();
    var link = chooseLink(wrapper);
    if (!wrapper || !link) return;
    wrapper.classList.add('ps-pickup-needed');
    hint(wrapper);
    wrapper.scrollIntoView({ block: 'center', behavior: reduce ? 'auto' : 'smooth' });
    if (openPicker) setTimeout(function () { link.click(); }, reduce ? 0 : 350);
  }

  // 1) Pred odoslaním: bez vybraného miesta formulár neodosielať.
  function guard(e) {
    if (!needsPoint()) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    prompt(true);
  }
  document.addEventListener('click', function (e) {
    var t = e.target && e.target.closest && e.target.closest('#orderFormButton, #ps-bar button');
    if (t) guard(e);
  }, true);
  document.addEventListener('submit', function (e) {
    if (e.target && e.target.id === 'order-form') guard(e);
  }, true);

  // 2) Po prepnutí dopravy na výdajné miesto otvoriť výber hneď.
  document.addEventListener('change', function (e) {
    var t = e.target;
    if (!t || t.name !== 'shippingId') return;
    document.querySelectorAll('.ps-pickup-needed').forEach(clearHint);
    setTimeout(function () { if (needsPoint()) prompt(true); }, 150);
  });

  // 3) Návrat so serverovou chybou: nasmerovať na riadok dopravy.
  function onLoad() {
    var err = document.querySelector('.msg-error');
    if (err && /Výdajné miesto dopravy/i.test(err.textContent) && needsPoint()) prompt(false);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', onLoad);
  else onLoad();

  // Odkaz „Zvoľte odberné miesto“ ako tlačidlo; po výbere miesta zrušiť zvýraznenie (text odkazu sa zmení).
  function sync() {
    document.querySelectorAll('#order-shipping-methods .sublabel a').forEach(function (a) {
      a.classList.toggle('ps-pickup-btn', /Zvoľte odberné miesto/i.test(a.textContent));
    });
    document.querySelectorAll('.ps-pickup-needed').forEach(function (w) {
      if (!chooseLink(w)) clearHint(w);
    });
  }
  sync();
  new MutationObserver(sync).observe(document.body, { childList: true, subtree: true, characterData: true });
})();

} catch (e) { if (window.console) console.error("PS bundle: premiumstore-checkout-pickup-20261016.js", e); }

/* ---- premiumstore-pdp-pilot-20261016.js ---- */
try {
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

} catch (e) { if (window.console) console.error("PS bundle: premiumstore-pdp-pilot-20261016.js", e); }

/* ---- premiumstore-pdp-avail-20261017.js ---- */
try {
/* PremiumStore – info okienko dostupnosti na produkte (pilot, produkty od KB).
   Hlavný text dostupnosti („21 a viac ks skladom“) sa nemení. Vedľa neho pribudne ikona „i“, ktorá otvorí
   okienko: Na predajni (0 ks / skladom) a U dodávateľa (1–2, 3–5, > 5 ks, odoslanie do 48–72 h).
   Zapnuté pre všetkých (PS_AVAIL_ALL = true, 17. 10. 2026). Pri PS_AVAIL_ALL = false sa zapína len s ?ps_avail=1 (zapamätá sa v prehliadači; ?ps_avail=0 ho vypne).
   Údaje berie z textu dostupnosti, ktorý posiela feed KB (pásma 1–2, 3–5, 6–20, 21+), nič nedoťahuje zo servera. */
(function () {
  'use strict';
  if (!document.body || !document.body.classList.contains('type-detail')) return;

  var PS_AVAIL_ALL = true;
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

} catch (e) { if (window.console) console.error("PS bundle: premiumstore-pdp-avail-20261017.js", e); }

/* ---- premiumstore-menu-ab-20261022.js ---- */
try {
/* PremiumStore – A/B test mobilného menu, 2026-10-22.
   Variant A = pôvodné menu, variant B = nová spodná lišta (premiumstore-mobile-nav-20261022.js).
   Priradenie 50/50 na prvej mobilnej návšteve, uloží sa do localStorage + cookie (90 dní).
   Do GA4 posiela vlastnosť používateľa menu_variant a udalosti pmb_* (parameter menu_variant).
   Do Microsoft Clarity posiela tag menu_variant, ak je Clarity na stránke.
   Test na vlastnom zariadení: ?pmb_ab=A alebo ?pmb_ab=B (variant sa vynúti a udalosti sa neposielajú), ?pmb_ab=reset zruší.
   Vypnutie testu: SPLIT=1 (všetci B) alebo SPLIT=0 (všetci A). */
(function(){
  if(window.__pmbAb)return;window.__pmbAb=1;

  var SPLIT=0.5;                                     /* podiel návštevníkov s novou lištou (B) */
  var KEY='pmb_ab',KEY_X='pmb_ab_x';
  var MOBILE=window.matchMedia&&window.matchMedia('(max-width:767px)').matches;
  if(!MOBILE)return;

  function ls(k,v){try{if(v===undefined)return localStorage.getItem(k);if(v===null)localStorage.removeItem(k);else localStorage.setItem(k,v);}catch(e){}return null;}
  function ck(k){var m=document.cookie.match(new RegExp('(?:^|; )'+k+'=([^;]*)'));return m?m[1]:null;}
  function setCk(k,v,d){document.cookie=k+'='+v+';path=/;max-age='+(d*86400)+';SameSite=Lax';}

  var q=(location.search.match(/[?&]pmb_ab=([^&]*)/)||[])[1];
  if(q==='reset'){ls(KEY,null);ls(KEY_X,null);setCk(KEY,'',-1);setCk(KEY_X,'',-1);}
  var internal=false;
  if(q==='A'||q==='B'){ls(KEY,q);ls(KEY_X,'1');setCk(KEY,q,90);setCk(KEY_X,'1',90);}
  var v=ls(KEY)||ck(KEY);
  if(v!=='A'&&v!=='B'){v=Math.random()<SPLIT?'B':'A';}
  ls(KEY,v);setCk(KEY,v,90);
  internal=ls(KEY_X)==='1'||ck(KEY_X)==='1';
  window.__pmbVariant=v;
  document.documentElement.setAttribute('data-menu-variant',v);

  /* ===== meranie ===== */
  window.dataLayer=window.dataLayer||[];
  function g(){window.dataLayer.push(arguments);}
  var last={};
  function send(name,p){
    if(internal)return;
    var n=Date.now();if(last[name]&&n-last[name]<500)return;last[name]=n;   /* ps-menu-trigger vyvolá aj druhý klik na natívne tlačidlo */
    p=p||{};p.menu_variant=v;
    try{(typeof window.gtag==='function'?window.gtag:g)('event',name,p);}catch(e){}
  }
  function tagClarity(){try{if(typeof window.clarity==='function'){window.clarity('set','menu_variant',v);}}catch(e){}}
  tagClarity();window.addEventListener('load',tagClarity);

  if(!internal){
    try{(typeof window.gtag==='function'?window.gtag:g)('set','user_properties',{menu_variant:v});}catch(e){}
    var seen=false;try{seen=sessionStorage.getItem('pmb_ab_seen')==='1';sessionStorage.setItem('pmb_ab_seen','1');}catch(e){}
    if(!seen)send('pmb_ab_assign',{page_path:location.pathname});
  }

  function txt(el){return ((el&&(el.textContent||el.getAttribute('aria-label')))||'').replace(/\s+/g,' ').trim().slice(0,60);}

  document.addEventListener('click',function(e){
    var t=e.target;if(!t||!t.closest)return;
    var c;
    if((c=t.closest('#pmb-bar [data-k]'))){
      var k=c.getAttribute('data-k');
      send(k==='menu'?'pmb_menu_open':k==='search'?'pmb_search_open':k==='cart'?'pmb_cart_click':k==='home'?'pmb_home_click':'pmb_account_click');
      return;
    }
    if(t.closest('#pmb-sheet')){
      if((c=t.closest('.searchWhisperer a')))return send('pmb_search_result_click',{item_name:txt(c)});
      if((c=t.closest('.pmb-subs a, .pmb-cat')))return send('pmb_category_click',{item_name:txt(c),link_url:(c.getAttribute('href')||'').slice(0,120)});
      if((c=t.closest('.pmb-chip, .pmb-rec')))return send('pmb_search_chip_click',{item_name:txt(c)});
      if((c=t.closest('a[href]')))return send('pmb_category_click',{item_name:txt(c),link_url:(c.getAttribute('href')||'').slice(0,120)});
      return;
    }
    /* pôvodné menu (a spoločné prvky) */
    if(t.closest('.ps-menu-trigger, a.toggle-window[data-target="navigation"]'))return send('pmb_menu_open');
    if(t.closest('a.toggle-window[data-target="search"]'))return send('pmb_search_open');
    if(t.closest('a.cart-count'))return send('pmb_cart_click');
    if((c=t.closest('.searchWhisperer a')))return send('pmb_search_result_click',{item_name:txt(c)});
    if((c=t.closest('#navigation a[href]:not([href="#"])')))return send('pmb_category_click',{item_name:txt(c),link_url:(c.getAttribute('href')||'').slice(0,120)});
  },true);

  document.addEventListener('submit',function(e){
    var f=e.target;if(!f||!f.matches||!f.matches('form.search-form, #pmb-sheet form'))return;
    var i=f.querySelector('input[name="string"], .js-search-input');
    send('pmb_search_submit',{search_term:((i&&i.value)||'').trim().slice(0,80)});
  },true);
})();

} catch (e) { if (window.console) console.error("PS bundle: premiumstore-menu-ab-20261022.js", e); }

/* ---- premiumstore-mobile-nav-20261022.js ---- */
try {
/* PremiumStore – mobilná spodná lišta (Domov, Menu, Košík, Hľadať, Účet), 2026-10-22.
   Menu = spodný panel s kategóriami z #navigation (harmonika). Hľadať = natívny .search (našepkávač a vlastné skripty
   premiumstore-search-*.js fungujú ďalej) presunutý do spodného panela. Skryje sa na /kosik/ a /objednavka/.
   Nastavenia sú hore v súbore. Zodpovedajúce CSS: premiumstore-mobile-nav-20261022.css. Len mobil (max-width:767px). */
(function(){
  if(window.__pmb)return;window.__pmb=1;

  /* ===== NASTAVENIA (upravte podľa potreby) ===== */
  var PHONE='+421484151999';
  var HIDE_ON=/^\/(kosik|objednavka)(\/|$)/;       /* na týchto stránkach sa lišta skryje */
  var HIDE_ON_SCROLL=true;                          /* skryť lištu pri skrolovaní nadol */
  var MAX_SUBS=8;                                   /* koľko podkategórií ukázať v harmonike */
  var BRANDS=['Samsung','Sonos','JBL','Xiaomi','TP-Link','Bose','Creality','HP'];
  var CAT_ICONS={                                   /* časť adresy kategórie -> ikona */
    'pocitace':'device-laptop','tv-foto':'device-tv','domace-spotrebice':'wash-machine',
    'smart-home':'bulb','fotovoltaika':'battery-charging','audio-technika':'microphone',
    '3d-tlac':'cube-3d-sphere','dielna':'tool','auto-moto':'car','cestovanie':'backpack',
    'zdravie':'heartbeat','chovatelske':'paw','black-friday':'flame','doprava':'truck-delivery','kontakty':'headset'
  };
  /* ============================================== */

  var ICONS={"search": "<path d=\"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0\" /><path d=\"M21 21l-6 -6\" />", "bulb": "<path d=\"M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7\" /><path d=\"M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3\" /><path d=\"M9.7 17l4.6 0\" />", "user": "<path d=\"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0\" /><path d=\"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\" />", "layout-grid": "<path d=\"M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z\" /><path d=\"M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z\" /><path d=\"M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z\" /><path d=\"M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z\" />", "home": "<path d=\"M5 12l-2 0l9 -9l9 9l-2 0\" /><path d=\"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7\" /><path d=\"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6\" />", "chevron-down": "<path d=\"M6 9l6 6l6 -6\" />", "backpack": "<path d=\"M5 18v-6a6 6 0 0 1 6 -6h2a6 6 0 0 1 6 6v6a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3z\" /><path d=\"M10 6v-1a2 2 0 1 1 4 0v1\" /><path d=\"M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4\" /><path d=\"M11 10h2\" />", "headset": "<path d=\"M4 14v-3a8 8 0 1 1 16 0v3\" /><path d=\"M18 19c0 1.657 -2.686 3 -6 3\" /><path d=\"M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z\" /><path d=\"M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z\" />", "microphone": "<path d=\"M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z\" /><path d=\"M5 10a7 7 0 0 0 14 0\" /><path d=\"M8 21l8 0\" /><path d=\"M12 17l0 4\" />", "paw": "<path d=\"M14.7 13.5c-1.1 -2 -1.441 -2.5 -2.7 -2.5c-1.259 0 -1.736 .755 -2.836 2.747c-.942 1.703 -2.846 1.845 -3.321 3.291c-.097 .265 -.145 .677 -.143 .962c0 1.176 .787 2 1.8 2c1.259 0 3 -1 4.5 -1s3.241 1 4.5 1c1.013 0 1.8 -.823 1.8 -2c0 -.285 -.049 -.697 -.146 -.962c-.475 -1.451 -2.512 -1.835 -3.454 -3.538z\" /><path d=\"M20.188 8.082a1.039 1.039 0 0 0 -.406 -.082h-.015c-.735 .012 -1.56 .75 -1.993 1.866c-.519 1.335 -.28 2.7 .538 3.052c.129 .055 .267 .082 .406 .082c.739 0 1.575 -.742 2.011 -1.866c.516 -1.335 .273 -2.7 -.54 -3.052z\" /><path d=\"M9.474 9c.055 0 .109 0 .163 -.011c.944 -.128 1.533 -1.346 1.32 -2.722c-.203 -1.297 -1.047 -2.267 -1.932 -2.267c-.055 0 -.109 0 -.163 .011c-.944 .128 -1.533 1.346 -1.32 2.722c.204 1.293 1.048 2.267 1.933 2.267z\" /><path d=\"M16.456 6.733c.214 -1.376 -.375 -2.594 -1.32 -2.722a1.164 1.164 0 0 0 -.162 -.011c-.885 0 -1.728 .97 -1.93 2.267c-.214 1.376 .375 2.594 1.32 2.722c.054 .007 .108 .011 .162 .011c.885 0 1.73 -.974 1.93 -2.267z\" /><path d=\"M5.69 12.918c.816 -.352 1.054 -1.719 .536 -3.052c-.436 -1.124 -1.271 -1.866 -2.009 -1.866c-.14 0 -.277 .027 -.407 .082c-.816 .352 -1.054 1.719 -.536 3.052c.436 1.124 1.271 1.866 2.009 1.866c.14 0 .277 -.027 .407 -.082z\" />", "x": "<path d=\"M18 6l-12 12\" /><path d=\"M6 6l12 12\" />", "chevron-right": "<path d=\"M9 6l6 6l-6 6\" />", "cube-3d-sphere": "<path d=\"M6 17.6l-2 -1.1v-2.5\" /><path d=\"M4 10v-2.5l2 -1.1\" /><path d=\"M10 4.1l2 -1.1l2 1.1\" /><path d=\"M18 6.4l2 1.1v2.5\" /><path d=\"M20 14v2.5l-2 1.12\" /><path d=\"M14 19.9l-2 1.1l-2 -1.1\" /><path d=\"M12 12l2 -1.1\" /><path d=\"M18 8.6l2 -1.1\" /><path d=\"M12 12l0 2.5\" /><path d=\"M12 18.5l0 2.5\" /><path d=\"M12 12l-2 -1.12\" /><path d=\"M6 8.6l-2 -1.1\" />", "arrow-right": "<path d=\"M5 12l14 0\" /><path d=\"M13 18l6 -6\" /><path d=\"M13 6l6 6\" />", "battery-charging": "<path d=\"M16 7h1a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v3a.5 .5 0 0 1 -.5 .5a.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-2\" /><path d=\"M8 7h-2a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h1\" /><path d=\"M12 8l-2 4h3l-2 4\" />", "tool": "<path d=\"M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5\" />", "category": "<path d=\"M4 4h6v6h-6z\" /><path d=\"M14 4h6v6h-6z\" /><path d=\"M4 14h6v6h-6z\" /><path d=\"M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\" />", "device-laptop": "<path d=\"M3 19l18 0\" /><path d=\"M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z\" />", "truck-delivery": "<path d=\"M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5\" /><path d=\"M3 9l4 0\" />", "phone": "<path d=\"M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2\" />", "car": "<path d=\"M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5\" />", "heartbeat": "<path d=\"M19.5 13.572l-7.5 7.428l-2.896 -2.868m-6.117 -8.104a5 5 0 0 1 9.013 -3.022a5 5 0 1 1 7.5 6.572\" /><path d=\"M3 13h2l2 3l2 -6l1 3h3\" />", "device-tv": "<path d=\"M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z\" /><path d=\"M16 3l-4 4l-4 -4\" />", "flame": "<path d=\"M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z\" />", "shopping-cart": "<path d=\"M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M17 17h-11v-14h-2\" /><path d=\"M6 5l14 1l-1 7h-13\" />", "history": "<path d=\"M12 8l0 4l2 2\" /><path d=\"M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5\" />", "wash-machine": "<path d=\"M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z\" /><path d=\"M12 14m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\" /><path d=\"M8 6h.01\" /><path d=\"M11 6h.01\" /><path d=\"M14 6h2\" /><path d=\"M8 14c1.333 -.667 2.667 -.667 4 0c1.333 .667 2.667 .667 4 0\" />"};
  function ic(n){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(ICONS[n]||ICONS['category']||'')+'</svg>';}
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function iconFor(href){href=href||'';for(var k in CAT_ICONS){if(href.indexOf(k)>-1)return CAT_ICONS[k];}return 'category';}

  function init(){
    if(document.getElementById('pmb-bar'))return;
    if(window.__pmbVariant==='A')return;               /* A/B test: variant A = pôvodné menu */
    var path=location.pathname;
    if(HIDE_ON.test(path))return;
    document.body.classList.add('pmb-on');

    /* telefón v hlavičke */
    var hw=document.querySelector('#header .header-top-wrapper');
    if(hw){var ph=document.createElement('a');ph.id='pmb-phone';ph.href='tel:'+PHONE;ph.setAttribute('aria-label','Zavolať');ph.innerHTML=ic('phone');hw.appendChild(ph);}

    /* lišta */
    var bar=document.createElement('nav');bar.id='pmb-bar';bar.setAttribute('aria-label','Rýchla navigácia');
    bar.innerHTML=
      '<a class="pmb-it" data-k="home" href="/">'+ic('home')+'<span>Domov</span></a>'+
      '<button class="pmb-it" data-k="menu" type="button" aria-haspopup="dialog">'+ic('layout-grid')+'<span>Menu</span></button>'+
      '<a class="pmb-cart" data-k="cart" href="/kosik/" aria-label="Košík">'+ic('shopping-cart')+'<span class="pmb-cl">Košík</span><i class="pmb-badge"></i></a>'+
      '<button class="pmb-it" data-k="search" type="button" aria-haspopup="dialog">'+ic('search')+'<span>Hľadať</span></button>'+
      '<a class="pmb-it" data-k="user" href="/klient/">'+ic('user')+'<span>Účet</span></a>';
    document.body.appendChild(bar);

    var ov=document.createElement('div');ov.id='pmb-ov';document.body.appendChild(ov);
    var sh=document.createElement('div');sh.id='pmb-sheet';sh.setAttribute('role','dialog');sh.setAttribute('aria-modal','true');document.body.appendChild(sh);

    /* aktívna položka */
    function setActive(k){[].forEach.call(bar.querySelectorAll('.pmb-it'),function(e){e.classList.toggle('on',e.getAttribute('data-k')===k);});}
    var pageKey=path==='/'?'home':(/^\/klient/.test(path)?'user':'');
    setActive(pageKey);

    /* ---- Menu ---- */
    function buildMenu(){
      var h='<div class="pmb-grab"></div><div class="pmb-top"><h3>Produkty</h3><button class="pmb-x" type="button" aria-label="Zavrieť">'+ic('x')+'</button></div><div class="pmb-body">';
      var items=document.querySelectorAll('#navigation .menu-level-1 > li');
      var links='';
      [].forEach.call(items,function(li){
        var a=li.querySelector(':scope > a');if(!a)return;
        var href=a.getAttribute('href'),name=a.textContent.replace(/\s+/g,' ').trim();
        var subs=li.querySelectorAll(':scope > ul > li > div > a, :scope > ul > li > a:not(.menu-image)');
        var hot=/black-friday/.test(href);
        if(!subs.length){
          links+='<a class="pmb-cat'+(hot?' hot':'')+'" href="'+esc(href)+'"><span class="pmb-ic">'+ic(iconFor(href))+'</span><span class="pmb-t">'+esc(name)+'</span>'+ic('chevron-right').replace('<svg','<svg class="pmb-ch"')+'</a>';
          return;
        }
        var sl='<a href="'+esc(href)+'">Zobraziť všetko</a>';
        [].slice.call(subs,0,MAX_SUBS).forEach(function(s){
          var t=s.textContent.replace(/\s+/g,' ').trim();if(t)sl+='<a href="'+esc(s.getAttribute('href'))+'">'+esc(t)+'</a>';
        });
        h+='<button class="pmb-cat" type="button" aria-expanded="false"><span class="pmb-ic">'+ic(iconFor(href))+'</span><span class="pmb-t">'+esc(name)+'</span>'+ic('chevron-down').replace('<svg','<svg class="pmb-ch"')+'</button><div class="pmb-subs">'+sl+'</div>';
      });
      h+='<div class="pmb-gap"></div>'+links+'</div>';
      sh.innerHTML=h;
    }

    /* ---- Hľadanie ---- */
    function getRecent(){try{return JSON.parse(localStorage.getItem('pmb_recent')||'[]');}catch(e){return[];}}
    function saveRecent(q){try{var r=getRecent().filter(function(x){return x!==q;});r.unshift(q);localStorage.setItem('pmb_recent',JSON.stringify(r.slice(0,5)));}catch(e){}}
    function go(q){q=(q||'').trim();if(!q)return;saveRecent(q);location.href='/vyhladavanie/?string='+encodeURIComponent(q);}
    var nat=document.querySelector('.search'),home=null,homeNext=null;
    function releaseSearch(){if(nat&&home&&nat.parentNode!==home)home.insertBefore(nat,homeNext);}
    function buildSearch(){
      var h='<div class="pmb-grab"></div><div class="pmb-top"><h3>Hľadať</h3><button class="pmb-x" type="button" aria-label="Zavrieť">'+ic('x')+'</button></div><div class="pmb-body">';
      h+=nat?'<div id="pmb-slot"></div>':
        '<form class="pmb-sf" action="/vyhladavanie/" method="get">'+ic('search')+'<input type="search" name="string" placeholder="Značka, produkt alebo kód" autocomplete="off" enterkeyhint="search" aria-label="Vyhľadávanie"><button type="submit">Hľadať</button></form>';
      h+='<div class="pmb-extra"><div class="pmb-h">Obľúbené značky</div><div>';
      BRANDS.forEach(function(b){h+='<button class="pmb-chip" type="button" data-q="'+esc(b)+'">'+esc(b)+'</button>';});
      h+='</div>';
      var rec=getRecent();
      if(rec.length){
        h+='<div class="pmb-h">Naposledy hľadané <button class="pmb-clear" type="button" data-clear="1">Vymazať</button></div>';
        rec.forEach(function(r){h+='<button class="pmb-rec" type="button" data-q="'+esc(r)+'">'+ic('history')+esc(r)+'</button>';});
      }
      h+='</div></div>';
      sh.innerHTML=h;
      if(nat){home=nat.parentNode;homeNext=nat.nextSibling;sh.querySelector('#pmb-slot').appendChild(nat);var pi=nat.querySelector('.js-search-input');if(pi)pi.setAttribute('enterkeyhint','search');}
    }
    function searchInput(){return sh.querySelector('.js-search-input')||sh.querySelector('input[type=search]');}
    function fillSearch(q){
      var i=searchInput();if(!i){go(q);return;}
      i.value=q;i.focus();
      ['input','keyup'].forEach(function(t){i.dispatchEvent(new Event(t,{bubbles:true}));});
      toggleExtra();
    }
    function toggleExtra(){var i=searchInput(),x=sh.querySelector('.pmb-extra');if(x)x.classList.toggle('hide',!!(i&&i.value.trim()));}

    var cur='';
    function open(k){
      if(cur===k){close();return;}
      releaseSearch();
      if(k==='menu')buildMenu();else buildSearch();
      cur=k;setActive(k);
      ov.classList.add('open');sh.classList.add('open');
      document.documentElement.style.overflow='hidden';
      bar.classList.remove('pmb-hide');document.body.classList.remove('pmb-hid');
      if(k==='search'){setTimeout(function(){var i=searchInput();if(i)i.focus();},280);}
    }
    function close(){
      cur='';setActive(pageKey);
      releaseSearch();
      ov.classList.remove('open');sh.classList.remove('open');
      document.documentElement.style.overflow='';
    }

    bar.addEventListener('click',function(e){
      var b=e.target.closest('[data-k]');if(!b)return;
      var k=b.getAttribute('data-k');
      if(k==='menu'||k==='search'){e.preventDefault();open(k);}
      else if(cur){close();}
    });
    ov.addEventListener('click',close);
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&cur)close();});
    sh.addEventListener('click',function(e){
      if(e.target.closest('.pmb-x')){close();return;}
      var c=e.target.closest('button.pmb-cat');
      if(c){var s=c.nextElementSibling,o=!s.classList.contains('open');s.classList.toggle('open',o);c.classList.toggle('open',o);c.setAttribute('aria-expanded',o);return;}
      var q=e.target.closest('[data-q]');if(q){fillSearch(q.getAttribute('data-q'));return;}
      if(e.target.closest('[data-clear]')){try{localStorage.removeItem('pmb_recent');}catch(x){}releaseSearch();buildSearch();return;}
    });
    sh.addEventListener('submit',function(e){
      var i=searchInput(),v=i&&i.value.trim();if(v)saveRecent(v);
      if(!nat){e.preventDefault();go(v);}
    });
    sh.addEventListener('input',toggleExtra);

    /* ---- Počet kusov a suma košíka ---- */
    var cartA=document.querySelector('a.cart-count');
    function syncCart(){
      var n='',p='';
      if(cartA){
        var i=cartA.querySelector('i');if(i)n=i.textContent.replace(/\D/g,'');
        var pe=cartA.querySelector('.cart-price');if(pe)p=pe.textContent.replace(/\s+/g,' ').trim();
      }
      var has=n&&+n>0;
      bar.querySelector('.pmb-badge').textContent=has?n:'';
      bar.querySelector('.pmb-cl').textContent=has&&p&&!/pr[aá]zdn/i.test(p)?p:'Košík';
    }
    syncCart();
    if(cartA&&window.MutationObserver){new MutationObserver(syncCart).observe(cartA,{childList:true,subtree:true,characterData:true});}
    document.addEventListener('ShoptetCartUpdated',syncCart);
    document.addEventListener('ShoptetDOMCartCountUpdated',syncCart);

    /* ---- Cookie lišta: lišta sa posunie nad ňu ---- */
    function syncCookie(){
      var c=document.querySelector('.siteCookies'),h=0;
      if(c&&c.offsetHeight>0&&getComputedStyle(c).position==='fixed'){
        var r=c.getBoundingClientRect();
        if(r.bottom>=window.innerHeight-4)h=Math.round(c.offsetHeight);
      }
      document.documentElement.style.setProperty('--pmb-b',h+'px');
    }
    syncCookie();
    setInterval(syncCookie,600);
    document.addEventListener('click',function(){setTimeout(syncCookie,150);setTimeout(syncCookie,700);},true);
    window.addEventListener('resize',syncCookie);

    /* ---- Skrytie pri skrolovaní nadol ---- */
    if(HIDE_ON_SCROLL){
      var last=window.pageYOffset,tick=false;
      window.addEventListener('scroll',function(){
        if(tick||cur)return;tick=true;
        requestAnimationFrame(function(){
          var y=window.pageYOffset,d=y-last;
          if(Math.abs(d)>8){var hd=d>0&&y>120;bar.classList.toggle('pmb-hide',hd);document.body.classList.toggle('pmb-hid',hd);last=y;}
          tick=false;
        });
      },{passive:true});
    }
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();

} catch (e) { if (window.console) console.error("PS bundle: premiumstore-mobile-nav-20261022.js", e); }
