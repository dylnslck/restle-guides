#!/usr/local/bin/bash
echo "Building"
./build.sh

echo "Deploying"
mkdir -p /tmp/restle-guides
rm -rf /tmp/restle-guides
cp ./guides/* /tmp/restle-guides
git checkout gh-pages
cp /tmp/restle-guides/* ./
git add --all
git commit -m Deploy Restle Guides
git push origin gh-pages
git checkout master

echo "Done"
