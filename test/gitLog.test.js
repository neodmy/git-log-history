const { getCurrentBranch, getLog, getUsername } = require('../lib/gitLog');

describe('GitLog', () => {
  test('should get git current branch', () => {
    const result = getCurrentBranch();
    expect(result).not.toBe(undefined);
  });

  test('should get git username', () => {
    const result = getUsername();
    expect(result).not.toBe(undefined);
  });

  it('should get git current branch logs', () => {
    const result = getLog();
    expect(result).not.toBe(undefined);
  });
});
