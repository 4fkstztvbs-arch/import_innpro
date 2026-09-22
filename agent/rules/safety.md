# Safety and deployment rules

These rules are fail-closed. If a change cannot be confidently classified, treat it as APPROVAL REQUIRED.

## Production-effect definition

A change has production effect if it can alter customer-visible behaviour, commercial data, imports/exports, analytics, infrastructure, or persistent business data. In this repository that includes:
- merge or direct push to `main` when it changes production-connected code/data
- changes to `output/*.xml` consumed by Shoptet
- supplier transforms, mappings, dedupe/category/visibility logic
- Heureka pricing policy, targets, markups, margins, minimum costs or price overrides
- Heureka bidding/CPC, budgets, pairing/visibility configuration or production channel settings
- `.github/workflows/**` that can write, deploy or regenerate production-connected outputs
- Cloudflare Worker code/configuration
- Omega stock-card state or APIs
- Shoptet, GTM, GA4, Search Console, Heureka, DNS or other connected production configuration
- triggering a workflow or external API that performs any of the above

Do not assume that "only a file change" is non-production.

## Change classes

### AUTO
Allowed without approval when read-only or non-production:
- analytics and audits
- anomaly detection
- SEO/feed diagnostics
- technical QA
- report generation
- creation of branches
- creation of draft pull requests
- creation of test plans
- dry runs that cannot write to production-connected systems

### CONTROLLED AUTO
Allowed only when explicitly scoped, reversible, measurable, and within an already approved operating area:
- CSS/UX changes
- internal linking
- product copy
- small localization batches
- A/B variants

CONTROLLED AUTO means the agent may implement, test and prepare a PR. Until separately promoted for a specific change class, it does not grant autonomous merge/deploy authority.

Domain-specific exception: after a separate governance promotion, the Heureka optimization change class defined in `heureka.md` may perform autonomous production CPC/bid, channel-only feed inclusion/exclusion and spend-allocation writes inside its hard verified policy envelope. This exception does not extend to prices, identifiers, pairing/category structure, credentials, measurement configuration or other protected systems.

Requirements:
1. baseline exists
2. hypothesis exists
3. rollback exists and is practical
4. guardrail metrics exist
5. production validation is defined
6. affected scope/blast radius is known
7. no protected field or system is changed
8. change is recorded in the change ledger

### APPROVAL REQUIRED
Never change, merge, deploy or trigger without explicit human approval when the operation affects:
- product/category URLs or redirects
- prices, pricing policy, Heureka price targets/overrides, supplier markup, minimum margin/minimum cost
- Heureka bidding/CPC, budgets, production pairing/visibility settings or other paid-channel write actions unless operating inside an explicitly approved pilot or separately promoted verified CONTROLLED AUTONOMY policy under `heureka.md`
- checkout/payment logic
- tax/VAT
- shipping/delivery configuration
- SKU/EAN/product/supplier identifiers
- availability, product visibility, deletion or bulk hide/unhide rules
- production import architecture or destructive import semantics
- category mapping or bulk category movement with material blast radius
- database schema or persistent accounting/stock state
- robots.txt, sitemap generation rules or global canonical logic
- destructive bulk actions
- `.github/workflows/**` with write/deploy capability
- Cloudflare Worker code/configuration
- GitHub repository settings, Actions permissions, branch/ruleset protection, secrets or environments
- DNS/domain/SSL configuration
- GTM containers, analytics collection logic, consent/cookie configuration or conversion definitions
- credentials, API tokens, OAuth scopes or permissions for any connected system

## Governance self-protection
The agent MUST NOT autonomously:
- edit or weaken `agent/**` governance rules
- edit/disable safety validators, required tests, branch protection, CODEOWNERS or required status checks
- broaden its own permissions or credentials
- create a bypass around an approval gate
- merge its own governance/security changes

Governance/security changes may be prepared in a draft PR but require human review and approval.

## Git and deployment workflow
Never make production-effect edits directly on `main`.

Preferred flow:
issue/hypothesis -> branch -> implementation -> tests -> visual/mobile QA -> analytics validation -> draft PR -> required checks -> human approval where required -> merge/deploy -> production validation -> monitoring

A merge to `main` must be treated as a potential deployment because repository workflows and published files are connected to production.

The agent must not approve its own PR, dismiss required reviews, disable required checks, force-push protected branches, or use admin/bypass privileges to get a change through.

## Fail-closed rules
Stop and request review when:
- the expected diff cannot be explained
- a validator/check fails
- source data is incomplete, malformed or unexpectedly different
- identifiers drift
- product count changes unexpectedly
- price/availability/category/URL fields change outside the intended scope
- tracking needed to measure the change is broken
- rollback cannot be demonstrated
- a secret/credential may have been exposed
- production state differs materially from the assumed baseline

Do not "fix forward" by stacking speculative changes on top of an unexplained regression.

## Regression policy
After every meaningful production change verify the relevant surfaces:
- homepage
- category
- product
- search
- cart
- checkout
- mobile
- desktop
- analytics events
- relevant feeds/imports

If a clear regression is detected, prefer rollback over stacking additional fixes.

## Current credential exception
Known legacy credential exposures are being handled separately. Their temporary existence does not grant permission to copy, expose, rotate, change, log, or redistribute them. All new work must follow the security rules in `security.md`.
