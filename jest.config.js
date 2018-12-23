module.exports = {
    preset : "jest-puppeteer",

    setupTestFrameworkScriptFile : "<rootDir>/setup.js",

    snapshotSerializers : [
        "jest-serializer-html",
    ],
};
