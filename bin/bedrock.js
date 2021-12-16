#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const conf = require('../lib/prettier');
const argv = process.argv.slice(2);

const cwd = process.cwd();

const names = ['prettier', 'eslint', 'stylelint'];

if (argv[0] === 'eject') {
  const pkg = require('../package.json');
  const project = require(path.join(cwd, 'package.json'));

  project.devDependencies = project.devDependencies || {};
  for (const name of names) {
    project.devDependencies[name] = pkg.dependencies[name];
  }

  const content = prettier.format(JSON.stringify(project), {
    ...conf,
  });
  fs.writeFileSync(path.join(cwd, 'package.json'), content, 'utf-8');

  console.log('[@mxcins/bedrock]: eject success!');
}
