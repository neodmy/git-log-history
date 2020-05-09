const { spawnSync } = require('child_process');

const streamToString = (stream) => stream.stdout.toString('utf8').replace(/^\s+|\s+$/g, '');

const getCurrentBranch = () => streamToString(spawnSync('git', ['rev-parse', '--abbrev-ref', 'HEAD']));

const getUsername = () => streamToString(spawnSync('git', ['config', '--get', 'user.username']));

const getName = () => streamToString(spawnSync('git', ['config', '--get', 'user.name']));

const getLog = (logFormat) => {
  const name = getUsername() || getName();
  const format = logFormat || `format:- %h %s by ${getUsername() ? '@' : ''}${name}`;
  const currentBranch = getCurrentBranch();
  const selectedBranch = currentBranch === 'master' ? 'master' : `master..${currentBranch}`;
  const logs = spawnSync('git', ['log', `${selectedBranch}`, `--pretty=${format}`]).stdout.toString('utf8');
  return logs;
};

module.exports = {
  getName,
  getUsername,
  getCurrentBranch,
  getLog,
};
