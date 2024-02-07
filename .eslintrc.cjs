module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    // 'airbnb'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.js'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'linebreak-style': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off', // disable for template app use only
    'import/no-cycle': 'off', // dep cycle required for routing pattern
    'jsx-a11y/label-has-associated-control': 'off', // catching correctly formatting labels w input
    'react-hooks/rules-of-hooks': 'off', // disable for atom state pattern
    // generally disagree with these
    'react/jsx-one-expression-per-line': 'off',
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'arrow-body-style': 'off',
  },
}
