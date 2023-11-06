#!/usr/bin/env sh

set -o errexit -o nounset

zola build

cp zola/linux/index.html src/zola/posts_linux.js
