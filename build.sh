#!/bin/bash

SRC="./src";
STYLES="$SRC/styles";
PUBLIC="./public";

mkdir -p "$PUBLIC"
mkdir -p "$PUBLIC/styles"
cp "$SRC/index.html" "$PUBLIC"
cp "$SRC/favicon.ico" "$PUBLIC"
cp -r "$SRC/img" "$PUBLIC/img"
cat "$STYLES/reset.css" "$STYLES/normalize.css" "$STYLES/template.css" "$STYLES/typography.css" "$STYLES/icon.css" > "$PUBLIC/styles/main.css"