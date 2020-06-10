module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: ['babel-loader', 'react-docgen-typescript-loader'],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
