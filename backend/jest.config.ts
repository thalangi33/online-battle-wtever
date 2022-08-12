import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  coverageDirectory: "coverage",
  // moduleDirectories: ["node_modules", "src"],
  modulePaths: ["src"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.js",
    "@src/(.*)": "<rootDir>/src/$1",
  },
  preset: "ts-jest",
  testEnvironment: "node",
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!(mongodb)/)"],
  setupFilesAfterEnv: ["<rootDir>/src/matchers/index.ts"],
};

export default config;
