# Gi Team Workflow

This document outlines the team's Gitflow for working collaboratively together.

## Steps

1. `Issue`: Choose an issue to work on.
2. `Branch`: Create a branch from the issue. The branch source should be `dev`.
3. `Develop`: Work locally on your branch, following our [git commit guidelines](https://github.com/serpcompany/serp/blob/main/git-commit-conventions.md).
4. `Push`: When finished, push your branch to the remote - it's a good idea to re-fetch and sync your branch with `dev` before pushing to minimize conflicts.
5. `PR`: Create a pull request from your branch to `dev`.
6. `Review`: After it's been reviewed and merged, delete the branch.
7. `Repeat`: Grab the next issue for the next issue.

> Before you get started working on any repository, please make sure you enable format on save for your editor.

---

### Issue
Before starting any work, make sure there is an issue for it. If there isn't, create one.

- Choose an issue from the "Todo" column in [Volta](https://volta.net/), or from Github issues tagged with the current "Milestone".
- Prioritize issues with the following labels: `bug`, `security`, `regression`.

#### Commands
```bash
gh issue list
```

### Branch
Create a branch from the issue.

- The branch source should be `dev`.
- Follow the branch naming convention: 

```
# syntax
<initials>/<issue-number>/<short-issue-title>

# example
ds/42/add-drizzle-orm
```


### Develop
Work locally on your branch.

- Follow our [git commit conventions](https://github.com/serpcompany/serp/blob/main/git-commit-conventions.md).

### Push
When finished, push your branch to the remote.

- Re-fetch and sync your branch with `dev` before pushing to minimize conflicts.

### PR
Create a pull request from your branch to `dev`.

### Review
After it's been reviewed and merged, delete the branch from local and remote.

### Repeat
Grab the next issue for the next issue!

## Resources

- [An example of the workfow (w/ commands)](https://gist.github.com/devinschumacher/26a05e6c1d8976981a42f28f65eecdb3#file-2_example-md)
