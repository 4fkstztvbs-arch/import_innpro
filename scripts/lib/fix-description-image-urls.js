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

// ATOS-ove boilerplate obrazky ("Alien 4v1" ovladacie tlacitka, "Top quality" ramcek) v sablone
// pouzivanej naprie ~700 produktmi ovladacov ALIEN - overene 2026-09-07, oba trvalo 404 aj na
// https aj na vsetkych CDN hostoch (img0-3.atoselektro.cz), nie len docasny vypadok. Kedze ide o
// dva presne zname mrtve subory na strane dodavatela (nie o nasu URL), jedine bezpecne rieseni je
// tieto konkretne <img> tagy z popisu odstranit - text okolo dava zmysel aj bez obrazku.
const DEAD_IMAGE_SRCS = [
  'http://www.atoselektro.cz/images_galerieobr/0_207.jpg',
  'http://www.atoselektro.cz/images_galerieobr/0_212.jpg',
];

function stripDeadImages(html) {
  if (!html) return html;
  let out = html;
  for (const src of DEAD_IMAGE_SRCS) {
    const re = new RegExp(`<img\\b[^>]*\\bsrc="${src.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\$&')}"[^>]*/?>`, 'gi');
    out = out.replace(re, '');
  }
  return out;
}

function fixDescriptionImageUrls(html) {
  if (!html) return html;
  const withoutDead = stripDeadImages(html);
  return withoutDead.replace(/(<img\b[^>]*\bsrc=")([^"]+)(")/gi, (full, pre, url, post) => {
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

module.exports = { fixDescriptionImageUrls };
