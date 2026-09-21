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
- start conditions
- stop conditions
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

Decision states:
- KEEP
- REVERT
- ITERATE
- INCONCLUSIVE

Never stop an experiment early solely because short-term results look positive.
