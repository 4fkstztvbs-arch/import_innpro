// Niektori dodavatelia (ATOS, InnPro, Penta) posielaju v <DESCRIPTION> HTML priamo z ich vlastneho
// CMS vratane <img src="..."> odkazov na ich vlastny obrazkovy server - a tie URL obcas obsahuju
// medzery alebo diakritiku bez percent-encodingu (napr. "A-Z CHARGER CRYSTAL.jpg" namiesto
// "A-Z%20CHARGER%20CRYSTAL.jpg"). Subor na danej URL pritom realne existuje (overene 2026-09-07
// pre vzorku ATOS obrazkov) - problem je cisto v tvare URL: medzera v atribute src je mimo URL
// specifikaciu a Shoptetov obrazkovy import/proxy ju (na rozdiel od niektorych prehliadacov) nevie
// spracovat, takze obrazok v popise produktu vobec nenacita.
//
// Prepis cez vstavany WHATWG URL parser (new URL(...).href) je idempotentny - uz platne %XX
// sekvencie necha bezo zmeny a zakoduje len skutocne "surove" znaky (medzeru, diakritiku), takze
// funguje rovnako spravne aj na uplne surovej URL, aj na ciastocne/uplne uz zakodovanej.

const HAS_WHITESPACE_OR_NON_ASCII_RE = /[ \t]|[^\x00-\x7F]/;

function fixDescriptionImageUrls(html) {
  if (!html) return html;
  return html.replace(/(<img\b[^>]*\bsrc=")([^"]+)(")/gi, (full, pre, url, post) => {
    if (!/^https?:\/\//i.test(url)) return full;
    if (!HAS_WHITESPACE_OR_NON_ASCII_RE.test(url)) return full; // ziadne medzery/nie-ASCII - v poriadku
    try {
      // WHATWG URL parsing already percent-encodes spaces/non-ASCII bytes in the path per spec -
      // no extra encodeURIComponent needed (that would double-encode any existing %XX).
      return pre + new URL(url).href + post;
    } catch {
      return full;
    }
  });
}

// ATOS-ove boilerplate obrazky ("Alien 4v1" ovladacie tlacitka, "Top quality" ramcek) v sablone
// pouzivanej naprie ~700 produktmi ovladacov ALIEN - overene 2026-09-07, oba trvalo 404 aj na
// https aj na vsetkych CDN hostoch (img0-3.atoselektro.cz), nie len docasny vypadok. Kedze ide o
// dva presne zname mrtve subory na strane dodavatela (nie o nasu URL), nahradime ich vlastnou
// produktovou fotkou (rovnaky princip ako pri obohacovani chudobnych K-B popisov) - takmer vsetky
// (701/703) produkty maju oba mrtve obrazky v tom istom popise, preto prvy vyskyt nahradime
// skutocnou fotkou a dalsie (duplicitne) len odstranime, aby sa ta ista fotka nezobrazovala 2x.
// Volane az v transform-atos.js, ked je uz zname skutocne (CDN) obrazok produktu - pri parsovani
// feedu (parse-atos.js) este nie je k dispozicii.
const DEAD_IMAGE_SRCS = new Set([
  'http://www.atoselektro.cz/images_galerieobr/0_207.jpg',
  'http://www.atoselektro.cz/images_galerieobr/0_212.jpg',
]);

function escapeHtml(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function replaceDeadAtosImages(html, productImageUrl, productName) {
  if (!html) return html;
  let usedReplacement = false;
  return html.replace(/<img\b[^>]*\bsrc="([^"]+)"[^>]*\/?>/gi, (full, src) => {
    if (!DEAD_IMAGE_SRCS.has(src)) return full;
    if (!productImageUrl) return ''; // ziadna nahrada k dispozicii - aspon odstranit mrtvy obrazok
    if (usedReplacement) return ''; // druhy/dalsi vyskyt v tom istom popise - nezdvojovat fotku
    usedReplacement = true;
    return `<img alt="${escapeHtml(productName)}" src="${escapeHtml(productImageUrl)}">`;
  });
}

module.exports = { fixDescriptionImageUrls, replaceDeadAtosImages };
