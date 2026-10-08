/* PremiumStore – objednávka: lepkavá lišta s CTA a zhrnutie hore (mobil). */
(function () {
  'use strict';
  if (!document.body || !document.body.classList.contains('ordering-process')) return;
  var mq = window.matchMedia('(max-width: 767px)');
  var CTA_SEL = '#submit-order, #orderFormButton, #continue-order-button';

  var css = '' +
    '#ps-bar{display:none;position:fixed;left:0;right:0;bottom:0;z-index:998;align-items:center;gap:12px;padding:10px 16px calc(10px + env(safe-area-inset-bottom,0px));background:#fff;border-top:1px solid #e0e0e0;box-shadow:0 -4px 12px rgba(0,0,0,.08)}' +
    '#ps-bar.is-on{display:flex}' +
    '#ps-bar .ps-bar-sum{display:flex;flex-direction:column;line-height:1.2;min-width:0}' +
    '#ps-bar .ps-bar-sum small{font-size:12px;color:#5b6b6f}' +
    '#ps-bar .ps-bar-sum b{font-size:19px;color:#111;white-space:nowrap}' +
    '#ps-bar button{flex:1;min-height:52px;border:0;border-radius:10px;background:#167450;color:#fff;font-size:16px;font-weight:700;padding:0 12px;cursor:pointer}' +
    '#ps-sum{display:none;margin:0 0 12px}' +
    '#ps-sum-head{width:100%;display:flex;justify-content:space-between;align-items:center;padding:12px 14px;border:1.5px solid #c5d3d6;border-radius:10px;background:#f6f9f9;font-size:15px;font-weight:600;color:#111;cursor:pointer}' +
    '#ps-sum-head span:last-child{color:#167450;font-weight:700}' +
    '#ps-sum-head i{display:inline-block;margin-left:6px;transition:transform .2s}' +
    '#ps-sum.is-open #ps-sum-head i{transform:rotate(180deg)}' +
    '#ps-sum-body{display:none;margin-top:8px;padding:12px 14px;border:1px solid #e0e0e0;border-radius:10px;background:#fff;font-size:14px}' +
    '#ps-sum.is-open #ps-sum-body{display:block}' +
    '#ps-sum-body h2{display:none}' +
    '@media (max-width:767px){#ps-sum.is-on{display:block}body.ordering-process{padding-bottom:84px}}' +
    'body.ordering-process #submit-order .order-button-text,body.ordering-process #submit-order .order-button-suffix{font-weight:700}' +
    'body.ordering-process .next-step .btn,body.ordering-process #orderFormButton,body.ordering-process #continue-order-button{font-weight:700}';
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  var bar = document.createElement('div');
  bar.id = 'ps-bar';
  bar.innerHTML = '<div class="ps-bar-sum"><small>Celkom</small><b></b></div><button type="button"></button>';
  document.body.appendChild(bar);
  var barTotal = bar.querySelector('b');
  var barBtn = bar.querySelector('button');

  var sum = null, sumHead = null, sumBody = null;

  function cta() { return document.querySelector(CTA_SEL); }
  function total() {
    var el = document.querySelector('[data-testid="recapFullPrice"]');
    return el ? el.textContent.replace(/\s+/g, ' ').trim() : '';
  }
  function ctaText() {
    var c = cta();
    if (!c) return '';
    var t = c.querySelector('.order-button-text');
    return ((t || c).textContent || c.value || '').replace(/\s+/g, ' ').trim();
  }

  function buildSummary() {
    var side = document.getElementById('checkoutSidebar');
    var step = location.pathname.indexOf('/objednavka/') === 0 && !document.getElementById('submit-order');
    if (sum || !side || !step) return;
    var row = side.parentNode;
    sum = document.createElement('div');
    sum.id = 'ps-sum';
    sum.innerHTML = '<button type="button" id="ps-sum-head"><span>Zhrnutie objednávky<i>▾</i></span><span></span></button><div id="ps-sum-body"></div>';
    row.parentNode.insertBefore(sum, row);
    sumHead = sum.querySelector('#ps-sum-head');
    sumBody = sum.querySelector('#ps-sum-body');
    sumHead.addEventListener('click', function () {
      var open = !sum.classList.contains('is-open');
      if (open) {
        var box = document.getElementById('summary-box');
        sumBody.innerHTML = box ? box.innerHTML : '';
        var junk = sumBody.querySelectorAll('.next-step, .btn, button, [id]');
        for (var i = 0; i < junk.length; i++) { if (junk[i].id) junk[i].removeAttribute('id'); if (/^(BUTTON|A)$/.test(junk[i].tagName) || junk[i].classList.contains('next-step')) junk[i].remove(); }
      }
      sum.classList.toggle('is-open', open);
    });
  }

  function modalOpen() {
    return !!document.querySelector('.modal.in, .modal.show, .colorbox-open, #colorbox[style*="block"], #cboxOverlay[style*="block"]');
  }

  function update() {
    var c = cta(), t = total();
    var ck = document.querySelector('.siteCookies');
    var h = ck && getComputedStyle(ck).position === 'fixed' && ck.offsetHeight ? ck.offsetHeight : 0;
    var r = c ? c.getBoundingClientRect() : null;
    var visible = !!r && r.height > 0 && r.top >= 0 && r.bottom <= window.innerHeight - h;
    var on = mq.matches && !!t && !!c && !visible && !modalOpen();
    if (barTotal.textContent !== t) barTotal.textContent = t;
    var ct = ctaText();
    if (barBtn.textContent !== ct) barBtn.textContent = ct;
    bar.style.bottom = h + 'px';
    bar.classList.toggle('is-on', on);
    buildSummary();
    if (sum) {
      sum.classList.toggle('is-on', mq.matches);
      if (sumHead.lastChild.textContent !== t) sumHead.lastChild.textContent = t;
    }
  }

  barBtn.addEventListener('click', function () {
    var c = cta();
    if (c) c.click();
  });

  var timer = null;
  new MutationObserver(function () {
    clearTimeout(timer);
    timer = setTimeout(update, 120);
  }).observe(document.body, { childList: true, subtree: true, characterData: true });
  window.addEventListener('resize', update);
  window.addEventListener('scroll', update, { passive: true });
  update();
})();
