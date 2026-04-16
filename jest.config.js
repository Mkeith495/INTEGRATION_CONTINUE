module.exports = {
    // ...
    transform: {
        "^.+\\.(ts|tsx)$": "babel-jest"
    },
    testTimeout: 120000
    // éventuellement:
    // transformIgnorePatterns: ["/node_modules/"]
};