module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
	plugins: ["svelte3", "@typescript-eslint"],
	ignorePatterns: ["*.cjs", "node_modules/"],
	overrides: [{ files: ["*.svelte"], processor: "svelte3/svelte3" }],
	settings: {
		"svelte3/typescript": () => require("typescript")
	},
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2020
	},
	rules: {
		"@typescript-eslint/no-inferrable-types": "off",
		"@typescript-eslint/explicit-module-boundary-types": "error",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/interface-name-prefix": "off",
		"@typescript-eslint/no-empty-function": "warn",
		"@typescript-eslint/no-empty-interface": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-this-alias": "warn",
		"@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
		"@typescript-eslint/no-use-before-define": "warn"
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
