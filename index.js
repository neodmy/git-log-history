#!/usr/bin/env node
const yargs = require('yargs');

const { renderLog } = require('./lib/generator');

const options = yargs
  .scriptName('git-log-history')
  .wrap(null)
  .usage('Usage: $0 [options]')
  .alias('h', 'help')
  .option('f', {
    alias: 'file', describe: 'Relative path from root directory to pull request template', type: 'string',
  })
  .option('p', {
    alias: 'pattern', describe: 'Pattern to replace in target file. Default: "<% changelog %>"', type: 'string',
  })
  .option('l', {
    alias: 'log', describe: 'git log --pretty=<log>. Default: format:- %h %s by <username_or_name>', type: 'string',
  })
  .example('$0 -f .github/pull_request_templat.md',
    'Replace <% changelog %> in .github/pull_request_temaplate.md with commit history formatted with --pretty=format:- %h %s by <username_or_name>')
  .example('$0 -f someDir/someFile.md -p "<? something ¿>" -l short',
    'Replace <? something ¿> in someDir/someFile.md with commit history formatted with --pretty=short')
  .epilog('For more information, visit https://github.com/neodmy/git-commit-parser')
  .argv;

renderLog(options.f, options.p, options.l);
