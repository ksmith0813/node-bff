module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['airbnb-base', 'airbnb-typescript/base', 'plugin:prettier/recommended'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'dist'],
  rules: {
    'no-plusplus': 'off',
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'jsx-quotes': [2, 'prefer-single'],
    'class-methods-use-this': 0,
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/naming-convention': [
      2,
      {
        selector: 'enum',
        format: ['UPPER_CASE'],
      },
    ],
  },
};
