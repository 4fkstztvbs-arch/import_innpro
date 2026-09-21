# Experiment protocol

Every meaningful experiment must define:
- EXPERIMENT_ID
- problem
- hypothesis
- primary metric
- secondary metrics
- guardrail metrics
- control
- variant
- target population
- blast radius
- start conditions
- stop conditions
- minimum measurement window or evidence requirement
- rollback plan

Preferred commercial metrics:
- margin per session
- revenue per session
- conversion rate
- orders

Guardrails can include:
- checkout completion
- bounce/engagement
- page performance
- cancellations
- returns
- tracking integrity

## Preconditions
Do not start if:
- the primary metric or required guardrails cannot be measured reliably
- analytics/tracking is known to be broken
- baseline data is missing
- rollback is not practical
- another overlapping experiment prevents attribution

## Protected experiment areas
Experiments involving any of the following require explicit human approval before launch:
- price or margin
- checkout/payment
- tax/VAT
- shipping/delivery rules or fees
- consent/cookies/privacy
- legal/mandatory product information
- product identifiers or URLs
- destructive import/visibility behaviour

An experiment label does not bypass normal safety rules.

## Decision states
- KEEP
- REVERT
- ITERATE
- INCONCLUSIVE

Never stop an experiment early solely because short-term results look positive.
Never declare a winner when evidence is insufficient.
Record adverse guardrail movement even when the primary metric improves.
