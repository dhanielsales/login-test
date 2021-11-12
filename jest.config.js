/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const paths = {
    "~/*": ["*"]
}

const { pathsToModuleNameMapper } = require('ts-jest/utils');
const moduleNameMapper = pathsToModuleNameMapper(paths, { prefix: '<rootDir>/src' });

module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  roots: ['<rootDir>/src'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  moduleNameMapper,
  modulePaths: ['<rootDir>/src'],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json"
    }
  },
};