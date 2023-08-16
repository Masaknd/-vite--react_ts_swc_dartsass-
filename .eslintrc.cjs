module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  // overrides: [
  //   {
  //     env: {
  //       node: true,
  //     },
  //     files: ['.eslintrc.{js,cjs}'],
  //     parserOptions: {
  //       sourceType: 'script',
  //     },
  //   },
  // ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json'],
  },
  plugins:
    ['react', 'prettier', '@typescript-eslint'],
  ignorePatterns: ['build'],
  rules: {
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
  },
};
