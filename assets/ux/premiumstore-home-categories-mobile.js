/* PremiumStore – dlaždice hlavných kategórií na úvodnej stránke (2026-10-03)
   Vloží blok .ps-home-cats na začiatok main#content; zobrazuje ho iba CSS na mobile.
   Idempotentné, nemení nič iné. Rollback = odstrániť <script> a <link>. */
(function () {
  'use strict';

  var CATS = [
    ['/pocitace-mobily-a-tablety/', 'Počítače, mobily', '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>'],
    ['/tv-foto-audio-video/', 'TV, audio, foto', '<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>'],
    ['/domace-spotrebice/', 'Domáce spotrebiče', '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>'],
    ['/elektro-smart-home-a-osvetlenie/', 'Smart Home, svetlá', '<path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.7.6 1 1.4 1 2.3h6c0-.9.3-1.7 1-2.3A7 7 0 0 0 12 2z"/>'],
    ['/fotovoltaika-a-energie/', 'Energia, napájanie', '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>'],
    ['/profesionalna-audio-technika/', 'Profi audio', '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4"/>'],
    ['/3d-tlac-a-digitalna-vyroba/', '3D tlač', '<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M12 12l9-5M12 12L3 7M12 12v10"/>'],
    ['/dielna-a-zahrada/', 'Dielňa, záhrada', '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.4 2.4-2.6-.6-.6-2.6z"/>'],
    ['/auto-moto/', 'Auto-moto', '<path d="M5 16l1.5-6A2 2 0 0 1 8.4 8.5h7.2a2 2 0 0 1 1.9 1.5L19 16"/><rect x="3" y="16" width="18" height="4" rx="1"/><circle cx="7.5" cy="18" r=".5"/><circle cx="16.5" cy="18" r=".5"/>'],
    ['/cestovanie-sport-a-outdoor/', 'Šport, outdoor', '<path d="M3 20l6-11 4 6 2-3 6 8z"/><circle cx="17" cy="6" r="2"/>'],
    ['/zdravie-a-starostlivost/', 'Zdravie', '<path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z"/>'],
    ['/chovatelske-potreby/', 'Pre zvieratá', '<circle cx="6" cy="10" r="2"/><circle cx="10" cy="5.5" r="2"/><circle cx="15" cy="5.5" r="2"/><circle cx="19" cy="10" r="2"/><path d="M12.5 12c-3 0-5.5 3-5.5 5.5 0 1.7 1.3 2.5 3 2.5 1 0 1.5-.5 2.5-.5s1.5.5 2.5.5c1.7 0 3-.8 3-2.5 0-2.5-2.5-5.5-5.5-5.5z"/>']
  ];

  function build() {
    var main = document.querySelector('body.type-index main#content');
    if (!main || main.querySelector('.ps-home-cats')) return;
    var ul = document.createElement('ul');
    ul.className = 'ps-home-cats';
    ul.setAttribute('aria-label', 'Hlavné kategórie');
    CATS.forEach(function (c) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = c[0];
      a.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + c[2] + '</svg><span></span>';
      a.lastChild.textContent = c[1];
      li.appendChild(a);
      ul.appendChild(li);
    });
    var h1 = main.querySelector('h1');
    if (h1 && h1.parentNode === main) h1.insertAdjacentElement('afterend', ul);
    else main.insertBefore(ul, main.firstChild);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
})();
