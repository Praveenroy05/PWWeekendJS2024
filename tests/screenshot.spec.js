// 1. Full page screenshot
// 2. screenshot for specific element

const {test, expect} = require('@playwright/test')

test('Screenshot handling', async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/client')
    // screenshot() - Helps us to take the screenshot of the page or an element
    await page.screenshot({path :'screenshot/fullPageScreenshot.png'})
    await page.locator("#userEmail").screenshot({path : 'screenshot/userName.png'})

})
