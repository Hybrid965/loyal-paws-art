const {test, expect} = require("@playwright/test");

test.beforeEach(async function ({page}) {
    await page.goto("/portfolio.html");

    await expect(
        page.locator("#gallery-grid li").first()
    ).toBeVisible();
});

test("portfolio loads portraits and filters them by pet type", async function ({
    page
}) {
    const allCards = page.locator("#gallery-grid li");
    const totalCards = await allCards.count();

    expect(totalCards).toBeGreaterThan(0);

    await page.getByRole("button", {name: "Dog", exact: true}).click();

    const visibleCards = page.locator(
        '#gallery-grid li:not(.hidden)'
    );
    const visibleCount = await visibleCards.count();

    expect(visibleCount).toBeGreaterThan(0);

    for (let index = 0; index < visibleCount; index += 1) {
        await expect(visibleCards.nth(index)).toHaveAttribute(
            "data-petType",
            "dog"
        );
    }

    await expect(page.locator("#gallery-count")).toHaveText(
        `Showing ${visibleCount} Portraits`
    );
});

test("portrait lightbox opens and closes with Escape", async function ({
    page
}) {
    await page.locator("#gallery-grid li").first().click();

    const lightbox = page.locator("#lightbox");

    await expect(lightbox).toHaveClass(/active/);
    await expect(page.locator("#lightbox-img")).not.toHaveAttribute(
        "src",
        /R0lGODlhAQABAAD/
    );

    await page.keyboard.press("Escape");

    await expect(lightbox).not.toHaveClass(/active/);
});
