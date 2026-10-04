const test = require('node:test');
const assert = require('node:assert');
const { extractMonacorParams } = require('./monacor-params');

const DESC = '<div><ul><li>x</li></ul></div>\n<br /><br />Intended use: microphone<br />Length: 100 m<br />Colour: black<br />Material: OFC<br />Weight: 6.6 kg<br />Packaging: reel<br />Admiss. ambient temp.: 0-40 °C<p><a href="x">Stiahnuť dokument (PDF)</a></p>';

test('extrahuje a prekladá parametre', () => {
  const p = extractMonacorParams(DESC, 'Monacor');
  assert.deepStrictEqual(p.map((x) => x.name), ['Značka', 'Dĺžka', 'Farba', 'Materiál', 'Hmotnosť', 'Prevádzková teplota']);
  assert.strictEqual(p.find((x) => x.name === 'Farba').value, 'čierna');
  assert.strictEqual(p.find((x) => x.name === 'Prevádzková teplota').value, '0-40 °C');
});

test('bez špecifikácie vráti aspoň značku', () => {
  assert.deepStrictEqual(extractMonacorParams('<div>x</div>', 'Monacor'), [{ name: 'Značka', value: 'Monacor' }]);
  assert.deepStrictEqual(extractMonacorParams('', ''), []);
});
