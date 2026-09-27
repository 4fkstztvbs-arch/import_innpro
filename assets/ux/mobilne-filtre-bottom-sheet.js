/* ==========================================================================
   Sticky bottom-sheet pre mobilné filtre – Shoptet šablóna Disco
   premiumstore.sk

   Kam vložiť: Vzhled a obsah -> Návrhář šablony -> Vlastní JS
   Funguje len spolu s CSS súborom mobilne-filtre-bottom-sheet.css.

   TOTO JE DRUHÁ, DÔKLADNEJŠIE OTESTOVANÁ VERZIA. Prvá verzia (click-hijack
   s klonovaním tlačidla + farba z --color-secondary) mala pri poctivejšom
   testovaní priamo na premiumstore.sk tieto reálne chyby, ktoré táto verzia
   opravuje:

   1) FARBA: --color-secondary (#ffc500) je farba cenového slideru, nie
      primárneho tlačidla. Skutočná farba, ktorú zákazník vníma ako
      "potvrdzujúce" tlačidlo, je zelená #24b47e použitá na "Do košíka".
      Táto verzia ju necháva napevno v CSS presne podľa reálne
      vyrenderovaného tlačidla (nie z premennej v administrácii).

   2) ARCHITEKTÚRA: Namiesto klonovania/nahradenia tlačidla "Otvoriť filter"
      (čo nenávratne odstráni pôvodný Shoptet click handler a na desktope by
      po kliknutí nešlo spraviť nič) táto verzia iba POZORUJE zmenu triedy
      "visible" na #filters cez MutationObserver. Shoptet aj naďalej sám
      riadi otváranie/zatváranie aj text tlačidla ("Otvoriť filter" /
      "Zavrieť filter") - naša vrstva len reaguje. Overené naživo: klasické
      "preventDefault + stopPropagation" prerušilo natívne prepínanie
      nespoľahlivo (záviselo od poradia interných listenerov), preto sa mu
      táto verzia úplne vyhýba.

   3) ZATVÁRANIE cez naše UI (X, backdrop, tlačidlo "Zobraziť výsledky")
      simuluje klik na pôvodné tlačidlo namiesto priameho odobratia triedy -
      inak zostal popisok tlačidla nesprávne "Zavrieť filter" aj keď bol
      panel v skutočnosti zatvorený (reálne reprodukovaná chyba).

   4) FOCUS po Escape sa vracia na skutočný element tlačidla (uložený pri
      otvorení), nie na document.activeElement - to je nespoľahlivé práve
      pri <a> odkazoch (čím "Otvoriť filter" v Disco šablóne aj je),
      obzvlášť na iOS Safari.

   5) POČET VÝSLEDKOV: pri návrate po úplnom reloade stránky (kliknutie na
      filter v Disco spôsobí reload, nie AJAX) treba: a) ručne pridať triedu
      "visible" novému #filters, lebo čerstvá stránka o predošlom stave
      nevie, a b) sledovať zmenu textu v .category-header-pagination cez
      vlastný MutationObserver, pretože pri prvom vykreslení bol počas
      testovania krátky moment, keď tlačidlo ukázalo starý (nesprávny)
      počet položiek z predošlej stránky.

   Zostávajúce vedomé obmedzenie: filtrovanie v Disco robí kompletný reload
   stránky (nie potichu cez AJAX), takže panel sa po každom výbere filtra na
   zlomok sekundy "zabliká" zatvorený a hneď znova otvorí. Toto je vlastnosť
   šablóny, nie chyba tohto riešenia - obísť by sa to dalo len prepísaním
   celého mechanizmu filtrovania na AJAX, čo je výrazne väčší zásah.
   ========================================================================== */

(function () {
  function initFilterSheet() {
    if (document.getElementById('fs-sheet')) return; // uz inicializovane (napr. po AJAX reloade časti stránky)

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
    // sleduje zmeny v počítadle položiek, aby tlačidlo nikdy neukazovalo
    // zastaralý počet (reálne overený race condition pri načítaní stránky)
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
    // zatvorenie cez nase UI necha kliknut na povodne tlacidlo, aby si
    // Shoptet sam spravne prepol aj vlastny text ("Otvoriť/Zavrieť filter")
    function syncedClose() {
      if (filtersEl.classList.contains('visible')) trigger.click();
    }

    // JADRO RIEŠENIA: nehýbeme sa do Shoptet click handlera vôbec,
    // len reagujeme na zmenu triedy "visible", ktorú si Shoptet prepína sám
    var mo = new MutationObserver(function () {
      if (!mq.matches) return; // desktop / široký tablet - necháme natívne správanie bez zásahu
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

    // ak sa okno pri otvorenom paneli roztiahne na desktopovú šírku,
    // vrátime #filters na pôvodné miesto v DOM (natívne správanie)
    if (mq.addEventListener) {
      mq.addEventListener('change', function (ev) {
        if (!ev.matches) {
          closeSheetVisual();
          moveOut();
        }
      });
    }

    // kliknutie na filter v Disco spôsobí kompletný reload stránky (nie AJAX),
    // takže po reloade obnovíme otvorený stav zo sessionStorage
    if (mq.matches && sessionStorage.getItem('fsSheetOpen') === '1') {
      filtersEl.classList.add('visible'); // čerstvá stránka o predošlom stave sama nevie
      moveIn();
      setTimeout(openSheet, 50);
    }
  }

  document.addEventListener('DOMContentLoaded', initFilterSheet);

  // Shoptet Developers Tools event - pre prípad AJAX-om dotiahnutého obsahu
  document.addEventListener('ShoptetDOMContentLoaded', initFilterSheet);
})();
