#!/bin/bash

# https://github.com/open-cli-tools/concurrently#readme

CONCURRENTLY_FLAGS=" \
    --group \
    --max-processes 1 \
    --timings \
    --kill-others-on-fail \
    --prefix-colors blue,yellow,blue,yellow,blue,yellow,blue \
    --names GENERATE,LINT,TEST,DOCS,CLEAN,BUILD,POSTBUILD \
    " \

if [[ $(git diff --stat) != '' ]]; then
    echo '🛑 You have uncommited changes'
else
    concurrently $CONCURRENTLY_FLAGS \
        "vite-node scripts/generateIndex.ts scripts/autoImportUtilsPreset.ts" \
        "eslint lib/preset/autoImportUtilsPreset.ts lib/index.ts --fix" \
        "vitest run" \
        "pnpm:typedoc" \
        "rimraf dist" \
        "tsup" \
        "vite-node scripts/postbuild.ts"
fi
