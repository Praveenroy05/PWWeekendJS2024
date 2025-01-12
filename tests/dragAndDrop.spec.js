const {test, expect} = require('@playwright/test')

test('@smoke Hover over an element', async ({page})=>{
    await page.goto("https://jqueryui.com/resources/demos/droppable/default.html")
    // dragTo(target locator)
    //await page.locator("div#draggable").dragTo(page.locator("div#droppable"))

    await page.locator("div#draggable").hover()
    await page.mouse.down()
    await page.locator("div#droppable").hover()
    await page.mouse.up()

    await page.waitForTimeout(5000)

})