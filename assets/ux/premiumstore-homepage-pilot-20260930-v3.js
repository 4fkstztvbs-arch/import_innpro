/* PremiumStore homepage preview pilot. No header/footer or commerce mutations. */
(function () {
  'use strict';
  function mount() {
    var main = document.querySelector('body.type-index main#content');
    if (!main || main.classList.contains('pshp-active')) return;
    var firstGroup = main.querySelector('.homepage-group-title');
    if (!firstGroup) return;
    function make(html) { var t = document.createElement('template'); t.innerHTML = html; return t.content; }
    main.prepend(make("<section class=\"pshp pshp-hero\" aria-label=\"Novinky a tipy z ponuky\"><a class=\"pshp-campaign pshp-beam\" href=\"/sonos-beam-ultra-cierny/\"><div class=\"pshp-campaign-copy\"><span class=\"pshp-badge\">NOVINKA · SONOS BEAM ULTRA</span><h2>Kino sa začína<br>u vás doma.</h2><p>Priestorový Dolby Atmos.<br>Jasnejšie dialógy.</p><span class=\"pshp-campaign-cta\">Pozrieť Beam Ultra <b aria-hidden=\"true\">→</b></span></div><img class=\"pshp-campaign-photo\" src=\"/user/documents/upload/ps-sonos-beam-ultra-home-20260930.jpg\" alt=\"Čierny soundbar SONOS Beam Ultra pod televízorom\" width=\"1200\" height=\"1200\" loading=\"lazy\"></a><div class=\"pshp-side-promos\"><a class=\"pshp-campaign pshp-ace\" href=\"/sonos-ace-ultra-sand/\"><div class=\"pshp-campaign-copy\"><span class=\"pshp-badge\">NOVINKA</span><h3>Sonos Ace Ultra</h3><p>Vaša hudba.<br>Menej okolitého hluku.</p><span class=\"pshp-campaign-cta\">Pozrieť Ace Ultra <b aria-hidden=\"true\">→</b></span></div><img class=\"pshp-campaign-photo\" src=\"/user/documents/upload/ps-sonos-ace-ultra-home-20260930.jpg\" alt=\"SONOS Ace Ultra Sand pri počúvaní hudby\" width=\"800\" height=\"800\" loading=\"lazy\"></a><a class=\"pshp-campaign pshp-stock\" href=\"/prieskumna-baterka-superfire-m9-e---900-lm--473-m--6000-mah--5-h-prevadzky--powerbanka/\"><div class=\"pshp-campaign-copy\"><span class=\"pshp-badge\">NA VÝLETY AJ DOMOV</span><h3>Superfire M9-E</h3><p>Svetlo na výlety<br>aj do domácnosti.</p><span class=\"pshp-campaign-cta\">Pozrieť baterku <b aria-hidden=\"true\">→</b></span></div><img class=\"pshp-campaign-photo\" src=\"https://cdn.myshoptet.com/usr/www.premiumstore.sk/user/shop/big/673077_prieskumna-baterka-superfire-m9-e---900-lm--473-m--6000-mah--5-h-prevadzky--powerbanka-obrazok-1.jpg?6ab9f592\" alt=\"Nabíjateľná baterka Superfire M9-E\" width=\"1024\" height=\"768\" loading=\"lazy\"></a></div></section>"));
    firstGroup.before(make("<section class=\"pshp pshp-categories\" aria-labelledby=\"pshp-category-title\"><h2 id=\"pshp-category-title\">Vyberte si kategóriu</h2><div class=\"pshp-category-grid\"><a class=\"pshp-category\" href=\"https://www.premiumstore.sk/pocitace-mobily-a-tablety/\"><img src=\"https://www.premiumstore.sk/user/categories/orig/ad5994a4-0399-4bdd-8a3b-b6f545a761fe.png\" alt=\"\" width=\"150\" height=\"110\" loading=\"lazy\"><span>Počítače a mobily <b aria-hidden=\"true\">→</b></span></a><a class=\"pshp-category\" href=\"https://www.premiumstore.sk/tv-foto-audio-video/\"><img src=\"https://www.premiumstore.sk/user/categories/orig/cf82145b-b349-4849-8650-aff520a8d0da.png\" alt=\"\" width=\"150\" height=\"110\" loading=\"lazy\"><span>TV, audio a foto <b aria-hidden=\"true\">→</b></span></a><a class=\"pshp-category\" href=\"https://www.premiumstore.sk/domace-spotrebice/\"><img src=\"https://www.premiumstore.sk/user/categories/orig/865d8a21-4067-4551-8be4-b7c4dc20e4b0_w400.jpg\" alt=\"\" width=\"150\" height=\"110\" loading=\"lazy\"><span>Domáce spotrebiče <b aria-hidden=\"true\">→</b></span></a><a class=\"pshp-category\" href=\"https://www.premiumstore.sk/elektro-smart-home-a-osvetlenie/\"><img src=\"https://www.premiumstore.sk/user/categories/orig/smart_home_produkte_start_res_800x450-2.jpg\" alt=\"\" width=\"150\" height=\"110\" loading=\"lazy\"><span>Smart Home <b aria-hidden=\"true\">→</b></span></a><a class=\"pshp-category\" href=\"https://www.premiumstore.sk/3d-tlac-a-digitalna-vyroba/\"><img src=\"https://www.premiumstore.sk/user/categories/orig/bamboo-x1-carbon-combo.png\" alt=\"\" width=\"150\" height=\"110\" loading=\"lazy\"><span>3D tlač <b aria-hidden=\"true\">→</b></span></a><a class=\"pshp-category\" href=\"https://www.premiumstore.sk/dielna-a-zahrada/\"><img src=\"https://www.premiumstore.sk/user/categories/orig/shopping.jpeg\" alt=\"\" width=\"150\" height=\"110\" loading=\"lazy\"><span>Dielňa a záhrada <b aria-hidden=\"true\">→</b></span></a></div><div class=\"pshp-more\"><span>Ďalšie kategórie:</span><a href=\"https://www.premiumstore.sk/fotovoltaika-a-energie/\">Energia a napájanie →</a><a href=\"https://www.premiumstore.sk/profesionalna-audio-technika/\">Profesionálne audio →</a><a href=\"https://www.premiumstore.sk/auto-moto/\">Auto-moto →</a><a href=\"https://www.premiumstore.sk/cestovanie-sport-a-outdoor/\">Šport a outdoor →</a><a href=\"https://www.premiumstore.sk/zdravie-a-starostlivost/\">Zdravie a starostlivosť →</a><a href=\"https://www.premiumstore.sk/chovatelske-potreby/\">Chovateľské potreby →</a></div></section>"));
    var welcome = main.querySelector('.welcome-wrapper');
    if (welcome) welcome.before(make("<section class=\"pshp pshp-editorial\"><div><p class=\"pshp-eyebrow\">TECHNOLÓGIE PRE KAŽDÝ DEŇ</p><h2>Všetko pre váš domov.<br>Na jednom mieste.</h2><p>Od kvalitného zvuku po šikovných pomocníkov.<br>Vyberte si to, čo vám spríjemní každodenný život.</p><a class=\"pshp-cta\" href=\"https://www.premiumstore.sk/domace-spotrebice/\">Vybaviť domácnosť <span aria-hidden=\"true\">→</span></a></div><img src=\"https://www.premiumstore.sk/user/categories/orig/865d8a21-4067-4551-8be4-b7c4dc20e4b0_w400.jpg\" alt=\"Domáce spotrebiče\" width=\"500\" height=\"330\" loading=\"lazy\"></section>"));
    else main.append(make("<section class=\"pshp pshp-editorial\"><div><p class=\"pshp-eyebrow\">TECHNOLÓGIE PRE KAŽDÝ DEŇ</p><h2>Všetko pre váš domov.<br>Na jednom mieste.</h2><p>Od kvalitného zvuku po šikovných pomocníkov.<br>Vyberte si to, čo vám spríjemní každodenný život.</p><a class=\"pshp-cta\" href=\"https://www.premiumstore.sk/domace-spotrebice/\">Vybaviť domácnosť <span aria-hidden=\"true\">→</span></a></div><img src=\"https://www.premiumstore.sk/user/categories/orig/865d8a21-4067-4551-8be4-b7c4dc20e4b0_w400.jpg\" alt=\"Domáce spotrebiče\" width=\"500\" height=\"330\" loading=\"lazy\"></section>"));
    var categories = main.querySelector('.pshp-categories');
    var hero = main.querySelector('.pshp-hero');
    // DOM order follows the mobile customer journey; CSS promotes the hero on desktop.
    if (categories && hero) hero.before(categories);
    firstGroup.classList.add('pshp-first-title');
    if (firstGroup.textContent.trim() === 'Dnes v akcii') firstGroup.textContent = 'Vybrali sme pre vás';
    var firstProducts = firstGroup.nextElementSibling;
    if (firstProducts && firstProducts.classList.contains('products-wrapper')) {
      firstProducts.classList.add('pshp-first-products');
      var benefits = main.querySelector('.benefitBanner');
      if (benefits) firstProducts.after(benefits);
      if (hero) (benefits || firstProducts).after(hero);
    }
    // Match the store-stock badge to Shoptet's current native product card.
    var stockPromo = main.querySelector('.pshp-stock');
    if (stockPromo) {
      var productLinks = main.querySelectorAll('.products-wrapper .p a.image');
      for (var i = 0; i < productLinks.length; i++) {
        if (productLinks[i].pathname === stockPromo.pathname) {
          var availability = productLinks[i].closest('.p').querySelector('.availability');
          if (availability && availability.textContent.trim() === 'Skladom na predajni') {
            stockPromo.querySelector('.pshp-badge').textContent = 'SKLADOM NA PREDAJNI';
          }
          break;
        }
      }
    }
    main.querySelectorAll('.benefitBanner__item').forEach(function(item) {
      var title = item.querySelector('.benefitBanner__title');
      if (title && title.textContent.trim() === 'Doručenie do 2 dní') {
        title.textContent = 'Doručenie od 2 dní';
        var detail = item.querySelector('.benefitBanner__data');
        if (detail) detail.textContent = 'Platí pre tovar skladom na predajni';
        var icon = item.querySelector('img');
        if (icon) icon.alt = 'Doručenie od 2 dní – platí pre tovar skladom na predajni';
      }
    });
    // Keep the reviewed trust message present even when the template omits native benefits on mobile.
    var oldBenefits = main.querySelector('.benefitBanner');
    var trust = make("<section class=\"pshp pshp-trust\" aria-label=\"Informácie o nákupe\"><div><strong>Doručenie od 2 dní</strong><p>Platí pre tovar skladom na predajni</p></div><div><strong>Viac ako 3 000 výdajných miest</strong><p>Vyberte si doručenie, ktoré vám vyhovuje</p></div><div><strong>Vrátenie tovaru do 14 dní</strong><p>Podmienky nájdete v informáciách o nákupe</p></div></section>");
    if (oldBenefits) oldBenefits.replaceWith(trust);
    else if (hero) hero.before(trust);
    var welcomeText = main.querySelector('.welcome-wrapper');
    if (welcomeText) {
      var walker = document.createTreeWalker(welcomeText, NodeFilter.SHOW_TEXT);
      var textNode;
      while ((textNode = walker.nextNode())) {
        textNode.nodeValue = textNode.nodeValue.replace('rýchle doručenie do druhého dňa', 'doručenie od 2 dní pri tovare skladom na predajni');
      }
    }
    var campaignImage = main.querySelector('.pshp-beam img');
    if (campaignImage && window.matchMedia('(min-width: 768px)').matches) {
      campaignImage.loading = 'eager';
      campaignImage.setAttribute('fetchpriority', 'high');
    }
    main.classList.add('pshp-active');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, {once:true});
  else mount();
})();
