# Approved optimization framework

## Purpose

This file defines the **approved optimisation reference framework** for PremiumStore.sk.

The agent must not optimize product names, SEO copy, product-page structure or visual content from generic AI "best practices" alone. It must first use the rules, reference material and real search/customer data that PremiumStore has explicitly adopted.

## Source hierarchy

When sources disagree, use this order:

1. **Safety / integrity / protected-field rules**
   - `safety.md`
   - `security.md`
   - `imports.md`
   - protected identifiers, URLs, pricing, availability, accounting/stock and production constraints

2. **PremiumStore-approved optimization framework**
   - this file
   - `product-content-seo.md`
   - `seo.md`
   - `ux-cro-design.md`
   - the current shared Google Drive reference document:
     **“Zvyšujeme konverzní poměr, obrat a ranking webu v době AI | Kvasnička Jan”**
   - PremiumStore Design System and other owner-approved project rules

3. **Measured PremiumStore evidence**
   - GSC queries/pages
   - GA4 behaviour/funnel
   - PremiumStore orders/margin
   - internal-site search data if available
   - Heureka demand/click/order signals
   - controlled experiments and before/after evidence

4. **Generic external best practice**
   - use only when the higher-priority sources do not answer the question
   - never silently override an approved PremiumStore rule

The Kvasnička document is an **approved working reference** for content, landing-page quality, UX/CRO and design direction. Treat its recommendations as the project framework to implement/test, while still respecting verified product facts and PremiumStore safety rules.

## Search-demand-driven product naming

Product names must be optimized for how people actually search and understand the product, not merely copied from supplier naming.

Use, where available:
- Google Search Console query wording
- external search-demand/keyword evidence
- Heureka/category demand wording
- internal-site search phrases
- category/filter vocabulary used by customers
- conversion and landing-page performance

Naming goals:
- make the product immediately understandable
- include the high-value product type/intent phrase customers use
- preserve brand and model identity
- preserve important differentiating attribute(s) when useful
- avoid keyword stuffing
- avoid supplier jargon that customers do not search for
- keep names natural in Slovak

A name change must **not** change the product URL unless the separately protected URL process is explicitly approved.

Name improvements must survive future supplier imports through an approved persistent override/localization layer.

### Example logic

Do not default to:
`Brand + supplier-internal wording + model`

Prefer a data-backed order such as:
`searched product type + key attribute + brand/model`

The exact pattern depends on real query demand and product class. Do not invent a keyword pattern without evidence.

## Category and landing-page naming

Apply the same search-intent principle to:
- category titles/H1
- SEO title/meta
- seasonal landing pages
- filter landing-page concepts
- internal-link anchor text

Do not create search-targeted pages for combinations with no meaningful demand or customer value.

Stable useful category URLs, especially seasonal ones, should normally be preserved and improved rather than recreated each season.

## Kvasnička-based content and design principles

Use the current Kvasnička reference document as a standing checklist when auditing or improving important landing pages.

Important themes from the reference include:

### Readability and mobile quality
- avoid very small text; the reference flags text below 13px and recommends larger body copy
- maintain strong text/background readability
- check mobile rendering and overflow
- preserve usable touch zones
- make interactive elements visually recognizable
- evaluate mobile and desktop separately

### Product media and storytelling
- do not rely only on the top image gallery
- important product media/information should also appear in the scrollable product content where useful
- use product storytelling to explain what the product does, why it matters and how it is used
- for high-value products, consider richer visuals/video/infographics when authentic/reliable assets exist

### Product-detail comprehension
- the perex/intro must contain the most important information about the product
- highlight top product properties in an easy-to-scan way
- use structured sections rather than a wall of text
- use bullets for important facts where appropriate
- use numbered step-by-step content when explaining a process
- visually distinguish genuinely important information
- keep key conversion-support information easy to find

### Visible information architecture
- avoid hiding important decision-making/SEO content where customers and crawlers are unlikely to discover it
- where technically appropriate, prefer an on-page content index/anchor navigation over forcing key information into hidden tabs
- consider sticky/fixed product navigation or conversion support only as a measured CRO change, not decoration

### Internal linking
Important product pages should link helpfully to relevant:
- categories
- filter/parameter landing pages when there is real search/customer value
- guides/articles
- compatible accessories
- related products

Links must be relevant and compatibility-safe.

### Unique/authentic content
- do not mass-produce generic AI copy that makes the site indistinguishable
- prefer useful, product-specific content
- use authentic expertise, real photos/video, customer evidence or specialist input when PremiumStore genuinely has it
- never fabricate a person, review, specialist quote, test result or experience

### FAQ and question-led content
- collect real customer questions from support, reviews, ads, store/offline contact and search behaviour when available
- answer concrete questions where they help the customer
- use FAQ as useful content, not keyword stuffing
- the current Kvasnička reference gives particular importance to FAQ on categories/articles as well as product pages; treat this as an approved hypothesis to implement/test

### Design System and signature elements
- keep a coherent PremiumStore Design System
- build recognizable brand-specific visual patterns rather than generic AI-looking pages
- reuse consistent typography, spacing, buttons, icons, information boxes and signature elements
- visual emphasis must reflect information importance
- conversion/usability/performance guardrails still apply

## What “follow the framework” means

The agent should **actively implement toward this framework**, not merely mention it in audits.

Examples:
- rename a weak supplier product name using real query evidence
- rewrite a thin description into a structured customer-first page
- add verified internal links
- add or improve category/FAQ content
- prepare richer product-detail layout/components
- create/refresh a seasonal category and its content
- improve mobile readability or content hierarchy
- create reusable PremiumStore content/design components

But each production change still follows the applicable pilot, approval, import-persistence and measurement rules.

## Measurement and conflict handling

If a framework recommendation conflicts with measured PremiumStore results:
- do not silently ignore either source
- document the conflict
- design a controlled test where practical
- keep conversion, margin, accessibility, performance and trust as guardrails
- roll back a measured regression

If the Kvasnička source is updated materially, review this file and the agent backlog. The reference should be revisited at least quarterly.

