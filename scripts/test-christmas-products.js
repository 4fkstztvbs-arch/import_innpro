'use strict';const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');const {apply,field}=require('./apply-christmas-products');const root=path.resolve(__dirname,'..'),config=JSON.parse(fs.readFileSync(path.join(root,'data/christmas-products.json'),'utf8'));
// Stable fixtures exercise every reviewed identity independently of supplier stock.
const suppliers=[...new Set(config.products.map(r=>r.supplier))];
const activeItem=r=>'<SHOPITEM><CODE>'+r.code+'</CODE><EAN>'+r.ean+'</EAN><NAME>Supplier name</NAME><CATEGORIES><CATEGORY>Original category</CATEGORY></CATEGORIES><SHORT_DESCRIPTION>Short</SHORT_DESCRIPTION><DESCRIPTION>Description</DESCRIPTION><PRICE_VAT>12.30</PRICE_VAT><STOCK><AMOUNT>3</AMOUNT></STOCK><VISIBILITY>visible</VISIBILITY></SHOPITEM>';
const unavailableItem=r=>'<SHOPITEM><CODE>'+r.code+'</CODE><EAN>'+r.ean+'</EAN><AVAILABILITY>Vypredané</AVAILABILITY><VISIBILITY>detailOnly</VISIBILITY></SHOPITEM>';
const unrelated='<SHOPITEM><CODE>UNRELATED</CODE><NAME>Unrelated</NAME></SHOPITEM>';
const files=suppliers.map(name=>({name,text:'<SHOP>'+config.products.filter(r=>r.supplier===name).map(activeItem).join('')+unrelated+'</SHOP>'}));
test('247 audited identities; idempotent; unrelated fields and products remain unchanged',()=>{const a=apply(files,config);assert.equal(a.report.matched,247);assert.equal(a.report.missing.length,0);assert.deepEqual(apply(a.files,config).files,a.files);const allowed=new Set(config.products.map(r=>r.supplier+'\0'+r.code.toUpperCase()));for(let i=0;i<files.length;i++){const before=files[i].text.match(/<SHOPITEM\b[^>]*>[\s\S]*?<\/SHOPITEM>/g),after=a.files[i].text.match(/<SHOPITEM\b[^>]*>[\s\S]*?<\/SHOPITEM>/g);assert.equal(before.length,after.length);for(let j=0;j<before.length;j++){const key=files[i].name+'\0'+field(before[j],'CODE').toUpperCase();if(!allowed.has(key)){assert.equal(before[j],after[j]);continue;}const strip=s=>s.replace(/<(NAME|SEO_TITLE|CATEGORIES|SHORT_DESCRIPTION|DESCRIPTION|INFORMATION_PARAMETERS)>[\s\S]*?<\/\1>/g,'').replace(/>\s+</g,'><').replace(/\s+/g,' ');assert.equal(strip(before[j]),strip(after[j]));assert.equal((field(after[j],'SHORT_DESCRIPTION').match(/ps-christmas:start/g)||[]).length,1);}}});
test('EAN mismatch fails before any files are written',()=>{let cfg=structuredClone(config);cfg.products[0].ean='wrong';assert.throws(()=>apply(files,cfg),/EAN changed/)});
test('analytics uses latest consent and sends no event without permission',()=>{const vm=require('node:vm'),src=fs.readFileSync(path.join(root,'assets/ux/christmas-lighting-v1.js'),'utf8');for(const [consents,expected] of [[[],0],[[{cookie_consent:{analytics:'denied'}}],0],[[{cookie_consent:{analytics:'granted'}}],1],[[{cookie_consent:{analytics:'granted'}},{cookie_consent:{analytics:'denied'}}],0]]){let click,calls=[];const document={readyState:'complete',body:{classList:{contains:()=>false}},addEventListener:(n,cb)=>{if(n==='click')click=cb;}};const window={dataLayer:consents,gtag:(...args)=>calls.push(args)};vm.runInNewContext(src,{window,document});click({target:{closest:()=>({closest:()=>({getAttribute:()=> 'retaze'}),getAttribute:()=> 'group',href:'https://www.premiumstore.sk/vianocne-osvetlenie/?pv39=18693'})}});assert.equal(calls.length,expected);if(expected)assert.equal(calls[0][1],'christmas_navigation');}});

test('Slovak names are unique and preserve product identity; verified 1V110-M length is 5 m',()=>{assert.equal(new Set(config.products.map(r=>r.nameSk)).size,247);for(const r of config.products){assert.ok(r.nameSk.length<=135);assert.ok(r.seoTitleSk.length<=100);assert.ok(!/[řěů]|vánoč|venkovní|vnitřní|bílá|svítící|sněhulák/.test(r.nameSk));}assert.match(config.products.find(r=>r.shopCode==='SOL_1V110-M').nameSk,/, 5 m,/);const result=apply(files,config);for(const f of result.files)for(const item of f.text.match(/<SHOPITEM\b[^>]*>[\s\S]*?<\/SHOPITEM>/g)){const rule=config.products.find(r=>r.supplier===f.name&&r.code.toUpperCase()===field(item,'CODE').toUpperCase());if(rule){assert.equal(field(item,'NAME'),rule.nameSk);assert.equal(field(item,'SEO_TITLE'),rule.seoTitleSk);}}});

for (const supplier of ['atos', 'basys', 'innpro', 'kb', 'monacor', 'penta', 'solight', 'wiim']) {
  test(`${supplier}: unavailable update stays byte-identical; returning product is enriched`, () => {
    const rule = { ...config.products[0], supplier, shopCode: `${supplier}_REGRESSION` };
    const cfg = { ...config, products: [rule] };
    const item = unavailableItem(rule);
    const input = [{ name: supplier, text: `<SHOP>${item}</SHOP>` }];
    const result = apply(input, cfg);
    assert.deepEqual(result.files, input);
    assert.deepEqual(result.report.skippedUnavailable, [rule.shopCode]);
    assert.equal(result.report.matched, 0);
    assert.equal(result.report.changed, 0);
    assert.deepEqual(result.report.missing, []);
    assert.deepEqual(apply(result.files, cfg).files, input);
    const returned = apply([{ name: supplier, text: `<SHOP>${activeItem(rule)}</SHOP>` }], cfg);
    assert.equal(returned.report.matched, 1);
    assert.deepEqual(returned.report.skippedUnavailable, []);
    assert.equal(field(returned.files[0].text, 'NAME'), rule.nameSk);
    assert.ok(returned.files[0].text.includes(config.category));
  });
}

test('Solight 1V294 update cannot block active products in other suppliers', () => {
  const solight = config.products.find(r => r.supplier === 'solight' && r.code === '1V294');
  const input = files.map(f => ({ ...f, text: f.text.replace(activeItem(solight), unavailableItem(solight)) }));
  const result = apply(input, config);
  assert.equal(result.report.matched, 246);
  assert.deepEqual(result.report.skippedUnavailable, ['SOL_1V294']);
  assert.deepEqual(result.report.missing, []);
  assert.ok(result.files.find(f => f.name === 'solight').text.includes(unavailableItem(solight)));
  assert.deepEqual(apply(result.files, config).files, result.files);
});

test('absent seasonal product is reported without blocking present products', () => {
  const rule = config.products[0];
  const input = files.map(f => ({ ...f, text: f.text.replace(activeItem(rule), '') }));
  const result = apply(input, config);
  assert.equal(result.report.matched, 246);
  assert.deepEqual(result.report.missing, [rule.shopCode]);
});

test('minimal update retains cleared sale flags and prices without adding content', () => {
  const rule = config.products[0];
  const item = unavailableItem(rule).replace('</SHOPITEM>', '<FLAGS><ACTION>0</ACTION><CUSTOM1>0</CUSTOM1></FLAGS><ACTION_PRICE>12.30</ACTION_PRICE></SHOPITEM>');
  const input = [{ name: rule.supplier, text: `<SHOP>${item}</SHOP>` }];
  assert.deepEqual(apply(input, { ...config, products: [rule] }).files, input);
});

test('EAN mismatch and duplicate identity still reject unavailable updates', () => {
  const rule = config.products[0], cfg = { ...config, products: [rule] };
  assert.throws(() => apply([{ name: rule.supplier, text: unavailableItem({ ...rule, ean: 'wrong' }) }], cfg), /EAN changed/);
  for (const text of [unavailableItem(rule).repeat(2), unavailableItem(rule) + activeItem(rule)]) {
    assert.throws(() => apply([{ name: rule.supplier, text }], cfg), /Duplicate source item/);
  }
});

test('a missing category is still an error for ordinary or malformed products', () => {
  const rule = config.products[0], cfg = { ...config, products: [rule] };
  const brokenActive = activeItem(rule).replace(/<CATEGORIES>[\s\S]*?<\/CATEGORIES>/, '');
  for (const text of [brokenActive, brokenActive.replace('visible', 'detailOnly'),
    unavailableItem(rule).replace('detailOnly', 'visible'), unavailableItem(rule).replace('Vypredané', 'Skladom')]) {
    assert.throws(() => apply([{ name: rule.supplier, text }], cfg), /No categories/);
  }
});

test('existing DEFAULT_CATEGORY survives repeated cross-supplier processing', () => {
  const rule = config.products[0], cfg = { ...config, products: [rule] };
  const defaultTag = '<DEFAULT_CATEGORY><![CDATA[Original category]]></DEFAULT_CATEGORY>';
  const item = activeItem(rule).replace('</CATEGORIES>', defaultTag + '</CATEGORIES>');
  const result = apply([{ name: rule.supplier, text: item }], cfg);
  const output = result.files[0].text;
  assert.equal(field(output, 'DEFAULT_CATEGORY'), 'Original category');
  assert.ok(output.includes(defaultTag));
  assert.ok(output.indexOf('<CATEGORY>') < output.indexOf('<DEFAULT_CATEGORY>'));
  assert.deepEqual(apply(result.files, cfg).files, result.files);
});

test('current published feeds preserve identities, commerce fields and unavailable rows', () => {
  const input = suppliers.map(name => ({ name, text: fs.readFileSync(path.join(root, 'output', name + '.xml'), 'utf8') }));
  const result = apply(input, config);
  assert.equal(result.report.matched + result.report.skippedUnavailable.length + result.report.missing.length, config.products.length);
  assert.deepEqual(apply(result.files, config).files, result.files);
  const editable = /<(NAME|SEO_TITLE|CATEGORIES|SHORT_DESCRIPTION|DESCRIPTION|INFORMATION_PARAMETERS)>[\s\S]*?<\/\1>/g;
  const rules = new Map(config.products.map(r => [r.supplier + '\0' + r.code.toUpperCase(), r]));
  for (let i = 0; i < input.length; i++) {
    const before = input[i].text.match(/<SHOPITEM\b[^>]*>[\s\S]*?<\/SHOPITEM>/g);
    const after = result.files[i].text.match(/<SHOPITEM\b[^>]*>[\s\S]*?<\/SHOPITEM>/g);
    assert.equal(before.length, after.length);
    for (let j = 0; j < before.length; j++) {
      const rule = rules.get(input[i].name + '\0' + field(before[j], 'CODE').toUpperCase());
      if (!rule || result.report.skippedUnavailable.includes(rule.shopCode)) {
        assert.equal(after[j], before[j]);
      } else {
        assert.equal(after[j].replace(editable, '').replace(/\s+/g, ' '), before[j].replace(editable, '').replace(/\s+/g, ' '));
        assert.equal(field(after[j], 'DEFAULT_CATEGORY'), field(before[j], 'DEFAULT_CATEGORY'));
        assert.equal(field(after[j], 'NAME'), rule.nameSk);
      }
    }
  }
});
