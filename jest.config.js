module.exports = {
    preset: "jest-puppeteer",
    globals: {
        URL: "https://adimoldovan.github.io/demo-shop/#/"
    },
    testMatch: [
        "**/test/**/*.test.js"
    ],
    verbose: true
}