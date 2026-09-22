# Heureka browser runbook

Use this runbook when the owner has authenticated the Heureka administration in the ChatGPT Work browser.

## Access model

The owner performs/signs in as needed. Do not ask for, copy, reveal or store the password, browser cookies, session tokens, API keys or signed download URLs.

Browser access defaults to READ / OBSERVE. Follow `../rules/heureka.md` and `../rules/safety.md` for every write.

## Day 1 read-only inventory

Record evidence and current state, not credentials.

### Shop / channel status
Check:
- active Heureka shop/profile and market
- PPC/paid mode status
- Overené zákazníkmi/certificate status relevant to bidding
- feed status and last successful processing where visible
- credit/budget warnings where visible
- material account/feed errors

### Conversion Measurement
Open the current Conversion Measurement / performance area and record:
- whether the NEW conversion measurement is enabled
- implementation/status indicator
- first/last available data dates
- whether product-level visits, costs, attributed orders and attributed revenue are populated
- whether bidded / non-bidded / free splits are available
- VAT/cost-display configuration if relevant to interpreting reports

Do NOT copy the displayed API key into notes, GitHub, Slack or reports.

If measurement is not fully implemented, document the missing state and prepare a setup plan. Do not change tracking on Day 1.

### Pairing
Inspect/download approved reports for:
- paired products
- waiting-for-pairing products
- unmatched products
- Heureka suggestions/reasons where available

Compare with repository mechanisms and build a value-weighted pairing backlog.

### Sortiment / market report
Obtain the newest Sortiment report when available and compare it with the existing repository pipeline.

Inspect signals such as:
- popularity/demand
- seller count
- our price and price position
- competitor price range
- bidding position/CPC fields where present
- products absent because they are not paired

Do not assume every report field is stable. Validate headers/schema before using it in automation.

### Bidding state
Determine the CURRENT bidding control plane:
- product-level CPC configured in Heureka admin?
- category-level CPC configured?
- CPC supplied through XML/feed?
- Simple Bidding or another autobidding tool active?
- any overlapping mechanisms?

Do not activate/deactivate or edit them during onboarding.

Before a future bidding implementation, verify current Heureka documentation for CPC precedence and supported mechanisms. Avoid running multiple competing bidding controllers.

### Performance baseline
For useful time windows (for example last complete 7/28 days where data quality allows), collect:
- visits/clicks
- cost
- attributed orders
- attributed revenue
- CVR
- cost/order
- PNO
- ROAS
- bidded vs non-bidded/free splits
- top products/categories by spend, orders, revenue and poor spend
- products with meaningful spend and no/weak conversion
- products with strong economics but weak visibility/position

Reconcile with PremiumStore operational orders for business totals. Do not force Heureka attribution to equal operational orders.

## Shadow-bidding output

Prepare recommendations only; do not write them.

For each candidate include:
- product/EAN or stable identifier
- current price and availability
- current CPC/bidding state if known
- current position if known
- visits/cost/orders/revenue
- margin/contribution evidence
- PNO/CVR and sample size
- market/popularity/seller-count context
- recommendation: INCREASE / DECREASE / HOLD / EXCLUDE / NEEDS_DATA
- proposed CPC range or experiment step when defensible
- expected mechanism
- confidence
- guardrails
- approval class

Never propose a bid solely because a product is popular or has a weak position.

## Write transition

A future Heureka write session may begin only after:
1. a named pilot/policy is approved,
2. exact scope and hard limits are documented,
3. rollback is known,
4. measurement is healthy,
5. the current bidding controller/precedence is known,
6. no conflicting autobidder is active for the same scope.

Until then, stay in OBSERVE or SHADOW BIDDING.
