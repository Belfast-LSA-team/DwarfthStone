module.exports = {
    testMatch: ["**/*.spec.js", "**/*.spec.jsx"],
    moduleNameMapper: {
        "^.+\\.css$": "identity-obj-proxy",
    },
    setupFiles: ["<rootDir>/client/test/enzyme"],
    snapshotSerializers: ['enzyme-to-json/serializer'],
};
