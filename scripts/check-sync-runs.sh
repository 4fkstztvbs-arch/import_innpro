#!/usr/bin/env bash
# Ranná kontrola: bežal každý dodávateľský sync a skončil úspešne?
# Pozrie posledný úspešný beh každého workflowu a posledný beh vôbec. Padne, ak je posledný
# úspešný beh starší ako MAX_AGE_HOURS alebo ak posledný (dokončený) beh zlyhal.
# WiiM sa nekontroluje: beží len pri zmene cenníka (push), nie podľa času.
# Použitie: GH_TOKEN=... bash scripts/check-sync-runs.sh (vyžaduje gh, je na ubuntu-latest).
set -uo pipefail

MAX_AGE_HOURS="${MAX_AGE_HOURS:-26}"
WORKFLOWS="${WORKFLOWS:-kb-sync.yml monacor-sync.yml solight-sync.yml basys-sync.yml innpro-sync.yml atos-sync.yml penta-sync.yml}"
now=$(date -u +%s)
bad=0

for wf in $WORKFLOWS; do
  last_ok=$(gh run list --workflow "$wf" --status success --limit 1 --json createdAt --jq '.[0].createdAt // empty')
  last_any=$(gh run list --workflow "$wf" --limit 5 --json conclusion,createdAt \
    --jq '[.[] | select(.conclusion != "" and .conclusion != "cancelled" and .conclusion != "skipped")][0] | if . then "\(.conclusion) \(.createdAt)" else empty end')

  if [ -z "$last_ok" ]; then
    echo "::error::$wf: nenašiel som žiadny úspešný beh"
    bad=1
    continue
  fi
  age=$(( (now - $(date -u -d "$last_ok" +%s)) / 3600 ))
  echo "$wf: posledný úspešný beh $last_ok (pred ${age} h); posledný dokončený: ${last_any:-neznámy}"

  if [ "$age" -gt "$MAX_AGE_HOURS" ]; then
    echo "::error::$wf: posledný úspešný beh je starší ako ${MAX_AGE_HOURS} h (${age} h)"
    bad=1
  fi
  case "$last_any" in
    failure*) echo "::error::$wf: posledný dokončený beh zlyhal ($last_any)"; bad=1 ;;
  esac
done

exit "$bad"
