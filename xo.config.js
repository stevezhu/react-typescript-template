module.exports = {
  extends: ['xo-react'],
  envs: ['browser', 'es2020', 'jest'],
  parser: '@typescript-eslint/parser',
  space: true,
  prettier: true,
  rules: {
    'import/no-anonymous-default-export': 'off',
    'import/no-unassigned-import': ['error', {allow: ['**/*.css']}],
    'react/prop-types': 'off',
    'unicorn/filename-case': [
      'error',
      {cases: {camelCase: true, pascalCase: true}},
    ],
  },
};
