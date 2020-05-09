const { getCurrentBranch, getLog, getUsername, getName } = require('../lib/gitLog');

describe('GitLog', () => {
  test('should get git current branch', () => {
    const result = getCurrentBranch();
    expect(result).not.toBe(undefined);
  });

  test('should get git username', () => {
    const result = getUsername();
    expect(result).not.toBe(undefined);
  });

  test('should get git username', () => {
    const result = getName();
    expect(result).not.toBe(undefined);
  });

  test('should get git current branch logs', () => {
    const result = getLog();
    expect(result).not.toBe(undefined);
  });
});
