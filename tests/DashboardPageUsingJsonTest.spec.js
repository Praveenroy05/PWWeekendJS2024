const {test, expect} = require('@playwright/test')
const { LoginPage } = require('../pageObjects/LoginPage')
const { DashboardPage } = require('../pageObjects/DashboardPage')

const datas = require('../TestData/multipleData.json')

let loginPage
let dashboardPage


test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
})

for (let data of datas){
test(`Add a product to the cart for ${data.productName}`, {tag: '@regression'} , async () =>{
    await loginPage.launchURL(data.url)
    await loginPage.validLogin(data.username, data.password)
    await expect(loginPage.homePageIdentifier).toBeVisible()
    await dashboardPage.searchProductAndAddToCart(data.productName)
    await expect(dashboardPage.addToCartSuccessMessage).toContainText("Product Added To Cart")

})
}
