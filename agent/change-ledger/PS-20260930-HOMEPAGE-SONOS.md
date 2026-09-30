CHANGE_ID: PS-20260930-HOMEPAGE-SONOS
DATE: 2026-09-30
ACTOR: Codex
AREA: Homepage UX / product campaigns
URL/PAGE/SCOPE: PremiumStore.sk homepage only
AFFECTED_PRODUCTS/PAGES: homepage presentation; no product records
DESCRIPTION: SONOS Beam Ultra Black, Ace Ultra Sand and Superfire M9-E campaigns; mobile categories first; compact desktop banners; corrected delivery qualification.
REASON: owner-approved graphic proposal; existing mobile categories began at y1337.
HYPOTHESIS: earlier catalog access and specific product CTAs reduce navigation friction.
BASELINE: published CSS v5 / JS v1; desktop 420 px main hero; mobile category start y1337 at390.
PRIMARY_METRIC: conversion / revenue per session; supporting banner CTR needs impression denominator.
GUARDRAIL_METRICS: checkout completion, margin, page loading, image failures, mobile overflow.
IMPLEMENTATION: CSS v7 / JS v3 scoped to body.type-index main#content. Native catalog and forms preserved. Dynamic store-stock badge based on native product card; no additional stock API.
FILES_CHANGED: assets/ux/premiumstore-homepage-pilot-20260930-v7.css; assets/ux/premiumstore-homepage-pilot-20260930-v3.js; assets/ux/ps-sonos-beam-ultra-home-20260930.jpg; assets/ux/ps-sonos-ace-ultra-home-20260930.jpg; assets/ux/homepage-sonos-20260930.md; this ledger.
COMMIT / PR: agent/homepage-sonos-20260930
APPROVAL / APPROVER: user explicitly instructed pubilkuj on2026-09-30 after reviewing graphic outputs.
EXPERIMENT_ID: not an A/B experiment
PRE_DEPLOY_VALIDATION: private HEAD and full previous assets/ux backup; JS syntax; scoped CSS; native form preservation; responsive preview QA.
DEPLOYED_AT: pending
POST_DEPLOY_VALIDATION: pending
RESULT: prepared; business impact unmeasured
DECISION: publish approved homepage after successful preview QA
ROLLBACK / ROLLBACK_COMMIT: restore HEAD references v5.css / v1.js, publish and verify public homepage; original assets kept.
