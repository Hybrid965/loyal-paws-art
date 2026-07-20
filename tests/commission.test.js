const {test, expect} = require("@playwright/test");

test.beforeEach(async function ({page}) {
    await page.goto("/commission.html");

    await expect(
        page.getByRole("heading", {
            level: 1,
            name: "Commission a portrait"
        })
    ).toBeVisible();
});

test("empty commission form displays validation errors", async function ({
    page
}) {
    await page.getByRole("button", {name: "Send Enquiry"}).click();

    const errors = page.locator("#error-summary li");

    await expect(errors.first()).toBeVisible();
    expect(await errors.count()).toBeGreaterThan(0);
});

test("arrow keys change the selected portrait medium", async function ({
    page
}) {
    const pastel = page.locator(
        '.medium-card[data-value="pastel"]'
    );
    const pencil = page.locator(
        '.medium-card[data-value="pencil"]'
    );
    const hiddenInput = page.locator("#medium");

    await pastel.focus();
    await page.keyboard.press("ArrowRight");

    await expect(pencil).toHaveAttribute("aria-checked", "true");
    await expect(pastel).toHaveAttribute("aria-checked", "false");
    await expect(hiddenInput).toHaveValue("pencil");

    await page.keyboard.press("ArrowLeft");

    await expect(pastel).toHaveAttribute("aria-checked", "true");
    await expect(hiddenInput).toHaveValue("pastel");
});

test("photo upload rules reject invalid files", async function ({page}) {
    const photoInput = page.locator("#photo");
    const submitButton = page.getByRole("button", {
        name: "Send Enquiry"
    });

    await photoInput.setInputFiles({
        name: "notes.txt",
        mimeType: "text/plain",
        buffer: Buffer.from("Not an image")
    });

    await submitButton.click();

    await expect(page.locator("#error-summary")).toContainText(
        "Photos must be JPG, PNG or WebP files."
    );

    const sixImages = Array.from({length: 6}, function (_, index) {
        return {
            name: `photo-${index + 1}.jpg`,
            mimeType: "image/jpeg",
            buffer: Buffer.from([255, 216, 255, 217])
        };
    });

    await photoInput.setInputFiles(sixImages);
    await submitButton.click();

    await expect(page.locator("#error-summary")).toContainText(
        "Please upload no more than 5 photos."
    );

    await photoInput.setInputFiles({
        name: "large-photo.jpg",
        mimeType: "image/jpeg",
        buffer: Buffer.alloc((10 * 1024 * 1024) + 1)
    });

    await submitButton.click();

    await expect(page.locator("#error-summary")).toContainText(
        "Each photo must be smaller than 10MB."
    );
});
