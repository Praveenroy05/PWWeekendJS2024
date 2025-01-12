class LoginPage{
// Locators and methods related to LoginPage

    constructor(page)
    {
        this.page = page
        this.username = this.page.locator('#userEmail')
        this.password= this.page.locator("//input[@type='password']")
        this.loginBtn = this.page.locator("#login")
        this.homePageIdentifier = this.page.locator(".fa-sign-out")
        this.errormessage = this.page.locator("#toast-container")

    }

    async launchURL(url){
        await this.page.goto(url)
    }

    async fillUsername(username)
    {
        await this.username.fill(username)    
    }

    async fillPassword(username)
    {
        await this.password.fill(username)    
    }

    async clickLoginBtn()
    {
        await this.loginBtn.click()  
    }

    async validLogin(username, password)
    {
        await this.fillUsername(username)  
        await this.fillPassword(password) 
        await this.clickLoginBtn() 
    }

    async invalidLogin(username, password)
    {
        await this.fillUsername(username)  
        await this.fillPassword(password) 
        await this.clickLoginBtn() 
    }
}

module.exports = {LoginPage}