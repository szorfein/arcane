#!/usr/bin/env sh

set -o errexit -o nounset

zola build

cp zola/index.html src/zola-stores/all-posts.js
cp zola/linux/index.html src/zola-stores/posts_linux.js
