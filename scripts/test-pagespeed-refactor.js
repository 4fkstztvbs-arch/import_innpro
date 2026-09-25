'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.join(__dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');

test('PDP desktop geometry is not gated on a post-paint JavaScript class', () => {
  const css = read('assets/ux/premiumstore-pdp-final.css');
  assert.match(css, /body\.type-detail \.p-detail-inner\s*\{\s*display: grid/);
  assert.match(css, /body\.type-detail \.p-image-wrapper,\s*body\.type-detail \.p-data-wrapper\s*\{/);
  assert.doesNotMatch(css, /body\.type-detail\.ps-pdp-v1 \.p-detail-inner\s*\{/);
});

test('PDP mutation observation is limited to the product form', () => {
  const js = read('assets/ux/premiumstore-pdp-final.js');
  assert.match(js, /observe\(productForm,\s*\{\s*childList: true,\s*subtree: true/);
  assert.doesNotMatch(js, /observe\(\s*document\.documentElement/);
});

test('CRO initializes as soon as the footer script can access the DOM', () => {
  const js = read('assets/ux/premiumstore-cro.js');
  assert.match(js, /if \(document\.readyState === 'loading'\)[\s\S]*?addEventListener\('DOMContentLoaded', run, \{ once: true \}\)[\s\S]*?else\s*\{\s*run\(\);/);
  assert.match(js, /observe\(checkoutSidebar, \{ childList: true, subtree: true \}\)/);
  assert.doesNotMatch(js, /observe\(document\.body, \{ childList: true, subtree: true \}\)/);
});

test('category filter observer is constrained to the native filter container', () => {
  const js = read('assets/ux/category-filters.js');
  assert.match(js, /var observedRoot = document\.getElementById\('filters-wrapper'\)/);
  assert.doesNotMatch(js, /var observedRoot = document\.body/);
  assert.ok(fs.existsSync(path.join(root, 'assets/ux/category-filters.js')));
  assert.ok(fs.existsSync(path.join(root, 'assets/ux/category-filters-native.css')));
});

test('font imports are documented for manual HEAD setup and not assumed deployed', () => {
  const css = read('assets/ux/premiumstore-cro.css') + read('assets/ux/premiumstore-main.css');
  const snippet = read('assets/ux/pagespeed-font-head-snippet.md');
  assert.doesNotMatch(css, /@import\s+url\(['"]https:\/\/fonts\.googleapis\.com/);
  assert.match(snippet, /not deployed by this branch/i);
  assert.match(snippet, /fonts\.gstatic\.com/);
  assert.match(snippet, /Plus\+Jakarta\+Sans/);
  assert.match(snippet, /Quicksand/);
});
