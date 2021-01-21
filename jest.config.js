module.exports = {
  preset: "ts-jest",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  setupFilesAfterEnv: ["./.enzyme/setupTests.ts"],
  testEnvironment: "enzyme",
  watchPathIgnorePatterns: ["node_modules"],
  moduleDirectories: ["src/ts", "node_modules"],
};
