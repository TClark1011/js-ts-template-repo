## TODO

- [x] Check commit message quality
- [x] Lint on commit
- [x] Commitizen commit generator
- [x] Get `--retry` working (try using `cz-customizable` instead of `git-cz`)
- [x] Standard Version
- [x] Test on PR
- [x] Version Bump on Merge
- [ ] Delete files
  - `package.json`
  - `yarn.lock`
  - `node_modules`


## Setup 
Before using this repository, you should run any kind of CLI template tool (eg; `create-react-app`) and then download this repository and extract its files into your project folder.

**Copy Over Files:** Copy the following files and folders from this repository into the new project
- `.commitlintrc.js`
- `.cz-config.js`
- `.gitignore` (if your project already has this file then copy its contents into the existing file)
- `.lintstagedrc.json`
- `.changelog.config.js`
- `TEMPLATE.md`
- `.husky`
- `.github`

**FOR MAC:** If you are on mac you need to run this command: `chmod ug+x .husky/* && chmod ug+x .git/hooks/*`

**IMPORTANT:** If you used a project template and it's default branch is named `master` instead of `main`, you need to go into the git hooks and change any reference to the `main` branch to `master`

**Install Packages:**  Run this command `yarn add --dev standard-version @commitlint/config-conventional @commitlint/cli lint-staged husky@^7.0.0 commitizen cz-customizable is-ci`

**Setup Commitizen Config:** Add this to the bottom of `package.json`

```json
"config": {
  "commitizen": {
    "path": "node_modules/cz-customizable"
  }
}
```

**Create Release Labels:** In your github repository create the following PR labels:
- `force-release:none`
- `force-release:patch`
- `force-release:minor`
- `force-release:major`

These can added to pull requests to specify what type of version bump should be used when running the release script. If none of these are used then the bump will be inferred according to the commits.
### Scripts

Add these scripts to `package.json`
```json
{
  "prepare": "husky install",
  "pre-commit": "lint-staged",
  "commit": "cz",
  "release": "standard-version",
  "fix-husky": "npx husky set .husky/commit-msg 'npx --no-install commitlint --edit \"$1\"' & npx husky set .husky/pre-commit 'npm run pre-commit'",
  "test": "echo 'testing'",
  "clean": "yarn clean:modules & yarn clean:build & yarn clean:lock",
  "clean:modules": "rm -r --force node_modules",
  "clean:build": "rm -r --force build",
  "clean:lock": "rm --force yarn.lock"
}
```

### Customisation

- **Scopes:** To change the list of valid scopes, edit the `scopes` field in `changelog.config.js`
  
- **Auto Testing Node Version(s):** You can change the version of node that the GitHub testing action will use, or even have it run the tests multiple times on different versions by changing the `with` key in the "setup node" step of the action, eg; 

```yaml
with:
	node-version:
		- 12
		- 13
		- 14
```

- **.gitignore:** There is a good chance that any CLI template tool you use will include a `.gitignore` file, but here is the one I recommend:

```
# Folders
node_modules
dist
build

# Personal Configs
.gitconfig
.vscode/settings.json

# Private Environments
.env
.env.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Some CI tools may create a package-lock file so we ignore it since we use `yarn` in development
package-lock.json 

# Ignore workflow folder created by `act` 
workflow
```
**IMPORTANT:** If you decide to use the `.gitignore` file included with a template, it is still important that you add `package-lock.json` to the end of the file (unless you are using NPM as your package manager for some unfathomable reason).

### Extra Steps

- TODO: Add `no release` PR label to repo

#### Eslint 

Follow eslint instructions [here](https://www.npmjs.com/package/eslint-config-thomas-clark)

#### Setup LGTM
Go to [LGTM](https://lgtm.com/) and setup your repository to allow for automated PR code reviews.

#### Badges:

Add the following html Code to your readme, replacing the text where specified, to add fancy badges.


```html
<p align="center"> 
  <img alt="CI" src="*full-link-to-repo*/actions/workflows/CI.yml/badge.svg" />
  <img alt="license" src="https://img.shields.io/github/license/*github-username*/*name-of-repo*" />
  <img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/*github-username*/*name-of-repo*.svg?logo=lgtm&logoWidth=18"/>
</p>
```
