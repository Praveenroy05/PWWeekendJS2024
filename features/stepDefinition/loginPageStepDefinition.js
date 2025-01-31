const {Given, When, Then}  = require('@cucumber/cucumber')

const playwright = require('@playwright/test');
const {expect} = require('@playwright/test')

const { LoginPage } = require('../../pageObjects/LoginPage');

const url = "https://rahulshettyacademy.com/client"

Given('I am on the login page', async function () {
    const browser = await playwright.chromium.launch({headless :false})
    const context = await browser.newContext() 
    this.page = await context.newPage()
    this.loginPage = new LoginPage(this.page)
    await this.loginPage.launchURL(url)

});

When('I enter username as {string} and password as {string}', async function (username, password) {
    await this.loginPage.fillUsername(username)
    await this.loginPage.fillPassword(password)
});

When('I click on the Submit button', async function () {
    await this.loginPage.clickLoginBtn()
});

Then('I should see the dashboard page', async function () {
    await expect(this.loginPage.homePageIdentifier).toBeVisible()

});
