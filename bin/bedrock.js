#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const conf = require('../lib/prettier');
const sort = require('sort-package-json');
const argv = process.argv.slice(2);

const cwd = process.cwd();

const names = ['prettier', 'eslint', 'stylelint', 'sort-package-json'];

if (argv[0] === 'update' && argv[1] === 'resolutions') {
  const pkg = require('../package.json');
  const project = require(path.join(cwd, 'package.json'));

  project.resolutions = project.resolutions || {};
  for (const name of names) {
    project.resolutions[name] = pkg.dependencies[name];
  }

  const content = prettier.format(sort(JSON.stringify(project)), {
    parser: 'json-stringify',
    ...conf,
  });
  fs.writeFileSync(path.join(cwd, 'package.json'), content, 'utf-8');

  console.log('[@mxcins/bedrock]: update resolutions success!');
}
