//frame handling
const {test, expect} = require('@playwright/test')

test('Frame handling', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await expect(page.getByPlaceholder("Hide/Show Example")).toBeVisible()
    await page.locator("#hide-textbox").click()
    await expect(page.getByPlaceholder("Hide/Show Example")).toBeHidden()
    // frameLocator()
    const framePage = await page.frameLocator("#courses-iframe")
    await framePage.getByText("All Access plan").first().click()
    await expect(framePage.getByRole('heading', {name:'All Access Subscription'})).toBeVisible()
    await page.getByText("Home").click()
    await expect(page.getByText("JOIN NOW").first()).toBeVisible()
   

})

