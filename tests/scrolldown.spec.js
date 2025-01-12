// Sroll down

const {test, expect} = require('@playwright/test')

test('Scroll down by Playwright', {tag : '@regression'}, async ({page})=>{
      await page.goto("https://www.selenium.dev/downloads/")
      await page.getByText("About Selenium").last().click()
      await expect(page.locator("h1.d-1")).toContainText("About Selenium")
})


test('Scroll down by using a method', {tag : '@smoke'}, async ({page})=>{
    await page.goto("https://www.selenium.dev/downloads/")
    await page.getByText("Selenium Server (Grid)").scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)


})

test('@smoke Scroll down and scroll up by Playwright', async ({page})=>{
    await page.goto("https://www.selenium.dev/downloads/")
    await page.getByText("About Selenium").last().hover()
    await page.waitForTimeout(3000)
    await page.getByText("Selenium Server (Grid)").click()
    await page.waitForTimeout(3000)
 
})