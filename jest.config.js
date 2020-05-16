module.exports = {
  preset: 'ts-jest',
  globals: {'ts-jest': {packageJson: 'package.json'}},
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
};
