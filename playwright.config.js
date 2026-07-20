const {defineConfig, devices} = require("@playwright/test");

module.exports = defineConfig({
    testDir: "./tests",
    fullyParallel: false,
    timeout: 30000,
    expect: {
        timeout: 5000
    },
    reporter: [
        ["list"],
        ["html", {open: "never"}]
    ],
    use: {
        baseURL: "http://127.0.0.1:5500",
        trace: "retain-on-failure",
        screenshot: "only-on-failure",
        video: "retain-on-failure"
    },
    webServer: {
        command: "npx http-server . -p 5500 -c-1",
        url: "http://127.0.0.1:5500",
        reuseExistingServer: true,
        timeout: 120000
    },
    projects: [
        {
            name: "chromium",
            use: devices["Desktop Chrome"]
        }
    ]
});
