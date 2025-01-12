const {test, expect} = require('@playwright/test')

const productName = "qwerty"
const countryName = " India"

test("@regression End to End automation",  async({page})=>{
    await page.goto("https://rahulshettyacademy.com/client")
    await page.locator('#userEmail').fill("test7lYM@gmail.com", {timeout :100*1000})
    await page.locator("//input[@type='password']").fill("Test@123")
    await page.locator("#login").click()
    await expect(page.locator(".fa-sign-out")).toBeVisible()
    const products = page.locator("div.card-body")
    await products.first().waitFor()
    // textContent() - To get the text value from a single element
    // allTextContents() - To get the text values from mutiple matching element
    const productsName = await products.locator("b").allTextContents() // div.card-body b
    console.log(productsName)
    //count() - Number of elements matching with locator
    const countofTheProducts = await products.count() // 4 0 <4 3 // 0-3 =4
    for(let i=0; i<countofTheProducts; i++){
        const productText = await products.nth(i).locator("b").textContent()
        if(productText === productName){
            products.nth(i).getByRole('button', {name:' Add To Cart'}).click()
            break;

        }
    }
    await expect(page.locator("#toast-container")).toContainText("Product Added To Cart")
    await page.locator("[routerlink='/dashboard/cart']").click()
    await page.getByText("Checkout").click()
    await page.getByPlaceholder("Select Country").pressSequentially("ind")
    const dropdownValues = page.locator("section.ta-results button")
    await dropdownValues.first().waitFor()
    const countOfDropDownElements = await dropdownValues.count()

    for(let i=0; i<countOfDropDownElements; i++){
        const countryTextValue = await dropdownValues.nth(i).textContent()
        if(countryTextValue === countryName){
            await dropdownValues.nth(i).click()
            break
        }
    }
    await page.getByText("Place Order ").click()
    await expect(page.locator(".hero-primary")).toContainText("Thankyou for the order.")
    const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent()
    console.log(orderID)
    await page.waitForTimeout(3000)
    await page.locator("[routerlink='/dashboard/myorders']").click()
    await page.locator("table tbody").waitFor({state : 'visible'})
    const rows = await page.locator("tbody tr") // 100
    const countOfOrders = await rows.count() 
    for(let i=0; i<countOfOrders; i++){
        const orderIDText = await rows.nth(i).locator("th").textContent()
        if(orderID.includes(orderIDText)){
            await rows.nth(i).locator("button").first().click()
            break;
        }

    }
    const summaryPageOrderID  = await page.locator("div.col-text").textContent()
    await expect(orderID.includes(summaryPageOrderID)).toBeTruthy()




})