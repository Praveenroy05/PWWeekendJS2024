const {test, expect} = require('@playwright/test')


// Fixtures in Playwright
// Fixtures are reusable blocks of code that can be used to set up and tear down test data
// browser, page

test("First Test case using browser fixture", async ({browser})=>{
    const context = await browser.newContext() 
    const page = await context.newPage()
    await page.goto("https://google.com")
    // async - await (together)
// await Launch the url
// await Fill the user and fill the password
// await Click on the login button
// await browser.close()

})

test("First Test case using page fixture", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client")
    await page.locator('#userEmail').fill("testnHNk@gmail.com", {timeout :100*1000})
    await page.locator("//input[@type='password']").fill("Test@123")
    await page.locator("#login").click()
    await expect(page.locator(".fa-sign-out")).toBeVisible()
  //  await page.close()
    
})