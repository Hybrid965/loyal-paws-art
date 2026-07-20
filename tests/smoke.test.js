const {test, expect} = require("@playwright/test");

const baseUrl = "https://hybrid965.github.io/loyal-paws-art";

test("main Loyal Paws user journeys work", async function ({page}) {
    // Homepage
    await page.goto(baseUrl + "/");

    await expect(
        page.getByRole("heading", {
            name: "Portraits that capture the soul of your pet"
        })
    ).toBeVisible();

    // Portfolio
    await page.goto(baseUrl + "/portfolio.html");

    await expect(
        page.getByRole("heading", {
            name: "The Portfolio"
        })
    ).toBeVisible();

    await expect(
        page.locator("#gallery-grid li").first()
    ).toBeVisible();

    // Commission page
    await page.goto(baseUrl + "/commission.html");

    await expect(
        page.getByRole("heading", {
            name: "Commission a portrait"
        })
    ).toBeVisible();

    // Check empty-form validation
    await page.getByRole("button", {
        name: "Send Enquiry"
    }).click();

    await expect(
        page.locator(".error-message").first()
    ).toBeVisible();
});