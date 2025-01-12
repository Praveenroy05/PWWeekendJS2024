const {test, expect, request} = require('@playwright/test')

const productName = "qwerty"
const countryName = " India"

const payload = {userEmail: "test7lYM@gmail.com", userPassword: "Test@123"}
const orderPayload = {orders: [{country: "China", productOrderedId: "6581cade9fd99c85e8ee7ff5"}]}

let token
let orderID
test.beforeAll(async ()=>{
    const apiContext = await request.newContext()
    const apiResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login" , 
        {
            data : payload
        }
    )

  //  console.log(await apiResponse.json());

  const loginResponseJson = await apiResponse.json() 
  token = await loginResponseJson.token
  console.log(token)

  const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", 
    {
        data : orderPayload,
        headers : {
            "authorization" : token
        }
    }
  )

  const orderResponseJson = await orderResponse.json()
  console.log(orderResponseJson)

  orderID = await orderResponseJson.orders[0]
  console.log(orderID)
})


test("@API End to End automation",  async({page})=>{

    await page.addInitScript((value)=>{
        window.localStorage.setItem('token', value)
    }, token)

    await page.goto("https://rahulshettyacademy.com/client")
    await expect(page.locator(".fa-sign-out")).toBeVisible()
    console.log(orderID)
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
    await expect(page.locator("div.col-text")).toHaveText(orderID)


    



})