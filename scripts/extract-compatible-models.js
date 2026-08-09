// Extracts "compatible device model" lists from ATOS remote-control product descriptions and
// turns them into filterable Shoptet parameters (multiple <TEXT_PROPERTY> entries sharing the
// same <NAME>, one <VALUE> per model — the standard Shoptet pattern for a multi-select category
// filter, e.g. "Kompatibilný model TV").
//
// ATOS writes these as a fixed HTML pattern inside <DESCRIPTION>:
//   <p><ins><strong>Ovladač je kompatibilní s těmito modely televizorů:</strong></ins></p>
//   <p>MODEL1, MODEL2, MODEL3, ...</p>
// The device-type phrase before the colon varies (televizorů / DVB-T přijímačů / satelitních
// přijímačů / DVB-T2 přijímačů / Blu-ray přehrávačů / dálkových ovladačů <brand> / bare "modely:").
// Descriptions mix literal UTF-8 and HTML-entity-encoded text inconsistently, so decode entities
// first and match against the decoded text.

const he = require('he');

const HEADER_RE = /kompatibiln[ýí]\S*(?:\s+i)?\s+s\s+(?:těmito\s+|vět\S+\s+)?model\S*\s*([^:<]{0,60}):\s*<\/strong>\s*<\/ins>\s*<\/p>\s*<p>\s*([^<]{2,4000})<\/p>/gi;

function paramSuffixForDeviceType(rawText) {
  const t = rawText.trim().toLowerCase();
  if (/ovlada/.test(t)) return null; // "...modely dálkových ovladačů Philips:" — different meaning, not a device model
  if (!t) return 'zariadenia';
  if (/televizor/.test(t)) return 'TV';
  if (/dvb-t2/.test(t)) return 'DVB-T2 prijímača';
  if (/dvb-t/.test(t)) return 'DVB-T prijímača';
  if (/satelitn/.test(t)) return 'satelitného prijímača';
  if (/blu-?ray/.test(t)) return 'Blu-ray prehrávača';
  if (/p[řr]ij[íi]mač/.test(t)) return 'prijímača';
  return null; // unrecognized device type — skip rather than guess wrong
}

function extractCompatibleModels(descriptionHtml) {
  if (!descriptionHtml) return [];
  const decoded = he.decode(descriptionHtml);
  const out = [];
  let m;
  HEADER_RE.lastIndex = 0;
  while ((m = HEADER_RE.exec(decoded))) {
    const suffix = paramSuffixForDeviceType(m[1]);
    if (!suffix) continue;
    const paramName = `Kompatibilný model ${suffix}`;
    const models = m[2]
      .replace(/&nbsp;/gi, ' ')
      .split(',')
      .map((s) => s.replace(/\s+/g, ' ').trim())
      .filter((s) => s && s.length <= 40 && /[a-zA-Z0-9]/.test(s));
    for (const model of models) out.push(`${paramName};${model}`);
  }
  return [...new Set(out)];
}

module.exports = { extractCompatibleModels };
