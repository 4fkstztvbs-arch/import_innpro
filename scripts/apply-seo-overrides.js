'use strict';
const fs = require('fs');
const path = require('path');
const { loadSeoOverrides, applyFeedOverrides, SUPPLIERS } = require('./seo-overrides');
function run({ root = path.join(__dirname, '..'), registryPath, write = false, strict = false } = {}) {
  const config = loadSeoOverrides(registryPath);
  const report = { experimentId: config.experimentId, status: config.status, write, feeds: [] };
  if (config.status !== 'ACTIVE') {
    report.note = 'Inactive: no output files read or written.';
    return report;
  }
  const pending = [];
  // Validate every relevant feed before writing any file.
  for (const supplier of SUPPLIERS) {
    if (!config.products.some(x => x.supplier === supplier)) continue;
    const file = path.join(root, 'output', `${supplier}.xml`);
    if (!fs.existsSync(file)) throw new Error(`Missing supplier OUT: ${file}`);
    const before = fs.readFileSync(file, 'utf8');
    const result = applyFeedOverrides(before, supplier, config, { strict });
    report.feeds.push(result.report);
    if (result.xml !== before) pending.push({ file, xml: result.xml });
  }
  if (write) for (const { file, xml } of pending) {
    const temp = `${file}.seo-${process.pid}.tmp`;
    try { fs.writeFileSync(temp, xml); fs.renameSync(temp, file); }
    finally { if (fs.existsSync(temp)) fs.unlinkSync(temp); }
  }
  return report;
}
if (require.main === module) {
  try {
    const args = process.argv.slice(2);
    if (args.some(x => !['--write', '--strict'].includes(x))) throw new Error('Usage: node scripts/apply-seo-overrides.js [--write] [--strict]');
    const report = run({ write: args.includes('--write'), strict: args.includes('--strict') });
    console.log(JSON.stringify(report, null, 2));
    for (const feed of report.feeds) if (feed.issues.length) console.warn(`::warning::CTR experiment drift ${feed.supplier}: ${JSON.stringify(feed.issues)}`);
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
module.exports = { run };
