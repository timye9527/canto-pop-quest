#!/bin/bash
set -euo pipefail

# Only prepare the environment for Claude Code on the web.
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "${CLAUDE_PROJECT_DIR:-$(dirname "$0")/../..}"

# Install npm dependencies (idempotent; keeps the cached container warm).
npm install --no-audit --no-fund
