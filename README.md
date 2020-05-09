# Git commit parser

A CLI tool that gets current branch log commit history and writes them to a pull request template

## Table of contents
- [Dependencies](#dependencies)
- [Features](#features)
- [Installation](#installation)
- [Options](#options)
- [Examples](#examples)
---
## Dependencies
Requires [git](https://git-scm.com/) to be installed and `.gitconfig` file to include either `name` or `username` (otherwise, default `--pretty` format will get no value for you to include manually)

---

## Installation

```cmd
npm install git-commit-parser
```
---
## Features

- Inserts commit log history from current branch into a file
- Customizable pattern to be replaced in file
- Supports git log `--pretty` options ([docs here](https://git-scm.com/docs/pretty-formats))

---
## Options


| Command          |  Info                                                            | Default                              | Required           |
|------------------|------------------------------------------------------------------|--------------------------------------|:------------------:|
| `--help`         | Show help                                                        |                                      |                    |
| `--version`      | Show version                                                     |                                      |                    |
| `-f, --file`     | Relative path from root directory to pull request template file  |                                      | :white_check_mark: |
| `-p, --pattern`  | Pattern to be replaced in file                                   |`"<% changelog %>"`                   |                    |
| `-l, --log`      | Git log --pretty options                                         |`format:- %h %s by <username | user>` |                    |

---
## Examples

##### Default options
Being project folder structure like the following:

```bash
.
├── .github
│   ├── pull_request_template.md
├── node_modules
├── src
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

`pull_request_template.md` may look similar to this:

```markdown
### Main Changes

Try to summarize in a plain english the changes you made.

### Other Changes

In case that you include extra changes like upgrade dependencies or fixing typos, etc..

### Notes

You can add extra information if you want. Not mandatory

### Context

Please add here issues/Prs context and actions if needed as a list

### Changelog

<% changelog %>
```

Run `git-commit-parser`:

```cmd
git-commit-parser -f .github/pull_request_template.md
```
`<% changelog %>` will be replace with current branch commit history with default format:

```cmd
- 1e09236 feat: add feat3 by @neodmy
- ce38ac0 feat: add feat2 by @neodmy
- 8ac3463 feat: add feat1 by @neodmy
```

##### Customized pattern
As mentioned before, pattern in target file can be configured. For example, pattern `*? something ¿*` in target file can be replaced with:

```cmd
git-commit-parser -f .github/pull_request_template.md -p "*? something ¿*" 
```

##### Customized commit log history
Changelog can be configured too. `git-commit-parser` will append to `git log --pretty=` ([docs](https://git-scm.com/docs/pretty-formats)) any valid option provided with `-l, --log`. Running it like this:

```cmd
git-commit-parser -f .github/pull_request_template.md -l short
```
target file pattern will be replace with `short` option, giving something similar to:

```cmd
commit fc5ad6086d0ea4e3773ada5db0fd5f81c89136c4
Author: David Yusta <david.yusta@email.com>

    feat: add feat3

commit bc2198b0cf8381d2c4e6471beb1796636c751e81
Author: David Yusta <david.yusta@email.com>

    feat: add feat2

commit 124fce4dec16432c63db4e2fc6a952993b08b600
Author: David Yusta <david.yusta@email.com>

    feat: add feat1
```
