const {test, expect} = require("@playwright/test");

test("404 page displays a countdown and redirects home", async function ({
    page
}) {
    test.setTimeout(20000);

    await page.goto("/404.html");

    await expect(
        page.getByRole("heading", {
            level: 1,
            name: "Page Not Found"
        })
    ).toBeVisible();

    await expect(page.locator("#countdown")).toHaveText("10");

    await expect(page).toHaveURL(
        "http://127.0.0.1:5500/",
        {timeout: 12000}
    );
});
