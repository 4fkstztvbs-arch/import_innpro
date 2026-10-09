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
