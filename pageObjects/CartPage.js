class CartPage{

    constructor(page) {
        this.page = page
        this.cartLink = this.page.locator("[routerlink='/dashboard/cart']")
        this.checkoutBtn = this.page.getByText("Checkout")
       
    
    }
    
    
    async gotoCartAndClickOnCheckoutBtn()
    {
        await this.cartLink.click()
        await this.checkoutBtn.click()
    }
}
    module.exports = {CartPage}