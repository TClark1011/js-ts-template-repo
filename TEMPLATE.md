TODO

- [x] Check commit message quality
- [x] Lint on commit
- [x] Commitizen commit generator
- [x] Get `--retry` working (try using `cz-customizable` instead of `git-cz`)
- [x] Standard Version
- [x] Test on PR
- [ ] Version Bump on Merge
- [ ] Document setup steps (add scripts/dependencies setting up prettier + eslint)
  - `yarn add --dev @commitlint/config-conventional @commitlint/cli lint-staged husky@^7.0.0 commitizen cz-customizable`
    - Go into dependencies in package and add `^` to `husky` then re-run `yarn`
  - `yarn set-script prepare "husky install"`
  - `yarn set-script pre-commit "cz"`
  - `yarn run commitizen init cz-conventional-changelog` - Set commitizen `path` in `package.json` to `node_modules/cz-customizable` - Delete `package-lock.json` - run `yarn`
    - `npx husky set .husky/commit-msg 'npx --no-install commitlint --edit \"$1\"' & npx husky set .husky/pre-commit 'npm run pre-commit'`
- [ ] Document Customisation
  - Scopes - change `scopes` field in `changelog.config.js`
- [ ] Document optional extra steps
  - Eslint + prettier
  - Deploy to NPM on merge
  - Test on extra node versions: Add extra desired versions to the `with/node-version` key in the test github workflow file as such:

```yaml
with:
	node-version:
		- 12
		- 13
		- 14
```

## Extra Scripts
```json
{
  "release": "standard-version",
  "fix-husky": "npx husky set .husky/commit-msg 'npx --no-install commitlint --edit \"$1\"' & npx husky set .husky/pre-commit 'npm run    pre-commit'",
  "clean":"yarn clean:modules & yarn clean:build & yarn clean:lock",
  "clean:modules": "rm -r --force node_modules",
  "clean:build": "rm -r --force build",
  "clean:lock": "rm --force yarn.lock"
}
```