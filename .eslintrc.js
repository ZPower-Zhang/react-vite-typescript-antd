module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
		'plugin:@typescript-eslint/recommended'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 'latest',
		'sourceType': 'module',
	},
	'plugins': [
		'react',
		'@typescript-eslint'
	],
	'rules': {
		'indent': 0,
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			2,
			'single'
		],
    'semi': 0,
    'no-var': 0, //禁用var，用let和const代替
    '@typescript-eslint/no-explicit-any': 0  //关闭any类型警告:
		// 'no-var': 0, // 禁止使用 var
	}
}
