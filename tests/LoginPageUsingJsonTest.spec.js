const {test, expect} = require('@playwright/test')
const { LoginPage } = require('../pageObjects/LoginPage')

const data = require('../TestData/loginData.json')


let loginPage

test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    await loginPage.launchURL(data.url)

})


test("Check the login with valid credentials", {tag : '@smoke'}, async () =>{
   await loginPage.validLogin(data.username, data.password)
   await expect(loginPage.homePageIdentifier).toBeVisible()
})

test("Check the login with invalid credentials", {tag : '@smoke'}, async () =>{
    await loginPage.validLogin(data.username, data.incorrectPassword)
    await expect(loginPage.errormessage).toBeVisible()
 })

