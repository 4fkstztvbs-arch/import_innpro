# PremiumStore PageSpeed refactor: deployment checklist

The branch does not change Shoptet settings or production. Use these steps only after reviewing and merging the draft PR, then confirming GitHub Pages serves each updated asset with HTTP 200. Do not switch Shoptet URLs while Pages still serves the old `main` files.

## 1. Prepare fonts in Shoptet HEAD

Add the contents of `pagespeed-font-head-snippet.md` once in the Shoptet HEAD field. The two CSS files no longer contain Google Fonts `@import` rules, so the HEAD links must be present before publishing those CSS versions. Confirm Quicksand in navigation and Plus Jakarta Sans in page text on desktop and mobile.

## 2. Replace existing asset references

Keep one copy of each stylesheet/script and preserve the current order. Update the existing references to:

```html
<link rel="stylesheet" href="https://4fkstztvbs-arch.github.io/import_innpro/assets/ux/premiumstore-cro.css?v=73">
<link rel="stylesheet" href="https://4fkstztvbs-arch.github.io/import_innpro/assets/ux/premiumstore-main.css?v=20260925">
<link rel="stylesheet" href="https://4fkstztvbs-arch.github.io/import_innpro/assets/ux/premiumstore-pdp-final.css?v=2">
```

```html
<script src="https://4fkstztvbs-arch.github.io/import_innpro/assets/ux/premiumstore-cro.js?v=26"></script>
<script src="https://4fkstztvbs-arch.github.io/import_innpro/assets/ux/premiumstore-pdp-final.js?v=2"></script>
```

Keep CSS in HEAD and both scripts in the footer, in the order shown. Do not edit or duplicate the category-filter references during this change; the deployed category currently renders Shoptet's native form and the legacy custom files are not loaded there.

## 3. Verify after propagation

Check homepage, one category with a native brand filter, one product with gallery and add-to-cart, cart, and checkout through the delivery/payment step. Check desktop and a 390 px mobile viewport for page-level horizontal overflow, menu/search, product cards, product gallery, variant controls, sticky purchase bar, and checkout continuation. Stop before submitting an order. Read browser console errors and run a fresh desktop/mobile PageSpeed report after the assets have propagated.

## 4. Rollback

Restore the previous Shoptet asset references: CRO CSS `?v=72`, CRO JS `?v=25`, `premiumstore-main.css` with its previous unversioned URL, and PDP final CSS/JS `?v=1`. If the font HEAD snippet was added solely for this release, it may be removed after the old CSS URLs are restored.
