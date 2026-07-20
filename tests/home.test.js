const {test, expect} = require("@playwright/test");

test("homepage loads and the portfolio CTA works", async function ({page}) {
    await page.goto("/");

    await expect(
        page.getByRole("heading", {
            level: 1,
            name: "Portraits that capture the soul of your pet"
        })
    ).toBeVisible();

    await page.getByRole("link", {name: "View Portfolio"}).click();

    await expect(page).toHaveURL(/portfolio\.html$/);
    await expect(
        page.getByRole("heading", {
            level: 1,
            name: "The Portfolio"
        })
    ).toBeVisible();
});
