/* PremiumStore – spoločný skript (generované: node scripts/build-ux-js-bundle.js). Neupravovať ručne, upravuj zdrojové súbory.
   Zdroje: premiumstore-cro.js, premiumstore-pdp-final.js, premiumstore-pdp-mobile-buybar.js, premiumstore-pdp-conversion-20261004.js, premiumstore-pdp-polish-20261008.js, premiumstore-audit-fixes-20261003.js, premiumstore-home-desktop-20261009.js, premiumstore-home-categories-mobile.js, premiumstore-checkout-20261009.js, premiumstore-category-20261009.js, premiumstore-search-20261009.js */

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

  // Sezónny banner do 24. 12. 2026; skrytý, ak už zákazník hľadá vianočné veci.
  var now = new Date();
  var seasonOn = now < new Date(2026, 11, 25) && !/vianoc|retaz|cencul|girland|osvetlen/.test(plain);
  if (seasonOn) {
    var a = document.createElement('a');
    a.className = 'ps-season';
    a.href = '/vianocne-osvetlenie/';
    a.innerHTML = '<span><span class="ps-season__eyebrow">Vianoce sú za dverami</span>' +
      '<span class="ps-season__title">Vianočné osvetlenie a dekorácie</span>' +
      '<span class="ps-season__text">Rozsvieťte stromček, okná aj záhradu: LED reťaze, cencúle, závesy a svietiace dekorácie.</span>' +
      '<span class="ps-season__btn">Pozrieť ponuku</span></span>' +
      '<span class="ps-season__img" role="img" aria-label="Svetelná hviezda"></span>';
    a.querySelector('.ps-season__img').style.backgroundImage =
      'url(https://cdn.myshoptet.com/usr/www.premiumstore.sk/user/shop/big/628470_solight-led-vianocna-hviezda-3d--150-led--60cm--ip44--tepla-biela--casovac-obrazok-1.jpg)';
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
  }
})();

} catch (e) { if (window.console) console.error("PS bundle: premiumstore-search-20261009.js", e); }
