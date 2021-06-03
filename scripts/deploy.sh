#!/usr/bin/bash

pnpm build
cd dist
git init .
git add .
git commit -m "update gh-pages content"
git remote add origin https://github.com/ocian/shu.moe
git push origin main:gh-pages -f
echo "运行结束"