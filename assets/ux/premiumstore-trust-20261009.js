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
