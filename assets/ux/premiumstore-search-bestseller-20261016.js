/* PremiumStore – najpredávanejší produkt v našeptávači (2026-10-16): pri vyhľadávaní značky/témy ukáže v ľavom stĺpci kartu bestsellera.
Nadväzuje na premiumstore-search-assist (PSSearchAssist.norm). Nové pravidlá pridávaj do BEST nižšie.
Názov, cenu a obrázok si berie živo zo stránky produktu (cache 6 h), takže sa nemusia prepisovať. Ak produkt nie je skladom, karta sa nezobrazí. */
(function () {
// test = regulárny výraz na text bez diakritiky a malými písmenami (rovnako ako RULES v search-assist).
// href = adresa najpredávanejšieho produktu. Obnov raz za pár týždňov podľa Štatistiky > Produkty v administrácii.
// Zdroj: Shoptet > Štatistiky > Produkty (predané kusy, stav 16. 10. 2026). Konkrétnejšie pravidlá patria vyššie.
var BEST = [
// Flytec: V060 GPS 12 000 mAh (10 ks)
{ test: /flytec|lodk|lodic|zavaz|navnad/, href: '/zavazacia-lodka-flytec-v060-gps--12-000-mah/', label: 'Najpredávanejšie' },
// Bose slúchadlá: QuietComfort Headphones Club SC (4 + 1 ks). Pozor: dostupnosť je „Na objednávku".
{ test: /quietcomfort|bose.*slucha|slucha.*bose/, href: '/bose-quietcomfort-headphones-club-sc-bluetooth-sluchadla-s-potlacenim-okoliteho-hluku--cierne/', label: 'Najpredávanejšie' },
// Bose všeobecne: DesignMax DM3C biele (7 ks, 560 €)
{ test: /bose/, href: '/bose-designmax-dm3c-instalacne-reproduktory--biele-2/', label: 'Najpredávanejšie' },
// HTVRONT: trblietavá fólia strieborná (5 ks)
{ test: /htv\s?-?ront/, href: '/htvront---trblietava-folia-na-termotransfer--30-5-cm--90-cm--strieborna/', label: 'Najpredávanejšie' },
// Carlinkit: MINI ULTRA 5 (4 + 2 ks, dva záznamy v štatistike)
{ test: /carlin?kit|carlink|carplay/, href: '/bezdrotovy-adapter-carlinkit-mini-ultra-5-pre-carplay-android-auto/', label: 'Najpredávanejšie' }
// Zatiaľ vypnuté, slabé alebo nepoužiteľné dáta:
// Yamaha: najpredávanejšie NS-AW392 (6 ks) a NS-F51 (1 ks) sa vo vyhľadávaní na webe nenašli (skryté alebo zmazané). Doplň, keď bude predávaný produkt.
// { test: /yamaha/, href: '/…/', label: 'Najpredávanejšie' },
// Sonos: jediný predaj sú nástenné držiaky Era 100 (2 ks), nie je to to, čo pri „sonos" ľudia hľadajú: '/sonos-era-100-mount-pair-black/'
// RingConn: každá veľkosť je samostatný produkt a predal sa po 1 ks, bestseller sa nedá určiť.
];

function norm(s) {
if (window.PSSearchAssist && window.PSSearchAssist.norm) return window.PSSearchAssist.norm(s);
s = (s || '').toLowerCase();
return (s.normalize ? s.normalize('NFD').replace(/[̀-ͯ]/g, '') : s).replace(/\s+/g, ' ').trim();
}
function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

function find(q) {
var nq = norm(q);
if (nq.length < 3) return null;
for (var i = 0; i < BEST.length; i++) if (BEST[i].test.test(nq)) return BEST[i];
return null;
}

// Údaje o produkte zo stránky produktu (cache v sessionStorage).
function load(href, cb) {
var key = 'ps-bs:' + href, c = null;
try { c = JSON.parse(sessionStorage.getItem(key) || 'null'); } catch (e) {}
if (c && Date.now() - c.t < 6 * 36e5) return cb(c.d);
fetch(href, { credentials: 'same-origin' }).then(function (r) { return r.ok ? r.text() : Promise.reject(); }).then(function (html) {
var d = new DOMParser().parseFromString(html, 'text/html');
var t = d.querySelector('meta[property="og:title"]'), im = d.querySelector('meta[property="og:image"]');
var pr = d.querySelector('.p-final-price-wrapper .price-final-holder') || d.querySelector('.price-final');
var av = d.querySelector('.availability-label');
var data = {
name: t ? t.content : '',
img: im ? im.content.replace('/big/', '/related/') : '',
price: pr ? pr.textContent.replace(/\s+/g, ' ').trim() : '',
stock: av ? av.textContent.replace(/\s+/g, ' ').trim() : '',
ok: !/vypredan|nedostup|nie je skladom/i.test(av ? av.textContent : '')
};
try { sessionStorage.setItem(key, JSON.stringify({ t: Date.now(), d: data })); } catch (e) {}
cb(data);
}).catch(function () {});
}

function css() {
if (document.getElementById('ps-bs-css')) return;
var s = document.createElement('style');
s.id = 'ps-bs-css';
s.textContent = '.ps-bs{display:block;margin:16px 0 0;padding:10px;border:1px solid rgba(0,0,0,.1);border-radius:10px;background:#fff;color:inherit;text-decoration:none;text-align:center}' +
'.ps-bs:hover{border-color:var(--color-primary,#1f6b4a)}' +
'.ps-bs__tag{display:inline-block;margin-bottom:8px;padding:2px 8px;border-radius:99px;background:var(--color-primary,#1f6b4a);color:#fff;font-size:11px;font-weight:700}' +
'.ps-bs__img{display:block;height:90px;margin:0 auto 8px;object-fit:contain;max-width:100%}' +
'.ps-bs__name{display:block;font-size:13px;line-height:1.3;max-height:3.9em;overflow:hidden}' +
'.ps-bs__stock{display:block;margin-top:4px;font-size:12px;color:#3c840f}' +
'.ps-bs__price{display:block;margin-top:4px;font-size:15px;font-weight:700}';
document.head.appendChild(s);
}

var input = document.querySelector('.js-search-input');
var box = document.querySelector('.search');
if (!input || !box) return;
var timer = null, seq = 0;

function clean() {
var own = box.querySelector('.ps-bs-side'), old = box.querySelector('.ps-bs');
if (own) own.remove(); else if (old) old.remove();
}
function enhance() {
var w = box.querySelector('.searchWhisperer');
var old = box.querySelector('.ps-bs');
var q = input.value || '', r = find(q);
if (!w || !r) { clean(); return; }
if (old && old.getAttribute('data-want') === r.href) return;
clean();
var mine = ++seq;
load(r.href, function (d) {
if (mine !== seq || !d || !d.ok || !d.name) return;
var w2 = box.querySelector('.searchWhisperer'), prods = w2 && w2.querySelector('.searchWhisperer__products');
if (!prods || w2.querySelector('.ps-bs')) return;
// Keď Shoptet nenašiel kategóriu ani značku, ľavý stĺpec nevznikne. Vytvoríme ho sami, aby karta mala kde byť.
var side2 = w2.querySelector('.searchWhisperer__additionalResults');
if (!side2) {
side2 = document.createElement('div');
side2.className = 'searchWhisperer__additionalResults ps-bs-side';
prods.parentNode.insertBefore(side2, prods);
}
css();
var a = document.createElement('a');
a.className = 'ps-bs';
a.href = r.href;
a.setAttribute('data-want', r.href);
a.innerHTML = '<span class="ps-bs__tag">' + esc(r.label || 'Najpredávanejšie') + '</span>' +
(d.img ? '<img class="ps-bs__img" src="' + esc(d.img) + '" alt="" loading="lazy">' : '') +
'<span class="ps-bs__name">' + esc(d.name) + '</span>' +
(d.stock ? '<span class="ps-bs__stock">' + esc(d.stock) + '</span>' : '') +
(d.price ? '<span class="ps-bs__price">' + esc(d.price) + '</span>' : '');
side2.appendChild(a);
});
}
if (window.MutationObserver) {
new MutationObserver(function () { clearTimeout(timer); timer = setTimeout(enhance, 80); }).observe(box, { childList: true, subtree: true });
}
input.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(enhance, 400); });
})();
