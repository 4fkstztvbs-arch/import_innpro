/* PremiumStore – úvodná stránka na desktope (2026-10-09): tlačidlo „Zobraziť viac“ pri úvodnom texte.
   CSS skracuje text na dva riadky; skript len pridá tlačidlo, ktoré ho rozbalí. Idempotentné. */
(function () {
  'use strict';
  function init() {
    var w = document.querySelector('body.type-index .welcome-wrapper .welcome');
    if (!w || w.querySelector('.ps-more')) return;
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'ps-more';
    b.textContent = 'Zobraziť viac';
    b.setAttribute('aria-expanded', 'false');
    b.addEventListener('click', function () {
      var open = w.classList.toggle('ps-open');
      b.textContent = open ? 'Zobraziť menej' : 'Zobraziť viac';
      b.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    w.appendChild(b);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
