#!/bin/bash

# https://github.com/open-cli-tools/concurrently#readme

CONCURRENTLY_FLAGS=" \
    --group \
    --max-processes 1 \
    --timings \
    --prefix-colors yellow,blue \
    --names INDEX:creat,INDEX:lint,PRESET:generate,PRESET:lint,CLEAN,UNBUILD \
    " \

concurrently $CONCURRENTLY_FLAGS \
    "node --experimental-specifier-resolution=node scripts/generateIndex.js" \
    "eslint lib/index.ts --fix" \
    "node --experimental-specifier-resolution=node scripts/autoImportUtilsPreset.js" \
    "eslint lib/preset/autoImportUtilsPreset.ts --fix" \
    "rm -rf dist" \
    "unbuild"
