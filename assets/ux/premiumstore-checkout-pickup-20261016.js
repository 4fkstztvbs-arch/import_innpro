/* PremiumStore – objednávka krok 1: výber výdajného miesta.
   Ak je zvolená doprava na výdajné miesto (Packeta, Balíkobox, SPS...) a miesto nie je vybrané,
   „Pokračovať“ neodošle formulár naprázdno: stránka sa posunie k riadku dopravy, zvýrazní ho
   a otvorí výber miesta. To isté sa stane po návrate s chybou „Výdajné miesto dopravy ... nebolo vybrané“.
   Po prepnutí na takú dopravu sa výber miesta otvorí hneď. */
(function () {
  'use strict';
  if (!document.body || !document.body.classList.contains('in-krok-1')) return;

  var CHOOSE_SEL = '.sublabel.new-widget-choose';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function activeWrapper() {
    var r = document.querySelector('#order-shipping-methods input[name="shippingId"]:checked');
    return r ? r.closest('.radio-wrapper') : null;
  }

  function chooseLink(wrapper) {
    if (!wrapper) return null;
    var box = wrapper.querySelector(CHOOSE_SEL);
    if (!box) return null;
    var link = box.querySelector('a');
    return link && /Zvoľte odberné miesto/i.test(link.textContent) ? link : null;
  }

  function needsPoint() {
    return chooseLink(activeWrapper());
  }

  function hint(wrapper) {
    var h = wrapper.querySelector('.ps-pickup-hint');
    if (!h) {
      h = document.createElement('div');
      h.className = 'ps-pickup-hint';
      h.setAttribute('role', 'alert');
      h.textContent = 'Vyberte výdajné miesto, kam vám zásielku doručíme.';
      wrapper.appendChild(h);
    }
  }

  function clearHint(wrapper) {
    wrapper.classList.remove('ps-pickup-needed');
    var h = wrapper.querySelector('.ps-pickup-hint');
    if (h) h.remove();
  }

  function prompt(openPicker) {
    var wrapper = activeWrapper();
    var link = chooseLink(wrapper);
    if (!wrapper || !link) return;
    wrapper.classList.add('ps-pickup-needed');
    hint(wrapper);
    wrapper.scrollIntoView({ block: 'center', behavior: reduce ? 'auto' : 'smooth' });
    if (openPicker) setTimeout(function () { link.click(); }, reduce ? 0 : 350);
  }

  // 1) Pred odoslaním: bez vybraného miesta formulár neodosielať.
  function guard(e) {
    if (!needsPoint()) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    prompt(true);
  }
  document.addEventListener('click', function (e) {
    var t = e.target && e.target.closest && e.target.closest('#orderFormButton, #ps-bar button');
    if (t) guard(e);
  }, true);
  document.addEventListener('submit', function (e) {
    if (e.target && e.target.id === 'order-form') guard(e);
  }, true);

  // 2) Po prepnutí dopravy na výdajné miesto otvoriť výber hneď.
  document.addEventListener('change', function (e) {
    var t = e.target;
    if (!t || t.name !== 'shippingId') return;
    document.querySelectorAll('.ps-pickup-needed').forEach(clearHint);
    setTimeout(function () { if (needsPoint()) prompt(true); }, 150);
  });

  // 3) Návrat so serverovou chybou: nasmerovať na riadok dopravy.
  function onLoad() {
    var err = document.querySelector('.msg-error');
    if (err && /Výdajné miesto dopravy/i.test(err.textContent) && needsPoint()) prompt(false);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', onLoad);
  else onLoad();

  // Po výbere miesta zrušiť zvýraznenie (text odkazu sa zmení).
  new MutationObserver(function () {
    document.querySelectorAll('.ps-pickup-needed').forEach(function (w) {
      if (!chooseLink(w)) clearHint(w);
    });
  }).observe(document.body, { childList: true, subtree: true, characterData: true });
})();
