const {test, expect} = require('@playwright/test')
const { LoginPage } = require('../pageObjects/LoginPage')
const { DashboardPage } = require('../pageObjects/DashboardPage')
const { CartPage } = require('../pageObjects/CartPage')
const { PaymentPage } = require('../pageObjects/PaymentPage')

let loginPage
let dashboardPage
let cartPage
let paymentPage


const url = "https://rahulshettyacademy.com/client"
const username = "test7lYM@gmail.com"
const password = "Test@123"
const productName = "qwerty"

test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    cartPage = new CartPage(page)
    paymentPage = new PaymentPage(page)
    await loginPage.launchURL(url)
    await loginPage.validLogin(username, password)
})


test("Place an Order", {tag: ['@smoke', '@regression']}, async () =>{
   await expect(loginPage.homePageIdentifier).toBeVisible()
   await dashboardPage.searchProductAndAddToCart(productName)
   await expect(dashboardPage.addToCartSuccessMessage).toContainText("Product Added To Cart")
   await cartPage.gotoCartAndClickOnCheckoutBtn()
   await paymentPage.selectCountryAndClickPlaceOrder()
   await expect(paymentPage.thankyouPage).toContainText("Thankyou for the order.")

})
