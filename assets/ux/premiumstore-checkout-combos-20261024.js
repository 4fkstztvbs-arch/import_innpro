/* PremiumStore – objednávka krok 1: nedostupné kombinácie dopravy a platby.
   Problém (Clarity 22.–24. 10.): platba „V hotovosti pri osobnom odbere“ vyzerá ako bežná voľba, ale pri
   predvolenej doprave je nedostupná (Shoptet jej dá triedu .inactive-child a zablokuje input) – klik/ťuk sa
   neprejaví (dead klik). Rovnako „Dobierkou“ pri osobnom odbere.
   Riešenie: klik na nedostupnú platbu sám prepne dopravu na kompatibilnú (podľa data-relations dopravy),
   vyberie platbu a krátko vysvetlí, čo sa stalo. Text pri nedostupnej platbe hovorí, čo sa po kliknutí stane. */
(function () {
  'use strict';
  if (!document.body || !document.body.classList.contains('in-krok-1')) return;

  var SHIP = '#order-shipping-methods';
  var BILL = '#order-billing-methods';
  var busy = false;
  var lastAddressShipping = null; // naposledy zvolená doprava, ktorá nie je osobný odber

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return [].slice.call((r || document).querySelectorAll(s)); }

  function shippingInputs() { return $$(SHIP + ' input[name="shippingId"]'); }
  function isPickup(inp) { return inp.getAttribute('data-code') === 'personal-collection'; }
  function allows(inp, billId) {
    return (inp.getAttribute('data-relations') || '').split(',').indexOf(String(billId)) > -1;
  }
  function needsPoint(inp) {
    var w = inp.closest('.radio-wrapper');
    return !!w && $$('.sublabel a', w).some(function (a) { return /Zvoľte odberné miesto/i.test(a.textContent); });
  }
  function priceOf(inp) {
    var w = inp.closest('.radio-wrapper');
    var s = w && $('.payment-shipping-price', w);
    if (!s) return 999;
    if (/ZADARMO/i.test(s.textContent)) return 0;
    var m = s.textContent.replace(/\s/g, '').replace(',', '.').match(/[\d.]+/);
    return m ? parseFloat(m[0]) : 999;
  }
  function nameOf(inp) {
    var w = inp && inp.closest('.radio-wrapper');
    var b = w && $('.shipping-billing-name', w);
    return b ? b.textContent.replace(/\s+/g, ' ').trim() : '';
  }

  /* Ktorá doprava sa hodí k danej platbe. */
  function pickShipping(billInp) {
    var cand = shippingInputs().filter(function (i) { return allows(i, billInp.value); });
    if (!cand.length) return null;
    if (billInp.getAttribute('data-payment-type') === 'cash') {
      var p = cand.filter(isPickup);
      if (p.length) return p[0];
    }
    if (lastAddressShipping) {
      var back = cand.filter(function (i) { return i === lastAddressShipping; });
      if (back.length) return back[0];
    }
    var plain = cand.filter(function (i) { return !isPickup(i) && !needsPoint(i); });
    plain.sort(function (a, b) { return priceOf(a) - priceOf(b); });
    return plain[0] || cand[0];
  }

  /* Poznámka nad zoznamom platieb. Zostáva, kým zákazník sám nezmení dopravu (žiadne časované mizenie –
     posun obsahu by zákazníkovi „ušiel“ pod prstom). Shoptet po prepočte ceny prekreslí box platby, preto
     si text pamätáme a v sync() ho podľa potreby vykreslíme znova. */
  var noteText = null;
  var noteShipId = null;
  function renderNote() {
    var bill = $(BILL);
    if (!bill || !noteText) return;
    var n = $('.ps-combo-note');
    if (!n) {
      n = document.createElement('div');
      n.className = 'ps-combo-note';
      n.setAttribute('role', 'status');
      bill.parentNode.insertBefore(n, bill);
    }
    if (n.textContent !== noteText) n.textContent = noteText;
  }
  function showNote(text, shipId) {
    noteText = text;
    noteShipId = shipId;
    renderNote();
  }
  function clearNote() {
    noteText = null;
    noteShipId = null;
    var n = $('.ps-combo-note');
    if (n) n.remove();
  }

  /* Shoptet (checkout-3g.js) vyberá dopravu/platbu na udalosť „mousedown“ nad .radio-wrapper (nie „click“)
     a pri zablokovanej platbe (label.inactive) skončí hneď – preto bol klik „mŕtvy“. Voláme tú istú cestu. */
  function press(wrapper) {
    wrapper.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window }));
  }

  function switchTo(ship, bill) {
    busy = true;
    var billId = bill.id;
    var payName = ($('.shipping-billing-name', bill.closest('.radio-wrapper')) || {}).textContent || '';
    press(ship.closest('.radio-wrapper')); // Shoptet prepočíta povolené platby (data-relations)
    var tries = 0;
    (function wait() {
      var b = document.getElementById(billId);
      var w = b && b.closest('.radio-wrapper');
      if (b && !b.disabled && w && !w.classList.contains('inactive-child')) {
        press(w);
        showNote('Dopravu sme zmenili na „' + nameOf(ship) + '“, lebo platbu „' + payName.trim() + '“ nemožno kombinovať s predchádzajúcou dopravou.', ship.id);
        busy = false;
        return;
      }
      if (++tries > 30) { busy = false; return; } // ~3 s, potom to vzdáme
      setTimeout(wait, 100);
    })();
  }

  /* Klik na nedostupnú platbu: namiesto „nič sa nestalo“ prepneme dopravu. */
  document.addEventListener('click', function (e) {
    var w = e.target && e.target.closest && e.target.closest(BILL + ' .radio-wrapper.inactive-child');
    if (!w || busy) return;
    if (e.target.closest('.question-tooltip')) return;
    var bill = $('input[name="billingId"]', w);
    if (!bill) return;
    var ship = pickShipping(bill);
    if (!ship) return;
    e.preventDefault();
    e.stopPropagation();
    switchTo(ship, bill);
  }, true);

  /* Pamätať si poslednú „adresnú“ dopravu, aby sa dalo vrátiť späť z osobného odberu. */
  function remember() {
    var c = $(SHIP + ' input[name="shippingId"]:checked');
    if (c && !isPickup(c)) lastAddressShipping = c;
  }
  document.addEventListener('change', remember);

  /* Text pri nedostupnej platbe: povie, čo sa stane po kliknutí. */
  function sync() {
    remember();
    if (noteText) {
      var cur = $(SHIP + ' input[name="shippingId"]:checked');
      if (!cur || cur.id !== noteShipId) clearNote(); else renderNote();
    }
    $$(BILL + ' .radio-wrapper.inactive-child').forEach(function (w) {
      var bill = $('input[name="billingId"]', w);
      var info = $('.not-possible-info', w);
      if (!bill || !info) return;
      var ship = pickShipping(bill);
      var txt = ship
        ? 'Nedostupné pri vybranej doprave – po kliknutí zmeníme dopravu na „' + nameOf(ship) + '“.'
        : 'Táto kombinácia dopravy a platby nie je možná.';
      if (info.textContent.trim() !== txt) info.textContent = txt;
      if (ship) w.classList.add('ps-combo-switchable'); else w.classList.remove('ps-combo-switchable');
    });
    $$(BILL + ' .radio-wrapper:not(.inactive-child).ps-combo-switchable').forEach(function (w) {
      w.classList.remove('ps-combo-switchable');
    });
  }
  sync();
  var t = null;
  new MutationObserver(function () { clearTimeout(t); t = setTimeout(sync, 80); })
    .observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class', 'disabled'] });
})();
