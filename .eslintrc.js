module.exports = {
  root: true,
  extends: ['@react-native-community', 'eslint:recommended'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'off',
    'no-console': 'error',
    'react/jsx-boolean-value': 'error',

    // Sort
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // ext library & side effect imports
          ['^@?\\w', '^\\u0000'],
          // Lib and hooks
          ['^@/utils', '^@/hooks'],
          // components
          ['^@/components'],
          // Other imports
          ['^@/'],
          // relative paths up until 3 level
          [
            '^\\./?$',
            '^\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\./\\.\\.(?!/?$)',
          ],
          ['^@/types'],
          // other that didnt fit in
          ['^'],
        ],
      },
    ],
  },
  plugins: ['@typescript-eslint', 'simple-import-sort'],

  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'react/prop-types': 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'default',
            format: ['strictCamelCase'],
            leadingUnderscore: 'forbid',
            trailingUnderscore: 'forbid',
          },
          {
            selector: 'typeLike',
            format: ['StrictPascalCase'],
          },
          {
            selector: 'variable',
            // Exception for FunctionComponents
            format: ['strictCamelCase', 'StrictPascalCase', 'UPPER_CASE'],
          },
          {
            selector: 'function',
            // Exception for FunctionComponents
            format: ['strictCamelCase', 'StrictPascalCase'],
          },
          {
            selector: 'enumMember',
            format: ['StrictPascalCase', 'strictCamelCase'],
          },
        ],
      },
    },
  ],
};
