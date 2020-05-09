#!/usr/bin/env node
const yargs = require('yargs');

const { renderLog } = require('./lib/generator');

const options = yargs
  .usage('Usage: -f <file>')
  .option('f', {
    alias: 'file', describe: 'Relative path from root directory to pull request template', type: 'string', demandOption: true,
  })
  .option('p', {
    alias: 'pattern', describe: 'Pattern to replace. Default: "<% changelog %>"', type: 'string',
  })
  .option('l', {
    alias: 'log', describe: 'git log --pretty=<log>. Default: --pretty=format:- %h %s by <username | user>', type: 'string',
  })
  .argv;

renderLog(options.f, options.p, options.l);
