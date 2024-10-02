# Commit `git commit` Guidelines

## Principles

1. Commit early, commit often: In other words, don't make large swaths of changes before you decide to commit. Think of committing like 'hitting the Save' key.

2. Think scope, not size: Think about *what* you are putting into the commit. The size of the commit should be of secondary concern to *what* goes in it.

If you feel you're done with a particular change, go ahead and add the files to the index, then make a commit.

Be specific about which files to stage, so if you had made different kinds of changes across different files, be specific with staging them (instead of just running a massive `git add .`)

3. Write meaningful commit messages, every time.

There are many scenarios where good commit message can be very helpful, such as:

- The output of `git log`
- Using `git log` with `--grep` (letting you search through commit messages).
- Finding good/bad commits quickly with `git bisect`

## Guidelines

### Don't submit whitespace errors

> You can check for whitespace errors before you commit by running `git diff --check`

### Keep commits small & related.

Try to make each commit a logically separate change-set. 

At a minimum, one commit per issue with a useful commit message. If some of the changes modify the same file, try to use `git add --patch` to partially stage files.

> This makes it easier for others to review your changes. And to pull out / revert one of the changesets later.

### Use the [imperative mood](https://www.google.com/search?q=english+grammar+imperative+mood&rlz=1C5GCEA_enUS997US997&oq=english+grammar+imperative+mood&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTINCAEQABiDARixAxiABDIKCAIQLhjUAhiABDIKCAMQLhjUAhiABDIKCAQQABixAxiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDINCAgQABiDARixAxiABDINCAkQABiDARixAxiABNIBCDE2NjVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8)

Avoid messages like:
- "updated documentation"
- "fixes login bug"
- "i went through the code and ..."

Instead, write a commit message as if you were giving the computer a command.

For example: "Update documentation" and "fix intermittent bug when logging in".


### Commit message structure

Commit messages should have 3* parts:

1. A single line commit header
2. A blank line
3. The commit body (*optional)

#### The single line commit header

Every commit message should start with a `single line header` that's no more than ~50 characters, and  should be all *lowercase* - except for acronyms (like CSS) or proper nouns (like Git)

The commit header has 3 parts:

1. A short action word describing the commit action and the commit number
2. A space, hyphen, space (` - `)
3. A concise description of the change

Like: `resolve #5 - remove the profanity from docs`

#### A blank line

The single line "commit header" must be followed by an intentional blank line (to separate the header from the body).

Like the ones separating these sentences.

The blank line is important not just for visual aesthetics, but for the way Git reads and uses this information in various commands.

#### The commit body

Following the blank line is an (optional) more detailed explanation. If you feel that additional information about why the commit was made, or why you chose a particular method of doing some thing you can use the body area. The commit body should focus on *why* the change was made (not *what* or *how*).

> Body area text should be treated as prose: sentences start with an uppercase letter and punctuation is used if needed.

#### Commit message example 

```
resolve #5 - chore: remove the profanity from docs

Here is some more detailed explanatory text, wrapped to about 72 chars.
I need more than a couple sentence to describe all the shit i was
thinking, so i keep writing. If the single line header was the subject 
of an email, this part would be kinda like the body of the email. 
Make sure I'm separated from that single line header with a blank line.

If I need more than one paragraph, i should separate them with a blank line too.

 - Markdown bullet points are fine to use too.

 - Use a hyphen(-) or asterisk(*) for the bullet, preceded by a single space,
   and also separated by blank lines.
```
