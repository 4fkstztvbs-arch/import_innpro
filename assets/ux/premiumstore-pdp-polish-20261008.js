/*
 * PremiumStore PDP: drobné úpravy hornej časti detailu (návrh z 8. 10. 2026).
 *
 * 1) Zberná značka "Ostatní / Ostatné" sa na detaile skryje (odkaz na zbernú značku nemá hodnotu).
 * 2) Riadok "Kód" je menší a nezalamuje sa (dlhé kódy ako AT_ABL-30-B3-075 zabrali dva riadky).
 *
 * Samostatný súbor, nemení ostatné skripty. Rollback = odstrániť jeden <script> odkaz.
 * V Shoptete: <script src="https://4fkstztvbs-arch.github.io/import_innpro/assets/ux/premiumstore-pdp-polish-20261008.js?v=1"></script>
 * v pätičke za premiumstore-pdp-conversion-20261004.js.
 */
(function () {
  'use strict';
  if (window.__psPdpPolish) return;
  window.__psPdpPolish = true;
  if (!document.body || !document.body.classList.contains('type-detail')) return;

  var s = document.createElement('style');
  s.id = 'ps-pdp-polish-css';
  s.appendChild(document.createTextNode([
    'body.type-detail .brand-wrapper.ps-brand-generic{display:none!important;}',
    'body.type-detail .p-data-wrapper tr.ps-code-row td,body.type-detail .p-data-wrapper tr.ps-code-row th{font-size:13px!important;color:#5b6670;white-space:nowrap;}',
    'body.type-detail .p-data-wrapper tr.ps-code-row td{overflow-wrap:normal;word-break:normal;}'
  ].join('')));
  document.head.appendChild(s);

  function run() {
    var b = document.querySelector('.brand-wrapper');
    var a = b && b.querySelector('a');
    if (a && /^\s*Ostatn[íié]\s*$/i.test(a.textContent)) b.classList.add('ps-brand-generic');
    var ths = document.querySelectorAll('.p-data-wrapper th');
    for (var i = 0; i < ths.length; i++) {
      if (/^\s*K[óo]d\s*:?\s*$/i.test(ths[i].textContent) && ths[i].parentNode) {
        ths[i].parentNode.classList.add('ps-code-row');
      }
    }
  }
  run();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  window.addEventListener('load', run);
})();
