#!/usr/bin/env bash
# Refresh the Owner Project Report from the internal construction dashboard.
#
#   tools/update.sh            # dry run — show what would change, change nothing
#   tools/update.sh --write    # apply the derived changes to data.js
#   tools/update.sh --publish  # apply, run the guard, commit and push
#
# The guard is mandatory on --publish: if it fails, nothing is pushed.

set -euo pipefail
cd "$(dirname "$0")/.."
REPORT_DIR="$(pwd)"
DASH_DIR="${MURCH_DASHBOARD_DIR:-/tmp/murch-dashboard-src}"
MODE="${1:-}"

echo "==> Fetching the construction dashboard"
if [ -d "$DASH_DIR/.git" ]; then
  git -C "$DASH_DIR" fetch --quiet origin && git -C "$DASH_DIR" reset --quiet --hard origin/main
else
  rm -rf "$DASH_DIR"
  git clone --quiet --depth 1 https://github.com/claped71/murch-dashboard.git "$DASH_DIR"
fi
echo "    source revision: $(git -C "$DASH_DIR" rev-parse --short HEAD)"

if [ "$MODE" = "--write" ] || [ "$MODE" = "--publish" ]; then
  node tools/sync.js "$DASH_DIR/data.js" --write
else
  node tools/sync.js "$DASH_DIR/data.js"
  echo "Dry run complete. Re-run with --write to apply, --publish to apply and push."
  exit 0
fi

echo "==> Running the publish guard"
node tools/guard.js

if [ "$MODE" != "--publish" ]; then
  echo "Applied to data.js. Review the items above, then re-run with --publish."
  exit 0
fi

echo "==> Publishing"
git -C "$REPORT_DIR" add -A
if git -C "$REPORT_DIR" diff --cached --quiet; then
  echo "    nothing changed — not pushing."
  exit 0
fi
ASOF=$(node -e "global.window={};require('$REPORT_DIR/data.js');process.stdout.write(window.MURCH_REPORT.meta.asOf)")
git -C "$REPORT_DIR" commit --quiet -m "Owner Project Report — basis $ASOF"
git -C "$REPORT_DIR" push --quiet origin main
# GitHub Pages serves this site from gh-pages, NOT main. Mirror it or the
# published page silently goes stale while main moves on.
git -C "$REPORT_DIR" push --quiet --force origin main:gh-pages
echo "    pushed to main and mirrored to gh-pages."
echo "    live in 2-4 minutes: https://claped71.github.io/murch-project-report/"
