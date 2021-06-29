#!/usr/bin/bash

pnpm build
cd dist
git init .
git add .
git config user.name ocian
git config user.email nvcsadjkojf@outlook.com
git commit -m "update gh-pages content"
git remote add origin https://github.com/ocian/shu.moe
git branch main
git checkout main
git push origin main:gh-pages -f
echo "运行结束"