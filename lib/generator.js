const path = require('path');
const fs = require('fs');
const { getLog } = require('./gitLog');

const renderFile = async () => {
  const prTemplatePath = path.join(__dirname, '../project/.github/pull_request_template.md');

  const modifiedTemplate = fs.readFileSync(prTemplatePath).toString('utf8').replace('<% changelog %>', getLog());

  fs.writeFileSync(prTemplatePath, modifiedTemplate);
};

renderFile();
module.exports = {
  renderFile,
};
