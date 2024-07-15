// https://jestjs.io/docs/configuration

/** @type {import('jest').Config} */
const config = {
  verbose: true,
  // reporters: ['default', 'jest-junit'],
  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: './test-results/jest',
      outputName: 'results.xml',
    }],
  ],
};

module.exports = config;
