/* PremiumStore – doplnenie štrukturovaných dát Product na detaile produktu (PS-20261102-PDP-SCHEMA)
   Shoptet generuje Product ako microdata (name, image, brand, gtin13, sku, offers, shippingDetails). Tento skript len DOPLNÍ
   chýbajúce odporúčané vlastnosti do toho istého Product bloku (žiadny druhý Product, žiadny JSON-LD), aby nevznikli duplicity:
   - description: prvý odsek viditeľného popisu produktu (musí zodpovedať viditeľnému obsahu),
   - hasMerchantReturnPolicy: vrátenie tovaru do 14 dní, poštou, náklady na vrátenie hradí zákazník.
   Nepridáva hodnotenia (aggregateRating/review): obchod ich na produkte nemá. Cena, dostupnosť a pod. sa nemenia. Idempotentné. */
(function () {
  if (!document.body || !document.body.classList.contains('type-detail')) return;
  var root = document.querySelector('[itemscope][itemtype="https://schema.org/Product"]');
  if (!root) return;

  function el(tag, attrs) {
    var n = document.createElement(tag);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    return n;
  }
  function has(scope, prop) {
    return !!scope.querySelector(':scope > [itemprop="' + prop + '"]');
  }

  // 1) description
  if (!has(root, 'description')) {
    var p = document.querySelector('.basic-description > p');
    var text = p ? (p.textContent || '').replace(/\s+/g, ' ').trim() : '';
    if (text.length >= 40) {
      if (text.length > 300) text = text.slice(0, 297).replace(/\s+\S*$/, '') + '…';
      root.insertBefore(el('meta', { itemprop: 'description', content: text }), root.firstChild);
    }
  }

  // 2) hasMerchantReturnPolicy v Offer
  var offers = root.querySelectorAll('[itemprop="offers"][itemtype="https://schema.org/Offer"]');
  for (var i = 0; i < offers.length; i++) {
    var offer = offers[i];
    if (has(offer, 'hasMerchantReturnPolicy')) continue;
    var rp = el('span', { itemprop: 'hasMerchantReturnPolicy', itemscope: '', itemtype: 'https://schema.org/MerchantReturnPolicy' });
    rp.appendChild(el('meta', { itemprop: 'applicableCountry', content: 'SK' }));
    rp.appendChild(el('link', { itemprop: 'returnPolicyCategory', href: 'https://schema.org/MerchantReturnFiniteReturnWindow' }));
    rp.appendChild(el('meta', { itemprop: 'merchantReturnDays', content: '14' }));
    rp.appendChild(el('link', { itemprop: 'returnMethod', href: 'https://schema.org/ReturnByMail' }));
    rp.appendChild(el('link', { itemprop: 'returnFees', href: 'https://schema.org/ReturnShippingFees' }));
    offer.appendChild(rp);
  }
})();
