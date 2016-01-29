#!/usr/local/bin/bash

sudo npm install
bower install

rm -rf ./dist
mkdir -p ./dist

cp -R ./guides/css/ ./dist/css
cp -R ./guides/js/ ./dist/js
cp ./guides/favicon.png ./dist
cp CNAME ./dist/CNAME

declare -a javascripts
javascripts[0]="bower_components/jquery/dist/jquery.js"
javascripts[1]="bower_components/tether/dist/js/tether.js"
javascripts[2]="bower_components/bootstrap/dist/js/bootstrap.js"
javascripts[3]="bower_components/prism/prism.js"

declare -a css
css[0]="bower_components/bootstrap/dist/css/bootstrap.css"
css[1]="bower_components/tether/dist/css/tether.css"
css[2]="bower_components/prism/themes/prism.css"

echo "Catting Javascript"

for i in "${javascripts[@]}"; do
  echo "Catting $i -> ./js/libs.js"
  cat $i >> ./dist/js/libs.js
done

echo "Catting CSS"

for i in "${css[@]}"; do
  echo "Catting $i -> ./css/libs.css"
  cat $i >> ./dist/css/libs.css
done

./render.js
