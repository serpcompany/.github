# Git Workflow

This document outlines the team's Gitflow for working collaboratively together.

## Steps

1. `Issue`: Choose an issue to work on.
2. `Branch`: Create a branch from the issue. The branch source should be `dev`.
3. `Develop`: Work locally on your branch, following our [git commit guidelines](https://github.com/serpcompany/serp/blob/main/git-commit-conventions.md).
4. `Push/PR`: When finished, push your branch to the remote with a PR (or a draft PR if can't finish in one session)
6. `Review`: After it's been reviewed and merged, delete the branch.
7. `Repeat`: Grab the next issue for the next issue.

> Before you get started working on any repository, please make sure you enable format on save for your editor.

---

### Issue

Display a list of available issues:

```bash
gh issue list
```
<img width="773" alt="image" src="https://private-user-images.githubusercontent.com/45643901/371811559-dc7ab816-f937-45cd-bced-2f30db39b206.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mjg0NDMzMTYsIm5iZiI6MTcyODQ0MzAxNiwicGF0aCI6Ii80NTY0MzkwMS8zNzE4MTE1NTktZGM3YWI4MTYtZjkzNy00NWNkLWJjZWQtMmYzMGRiMzliMjA2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDA5VDAzMDMzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWU0MTM3MDgxNDRlZGY0NmZkZDI1ZGFjZTdlNDNmMTI1OGNmYjU5NTQ5OGNlNmIzMzYyYWQ5ZDA2Njk4MjJiZTQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.UVGB4tdH2tjIowCeYh53OTdnz4gaDukGXtfbPPM3ZoI">

> Note:
>
>  Choose an issue from the "Todo" column in [Volta](https://volta.net/), or from Github issues tagged with the current "Milestone".
>
> Prioritize issues with the following labels: `bug`, `security`, `regression`.
>
> If there's no issue for you to work on, you can create one with `gh issue create` followed by a few interactive prompts.


### Branch
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


### Develop
Work locally on your branch. Follow our [git commit conventions](https://github.com/serpcompany/serp/blob/main/git-commit-conventions.md).

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


### Push/PR
Create a PR when finished (or a draft PR if can't finish in one session)
``bash
gh pr create


### Review
After it's been reviewed and merged, delete the branch from local and remote.

### Repeat
Grab the next issue for the next issue!

## Resources

- [An example of the workfow (w/ commands)](https://gist.github.com/devinschumacher/26a05e6c1d8976981a42f28f65eecdb3#file-2_example-md)
