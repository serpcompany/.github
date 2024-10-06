---

title: How to Remove (Delete) all UNTRACKED Files in Git
tags: ["git", "git clean", "untracked files"]

---

# How to Remove (Delete) all UNTRACKED Files in Git

When you add files to a repository, and have no yet STAGED them (ie: run `git add`) they will be 'untracked'.

1. Add a file named `asdfasdf.md`
2. Run `git status`

<img width="698" alt="image" src="https://gist.github.com/user-attachments/assets/6d575b98-9a64-4cc6-b52a-43e17e9da1d9">

If you don't want to save the files, you can remove them using `git clean`

```bash
git clean -f .
```
