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
  - `


## Setup 
### Commands
Run these commands

**Install Packages:** `yarn add --dev @commitlint/config-conventional @commitlint/cli lint-staged husky@^7.0.0 commitizen cz-customizable`
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

- **Skip Release:** You can skip 

### Extra Steps

- TODO: Prettier/ESLint
- TODO: Add `no release` PR label to repo
