#!/usr/bin/env node
'use strict';

const ejs = require('ejs');
const fs = require('fs');
const version = require('./package.json').version;

const files = fs.readdirSync(`${__dirname}/guides/codes`);
const codes = {};

for (let file of files) {
  let name = file;
  let content = fs.readFileSync(`${__dirname}/guides/codes/${name}`, 'utf-8');

  codes[name.split('.')[0]] = content;
}

const index = fs.readFileSync(`${__dirname}/index.ejs`, 'utf-8');
const html = ejs.render(index, { codes, version });

fs.writeFileSync(`${__dirname}/guides/index.html`, html, 'utf-8');
