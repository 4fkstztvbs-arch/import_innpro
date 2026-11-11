#!/usr/bin/env node
'use strict';

// Prehľad stavu systému pre hlavného agenta (výstup v Markdowne, nič nezapisuje).
//
//   node agents/tools/status.js [RRRR-MM-DD]

const fs = require('node:fs');
const path = require('node:path');
const { AGENTS_DIR, readConfig, parseFrontmatter, listFiles, today, addDays } = require('./lib');

function status(dir = AGENTS_DIR, date = today()) {
  const config = readConfig(dir);
  const read = (sub, ext) => listFiles(path.join(dir, sub), ext);
  const head = (file) => (parseFrontmatter(fs.readFileSync(file, 'utf8')) || { data: {} }).data;

  const tasks = read('backlog', '.md').map(head);
  const byRole = {};
  for (const t of tasks) {
    byRole[t.rola] = byRole[t.rola] || {};
    byRole[t.rola][t.stav] = (byRole[t.rola][t.stav] || 0) + 1;
  }

  const experiments = read('experiments', '.md').map(head);
  const due = experiments.filter((e) => e.stav === 'bezi' && e.vyhodnotenie && e.vyhodnotenie <= date);
  const running = experiments.filter((e) => e.stav === 'bezi');

  const approvals = read('approvals', '.md').map(head);
  const waiting = approvals.filter((a) => a.stav === 'caka');
  const approved = approvals.filter((a) => a.stav === 'schvalene');

  const yesterday = addDays(date, -1);
  const changes = read('changelog', '.json').map((f) => JSON.parse(fs.readFileSync(f, 'utf8')));
  const recent = changes.filter((c) => c.datum >= yesterday);
  const items = recent.reduce((s, c) => s + (c.polozky || []).length, 0);
  const failed = changes.filter((c) => c.overenie && c.overenie.ok === false && !c.navrat);
  const overwritten = changes.filter((c) => c.trvanlivost && c.trvanlivost.ok === false && c.datum >= addDays(date, -7));

  const handoffs = new Set(read('handoffs', '.md').map((f) => path.basename(f, '.md')));
  // Posledný deň pred dnešným, v ktorý mala rola podľa rozvrhu bežať (config.beh[rola].dni, 0 = nedeľa).
  const lastRunDay = (role) => {
    const days = (config.beh && config.beh[role] && config.beh[role].dni) || [0, 1, 2, 3, 4, 5, 6];
    for (let back = 1; back <= 7; back += 1) {
      const day = addDays(date, -back);
      if (days.includes(new Date(`${day}T12:00:00Z`).getUTCDay())) return day;
    }
    return yesterday;
  };
  const missing = config.roly.filter((role) => {
    if (role === 'hlavny-agent') return false;
    const expected = lastRunDay(role);
    return ![...handoffs].some((name) => name.endsWith(`-${role}`) && name.slice(0, 10) >= expected);
  });

  const lines = [];
  lines.push(`# Stav systému ${date}`, '', `Stav: **${config.stav}** (od ${config.stavZmeneny})`, '');
  lines.push('## Backlog', '', '| Rola | návrh | pripravené | v práci | meria sa | čaká na Martina | hotovo |', '|---|---|---|---|---|---|---|');
  for (const role of config.roly) {
    const c = byRole[role] || {};
    lines.push(`| ${role} | ${c.navrh || 0} | ${c.pripravene || 0} | ${c['v-praci'] || 0} | ${c['meria-sa'] || 0} | ${c['caka-na-martina'] || 0} | ${c.hotovo || 0} |`);
  }
  lines.push('', '## Zmeny', '', `- Od ${yesterday}: ${recent.length} dávok, ${items} položiek.`);
  lines.push(`- Zlyhané overenia bez návratu: ${failed.length ? failed.map((c) => c.id).join(', ') : 'žiadne'}.`);
  lines.push(`- Prepísané importom za 7 dní: ${overwritten.length ? overwritten.map((c) => c.id).join(', ') : 'žiadne'}.`);
  lines.push('', '## Experimenty', '', `- Bežia: ${running.length ? running.map((e) => `${e.id} (do ${e.vyhodnotenie})`).join(', ') : 'žiadne'}.`);
  lines.push(`- Na vyhodnotenie: ${due.length ? due.map((e) => e.id).join(', ') : 'žiadne'}.`);
  lines.push('', '## Schválenia', '', `- Čakajú na Martina: ${waiting.length ? waiting.map((a) => a.id).join(', ') : 'žiadne'}.`);
  lines.push(`- Schválené a nevykonané: ${approved.length ? approved.map((a) => a.id).join(', ') : 'žiadne'}.`);
  lines.push('', '## Roly bez handoffu za posledný beh', '', missing.length ? missing.map((r) => `- ${r}`).join('\n') : '- žiadne');
  return lines.join('\n');
}

if (require.main === module) {
  console.log(status(AGENTS_DIR, process.argv[2] || today()));
}

module.exports = { status };
