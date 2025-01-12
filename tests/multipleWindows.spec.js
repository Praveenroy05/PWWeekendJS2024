//
const {test, expect} = require('@playwright/test')

test("Child window handling", async ({page})=>{

    //  const context = await browser.newContext()
    //  const page = await context.newPage()

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await expect(page.locator("//a[contains(@href,'documents-request')]")).toHaveAttribute('class', 'blinkingText')
    // await page.locator("//a[contains(@href,'documents-request')]").click() //  'page' event
    // const newPage = await context.waitForEvent('page')

    // Promise.all() - [1,2,3]

    //  const [newPage] = await Promise.all([
    //  context.waitForEvent('page'),
    //  page.locator("//a[contains(@href,'documents-request')]").click() //  'page' event
    //  ])
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),  // Waits for the popup event triggered by an action
        page.locator("//a[contains(@href,'documents-request')]").click()
    ]);


    await expect(newPage.locator(".auto-container .inner-box")).toContainText("Documents request")
    await page.locator("#username").fill("Testing")

    await page.waitForTimeout(3000)

})


