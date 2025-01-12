
const {test, expect} = require('@playwright/test')

test('Shadow dow handling', async ({page})=>{
    await page.goto("https://books-pwakit.appspot.com/explore?q=")
    await page.locator("#input").fill("Testing")
    await page.locator("div.icon").click()
    await expect(page.locator(".books li").first()).toBeVisible()
    await page.waitForTimeout(5000)
})
