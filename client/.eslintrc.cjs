module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}

// .eslintrc.js
// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:react-hooks/recommended',
//   ],
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 12,
//     sourceType: 'module',
//   },
//   plugins: [
//     'react',
//     'react-hooks',
//     'react-refresh',
//   ],
//   rules: {
//     'react/react-in-jsx-scope': 'off',
//   },
//   settings: {
//     react: {
//       version: 'detect',
//     },
//   },
// };
