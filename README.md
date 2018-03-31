# branch-naming-check
Enforce naming conventions on git branches

`branch-naming-check` is a tool that checks whether or not the current branch of a git project match a certain name pattern (specified as a regular expression). This tool is primarily used as a git hook to enforce teams naming conventions.

## Install

```
npm install --save-dev @innocells/branch-naming-check
```

## Usage
```
branch-naming-check <regex>
```
As a git hook using [Husky](https://github.com/typicode/husky) (recommended) add a `precommit` (or `prepush`) script to your project's `package.json` file:
```json
{
  "scripts": {
    "precommit": "branch-naming-check '(feature|release|hotfix)/\\d+/(JIRA-\\d+_)?[a-z-]+'",
  },
  "devDependencies": {
    "husky": "^0.14.3"
  }
}
```
