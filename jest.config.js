module.exports = {
    // testURL: 'http://localhost: 3000',
  //   presets:[
  //     "@babel/preset-env",
  //     "@babel/preset-react"
  // ]
  //   transform: {
  //     "^.+\\.(js|jsx)$": "babel-jest"
  // },


    // roots": [
    //   "<rootDir>/src"
    // ],
    // testMatch: [
    //   "**/__tests__/**/*.+(ts|tsx|js)",
    //   "**/?(*.)+(spec|test).+(ts|tsx|js)"
    // ],
    // "transform": {
    //   "^.+\\.(ts|tsx)$": "ts-jest"
    // },
    moduleNameMapper: {
      "\\.(css|less)$": "identity-obj-proxy"
    },
    // moduleNameMapper: {
    //   // '\\.(css|less)$': '<rootDir>/styleMock.js',
    //   "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    //   "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
    // },
    // testEnvironment: "jsdom",
    // moduleNameMapper: {
    //   "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    //   "\\.(scss|sass|css)$": "identity-obj-proxy"
    // },
    // preset: 'ts-jest',
    testEnvironment: 'jsdom',
    // testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(test).ts?(x)"],
    transform: {
      // "^.+\\.(t|j)sx?$": "ts-jest",
      // '^.+\\.ts?$': 'ts-jest',
      // "\\.tsx?$": "ts-jest",
      "\\.jsx?$": "babel-jest", // if you have jsx tests too
    },
    // transform: {
    //   ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
    // }
    // transformIgnorePatterns: [
    //     "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.js$",
    //     "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.ts$",
    //     "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.tsx$",
    // ],

  };