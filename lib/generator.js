const path = require('path');
const fs = require('fs');
const { getLog } = require('./gitLog');

const renderLog = (relativePath, pattern) => {
  const prTemplatePath = path.join(path.dirname(require.main.filename), relativePath);
  if (!fs.existsSync(prTemplatePath)) throw new Error(`No such file or directory, ${prTemplatePath}`);
  if (!fs.lstatSync(prTemplatePath).isFile()) throw new Error(`Not a file, ${prTemplatePath}`);
  const modifiedTemplate = fs.readFileSync(prTemplatePath).toString('utf8').replace(pattern || '<% changelog %>', getLog());
  fs.writeFileSync(prTemplatePath, modifiedTemplate);
};

module.exports = {
  renderLog,
};
