const { renderLog } = require('../lib/generator');
const GitCommitParserError = require('../lib/error');

describe.only('Generator', () => {
  test('should get git current branch', () => {
    expect(() => renderLog('notDirectory')).toThrow(GitCommitParserError);
  });

  test('should get git current branch', () => {
    expect(() => renderLog('lib/notFile')).toThrow(GitCommitParserError);
  });
});
