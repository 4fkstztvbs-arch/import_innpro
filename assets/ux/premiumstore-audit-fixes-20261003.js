/* PremiumStore audit fixes – 2026-10-03 (JS)
   1) Stránka značky bez produktov -> <meta name="robots" content="noindex,follow">.
      Google JS vykresľuje, takže tag zachytí; trvalé riešenie je skryť značku v Shoptete (viď docs/audit-fixes-20261003.md).
   Rollback = odstrániť <script>. */
(function () {
  'use strict';

  function markEmptyBrandNoindex() {
    if (!/^\/znacka\/[^/]+\/?$/.test(location.pathname)) return;
    var perex = document.querySelector('.category-perex');
    if (!perex || !/Žiadne produkty značky/i.test(perex.textContent)) return;
    if (document.querySelector('.products-block .product, .products .product')) return;
    var meta = document.querySelector('meta[name="robots"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'robots');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'noindex,follow');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', markEmptyBrandNoindex);
  } else {
    markEmptyBrandNoindex();
  }
})();
