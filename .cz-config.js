const { scopes } = require("./changelog.config");

const subjectLimit = 60;

module.exports = {
	types: [
		{
			value: "feat",
			name: "feat:     A new feature",
		},
		{
			value: "fix",
			name: "fix:      A bug fix",
		},
		{
			value: "docs",
			name: "docs:     Documentation only changes",
		},
		{
			value: "style",
			name: "style:    Changes that do not affect the meaning of the code\n            (styling, white-space, formatting, missing semi-colons, etc)",
		},
		{
			value: "refactor",
			name: "refactor: A code change that neither fixes a bug nor adds a feature",
		},
		{
			value: "perf",
			name: "perf:     A code change that improves performance",
		},
		{
			value: "test",
			name: "test:     Adding missing tests or correcting existing tests",
		},
		{
			value: "build",
			name: "build:    Changes that affect the build system or external dependencies\n            (example scopes: gulp, broccoli, npm)",
		},
		{
			value: "chore",
			name: "chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation\n            (example scopes: eslint, husky)",
		},
		{
			value: "ci",
			name: "ci:       Changes to our CI configuration files and scripts\n            (example scopes: Travis, Circle, BrowserStack, SauceLabs)",
		},
		{
			value: "revert",
			name: "revert:   Revert to a commit",
		},
	],
	scopes,
	messages: {
		type: "Select the type of change that you're committing:",
		scope: "Scope of this change:",
		subject:
			`Write a SHORT, IMPERATIVE tense description of the change (max: ${subjectLimit}chars):\n`,
		body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
		breaking: "List any BREAKING CHANGES (optional):\n",
		footer: "List any ISSUES CLOSED by this change (optional)",
		confirmCommit: "Are you sure you want to proceed with the commit above?",
	},

	allowBreakingChanges: ["feat", "fix"],
	subjectLimit,
	footerPrefix: "Related Issue Number:",
};
