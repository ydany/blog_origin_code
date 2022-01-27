#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 复制文件到其他项目
cp -R /d/dan/blog_origin_code/docs/.vuepress/dist/. /d/dan/blog
cd /d/dan/blog

# 提交部署信息
git add -A
git commit -m 'deploy'
git push

cd /d/dan/blog_origin_code
