#!/usr/bin/env node
const yargs = require('yargs');

const { renderLog } = require('./lib/generator');

const options = yargs
  .usage('Usage: -f <file>')
  .option('f', {
    alias: 'file', describe: 'Absolute path to pull request template', type: 'string', demandOption: true,
  })
  .option('p', {
    alias: 'pattern', describe: 'Pattern to replace. Default: "<% changelog %>"', type: 'string',
  })
  .argv;

renderLog(options.f, options.p);
