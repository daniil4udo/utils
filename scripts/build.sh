#!/bin/bash

# https://github.com/open-cli-tools/concurrently#readme

CONCURRENTLY_FLAGS=" \
    --group \
    --max-processes 1 \
    --timings \
    --prefix-colors #18A57E,#2757A3,#FFDD00,#0057B7 \
    --names GENERATE:INDEX,GENERATE:PRESET,LINT,CLEAN,BUILD \
    " \

concurrently $CONCURRENTLY_FLAGS \
    "vite-node scripts/generateIndex.ts" \
    "vite-node scripts/autoImportUtilsPreset.ts" \
    "eslint lib/preset/autoImportUtilsPreset.ts lib/index.ts --fix" \
    "rimraf dist" \
    "tsup"
