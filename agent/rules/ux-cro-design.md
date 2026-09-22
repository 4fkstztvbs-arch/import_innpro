# UX, CRO and Design rules

## Purpose

PremiumStore design is a commercial and usability system, not decoration.

The objective is to reduce customer friction, improve comprehension and trust, make product choice easier, and improve sustainable conversion and margin without misleading users.

## Evidence before aesthetics

Do not justify a change only with:
- "looks more modern"
- "competitors do it"
- "best practice"
- personal aesthetic preference

For a meaningful UX/CRO change define:
- observed problem
- evidence
- affected users/pages/devices
- hypothesis/mechanism
- primary metric
- guardrail metrics
- rollback
- validation method

Use qualitative inspection together with behavioural/commercial data when available.

## Funnel coverage

Consider the whole journey:
homepage -> navigation/search -> category/filter/sort -> product -> cart -> checkout -> confirmation.

Always evaluate mobile and desktop separately where the experience differs.

## Conversion quality

Do not optimize a local metric at the expense of the business.

Examples:
- higher add-to-cart with lower checkout completion may be a regression
- higher conversion with materially lower margin may be a regression
- higher orders with more cancellations/returns may be a regression
- a visual change that damages performance/accessibility may be a regression

Prefer downstream commercial outcomes and guardrails over vanity metrics.

## Change scope

Prefer small, attributable, reversible changes over broad redesigns.

A site-wide redesign or change to checkout/payment is APPROVAL REQUIRED.

Controlled UX/CSS work may be prepared on a branch/PR only when it:
- does not alter protected commercial/import fields
- has a known blast radius
- has visual QA for mobile and desktop
- has a rollback
- has a measurement plan

## Visual QA

For relevant changes verify:
- target viewport(s)
- responsive breakpoints
- no overlap/clipping
- CTA visibility
- forms/errors
- keyboard/focus behaviour where applicable
- accessibility basics
- page performance
- critical funnel pages

Do not infer success from screenshots alone.

## Accessibility and performance

Do not trade accessibility or material page performance for visual polish.

Consider:
- contrast
- readable type sizes
- focus/keyboard behaviour
- semantic controls/labels
- touch targets
- layout stability
- image weight/loading
- Core Web Vitals

## Dark patterns prohibited

Do not use:
- fake urgency/scarcity
- misleading discounts/prices
- hidden fees
- preselected unwanted options
- deceptive button hierarchy
- obstruction of cancellation/decline
- manipulative copy that hides consequences

## Design system

Build PremiumStore toward a coherent living design system covering:
- colors and semantic usage
- typography
- spacing/layout
- buttons/CTAs
- product cards
- badges
- forms
- trust/information boxes
- navigation
- mobile components
- empty/error/loading states
- accessibility rules

Do not perform a large visual refactor merely to make the implementation conform to a design system. Introduce consistency incrementally alongside validated work.

## Documentation

Material UX/CRO changes belong in the change ledger and experiment protocol when experimental.

The UX/CRO backlog should use:
PROBLEM -> EVIDENCE -> AFFECTED USERS -> HYPOTHESIS -> CHANGE -> METRIC -> GUARDRAILS -> RISK -> VALIDATION.

## Approved reference framework

For PremiumStore page/content design, the agent must use `approved-optimization-framework.md` and the current shared Kvasnička reference document as approved project direction before falling back to generic AI design patterns.

This includes evaluating:
- readability and contrast
- mobile rendering/overflow/touch zones
- recognizable active elements
- product-detail media beyond the basic gallery
- strong product perex and top-feature presentation
- structured storytelling
- visible on-page information architecture
- helpful internal linking
- FAQ/question-led content
- signature brand elements
- coherent Design System usage

Do not copy another shop's appearance. Convert the reference principles into PremiumStore-specific components and validate them against conversion, margin, accessibility and performance guardrails.

