#!/usr/local/bin/bash

mkdir -p ./js
mkdir -p ./css
mkdir -p ./guides/js
mkdir -p ./guides/css

rm -rf ./guides/js/libs.js
rm -rf ./guides/css/libs.js
rm -rf ./guides/index.html

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
  cat $i >> ./guides/js/libs.js
done

echo "Catting CSS"

for i in "${css[@]}"; do
  echo "Catting $i -> ./css/libs.css"
  cat $i >> ./guides/css/libs.css
done

./render.js
