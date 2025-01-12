const {test, expect} = require('@playwright/test')

test('Hover over an element', async ({page})=>{
    await page.goto("https://www.spicejet.com/")
    // hover()
    await page.getByText("SpiceClub").first().hover()
    await expect(page.getByTestId("test-id-Earn Points")).toContainText("Earn Points")
})