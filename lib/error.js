const util = require('util');

function GitCommitParserError(message, sysError) {
  this.name = this.constructor.name;
  this.message = message;
  this.sysError = sysError;
}

util.inherits(GitCommitParserError, Error);

module.exports = GitCommitParserError;
