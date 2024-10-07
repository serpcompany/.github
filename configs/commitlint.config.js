// commitlint.config.js
const matchBranchNamePattern = (branchName) => {
  const pattern = /^[a-z]+\/\d+\/[\w-]+[\w/.]+$/;
  return pattern.test(branchName);
};

const getIssueNumberFromBranch = (branchName) => {
  return branchName.split('/')[1];
};

const findGitHubIssueReference = (commitMessage) => {
  const keywords = ['close', 'closes', 'closed', 'fix', 'fixes', 'fixed', 'resolve', 'resolves', 'resolved'];
  const regex = new RegExp(`(${keywords.join('|')})\\s+#\\d+`, 'i');
  return regex.test(commitMessage);
};

module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['commitlint-plugin-function-rules'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'revert']
    ],
    'type-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'always', 'sentence-case'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'function-rules/issue-reference': [
      2,
      (parsed) => {
        const branchName = process.env.BRANCH_NAME;
        if (!branchName) {
          return [true, 'Unable to check branch name, skipping issue reference check'];
        }
        if (!matchBranchNamePattern(branchName)) {
          return [false, `Branch name "${branchName}" does not match the required pattern: <initials>/<issue-num>/<issue-title><repository-name>`];
        }
        const issueNumber = getIssueNumberFromBranch(branchName);
        const fullCommitMessage = `${parsed.header}\n\n${parsed.body}\n\n${parsed.footer}`;

        if (parsed.references.includes(issueNumber) || findGitHubIssueReference(fullCommitMessage)) {
          return [true];
        }
        return [false, `Commit message should reference the issue #${issueNumber} or use GitHub keywords (e.g., "Fixes #${issueNumber}")`];
      }
    ]
  }
};
