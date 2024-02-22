/** @type {import('jest').Config} */
const config = {
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  moduleFileExtensions: ["js", "ts", "tsx", "json", "jsx", "node"],
  modulePaths: ["<rootDir>/src"],
  resetMocks: true,
  roots: ["<rootDir>/src"],
  globals: {
    fetch: global.fetch,
    React: require("react"),
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^src/(.*)": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "@swc/jest",
  },
  testEnvironment: "jsdom",
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
  ],
};

module.exports = config;
