# TV category filter experience

This pilot is scoped to pages whose body has Shoptet's `in-televizory` class. It preserves Shoptet filter inputs, form submission, query parameters, sorting and result handling; the added layer changes presentation and adds shortcuts to existing filter options.

## Files

- `tv-category-filters.css`
- `tv-category-filters.js`

## Shoptet HTML code additions

Append this stylesheet reference to the existing HTML head code:

```html
<link rel="stylesheet" href="https://4fkstztvbs-arch.github.io/import_innpro/assets/ux/tv-category-filters.css?v=1">
```

Append this script reference to the existing HTML footer code:

```html
<script defer src="https://4fkstztvbs-arch.github.io/import_innpro/assets/ux/tv-category-filters.js?v=1"></script>
```

## Rollback

Remove only the two references above from Shoptet's head/footer code. The exact pre-change values are in `outputs/tv-category-ux-concept/backup-20261001/shoptet-html-codes-before.json` in the deployment checkout used for this pilot. The deployment backup also includes a live category HTML snapshot.

## Scope and QA

No products, parameter assignments, category configuration, or import settings are changed. Verify desktop, mobile including a 320 px viewport, one applied filter combination, clear/remove-filter actions, and an unaffected non-TV category after deployment.
