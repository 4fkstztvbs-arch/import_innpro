'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const { parseFrontmatter, addDays } = require('./lib');
const { check } = require('./check');
const { evaluateSeo, evaluateAb, normalCdf } = require('./experiment-stats');
const { status } = require('./status');

const config = {
  stav: 'bezi',
  stavZmeneny: '2026-11-10',
  roly: ['hlavny-agent', 'seo', 'obsah', 'ux-cro', 'reklama', 'meranie'],
  poistky: { poklesPozicieStranky: 2, poklesZobrazeniStrankyPct: 40 },
  experimenty: { minDni: 14, minStranokTest: 2, minStranokKontrola: 2, alfa: 0.05 },
  zakazanePolia: ['price', 'cena', 'visibility', 'availability', 'stock'],
};
config.beh = Object.fromEntries(config.roly.map((r) => [r, { model: 'claude-sonnet-5-5', effort: 'medium', cron: '10 9 * * *', dni: [0, 1, 2, 3, 4, 5, 6] }]));

function sandbox(files) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'agents-'));
  fs.writeFileSync(path.join(dir, 'config.json'), JSON.stringify(config));
  for (const [name, content] of Object.entries(files)) {
    fs.mkdirSync(path.dirname(path.join(dir, name)), { recursive: true });
    fs.writeFileSync(path.join(dir, name), typeof content === 'string' ? content : JSON.stringify(content));
  }
  return dir;
}

const task = (id, extra = '') => `---\nid: ${id}\nnazov: Test\nrola: seo\nstav: navrh\npriorita: 2\nvytvoril: seo\nvytvorene: 2026-11-10\nzavisi-od: []\n${extra}---\n\ntext\n`;
const change = (fields, extra = {}) => ({
  id: 'Z-20261110-seo-test', datum: '2026-11-10', rola: 'seo', system: 'shoptet', zhrnutie: 'test',
  polozky: [{ typ: 'produkt', kod: 'X1', polia: fields }], overenie: { kedy: '2026-11-10', ok: true }, ...extra,
});

test('hlavička súboru sa načíta vrátane zoznamov a prázdnych hodnôt', () => {
  const { data, body } = parseFrontmatter('---\nid: T-1\nzavisi-od: [T-2, T-3]\nexperiment:\n---\nobsah');
  assert.deepEqual(data, { id: 'T-1', 'zavisi-od': ['T-2', 'T-3'], experiment: null });
  assert.equal(body, 'obsah');
  assert.equal(addDays('2026-11-01', -1), '2026-10-31');
});

test('správne súbory prejdú kontrolou', () => {
  const dir = sandbox({
    'backlog/T-20261110-seo-test.md': task('T-20261110-seo-test'),
    'changelog/2026-11/Z-20261110-seo-test.json': change({ metaTitle: { pred: 'a', po: 'b' } }),
  });
  assert.deepEqual(check(dir).errors, []);
});

test('zmena ceny, viditeľnosti alebo dostupnosti je chyba', () => {
  for (const field of ['price', 'priceWithVat', 'visibility', 'availabilityId', 'stockAmount', 'Cena']) {
    const dir = sandbox({ 'changelog/2026-11/Z-20261110-seo-test.json': change({ [field]: { pred: 1, po: 2 } }) });
    assert.ok(check(dir).errors.some((e) => e.includes('zakázané pole')), field);
  }
});

test('zmena bez pôvodnej hodnoty je chyba', () => {
  const dir = sandbox({ 'changelog/2026-11/Z-20261110-seo-test.json': change({ metaTitle: { po: 'b' } }) });
  assert.ok(check(dir).errors.some((e) => e.includes('pred aj po')));
});

test('zmena reklamy bez schváleného návrhu je chyba', () => {
  const approval = (state) => `---\nid: S-20261110-test\nnazov: Test\ntyp: heureka-skrytie\nrola: reklama\nstav: ${state}\nvytvorene: 2026-11-10\nrozhodnute: ${state === 'caka' ? '' : '2026-11-11'}\n---\n`;
  const entry = change({ heurekaHidden: { pred: false, po: true } }, { system: 'heureka', rola: 'reklama', schvalenie: 'S-20261110-test' });
  const waiting = sandbox({ 'approvals/S-20261110-test.md': approval('caka'), 'changelog/2026-11/Z-20261110-seo-test.json': entry });
  assert.ok(check(waiting).errors.some((e) => e.includes('nie je schválený')));
  const approved = sandbox({ 'approvals/S-20261110-test.md': approval('schvalene'), 'changelog/2026-11/Z-20261110-seo-test.json': entry });
  assert.deepEqual(check(approved).errors, []);
  const none = sandbox({ 'changelog/2026-11/Z-20261110-seo-test.json': { ...entry, schvalenie: null } });
  assert.ok(check(none).errors.some((e) => e.includes('potrebuje schvalenie')));
});

test('exportná URL s hashom a zlá úloha sú chyby', () => {
  const dir = sandbox({
    'backlog/T-20261110-seo-test.md': task('T-20261110-seo-ine'),
    'handoffs/2026-11-10-seo.md': '---\ndatum: 2026-11-10\nrola: seo\n---\nhttps://example.sk/export/products.csv?hash=4fff5b61c85b322d2c181a9cf396f394',
  });
  const { errors } = check(dir);
  assert.ok(errors.some((e) => e.includes('nezhoduje s názvom súboru')));
  assert.ok(errors.some((e) => e.includes('exportná URL s hashom')));
});

test('suma tržieb v repozitári vyvolá upozornenie', () => {
  const dir = sandbox({ 'handoffs/2026-11-10-seo.md': '---\ndatum: 2026-11-10\nrola: seo\n---\nTržby z organiky boli 1 234 € za týždeň.' });
  assert.equal(check(dir).warnings.length, 1);
});

function seoRows(testAfterClicks) {
  const rows = [];
  for (const [group, urls] of [['TEST', ['t1', 't2']], ['KONTROLA', ['k1', 'k2']]]) {
    for (const url of urls) {
      rows.push({ url, skupina: group, obdobie: 'pred', kliky: 150, zobrazenia: 5000, pozicia: 6 });
      rows.push({ url, skupina: group, obdobie: 'po', kliky: group === 'TEST' ? testAfterClicks : 150, zobrazenia: 5000, pozicia: 6 });
    }
  }
  return rows;
}

test('SEO experiment: zlepšenie, zhoršenie a nerozhodný výsledok', () => {
  const better = evaluateSeo({ riadky: seoRows(260) }, config);
  assert.equal(better.verdikt, 'ponechat-a-rozsirit');
  assert.equal(better.rozdielRozdielovPb, 2.2);
  assert.equal(evaluateSeo({ riadky: seoRows(60) }, config).verdikt, 'vratit');
  assert.equal(evaluateSeo({ riadky: seoRows(155) }, config).verdikt, 'nerozhodne');
});

test('SEO experiment: poistka zachytí prepad stránky a vyradené stránky sa nepočítajú', () => {
  const rows = seoRows(150).map((r) => (r.url === 't1' && r.obdobie === 'po' ? { ...r, pozicia: 9.5, zobrazenia: 2000 } : r));
  const result = evaluateSeo({ riadky: rows }, config);
  assert.equal(result.poistky.length, 1);
  assert.equal(result.poistky[0].url, 't1');
  assert.equal(result.poistky[0].dovody.length, 2);
  assert.equal(evaluateSeo({ riadky: rows, vyradene: ['t1'] }, config).poistky.length, 0);
});

test('A/B test: významný rozdiel a malá vzorka', () => {
  assert.ok(Math.abs(normalCdf(1.96) - 0.975) < 0.001);
  const win = evaluateAb({ A: { navstevy: 10000, konverzie: 400 }, B: { navstevy: 10000, konverzie: 480 } }, config);
  assert.equal(win.verdikt, 'ponechat-a-rozsirit');
  assert.equal(win.rozdielPb, 0.8);
  assert.equal(evaluateAb({ A: { navstevy: 10000, konverzie: 480 }, B: { navstevy: 10000, konverzie: 400 } }, config).verdikt, 'vratit');
  assert.equal(evaluateAb({ A: { navstevy: 500, konverzie: 20 }, B: { navstevy: 500, konverzie: 40 } }, config).verdikt, 'nerozhodne');
});

test('prehľad stavu ukáže roly bez handoffu a experimenty na vyhodnotenie', () => {
  const dir = sandbox({
    'backlog/T-20261110-seo-test.md': task('T-20261110-seo-test'),
    'handoffs/2026-11-11-seo.md': '---\ndatum: 2026-11-11\nrola: seo\n---\n',
    'experiments/E-20261101-test.md': '---\nid: E-20261101-test\ntyp: pred-po\nrola: seo\nstav: bezi\nstart: 2026-11-01\nvyhodnotenie: 2026-11-12\nmetrika: CTR\n---\n',
  });
  const out = status(dir, '2026-11-12');
  assert.match(out, /Na vyhodnotenie: E-20261101-test/);
  assert.match(out, /- obsah/);
  assert.doesNotMatch(out, /\n- seo/);
  assert.match(out, /\| seo \| 1 \| 0 /);
});

test('prehľad stavu rešpektuje dni behu roly', () => {
  const dir = sandbox({ 'handoffs/2026-11-09-reklama.md': '---\ndatum: 2026-11-09\nrola: reklama\n---\n' });
  const file = path.join(dir, 'config.json');
  fs.writeFileSync(file, JSON.stringify({ ...config, beh: { reklama: { dni: [1, 4] } } }));
  // 2026-11-11 je streda: posledný plánovaný beh reklamy bol v pondelok 9. 11., handoff existuje.
  assert.doesNotMatch(status(dir, '2026-11-11'), /\n- reklama/);
  // V piatok 13. 11. už chýba handoff za štvrtok 12. 11.
  assert.match(status(dir, '2026-11-13'), /\n- reklama/);
});
