#!/usr/bin/env node
'use strict';

// Kontrola súborov agentského systému. Spúšťa sa pred každým commitom do agents/
// a v GitHub Actions. Chyba = návratový kód 1, upozornenie commit neblokuje.
//
//   node agents/tools/check.js [priečinok agents]

const fs = require('node:fs');
const path = require('node:path');
const { AGENTS_DIR, parseFrontmatter, listFiles, isDate } = require('./lib');

const TASK_STATES = ['navrh', 'pripravene', 'v-praci', 'meria-sa', 'caka-na-martina', 'hotovo', 'zamietnute'];
const EXPERIMENT_STATES = ['pripraveny', 'bezi', 'vyhodnoteny', 'zruseny'];
const EXPERIMENT_TYPES = ['seo-skupiny', 'ab-web', 'pred-po'];
const VERDICTS = ['ponechat-a-rozsirit', 'vratit', 'nerozhodne'];
const APPROVAL_STATES = ['caka', 'schvalene', 'zamietnute', 'vykonane'];
const SYSTEM_STATES = ['pripraveny', 'bezi', 'pozastaveny'];
const CHANGE_SYSTEMS = ['shoptet', 'sablona', 'feed', 'heureka', 'kampane'];
const APPROVAL_REQUIRED_SYSTEMS = ['heureka', 'kampane'];

function normalize(value) {
  return String(value).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]/g, '');
}

function check(dir = AGENTS_DIR) {
  const errors = [];
  const warnings = [];
  const rel = (file) => path.relative(dir, file);
  const err = (file, msg) => errors.push(`${rel(file)}: ${msg}`);
  const warn = (file, msg) => warnings.push(`${rel(file)}: ${msg}`);

  // config.json
  const configFile = path.join(dir, 'config.json');
  let config = null;
  try {
    config = JSON.parse(fs.readFileSync(configFile, 'utf8'));
  } catch (e) {
    err(configFile, `nedá sa načítať (${e.message})`);
  }
  const roles = (config && Array.isArray(config.roly) && config.roly) || [];
  const forbidden = ((config && config.zakazanePolia) || []).map(normalize);
  if (config) {
    if (!SYSTEM_STATES.includes(config.stav)) err(configFile, `stav musí byť jeden z: ${SYSTEM_STATES.join(', ')}`);
    if (!roles.length) err(configFile, 'chýba zoznam roly');
    if (!forbidden.length) err(configFile, 'chýba zoznam zakazanePolia');
  }
  const author = (value) => roles.includes(value) || value === 'kostra' || value === 'martin';

  function header(file, prefix) {
    const parsed = parseFrontmatter(fs.readFileSync(file, 'utf8'));
    if (!parsed) {
      err(file, 'chýba hlavička medzi ---');
      return null;
    }
    const base = path.basename(file, '.md');
    if (prefix && !base.startsWith(prefix)) err(file, `názov súboru musí začínať ${prefix}`);
    if (prefix && parsed.data.id !== base) err(file, `id (${parsed.data.id}) sa nezhoduje s názvom súboru`);
    return parsed.data;
  }

  // backlog
  const taskIds = new Set();
  for (const file of listFiles(path.join(dir, 'backlog'), '.md')) {
    const d = header(file, 'T-');
    if (!d) continue;
    taskIds.add(d.id);
    if (!d.nazov) err(file, 'chýba nazov');
    if (!roles.includes(d.rola)) err(file, `neznáma rola: ${d.rola}`);
    if (!TASK_STATES.includes(d.stav)) err(file, `neznámy stav: ${d.stav}`);
    if (!['1', '2', '3'].includes(String(d.priorita))) err(file, 'priorita musí byť 1, 2 alebo 3');
    if (!isDate(d.vytvorene)) err(file, 'vytvorene musí byť dátum RRRR-MM-DD');
    if (!author(d.vytvoril)) err(file, `neznámy autor: ${d.vytvoril}`);
    if (d.rola && !path.basename(file).includes(`-${d.rola}-`)) warn(file, 'názov súboru neobsahuje rolu vlastníka');
  }
  for (const file of listFiles(path.join(dir, 'backlog'), '.md')) {
    const parsed = parseFrontmatter(fs.readFileSync(file, 'utf8'));
    const deps = (parsed && parsed.data['zavisi-od']) || [];
    for (const dep of Array.isArray(deps) ? deps : [deps]) {
      if (dep && !taskIds.has(dep)) err(file, `zavisi-od odkazuje na neexistujúcu úlohu ${dep}`);
    }
  }

  // experimenty
  const experimentIds = new Set();
  for (const file of listFiles(path.join(dir, 'experiments'), '.md')) {
    const d = header(file, 'E-');
    if (!d) continue;
    experimentIds.add(d.id);
    if (!EXPERIMENT_TYPES.includes(d.typ)) err(file, `neznámy typ: ${d.typ}`);
    if (!EXPERIMENT_STATES.includes(d.stav)) err(file, `neznámy stav: ${d.stav}`);
    if (!roles.includes(d.rola)) err(file, `neznáma rola: ${d.rola}`);
    if (!d.metrika) err(file, 'chýba metrika');
    if (d.stav !== 'pripraveny' && !isDate(d.start)) err(file, 'start musí byť dátum RRRR-MM-DD');
    if (d.stav !== 'pripraveny' && !isDate(d.vyhodnotenie)) err(file, 'vyhodnotenie musí byť dátum RRRR-MM-DD');
    if (isDate(d.start) && isDate(d.vyhodnotenie) && config && config.experimenty) {
      const days = (Date.parse(d.vyhodnotenie) - Date.parse(d.start)) / 86400000;
      if (days < config.experimenty.minDni) err(file, `experiment je kratší ako ${config.experimenty.minDni} dní`);
    }
    if (d.stav === 'vyhodnoteny' && !VERDICTS.includes(d.verdikt)) err(file, `vyhodnotený experiment potrebuje verdikt: ${VERDICTS.join(', ')}`);
    if (d.typ !== 'pred-po' && d.stav !== 'pripraveny' && d.typ === 'seo-skupiny') {
      const groups = path.join(path.dirname(file), `${d.id}-skupiny.csv`);
      if (!fs.existsSync(groups)) err(file, `chýba zoznam skupín ${path.basename(groups)}`);
    }
  }

  // schválenia
  const approvals = new Map();
  for (const file of listFiles(path.join(dir, 'approvals'), '.md')) {
    const d = header(file, 'S-');
    if (!d) continue;
    approvals.set(d.id, d);
    if (!APPROVAL_STATES.includes(d.stav)) err(file, `neznámy stav: ${d.stav}`);
    if (!d.typ) err(file, 'chýba typ');
    if (!roles.includes(d.rola)) err(file, `neznáma rola: ${d.rola}`);
    if (!isDate(d.vytvorene)) err(file, 'vytvorene musí byť dátum RRRR-MM-DD');
    if (['schvalene', 'zamietnute', 'vykonane'].includes(d.stav) && !isDate(d.rozhodnute)) {
      err(file, 'rozhodnutý návrh potrebuje dátum v poli rozhodnute');
    }
  }

  // handoffy
  for (const file of listFiles(path.join(dir, 'handoffs'), '.md')) {
    const m = /^(\d{4}-\d{2}-\d{2})-(.+)\.md$/.exec(path.basename(file));
    if (!m || !isDate(m[1]) || !roles.includes(m[2])) {
      err(file, 'názov musí byť RRRR-MM-DD-<rola>.md');
      continue;
    }
    const parsed = parseFrontmatter(fs.readFileSync(file, 'utf8'));
    if (!parsed) err(file, 'chýba hlavička medzi ---');
    else if (parsed.data.rola !== m[2] || parsed.data.datum !== m[1]) err(file, 'hlavička sa nezhoduje s názvom súboru');
  }

  // denník zmien
  for (const file of listFiles(path.join(dir, 'changelog'), '.json')) {
    let entry;
    try {
      entry = JSON.parse(fs.readFileSync(file, 'utf8'));
    } catch (e) {
      err(file, `neplatný JSON (${e.message})`);
      continue;
    }
    const base = path.basename(file, '.json');
    if (!base.startsWith('Z-')) err(file, 'názov súboru musí začínať Z-');
    if (entry.id !== base) err(file, `id (${entry.id}) sa nezhoduje s názvom súboru`);
    if (!isDate(entry.datum)) err(file, 'datum musí byť RRRR-MM-DD');
    if (!roles.includes(entry.rola)) err(file, `neznáma rola: ${entry.rola}`);
    if (!CHANGE_SYSTEMS.includes(entry.system)) err(file, `neznámy system: ${entry.system}`);
    if (!entry.zhrnutie) err(file, 'chýba zhrnutie');
    if (entry.uloha && !taskIds.has(entry.uloha)) warn(file, `úloha ${entry.uloha} nie je v backlogu`);
    if (entry.experiment && !experimentIds.has(entry.experiment)) err(file, `experiment ${entry.experiment} neexistuje`);
    if (APPROVAL_REQUIRED_SYSTEMS.includes(entry.system)) {
      const approval = approvals.get(entry.schvalenie);
      if (!approval) err(file, `zmena v systéme ${entry.system} potrebuje schvalenie s ID existujúceho návrhu`);
      else if (!['schvalene', 'vykonane'].includes(approval.stav)) err(file, `návrh ${entry.schvalenie} nie je schválený (stav ${approval.stav})`);
    }
    if (!Array.isArray(entry.polozky) || entry.polozky.length === 0) {
      err(file, 'chýbajú polozky');
      continue;
    }
    if (entry.polozky.length > 50) err(file, 'dávka má viac ako 50 položiek, rozdeliť');
    entry.polozky.forEach((item, i) => {
      const where = `položka ${i + 1} (${item.kod || item.url || '?'})`;
      if (!item.typ) err(file, `${where}: chýba typ`);
      if (!item.kod && !item.guid && !item.url) err(file, `${where}: chýba kod, guid alebo url`);
      const fields = item.polia || {};
      if (Object.keys(fields).length === 0) err(file, `${where}: chýbajú polia`);
      for (const [name, change] of Object.entries(fields)) {
        const norm = normalize(name);
        const hit = forbidden.find((f) => norm.includes(f));
        if (hit) err(file, `${where}: zakázané pole "${name}" (ceny, viditeľnosť a dostupnosť sa nemenia)`);
        const hasBefore = change && ('pred' in change || 'predSubor' in change);
        const hasAfter = change && ('po' in change || 'poSubor' in change);
        if (!hasBefore || !hasAfter) err(file, `${where}: pole "${name}" potrebuje pred aj po`);
        for (const key of ['predSubor', 'poSubor']) {
          if (change && change[key] && !fs.existsSync(path.join(path.dirname(file), change[key]))) {
            err(file, `${where}: súbor ${change[key]} neexistuje`);
          }
        }
      }
    });
    if (!entry.overenie) warn(file, 'chýba overenie po zápise');
    else if (entry.overenie.ok === false && !entry.navrat) warn(file, 'overenie zlyhalo a zmena nie je vrátená');
  }

  // citlivé údaje (repozitár je verejný)
  const secretPatterns = [
    [/hash=[0-9a-f]{16,}/i, 'exportná URL s hashom'],
    [/(api[_-]?key|password|passwd|heslo|secret|token)\s*[:=]\s*["']?[A-Za-z0-9_./+=-]{16,}/i, 'možný prístupový údaj'],
  ];
  const moneyPattern = /(trzb|obrat|marz|naklad|rozpoc|objednav)[^\n|]{0,60}?\d[\d\s.,]*\s?(€|eur\b)/i;
  const textFiles = [...walk(dir, ['.md', '.json', '.csv'])].filter((f) => !f.includes(`${path.sep}tools${path.sep}`));
  for (const file of textFiles) {
    const text = fs.readFileSync(file, 'utf8');
    for (const [pattern, label] of secretPatterns) {
      if (pattern.test(text)) err(file, `${label} nepatrí do verejného repozitára`);
    }
    const plain = text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    if (moneyPattern.test(plain)) warn(file, 'vyzerá to na sumu tržieb, nákladov alebo objednávok. Tie patria do súkromného priečinka');
  }

  return { errors, warnings };
}

function* walk(dir, exts) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full, exts);
    else if (exts.some((ext) => entry.name.endsWith(ext))) yield full;
  }
}

if (require.main === module) {
  const dir = process.argv[2] ? path.resolve(process.argv[2]) : AGENTS_DIR;
  const { errors, warnings } = check(dir);
  for (const w of warnings) console.log(`UPOZORNENIE  ${w}`);
  for (const e of errors) console.log(`CHYBA        ${e}`);
  console.log(`\nKontrola agents/: ${errors.length} chýb, ${warnings.length} upozornení.`);
  process.exit(errors.length ? 1 : 0);
}

module.exports = { check };
