# Git Workflow

This document outlines the team's Gitflow for working collaboratively together.

**Git Workflow Steps / Overview:**

1. `Issue`: Choose an issue to work on.
2. `Branch`: Create a branch from the issue. The branch source should be `dev`.
3. `Develop`: Work locally on your branch, following our [git commit guidelines]().
4. `Push/PR`: When finished, push your branch to the remote with a PR (or a draft PR if can't finish in one session) - if the CICD checks pass mark it as "Ready for Review"
5. `Review`: After it's been reviewed and merged
6. `Repeat`: Grab the next issue & repeat the process!



---

## 1. Issue

Work based on issues in the current "milestone" - designated by an asterisk(`*`).

![2024-10-17 21 30 54](https://github.com/user-attachments/assets/700239ab-42b9-40ed-9c3a-744b47dd807e)


From there, work on issues based on the following priority:
1. Issues with the following labels: `bug`, `security`, `regression`.
2. By "Due date" (only applies if the issue is connected to a Github project, or you're using Volta)

> ❓ If there's no issue made for what you need to do, you can create one with `gh issue create` followed by a few interactive prompts.
> 🎗️ Remember to you ASSIGN the issue to yourself before you start it


- [How to run this workflow from the CLI](https://gist.github.com/devinschumacher/ea416af5542ac7102c8e1ffd0ab38a99)



## 2. Branch

Create a feature branch from an issue to work on. In most cases, the branch _source_ should be `dev`.
Follow the branch naming convention: `<your-initials>/<issue-number>/<branch-name>`


### Syntax

```
gh issue develop <issue-number> [--base <base-branch>] [--name <branch-name>] [--checkout]
```

- `gh issue develop`: Will create a branch for you to work on that's connected to an issue
- `<issue-number>`: The number of the issue you want to link the branch to.
- `--base <base-branch>`: (Optional) The branch you want to base your new branch on. Defaults to the repository's default branch if not specified.
- `--name <branch-name>`: (Optional) The name for the new branch. If not provided, GitHub CLI generates a name based on the issue title.
- `--checkout`: Will switch to the branch after it creates it, saving you from having to run a `git switch <branch-name>` afterwards

### Example

Example: Createing a branch for issue #48, from the `dev` branch with a custom issue title:
```
# run command from the main branch
devin:~/repos/projects/serp-ui-nuxt (main)$
$ gh issue develop 32 --name ds/32/company-index --checkout

github.com/serpcompany/serp-ui-nuxt/tree/ds/32/company-index
From github.com:serpcompany/serp-ui-nuxt
 * [new branch]      ds/32/company-index -> origin/ds/32/company-index
 
# automatically switched to the created branch
devin:~/repos/projects/serp-ui-nuxt (ds/32/company-index)$
```

### Branch Workflow Example (GUI)

![create a branch from an issue in github](https://github.com/user-attachments/assets/93aadfff-1c9b-43b1-be28-f62b6a3b2f1a)



## 3. Develop
1. Mark the task as "In Progress" (if it's attached to a Github Project or using Volta)
2. Work locally on your branch, following our [git commit conventions][git-commit-conventions].

### Example workflow

1. Do some work, stage changes.
```bash
# check the status of your repo
git status

# add new files, or stage edited ones
git add <files>
```

2. Commit when ready
```bash
git commit
```

3. Repeat steps 1 & 2 until you've completed the items on the issue you're working on.

> Remember:
>
> Always fetch/sync your branch with the remote source branch before pushing to minimize conflicts.


## 4. Push/PR
When you're finished with step 3:
1. Push your branch from local->remote and create a PR to the appropriate branch.
2. Wait till the CICD checks run & PASS.
3. Click the `Ready for Review` buttno, and select some options of other developers to conduct the review.


## 5. Review
After it's been reviewed and merged, delete the branch from local and remote.


## Repeat
Grab the next issue for the next issue!



<!-- links -->

[git-commit-conventions]: /content/contributing/git-commit-conventions.md
