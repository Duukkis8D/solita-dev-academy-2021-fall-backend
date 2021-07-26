module.exports = {
	'env': {
		'node': true,
		'commonjs': true,
		'es2021': true
	},
	'extends': 'eslint:recommended',
	'parserOptions': {
		'ecmaVersion': 12
	},
	'rules': {
		'indent': [
			'warn',
			'tab'
		],
		'no-mixed-spaces-and-tabs': [
			'error',
			'smart-tabs'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		'camelcase': 'error',
		'eqeqeq': 'error',
		'array-bracket-spacing': [
			'error',
			'always'
		],
		'brace-style': [
			'error',
			'1tbs'
		],
		'object-curly-spacing': [
			'error',
			'always'
		],
		'space-before-function-paren': [
			'error',
			'never'
		],
		'space-in-parens': [
			'error',
			'always'
		],
		'block-spacing': [
			'error',
			'always'
		],
		'template-curly-spacing': [
			'error',
			'never'
		]
	}
}
