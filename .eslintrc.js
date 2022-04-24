module.exports = {
  "root": true,
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
    'project': ['./tsconfig.json']
	},
	'plugins': [
		'react',
    '@typescript-eslint',
    'prettier'
	],
	'rules': {
		'indent': 'off',
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			2,
			'single'
		],
    'semi': 0,
    'no-var': 2, //禁用var，用let和const代替
    'space-before-function-paren': 'off',
    '@typescript-eslint/no-explicit-any': 0  //关闭any类型警告:
		// 'no-var': 0, // 禁止使用 var
	}
}
