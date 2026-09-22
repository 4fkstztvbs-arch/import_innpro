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
- Heureka bidding/CPC, paid-channel budgets or visibility
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


## Heureka bidding experiments

Follow `heureka.md` for the bidding autonomy ladder.

No bidding write is authorized merely because an experiment has been designed. OBSERVE and SHADOW BIDDING are read-only.

An approved Heureka bidding pilot must additionally define hard spend/CPC limits, minimum evidence, profitability/PNO and margin/contribution guardrails, maximum change rate, availability requirements, anomaly stop and rollback.
