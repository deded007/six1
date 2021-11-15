CMD /C pnpm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/deded007/six1.git master:gh-pages
cd ..