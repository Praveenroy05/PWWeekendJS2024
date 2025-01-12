// https://demo.guru99.com/test/simple_context_menu.html

const {test, expect} = require('@playwright/test')


test('Handling mouse operations', async ({page})=>{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
    page.on('dialog', (dialog) =>{
        console.log(dialog.message())
        dialog.accept()
    })
    await page.locator("text=right click me").click({button:'right'})
    await page.waitForTimeout(3000)
    await page.locator("text=Quit").click()
    await page.waitForTimeout(2000)
    await page.locator("text=Double-Click Me To See Alert").dblclick() // dialog
    await page.waitForTimeout(3000)

})

test("Prompt alert", async ({page})=>{
    await page.goto("https://demoqa.com/alerts")
    page.on('dialog', (dialog) =>{
        dialog.accept("Test")
    })
    await page.locator("#promtButton").click()
    await page.waitForTimeout(2000)
    await expect(page.locator("#promptResult")).toBeVisible()
  //  await page.waitForTimeout(2000)
})