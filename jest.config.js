module.exports = {
  preset: 'ts-jest',
  // Fixes https://github.com/kulshekhar/ts-jest/issues/823
  globals: {'ts-jest': {packageJson: 'package.json'}},
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
};
