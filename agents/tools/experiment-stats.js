#!/usr/bin/env node
'use strict';

// Vyhodnotenie experimentov.
//
//   node agents/tools/experiment-stats.js seo data.json
//   node agents/tools/experiment-stats.js ab data.json
//
// seo: data.json = { "riadky": [ { "url", "skupina": "TEST"|"KONTROLA", "obdobie": "pred"|"po",
//                                  "kliky", "zobrazenia", "pozicia" } ], "vyradene": ["url", ...] }
// ab:  data.json = { "A": { "navstevy", "konverzie" }, "B": { "navstevy", "konverzie" } }
//
// Prahy poistiek a hladina významnosti sa berú z agents/config.json.

const fs = require('node:fs');
const { readConfig } = require('./lib');

// Distribučná funkcia normovaného normálneho rozdelenia (Abramowitz a Stegun 7.1.26).
function normalCdf(z) {
  const t = 1 / (1 + 0.3275911 * Math.abs(z) / Math.SQRT2);
  const poly = t * (0.254829592 + t * (-0.284496736 + t * (1.421413741 + t * (-1.453152027 + t * 1.061405429))));
  const erf = 1 - poly * Math.exp(-(z * z) / 2);
  return z >= 0 ? 0.5 * (1 + erf) : 0.5 * (1 - erf);
}

function pValue(z) {
  return 2 * (1 - normalCdf(Math.abs(z)));
}

function round(value, digits = 4) {
  return value === null || !Number.isFinite(value) ? null : Number(value.toFixed(digits));
}

// Test dvoch podielov so spoločným odhadom rozptylu.
function twoProportion(x1, n1, x2, n2) {
  if (!n1 || !n2) return { z: null, p: null };
  const p1 = x1 / n1;
  const p2 = x2 / n2;
  const pooled = (x1 + x2) / (n1 + n2);
  const se = Math.sqrt(pooled * (1 - pooled) * (1 / n1 + 1 / n2));
  if (!se) return { z: null, p: null };
  const z = (p2 - p1) / se;
  return { z, p: pValue(z) };
}

function aggregate(rows) {
  const clicks = rows.reduce((s, r) => s + Number(r.kliky || 0), 0);
  const impressions = rows.reduce((s, r) => s + Number(r.zobrazenia || 0), 0);
  const weighted = rows.reduce((s, r) => s + Number(r.pozicia || 0) * Number(r.zobrazenia || 0), 0);
  return {
    stranok: new Set(rows.map((r) => r.url)).size,
    kliky: clicks,
    zobrazenia: impressions,
    ctr: impressions ? clicks / impressions : null,
    pozicia: impressions ? weighted / impressions : null,
  };
}

function evaluateSeo(input, config = readConfig()) {
  const limits = config.poistky;
  const settings = config.experimenty;
  const excluded = new Set(input.vyradene || []);
  const rows = (input.riadky || []).filter((r) => !excluded.has(r.url));
  const pick = (group, period) => rows.filter((r) => r.skupina === group && r.obdobie === period);
  const cells = {
    TEST: { pred: aggregate(pick('TEST', 'pred')), po: aggregate(pick('TEST', 'po')) },
    KONTROLA: { pred: aggregate(pick('KONTROLA', 'pred')), po: aggregate(pick('KONTROLA', 'po')) },
  };
  const notes = [];
  const all = [cells.TEST.pred, cells.TEST.po, cells.KONTROLA.pred, cells.KONTROLA.po];
  if (all.some((c) => !c.zobrazenia)) {
    return { skupiny: cells, verdikt: 'nerozhodne', poznamky: ['Niektorá skupina nemá v niektorom období žiadne zobrazenia.'] };
  }

  const changeTest = cells.TEST.po.ctr - cells.TEST.pred.ctr;
  const changeControl = cells.KONTROLA.po.ctr - cells.KONTROLA.pred.ctr;
  const did = changeTest - changeControl;
  const variance = all.reduce((s, c) => s + (c.ctr * (1 - c.ctr)) / c.zobrazenia, 0);
  const z = variance ? did / Math.sqrt(variance) : null;
  const p = z === null ? null : pValue(z);

  const positionTest = cells.TEST.po.pozicia - cells.TEST.pred.pozicia;
  const positionControl = cells.KONTROLA.po.pozicia - cells.KONTROLA.pred.pozicia;
  const impressionsTest = cells.TEST.po.zobrazenia / cells.TEST.pred.zobrazenia - 1;
  const impressionsControl = cells.KONTROLA.po.zobrazenia / cells.KONTROLA.pred.zobrazenia - 1;

  // Poistky po stránkach: pokles pozície alebo zobrazení oproti vývoju kontrolnej skupiny.
  const guardrail = [];
  const testUrls = new Set(rows.filter((r) => r.skupina === 'TEST').map((r) => r.url));
  for (const url of testUrls) {
    const before = aggregate(rows.filter((r) => r.url === url && r.obdobie === 'pred'));
    const after = aggregate(rows.filter((r) => r.url === url && r.obdobie === 'po'));
    if (!before.zobrazenia) continue;
    const reasons = [];
    if (after.zobrazenia) {
      const drop = after.pozicia - before.pozicia - positionControl;
      if (drop > limits.poklesPozicieStranky) reasons.push(`pozícia horšia o ${round(drop, 1)} oproti kontrole`);
    }
    const relative = (after.zobrazenia / before.zobrazenia - 1 - impressionsControl) * 100;
    if (relative < -limits.poklesZobrazeniStrankyPct) reasons.push(`zobrazenia ${round(relative, 0)} % oproti kontrole`);
    if (reasons.length) guardrail.push({ url, dovody: reasons });
  }

  if (cells.TEST.pred.stranok < settings.minStranokTest) notes.push(`Skupina TEST má menej ako ${settings.minStranokTest} stránok.`);
  if (cells.KONTROLA.pred.stranok < settings.minStranokKontrola) notes.push(`Skupina KONTROLA má menej ako ${settings.minStranokKontrola} stránok.`);

  const significant = p !== null && p < settings.alfa;
  const groupWorse = positionTest - positionControl > limits.poklesPozicieStranky;
  let verdict = 'nerozhodne';
  if (significant && did > 0 && !groupWorse) verdict = 'ponechat-a-rozsirit';
  if ((significant && did < 0) || groupWorse) verdict = 'vratit';
  if (verdict === 'ponechat-a-rozsirit' && notes.length) {
    verdict = 'nerozhodne';
    notes.push('Zlepšenie je významné, ale skupiny sú príliš malé na rozšírenie bez ďalšieho testu.');
  }

  return {
    skupiny: cells,
    zmenaCtrTestPb: round(changeTest * 100, 2),
    zmenaCtrKontrolaPb: round(changeControl * 100, 2),
    rozdielRozdielovPb: round(did * 100, 2),
    z: round(z, 2),
    p: round(p, 4),
    vyznamne: significant,
    zmenaPozicieTest: round(positionTest, 2),
    zmenaPozicieKontrola: round(positionControl, 2),
    zmenaZobrazeniTestPct: round(impressionsTest * 100, 1),
    zmenaZobrazeniKontrolaPct: round(impressionsControl * 100, 1),
    poistky: guardrail,
    verdikt: verdict,
    poznamky: notes,
  };
}

function evaluateAb(input, config = readConfig()) {
  const a = input.A || {};
  const b = input.B || {};
  const notes = [];
  if (!a.navstevy || !b.navstevy) return { verdikt: 'nerozhodne', poznamky: ['Chýbajú návštevy vo vetve A alebo B.'] };
  const rateA = a.konverzie / a.navstevy;
  const rateB = b.konverzie / b.navstevy;
  const { z, p } = twoProportion(a.konverzie, a.navstevy, b.konverzie, b.navstevy);
  const split = a.navstevy / (a.navstevy + b.navstevy);
  if (Math.abs(split - 0.5) > 0.03) notes.push(`Rozdelenie návštev je nerovnomerné (${round(split * 100, 1)} % vo vetve A). Skontrolovať zaraďovanie do vetiev.`);
  if (a.konverzie < 100 || b.konverzie < 100) notes.push('Menej ako 100 konverzií vo vetve, výsledok je orientačný.');
  const significant = p !== null && p < config.experimenty.alfa;
  let verdict = 'nerozhodne';
  if (significant && rateB > rateA) verdict = 'ponechat-a-rozsirit';
  if (significant && rateB < rateA) verdict = 'vratit';
  if (verdict === 'ponechat-a-rozsirit' && notes.length) verdict = 'nerozhodne';
  return {
    konverziaA: round(rateA * 100, 2),
    konverziaB: round(rateB * 100, 2),
    rozdielPb: round((rateB - rateA) * 100, 2),
    relativnaZmenaPct: rateA ? round((rateB / rateA - 1) * 100, 1) : null,
    z: round(z, 2),
    p: round(p, 4),
    vyznamne: significant,
    verdikt: verdict,
    poznamky: notes,
  };
}

if (require.main === module) {
  const [mode, file] = process.argv.slice(2);
  if (!['seo', 'ab'].includes(mode) || !file) {
    console.error('Použitie: node agents/tools/experiment-stats.js seo|ab data.json');
    process.exit(2);
  }
  const input = JSON.parse(fs.readFileSync(file, 'utf8'));
  const result = mode === 'seo' ? evaluateSeo(input) : evaluateAb(input);
  console.log(JSON.stringify(result, null, 2));
}

module.exports = { evaluateSeo, evaluateAb, twoProportion, normalCdf };
