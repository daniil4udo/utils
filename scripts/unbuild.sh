#!/bin/bash

# https://github.com/open-cli-tools/concurrently#readme

CONCURRENTLY_FLAGS=" \
    --group \
    --max-processes 1 \
    --timings \
    --prefix-colors yellow,blue \
    --names CLEAN,BUILD:INDEX,BUILD:LIB,BUILD:PRESETS" \

concurrently $CONCURRENTLY_FLAGS \
    "node --experimental-specifier-resolution=node ./scripts/generateIndex.js" \
    "rm -rf dist" \
    "unbuild" \
    "node --experimental-specifier-resolution=node ./scripts/autoImportUtilsPreset.js"
