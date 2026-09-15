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

  // Mobil: tlačidlo "Menu" pred logom (ikonka + popisok pod ňou), podľa
  // vzoru denatura.cz. NEPRESÚVA skutočné hamburger tlačidlo (to by
  // rozbilo natívne display:none/ikonku/otváranie - vid. komentár pri
  // headerSupportBlock vyššie) - namiesto toho vytvorí VLASTNÉ tlačidlo,
  // ktoré len "prepošle" klik na skutočné tlačidlo. Pôvodné tlačidlo sa
  // v rade ikoniek skryje cez CSS, nech tam nie je duplicitne.
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
    var items = Array.prototype.slice.call(nativeNav.querySelectorAll('.menu-level-1 > li'));
    var categories = items.filter(function (item) {
      return Object.keys(icons).some(function (id) { return item.classList.contains('menu-item-' + id); });
    });
    // Nezakryť natívne menu, ak sa zmení jeho štruktúra alebo chýbajú kategórie.
    if (categories.length !== Object.keys(icons).length) return;

    // Shoptet neposiela obrázok koreňovej kategórie v každom type menu.
    // Voliteľná JSON mapa v HTML hlavičke: #ps-category-images, kľúč = ID kategórie.
    var categoryImages = {};
    var imageConfig = document.getElementById('ps-category-images');
    if (imageConfig) {
      try { categoryImages = JSON.parse(imageConfig.textContent) || {}; } catch (ignore) { /* Ikony zostanú. */ }
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
    trigger.addEventListener('click', function () { if (panel.hidden) open(); else close(false); });
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
          if (!isMenuOpen && mobileTrail.length) { mobileTrail = []; mobileScreen(false); }
        }
        menuState();
        new MutationObserver(menuState).observe(document.body, { attributes: true, attributeFilter: ['class'] });
      }
    }

    backdrop.addEventListener('click', function () {
      if (window.matchMedia('(max-width: 767px)').matches && document.body.classList.contains('navigation-window-visible')) {
        var nativeToggle = document.querySelector('#header .navigation-buttons a[data-target="navigation"]');
        if (nativeToggle) nativeToggle.click();
      }
    });
    wrapper.insertBefore(nav, nativeNav);
    document.body.appendChild(backdrop);
    wrapper.classList.add('ps-catalog-ready');
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

  // --- 5) Presun konkurenčných výhod (.benefitBanner) za riadok ikon -------
  // Presúva reálny natívny blok (nie kópiu) hneď za
  // .buttons-wrapper.social-buttons-wrapper (Tlač/Opýtať sa/Strážiť/Zdieľať),
  // len na produktovej stránke. Blok nemá žiadny stav viazaný na pôvodnú
  // pozíciu v DOM (na rozdiel napr. od hamburger menu), takže presun cez
  // insertAdjacentElement je bezpečný.
  function relocateBenefitBanner() {
    if (!getPdpForm()) return;
    // Dôležité: cieľ je VONKAJŠÍ wrapper .buttons-wrapper.social-buttons-wrapper,
    // nie vnútorný [data-testid="productDetailActionIcons"] div - ten obsahuje
    // len 4 flex položky (Tlač/Opýtať sa/Strážiť/Zdieľať) a vloženie banneru
    // priamo doňho ho urobilo 5. flex položkou tohto riadku (rozhodilo icons
    // aj banner do stĺpcov). Vložením AŽ ZA celý wrapper zostane riadok ikon
    // nedotknutý a banner príde ako samostatný blok pod ním.
    var actions = document.querySelector('.buttons-wrapper.social-buttons-wrapper');
    var banner = document.querySelector('.benefitBanner.position--benefitProduct') ||
      document.querySelector('.benefitBanner');
    if (!actions || !banner) return;
    if (banner.previousElementSibling === actions) return;
    actions.insertAdjacentElement('afterend', banner);
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

  // --- 7) Text tlačidla "Pokračovať" -> "Pokračovať v objednávke" -----------
  // (checkout, krok "Doprava & platba"), presne ako "POKRAČOVAT V OBJEDNÁVCE"
  // na denatura.cz. Mení len textový obsah, submit na #order-form ostáva.
  function renameContinueButton() {
    var span = document.querySelector('#checkoutSidebar #orderFormButton .order-button-text');
    if (!span) return;
    if (span.textContent.trim() === 'Pokračovať v objednávke') return;
    span.textContent = 'Pokračovať v objednávke';
  }

  // --- Spustenie -------------------------------------------------------------
  function run() {
    relocateLoginButton();
    headerSupportBlock();
    menuTrigger();
    catalogMenu();
    mobileMenuSupportBlock();
    stickyBuyBar();
    deemphasizeSecondaryActions();
    relocateBenefitBanner();
    relocateCheckoutNextStep();
    renameContinueButton();
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
