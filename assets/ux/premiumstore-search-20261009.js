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
