/* ==========================================================================
   Sticky bottom-sheet pre mobilné filtre – Shoptet šablóna Disco
   premiumstore.sk

   Kam vložiť: Vzhled a obsah -> Návrhář šablony -> Vlastní JS
   Funguje len spolu s CSS súborom mobilne-filtre-bottom-sheet.css.

   OPRAVA PO NASADENÍ NA ŽIVÝ WEB: prvá nahratá verzia sa na premiumstore.sk
   vôbec nespustila. Príčina: skript čakal len na udalosť
   "DOMContentLoaded". Keď sa <script> tag pridáva do stránky dynamicky
   (presne tak, ako to robí mechanizmus vkladania vlastného kódu v hlavičke/
   pätičke Shoptetu), stránka môže byť v čase spustenia skriptu už dávno
   načítaná - udalosť DOMContentLoaded už raz prebehla a druhý krát sa
   nezopakuje, takže poslucháč pridaný oneskorene sa už nikdy nespustí.
   Overené priamo na premiumstore.sk: document.readyState bol už "complete"
   a #fs-sheet sa nikdy nevytvoril. Oprava nižšie (funkcia "ready") najprv
   skontroluje readyState a ak je dokument už hotový, spustí inicializáciu
   ihneď namiesto čakania na udalosť, ktorá už nikdy nepríde.

   Predošlé opravy z testovania pred nasadením (stále platia):
   1) Farba tlačidla je natvrdo #24b47e - odčítaná z reálneho tlačidla
      "Do košíka" na webe, nie z premennej --color-secondary v administrácii
      (tá patrí cenovému slideru).
   2) Namiesto klonovania/nahradenia tlačidla "Otvoriť filter" sa iba
      sleduje zmena triedy "visible" na #filters cez MutationObserver -
      Shoptet aj naďalej sám riadi otváranie/zatváranie aj text tlačidla,
      táto vrstva len reaguje. Klonovanie by na desktope (kde tento e-shop
      nemá bočný panel, len rovnaký toggle ako mobil) natrvalo zničilo
      pôvodné správanie.
   3) Zatváranie cez naše UI (X, backdrop, "Zobraziť výsledky") simuluje
      klik na pôvodné tlačidlo, aby si Shoptet sám správne prepol aj text.
   4) Focus po Escape sa vracia na uložený element tlačidla, nie na
      document.activeElement (nespoľahlivé pri <a> odkazoch).
   5) Po filtrovaní (čo v Disco spôsobí kompletný reload stránky) sa stav
      "otvorené" ukladá do sessionStorage a po reloade sa panel automaticky
      znova otvorí aj s pridaním triedy "visible", ktorú čerstvá stránka
      sama od seba nemá.

   Zostávajúce vedomé obmedzenie: filtrovanie v Disco robí kompletný reload
   stránky (nie AJAX), takže panel sa pri výbere filtra na zlomok sekundy
   vizuálne zatvorí a hneď znova otvorí. Vlastnosť šablóny, nie chyba tohto
   riešenia.
   ========================================================================== */

(function () {
  function initFilterSheet() {
    if (document.getElementById('fs-sheet')) return; // uz inicializovane

    var mq = window.matchMedia('(max-width: 991.98px)');
    var filtersEl = document.getElementById('filters');
    var trigger = document.querySelector('.filters-unveil-button-wrapper .unveil-button');
    if (!filtersEl || !trigger) return; // stránka bez filtrov (produkt, homepage a pod.)

    var originalParent = filtersEl.parentNode;
    var originalNextSibling = filtersEl.nextSibling;
    var movedIn = false;
    var lastFocused = null;

    var backdrop = document.createElement('div');
    backdrop.id = 'fs-backdrop';
    var sheet = document.createElement('div');
    sheet.id = 'fs-sheet';
    sheet.setAttribute('role', 'dialog');
    sheet.setAttribute('aria-modal', 'true');
    sheet.setAttribute('aria-label', 'Filtre');
    sheet.innerHTML =
      '<div class="fs-handle"></div>' +
      '<div class="fs-header"><h3>Filtre</h3><button class="fs-close" aria-label="Zavrieť">&times;</button></div>' +
      '<div class="fs-body"></div>' +
      '<div class="fs-footer"><button class="fs-apply-btn">Zobraziť výsledky</button></div>';
    document.body.appendChild(backdrop);
    document.body.appendChild(sheet);

    var fsBody = sheet.querySelector('.fs-body');
    var fsApplyBtn = sheet.querySelector('.fs-apply-btn');
    var fsClose = sheet.querySelector('.fs-close');

    function getCount() {
      var pag = document.querySelector('.category-header-pagination');
      if (!pag) return null;
      var m = pag.textContent.match(/([\d\s]+)\s*polož/i);
      return m ? m[1].replace(/\s/g, '') : null;
    }
    function updateApplyBtn() {
      var n = getCount();
      if (n === '0') {
        fsApplyBtn.textContent = 'Žiadne výsledky';
        fsApplyBtn.disabled = true;
      } else {
        fsApplyBtn.textContent = n ? 'Zobraziť ' + n + ' výsledkov' : 'Zobraziť výsledky';
        fsApplyBtn.disabled = false;
      }
    }
    var pagEl = document.querySelector('.category-header-pagination');
    if (pagEl) {
      new MutationObserver(updateApplyBtn).observe(pagEl, {
        childList: true, subtree: true, characterData: true
      });
    }

    function moveIn() {
      if (movedIn) return;
      fsBody.appendChild(filtersEl);
      movedIn = true;
      updateApplyBtn();
    }
    function moveOut() {
      if (!movedIn) return;
      if (originalNextSibling) originalParent.insertBefore(filtersEl, originalNextSibling);
      else originalParent.appendChild(filtersEl);
      movedIn = false;
    }
    function openSheet() {
      lastFocused = trigger;
      backdrop.classList.add('open');
      sheet.classList.add('open');
      document.body.classList.add('fs-open');
      sessionStorage.setItem('fsSheetOpen', '1');
      fsClose.focus();
      document.addEventListener('keydown', onKeydown);
    }
    function closeSheetVisual() {
      backdrop.classList.remove('open');
      sheet.classList.remove('open');
      document.body.classList.remove('fs-open');
      document.removeEventListener('keydown', onKeydown);
      if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
    }
    function onKeydown(e) {
      if (e.key === 'Escape') syncedClose();
    }
    function syncedClose() {
      if (filtersEl.classList.contains('visible')) trigger.click();
    }

    var mo = new MutationObserver(function () {
      if (!mq.matches) return;
      var isVisible = filtersEl.classList.contains('visible');
      var isOpen = sheet.classList.contains('open');
      if (isVisible && !isOpen) {
        moveIn();
        openSheet();
      } else if (!isVisible && isOpen) {
        closeSheetVisual();
        sessionStorage.removeItem('fsSheetOpen');
      }
    });
    mo.observe(filtersEl, { attributes: true, attributeFilter: ['class'] });

    backdrop.addEventListener('click', syncedClose);
    fsClose.addEventListener('click', syncedClose);
    fsApplyBtn.addEventListener('click', syncedClose);

    if (mq.addEventListener) {
      mq.addEventListener('change', function (ev) {
        if (!ev.matches) {
          closeSheetVisual();
          moveOut();
        }
      });
    }

    if (mq.matches && sessionStorage.getItem('fsSheetOpen') === '1') {
      filtersEl.classList.add('visible');
      moveIn();
      setTimeout(openSheet, 50);
    }
  }

  // KĽÚČOVÁ OPRAVA: ak sa tento skript spustí až po tom, čo dokument už
  // dohotovil parsovanie (typické pri dynamicky vkladanom kóde cez Shoptet
  // hlavičku/pätičku), DOMContentLoaded už nikdy nenastane - treba
  // inicializovať ihneď.
  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  ready(initFilterSheet);

  // Shoptet Developers Tools event - pre prípad AJAX-om dotiahnutého obsahu
  document.addEventListener('ShoptetDOMContentLoaded', initFilterSheet);
})();
