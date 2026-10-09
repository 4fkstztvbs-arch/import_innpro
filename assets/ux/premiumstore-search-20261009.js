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
  var seasonOn = now < new Date(2026, 11, 25);
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
