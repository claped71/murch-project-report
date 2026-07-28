# Murch Solar — Owner Project Report

Client-facing construction progress report. Published at
<https://claped71.github.io/murch-project-report/>

It is **derived** from the internal construction dashboard
(`claped71/murch-dashboard`). The internal dashboard stays the working document;
this repository holds only what the Owner sees.

## Daily refresh

```bash
tools/update.sh             # dry run — shows what changed and what needs review
tools/update.sh --write     # applies the derived changes to data.js
tools/update.sh --publish   # applies, runs the guard, commits and pushes
```

The script clones the dashboard, runs `tools/sync.js`, then `tools/guard.js`.
**If the guard fails, nothing is pushed.**

## What is derived vs. curated

`tools/sync.js` rewrites the blocks that are mechanically derivable and leaves
the ones that need judgment alone — but it lists every curated block whose
underlying numbers moved, under `REVIEW BEFORE PUBLISHING`. Work that list every
time; that is the point of it.

| Derived automatically | Curated by hand |
|---|---|
| `meta.asOf`, `headline.overall` | `headline.statement` |
| `gates[]` quantities and pace status | `lookahead[]`, `focus[]` |
| `series` (cumulative + daily) | `ownerItems[]` |
| `milestones[].forecast` and status | `milestones[].note` |
| `civil[]` (names stripped, labels mapped) | `safety`, `photos[]` |
| `quality` tiles tied to the control basis | `material[]` |

Two escape hatches, both self-announcing on every run so they cannot quietly rot:

- `milestones[].pin: true` — hold a forecast the internal source disagrees with.
- `civilOverrides` — restate an activity the internal sheet reports against
  released areas only. Each override carries a `why`.

## Publishing rules

Enforced by `tools/guard.js`; the rules themselves live in `tools/redact.js` and
**must never be inlined into a served file**. In summary: no economic values, no
subcontractor/supplier/personnel names, no claims or disputes, no internal risk
language. `GreenSol` and `Heelstone` are allowed as brand and authorship only.

The guard also checks coherence, not just vocabulary: a cumulative curve may not
exceed or advance past its reported basis, a 100% row may not describe remaining
work, a forecast may not precede its own stated dependency, and weekday names on
the weather log must be real dates.

## Photos

Photo captions are rewritten by hand and images are checked **in frame** for
supplier branding before use — one was pulled because a supplier label was
legible on a shipping box. The sync flags new dashboard photos but never
promotes them automatically.

## Client logo

`assets/greensol-logo.png` is local. The Heelstone mark is currently hot-linked
from heelstoneenergy.com with a text fallback — drop an official file at
`assets/heelstone-logo.png` and point `#clientLogo` at it to make it local.
