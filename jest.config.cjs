module.exports = {
  verbose: true,
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+.tsx?$": ["ts-jest", {}],
  },
  moduleNameMapper: {
    "^@remix-run/testing": "<rootDir>/node_modules/@remix-run/testing",
  },
};