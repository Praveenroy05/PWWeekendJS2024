const {test, expect} = require('@playwright/test')
const { LoginPage } = require('../pageObjects/LoginPage')
const { DashboardPage } = require('../pageObjects/DashboardPage')

let loginPage
let dashboardPage


const url = "https://rahulshettyacademy.com/client"
const username = "test7lYM@gmail.com"
const password = "Test@123"
const productName = "qwerty"

test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(url)
    await loginPage.validLogin(username, password)
})


test("Add a product to the cart", {tag: ['@smoke', '@regression']}, async () =>{
   await expect(loginPage.homePageIdentifier).toBeVisible()
   await dashboardPage.searchProductAndAddToCart(productName)
   await expect(dashboardPage.addToCartSuccessMessage).toContainText("Product Added To Cart")

})

test("array", async ()=>{
    let arr = [
        {
            "url" : "https://rahulshettyacademy.com/client",
            "username" : "test7lYM@gmail.com",
            "password" : "Test@123",
            "productName" : "qwerty"
        },
        {
            "url" : "https://rahulshettyacademy.com/client",
            "username" : "test7lYM@gmail.com",
            "password" : "Test@123",
            "productName" : "ADIDAS ORIGINAL"
        },
    
        {
            "url" : "https://rahulshettyacademy.com/client",
            "username" : "testnHNk@gmail.com",
            "password" : "Testing@1234",
            "productName" : "IPHONE 13 PRO"
        }
    ]

    for(let data of arr){
        console.log(data)
    }
})

