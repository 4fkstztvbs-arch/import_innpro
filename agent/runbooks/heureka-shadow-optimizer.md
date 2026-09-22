# Heureka Shadow Optimizer runbook

## Purpose

This is the first executable stage of the Heureka Profit Optimizer. It is deliberately **read-only** and is intended to be usable immediately after the PremiumStore agent finishes its initial system onboarding and understands the e-shop data flows.

It combines:
- Heureka per-product CPC performance CSV
- current supplier `output/*.xml` economics (`CODE`, `EAN`, `PRICE_VAT`, `PURCHASE_PRICE`)
- optional but strongly recommended Shoptet orders XML for referer/status checks and single-product historical purchase-price validation
- the existing CPC exclusion registry

It produces one canonical shadow state per Heureka product:
- `BID`
- `BASE`
- `WATCH`
- `EXCLUDE`

It does **not** edit supplier feeds, `HEUREKA_CPC`, `HEUREKA_HIDDEN`, Heureka admin or any production setting.

## When the agent should use it

The agent should run the optimizer as soon as all of these onboarding gates are true:

1. the whole `agent/` governance set has been read
2. the supplier -> transform -> output -> Shoptet flow is understood
3. current Heureka pricing/category/hide/CPC mechanisms are understood
4. PremiumStore orders are confirmed as operational source of truth
5. Heureka is confirmed as attribution/performance data, not accounting truth
6. current supplier outputs are healthy enough to use for economics
7. the current Heureka PPC/CPC report is available
8. current order export is available or explicitly marked unavailable
9. there is no unresolved tracking/feed/import incident that makes product-level decisions unsafe

If any gate is uncertain, the agent must stay in OBSERVE and document the blocker instead of forcing a shadow classification.

## Mandatory operating mode after onboarding

After the gates above pass, the agent should:

1. run the shadow optimizer
2. inspect data-quality coverage and attribution conflicts
3. include the result in the Day 1 / weekly Heureka report
4. keep the optimizer read-only until a separately approved pilot
5. repeat the shadow run on fresh data so recommendations can be compared with later outcomes

The optimizer is therefore a **standard post-onboarding diagnostic**, not an optional experiment.

## 30d / 7d multi-window model

The default policy uses two windows simultaneously:

- **30 days — decision window**: establishes enough evidence for economics, conversion and exclusion logic
- **7 days — freshness window**: checks whether the recent situation still supports the long-window conclusion

The final state is reconciled conservatively.

### BID

A product may be final `BID` only when:
- the 30d window qualifies it for BID
- the 7d window also qualifies it for BID
- both windows have valid economics and no attribution/data-quality blocker

When both windows recommend CPC, use the **lower** recommendation.

This prevents a strong older period from increasing CPC while the most recent week is already weakening.

### EXCLUDE

A new product may be final `EXCLUDE` only when:
- the 30d window independently qualifies it for EXCLUDE
- the 7d window contains no paid or operational Heureka conversion
- the 7d window has enough recent paid traffic to confirm the finding

A recent Shoptet Heureka-referred order blocks exclusion even if Heureka reports zero attributed orders.

Existing exclusions stay fail-closed unless there is a concrete re-entry signal; they are never automatically re-enabled from weak evidence.

### Short-term disagreement

Examples:
- 30d BID + 7d BASE/WATCH -> final BASE/WATCH, no CPC increase
- 30d BASE + 7d BID -> final BASE, wait for long-window confirmation
- 30d EXCLUDE + recent order -> final WATCH
- 7d deterioration without 30d EXCLUDE -> WATCH, not immediate exclusion

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

The forward-looking optimizer intentionally uses **current economics**. Historical single-product Shoptet order purchase prices are a validation/fallback input. Historical Git reconstruction is for backtesting and drift analysis, not a reason to replace current supplier economics.

## Safety rules

The script fails closed:
- missing/ambiguous product economics => `WATCH`
- missing purchase price => `WATCH`
- too little evidence => `WATCH`
- Shoptet/Heureka attribution conflict blocks automatic `EXCLUDE`
- disagreement between 30d and 7d blocks aggressive BID/EXCLUDE transitions
- existing exclusions stay fail-closed until re-entry evidence
- the script rejects `--apply`, `--publish` and `--writeFeed`

The thresholds in `scripts/heureka-shadow-policy.json` are shadow/pilot parameters, not production bidding authority.

## Required input

Heureka file:
- per-product PPC/CPC export
- must contain the fields validated by `scripts/heureka-shadow-optimizer.js`
- ideally include at least the last 30 days; more history is fine because the optimizer automatically selects the current windows

Orders file:
- the custom Shoptet XML should contain at least order date/status, referer, `PURCHASE_PRICE`, and product `CODE`/amount
- keep the raw file private; do not commit it to this public repository

Supplier economics:
- current `output/*.xml` files
- the optimizer reads them locally and does not modify them

## Run

The end date defaults to the latest date in the Heureka report. The optimizer then automatically calculates the 30d and 7d windows.

Example:

```bash
npm run heureka-shadow -- \
  --heureka=/private/path/report-latest.csv \
  --orders=/private/path/orders.xml \
  --out-json=/private/path/heureka-shadow.json \
  --out-md=/private/path/heureka-shadow.md
```

Optional explicit end date:

```bash
npm run heureka-shadow -- \
  --heureka=/private/path/report-latest.csv \
  --orders=/private/path/orders.xml \
  --to=2026-09-22 \
  --out-json=/private/path/heureka-shadow.json \
  --out-md=/private/path/heureka-shadow.md
```

Do not write private order-level output to this public repository. Use a private runtime path or approved private reporting surface.

## Economics

Forward gross margin per sale is estimated as:

`PRICE_VAT / (1 + VAT) - PURCHASE_PRICE`

Purchase price priority:
1. current supplier output `PURCHASE_PRICE`
2. median unit `PURCHASE_PRICE` from active single-product Shoptet orders

The optimizer evaluates paid Heureka performance against gross margin, not revenue-only PNO.

The initial BID target allows Heureka acquisition cost to consume at most 30% of product gross margin. CPC recommendations are step-limited, and the final multi-window CPC is the lower of the valid 30d/7d recommendations.

## Initial evidence thresholds

30d decision window starts conservatively with:
- BID: at least 15 paid visits, 2 paid orders, 4 distinct paid days
- EXCLUDE: at least 40 paid visits, 7 distinct paid days, zero paid orders and meaningful spend relative to margin

7d freshness window starts with lower evidence thresholds:
- BID confirmation: at least 8 paid visits, 1 paid order, 2 distinct paid days
- EXCLUDE confirmation: no recent conversion plus at least 8 paid visits

These are **not permanent constants**. The agent should propose recalibration from real PremiumStore shadow/pilot evidence, but may not widen its own production authority.

## First-run acceptance checklist

A first shadow run is considered usable only if the report contains:
- explicit 30d and 7d date ranges
- product counts for BID / BASE / WATCH / EXCLUDE
- economics coverage and purchase-price coverage
- top BID candidates with both-window evidence
- top non-converting spend candidates
- attribution conflicts
- existing exclusions and re-entry-review signals
- no production write
- no raw customer PII

If economics coverage is unexpectedly low, do not compensate by loosening thresholds. Diagnose supplier `CODE` / EAN / output joins first.

## What the agent should report

The routine Heureka section should state:
- 30d and 7d channel PNO / orders / spend / revenue
- whether recent performance is improving or deteriorating
- final BID / BASE / WATCH / EXCLUDE counts
- products where 30d and 7d disagree
- products blocked by attribution conflict
- products spending without conversion
- products with profitable bidding headroom
- existing exclusions with possible re-entry evidence
- data-quality blockers
- **production changes executed: 0** while in SHADOW

## Next stage

After enough repeated shadow runs:
1. measure join/purchase-price coverage
2. inspect BID and EXCLUDE false positives
3. compare recommendations with subsequent real outcomes
4. calibrate thresholds by category/margin band only where evidence supports it
5. choose a small named pilot
6. only then build/activate the feed writer for `HEUREKA_CPC` and channel-only exclusion

A successful shadow model is a prerequisite for the pilot; it is not permission to skip the pilot.
