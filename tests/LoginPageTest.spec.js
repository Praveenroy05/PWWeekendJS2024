const {test, expect} = require('@playwright/test')
const { LoginPage } = require('../pageObjects/LoginPage')

let loginPage
const url = "https://rahulshettyacademy.com/client"
const username = "test7lYM@gmail.com"
const password = "Test@123"
const incorrectPassword = "Test@12"

test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    await loginPage.launchURL(url)

})


test("Check the login with valid credentials", {tag : ['@smoke', '@regression']}, async () =>{
   await loginPage.validLogin(username, password)
   await expect(loginPage.homePageIdentifier).toBeVisible()
})

test("Check the login with invalid credentials", {tag : ['@smoke', '@regression']}, async () =>{
    await loginPage.validLogin(username, incorrectPassword)
    await expect(loginPage.errormessage).toBeVisible()
 })
