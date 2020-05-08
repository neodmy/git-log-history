const { spawnSync } = require('child_process');

const streamToString = (stream) => stream.stdout.toString('utf8').replace(/^\s+|\s+$/g, '');

const getCurrentBranch = () => streamToString(spawnSync('git', ['rev-parse', '--abbrev-ref', 'HEAD']));

const getUsername = () => streamToString(spawnSync('git', ['config', '--get', 'user.username']));

const getName = () => streamToString(spawnSync('git', ['config', '--get', 'user.name']));

const getLog = () => {
  const name = getUsername() || getName();
  const logs = spawnSync('git', ['log', `master..${getCurrentBranch()}`, `--pretty=format:- %h %s by ${getUsername() ? '@' : ''}${name}`]).stdout.toString('utf8');
  return logs;
};

module.exports = {
  getName,
  getUsername,
  getCurrentBranch,
  getLog,
};
