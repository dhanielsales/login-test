module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  ],
  globals: {
    Atomics: 'readonly',
    React: 'writable',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'simple-import-sort', 'prettier'],
  settings: {
    'import/resolver': {
      typescript: {},
      'babel-plugin-root-import': {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    },
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  rules: {
    "require-atomic-updates": "off",
    'prettier/prettier': 'error',
    'simple-import-sort/sort': 'error',
    'react/react-in-jsx-scope': "off",
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx'],
      },
    ],
    'import/prefer-default-export': 'off',
  },
  overrides: [
    {
      "files": [
        "**/*.spec.js",
        "**/*.spec.jsx",
        "**/*.spec.ts",
        "**/*.spec.tsx"
      ],
      "env": {
        "jest": true
      }
    }
  ]
};
