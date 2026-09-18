'use strict';

// Final category pass, after visibility filters and before add-category-links.js.
// Reads all supplier feeds together. No dependencies, no network, no shop writes.
const fs = require('node:fs');
const path = require('node:path');
const SEP = ' > ';
const under = (a, b) => a === b || a.startsWith(b + SEP);
const parent = a => a.includes(SEP) ? a.slice(0, a.lastIndexOf(SEP)) : '';
const unique = a => [...new Set(a)];
const leaves = a => unique(a).filter(c => !a.some(d => d !== c && under(d, c)));
const ancestors = a => a.split(SEP).slice(0, -1).map((_, i) => a.split(SEP).slice(0, i + 1).join(SEP));
function decode(s) {
  return s.replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'").replace(/&amp;/g, '&');
}
function field(xml, tag) {
  const m = xml.match(new RegExp('<' + tag + '>([\\s\\S]*?)</' + tag + '>'));
  if (!m) return '';
  return m[1].startsWith('<![CDATA[') ? m[1].slice(9, -3).trim() : decode(m[1]).trim();
}
function categories(xml) {
  const block = xml.match(/<CATEGORIES>[\s\S]*?<\/CATEGORIES>/)?.[0] || '';
  return [...block.matchAll(/<CATEGORY>([\s\S]*?)<\/CATEGORY>/g)].map(m => field(m[0], 'CATEGORY'));
}
function orderedTargets(before, targets) {
  // Keep the original default branch. A newly chosen child takes its parent's place.
  const rank = c => {
    const exact = before.findIndex(d => under(c, d) || under(d, c));
    if (exact >= 0) return exact;
    const root = before.findIndex(d => d.split(SEP)[0] === c.split(SEP)[0]);
    return root >= 0 ? root + 0.25 : before.length;
  };
  return leaves(targets).sort((a, b) => rank(a) - rank(b));
}
function applyRule(before, rule) {
  const removed = rule.current.filter(c => !rule.proposed.includes(c));
  const added = rule.proposed.filter(c => !rule.current.includes(c));
  // Preserve current assignments outside the reviewed branches.
  const rest = before.filter(c => !removed.some(d => under(c, d)));
  return orderedTargets(before, [...rest, ...added]);
}
function processFeeds(files, config) {
  if (config.minimum !== 8) throw new Error('Approved minimum must be 8');
  const known = new Set(config.tree);
  const rules = new Map();
  for (const r of config.products) {
    const key = r.supplier + '\0' + r.code;
    if (rules.has(key)) throw new Error('Duplicate reviewed supplier/code: ' + r.code);
    if (![...r.current, ...r.proposed].every(c => typeof c === 'string' && c.length)) throw new Error('Invalid rule');
    if (!r.proposed.every(c => known.has(c))) throw new Error('Rule target outside tree: ' + r.code);
    rules.set(key, r);
  }
  const records = [];
  const seenReviewed = new Set();
  const report = {minimum: 8, totalProducts: 0, matchedRules: 0, changedProducts: 0, rejected: [], categories: []};
  for (const file of files) {
    const matches = [...file.text.matchAll(/<SHOPITEM\b[^>]*>[\s\S]*?<\/SHOPITEM>/g)];
    if (!matches.length || !/<\/SHOP>\s*$/.test(file.text)) throw new Error('Empty or incomplete feed: ' + file.name);
    for (const m of matches) {
      const xml = m[0], code = field(xml, 'CODE'), ean = field(xml, 'EAN');
      const key = file.name + '\0' + code;
      const original = categories(xml), before = leaves(original);
      let target = before;
      const rule = rules.get(key);
      if (rule) {
        if (seenReviewed.has(key)) throw new Error('Ambiguous reviewed product code: ' + file.name + '/' + code);
        seenReviewed.add(key);
        if (rule.ean !== ean) throw new Error('Reviewed EAN changed: ' + file.name + '/' + code);
        if (!before.some(c => [...rule.current, ...rule.proposed].some(d => under(c, d) || under(d, c)))) {
          throw new Error('Reviewed product moved outside its approved scope: ' + file.name + '/' + code);
        }
        target = applyRule(before, rule);
        report.matchedRules++;
      }
      target = target.map(c => {
        for (const [old, to] of Object.entries(config.retired)) if (under(c, old)) return to;
        return c;
      });
      if (!target.every(c => known.has(c))) throw new Error('Unknown category after final pass: ' + file.name + '/' + code);
      records.push({file, start: m.index, xml, code, ean, original, before, target: leaves(target), visible: field(xml, 'VISIBILITY') === 'visible'});
    }
  }
  report.totalProducts = records.length;
  // EAN deduplication is across suppliers; missing EAN falls back to supplier+code.
  const counts = new Map(config.newCategories.map(c => [c, new Set()]));
  for (const p of records) if (p.visible) {
    for (const [c, ids] of counts) if (p.target.some(t => under(t, c))) ids.add(p.ean ? 'ean:' + p.ean : p.file.name + ':' + p.code);
  }
  const disabled = new Set();
  for (const [c, ids] of counts) {
    if (ids.size < 8) disabled.add(c);
    report.categories.push({path: c, visibleUnique: ids.size, active: ids.size >= 8, parent: parent(c)});
  }
  for (const p of records) {
    p.target = orderedTargets(p.before, p.target.map(c => {
      while (c && [...disabled].some(d => under(c, d))) c = parent(c);
      return c;
    }));
    const changed = JSON.stringify(p.before) !== JSON.stringify(p.target);
    if (!changed) {p.replacement = p.xml; continue;}
    report.changedProducts++;
    // Change only CATEGORIES; external link updater owns DESCRIPTION.
    const all = unique([...p.target, ...p.target.flatMap(ancestors)]);
    const block = '<CATEGORIES>' + all.map(c => '<CATEGORY><![CDATA[' + c.replace(/]]>/g, ']]]]><![CDATA[>') + ']]></CATEGORY>').join('') + '</CATEGORIES>';
    p.replacement = p.xml.replace(/<CATEGORIES>[\s\S]*?<\/CATEGORIES>/, block);
    if (p.replacement === p.xml) throw new Error('Missing category block: ' + p.code);
  }
  const transformed = files.map(file => {
    let pos = 0, parts = [];
    for (const p of records.filter(p => p.file === file)) {
      parts.push(file.text.slice(pos, p.start), p.replacement);
      pos = p.start + p.xml.length;
    }
    parts.push(file.text.slice(pos));
    return {...file, text: parts.join('')};
  });
  return {files: transformed, report};
}
function main() {
  const args = process.argv.slice(2);
  const get = (name, fallback) => args.find(a => a.startsWith(name + '='))?.slice(name.length + 1) || fallback;
  const root = path.resolve(get('--root', path.join(__dirname, '..')));
  const config = JSON.parse(fs.readFileSync(path.join(root, 'data/approved-category-migration.json'), 'utf8'));
  // Upload category pages first. Merely publishing this code must not alter live feeds.
  if (config.enabled !== true && !args.includes('--preview-staged')) {
    console.log('Approved category migration is staged; awaiting the Shoptet category upload. No feed changes.');
    return;
  }
  if (config.enabled !== true && args.includes('--write')) {
    throw new Error('Staged preview cannot write feeds; activate only after the category upload.');
  }
  if (config.enabled === true) {
    const activeTree = JSON.parse(fs.readFileSync(path.join(root, 'data/known-categories.json'), 'utf8'));
    const activeUrls = JSON.parse(fs.readFileSync(path.join(root, 'data/category-urls.json'), 'utf8'));
    if (JSON.stringify([...activeTree].sort()) !== JSON.stringify([...config.tree].sort()) ||
        config.newCategories.some(c => !activeUrls[c])) {
      throw new Error('Activate the prepared known-categories and category-urls together with the migration flag.');
    }
  }
  const out = path.join(root, 'output');
  const files = config.suppliers.map(name => ({name, file: path.join(out, name + '.xml'), text: fs.readFileSync(path.join(out, name + '.xml'), 'utf8')}));
  const result = processFeeds(files, config);
  // Finish all validation before writing any XML.
  if (args.includes('--write')) for (const f of result.files) {
    if (f.text === files.find(x => x.name === f.name).text) continue;
    fs.writeFileSync(f.file + '.categories.tmp', f.text);
    fs.renameSync(f.file + '.categories.tmp', f.file);
  }
  const reportPath = path.resolve(get('--report', path.join(root, 'reports/approved-category-status.json')));
  fs.mkdirSync(path.dirname(reportPath), {recursive: true});
  fs.writeFileSync(reportPath, JSON.stringify(result.report, null, 2) + '\n');
  console.log(JSON.stringify({mode: args.includes('--write') ? 'write' : 'dry-run', ...result.report, categories: undefined}, null, 2));
  for (const c of result.report.categories.filter(c => !c.active)) {
    console.log('::warning::Category below 8: ' + c.path + ' (' + c.visibleUnique + '). Products stay in parent; review shop page visibility.');
  }
}
module.exports = {processFeeds, applyRule, orderedTargets, categories, leaves, ancestors};
if (require.main === module) main();
