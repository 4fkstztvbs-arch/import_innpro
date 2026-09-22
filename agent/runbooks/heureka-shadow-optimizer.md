# Heureka Shadow Optimizer runbook

## Purpose

This is the first executable stage of the Heureka Profit Optimizer. It is deliberately **read-only**.

It combines:
- Heureka per-product CPC performance CSV
- current supplier `output/*.xml` economics (`CODE`, `EAN`, `PRICE_VAT`, `PURCHASE_PRICE`)
- optional Shoptet orders XML for referer/status checks and single-product historical purchase-price validation
- the existing CPC exclusion registry

It produces one canonical shadow state per Heureka product:
- `BID`
- `BASE`
- `WATCH`
- `EXCLUDE`

It does **not** edit supplier feeds, `HEUREKA_CPC`, `HEUREKA_HIDDEN`, Heureka admin or any production setting.

## Historical purchase-price finding

The supplier outputs are versioned frequently enough in Git history to reconstruct historical purchase-price snapshots for the post-migration period if a later backtest needs them.

Observed commit history for 2026-08-10 through 2026-09-22:
- ATOS: 189 output revisions
- BASYS: 198
- InnPro: 247
- K-B: 252
- MONACOR: 99
- Penta: 127 (available from 2026-08-24)
- Solight: 153
- WiiM: 11

The shadow optimizer intentionally uses **current economics for forward decisions**. Historical single-product Shoptet order purchase prices are only a validation/fallback input. A later backtest may add Git-history reconstruction without changing the decision contract.

## Safety rules

The script fails closed:
- missing/ambiguous product economics => `WATCH`
- missing purchase price => `WATCH`
- too little evidence => `WATCH`
- a Shoptet Heureka-referred order conflicting with zero Heureka-attributed orders blocks automatic `EXCLUDE`
- the script rejects `--apply`, `--publish` and `--writeFeed`

The initial thresholds in `scripts/heureka-shadow-policy.json` are conservative placeholders for shadow analysis. They are not production bidding authority.

## Run

Example:

```bash
npm run heureka-shadow -- \
  --heureka=/private/path/report-2026-08-10-to-2026-09-22.csv \
  --orders=/private/path/orders.xml \
  --from=2026-08-10 \
  --to=2026-09-22 \
  --out-json=reports/heureka-shadow.json \
  --out-md=reports/heureka-shadow.md
```

The Heureka file must be the per-product PPC/CPC export containing at least:
`date`, `shop_item_id`, paid/free visits, costs without VAT, paid/free orders and revenue fields.

## Economics

Forward gross margin per sale is estimated as:

`PRICE_VAT / (1 + VAT) - PURCHASE_PRICE`

Purchase price priority:
1. current supplier output `PURCHASE_PRICE`
2. median unit `PURCHASE_PRICE` from active single-product Shoptet orders

The optimizer then evaluates paid Heureka performance against gross margin, not revenue-only PNO.

The initial BID target allows Heureka acquisition cost to consume at most 30% of product gross margin. The recommended CPC is also step-limited to 20% versus observed average paid CPC.

## EXCLUDE guardrail

A product is not excluded merely because it had zero orders in one week.

The initial shadow policy requires all of:
- 0 paid orders
- at least 40 paid visits
- paid visits on at least 7 distinct days
- accumulated paid cost at least 2x the target CPA derived from gross margin

Before a production policy is promoted, these thresholds must be calibrated from real PremiumStore shadow results.

## Next stage

After several shadow runs:
1. measure join/purchase-price coverage
2. inspect BID and EXCLUDE false positives
3. calibrate thresholds by category/margin band where useful
4. choose a small named pilot
5. only then build the feed writer for `HEUREKA_CPC` and channel-only exclusion
