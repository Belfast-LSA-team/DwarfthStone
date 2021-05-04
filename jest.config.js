module.exports = {
    testMatch: ["**/*.spec.js"],
    moduleNameMapper: {
        "^.+\\.css$": "identity-obj-proxy",
    },
    setupFiles: ["<rootDir>/client/test/enzyme"],
};
