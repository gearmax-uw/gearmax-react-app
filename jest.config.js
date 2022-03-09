module.exports = {
    moduleNameMapper: {
      "\\.(css|less|png|jpg)$": "identity-obj-proxy"
    },

    testEnvironment: 'jsdom',

    transform: {
      "\\.tsx?$": "ts-jest",
      "\\.jsx?$": "babel-jest", 
    },
    // testURL: 'http://localhost: 3000',

  };