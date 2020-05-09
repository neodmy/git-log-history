const path = require('path');
const fs = require('fs');

const { getLog } = require('./gitLog');
const GitCommitParserError = require('./error');

const renderLog = (relativePath, pattern, logFormat) => {
  const commitHistory = getLog(logFormat);
  if (!relativePath) {
    process.stdout.write(commitHistory);
    return;
  }
  const prTemplatePath = path.join(path.dirname(require.main.filename), relativePath);
  if (!fs.existsSync(prTemplatePath)) throw new GitCommitParserError(`No such file or directory, ${prTemplatePath}`, 'ENOENT');
  if (!fs.lstatSync(prTemplatePath).isFile()) throw new GitCommitParserError(`Not a file, ${prTemplatePath}`, 'EISDIR');
  if (commitHistory) {
    const modifiedTemplate = fs.readFileSync(prTemplatePath).toString('utf8').replace(pattern || '<% changelog %>', getLog(logFormat));
    fs.writeFileSync(prTemplatePath, modifiedTemplate);
  }
};

module.exports = {
  renderLog,
};
