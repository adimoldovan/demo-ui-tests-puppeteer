module.exports = {
    preset: "jest-puppeteer",
    globals: {
        URL: "https://adimoldovan.github.io/demo-shop/#/"
    },
    testMatch: [
        "**/test/**/*.test.js"
    ],
    verbose: true,
    reporters: [
        "default",
        ["jest-junit",
            {
                suiteName: "E2E Demo Shop tests",
                outputDirectory: "out/reports",
                outputName: "junit-results.xml",
                uniqueOutputName: "true",
            }
        ],
        ["jest-html-reporters", {
            "publicPath": "./out/reports",
            "filename": "test-report.html",
            "expand": true
        }]
    ]
}