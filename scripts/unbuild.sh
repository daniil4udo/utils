#!/bin/bash

# https://github.com/open-cli-tools/concurrently#readme

CONCURRENTLY_FLAGS=" \
    --group \
    --max-processes 1 \
    --timings \
    --prefix-colors #18A57E,#2757A3,#FFDD00,#0057B7 \
    --names INDEX:creat,INDEX:lint,PRESET:generate,PRESET:lint,CLEAN,UNBUILD \
    " \

concurrently $CONCURRENTLY_FLAGS \
    "node --experimental-specifier-resolution=node scripts/generateIndex.js" \
    "node --experimental-specifier-resolution=node scripts/autoImportUtilsPreset.js" \
    "eslint lib/preset/autoImportUtilsPreset.ts lib/index.ts --fix" \
    "rm -rf dist" \
    "unbuild"
