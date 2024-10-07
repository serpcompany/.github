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
    // Removed the following rules
    // 'subject-empty': [2, 'never'],
    // 'type-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'function-rules/issue-reference': [
      2,
      'always',
      ({ subject, body, footer }) => {
        const branchName = process.env.BRANCH_NAME;
        if (!branchName) {
          return [true, 'Unable to check branch name, skipping issue reference check'];
        }

        const pattern = /^[a-z]+\/\d+\/[\w-]+[\w/.]+$/;
        if (!pattern.test(branchName)) {
          return [false, `Branch name "${branchName}" does not match the required pattern: <initials>/<issue-num>/<issue-title><repository-name>`];
        }

        const issueNumber = branchName.split('/')[1];
        const fullCommitMessage = `${subject}\n\n${body}\n\n${footer}`;

        const keywords = ['close', 'closes', 'closed', 'fix', 'fixes', 'fixed', 'resolve', 'resolves', 'resolved'];
        const regex = new RegExp(`(${keywords.join('|')})\\s+#\\d+`, 'i');

        if (regex.test(fullCommitMessage)) {
          return [true, 'Issue reference is valid'];
        }
        return [false, `Commit message should reference the issue #${issueNumber} or use GitHub keywords (e.g., "Fixes #${issueNumber}")`];
      }
    ]
  }
};
