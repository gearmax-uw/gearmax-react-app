module.exports = {
    moduleNameMapper: {
      "\\.(css|less)$": "identity-obj-proxy"
    },

    testEnvironment: 'jsdom',

    transform: {
      // "\\.tsx?$": "ts-jest",
      "\\.jsx?$": "babel-jest", 
    },
    // testURL: 'http://localhost: 3000',
    // preset: 'ts-jest',

  };