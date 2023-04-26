module.exports = {
  env: {
    commonjs: true,
    es2022: true,
    jest: true,
    node: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:security/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {},
  parserOptions: {
    project: true,
    sourceType: 'module',
    tsconfigRootDir: __dirname
  }
};
