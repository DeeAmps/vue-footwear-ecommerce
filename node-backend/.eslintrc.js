module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: 'airbnb-typescript/base',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		indent: 'off',
		'@typescript-eslint/indent': 'warn',
	},
};
