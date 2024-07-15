// https://jestjs.io/docs/configuration

/** @type {import('jest').Config} */
const config = {
  verbose: true,
  // reporters: ['default', 'jest-junit'],
  // Configuration options for Jest-Junit
  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: './test-results/jest',
      outputName: 'results.xml',
    }],
  ],

  // Configuration coverage
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
};

module.exports = config;
