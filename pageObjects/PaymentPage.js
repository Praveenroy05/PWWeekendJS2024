class PaymentPage{

    orderID 
    countryName = " India"
    constructor(page) {
        this.page = page
        this.countryDropDown = this.page.getByPlaceholder("Select Country")
        this.dropDownResults = this.page.locator("section.ta-results button")
        this.placeOrderBtn = this.page.getByText("Place Order ")
        this.thankyouPage = this.page.locator(".hero-primary")
        this.orderID = this.page.locator(".em-spacer-1 .ng-star-inserted")
    }
    
    
    async selectCountryAndClickPlaceOrder()
    {
        await this.countryDropDown.pressSequentially("ind")
        const dropdownValues = this.dropDownResults
        await dropdownValues.first().waitFor()
        const countOfDropDownElements = await dropdownValues.count()
    
        for(let i=0; i<countOfDropDownElements; i++){
            const countryTextValue = await dropdownValues.nth(i).textContent()
            if(countryTextValue === this.countryName){
                await dropdownValues.nth(i).click()
                break
            }
        }
        await this.placeOrderBtn.click() 
        this.orderID = await this.orderID.textContent()
        console.log(this.orderID)
    }
}
    
    module.exports = {PaymentPage}