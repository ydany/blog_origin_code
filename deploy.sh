#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 复制文件到其他项目
cp -R /Users/hanlin/Desktop/nine/hanlin/wordpress/docs/.vuepress/dist/ /Users/hanlin/Desktop/nine/hanlin/alblog
cd /Users/hanlin/Desktop/nine/hanlin/alblog


# 提交部署信息
git add -A
git commit -m 'deploy'
git push

cd /Users/hanlin/Desktop/nine/hanlin/wordpress