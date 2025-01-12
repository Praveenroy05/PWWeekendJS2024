// Front End
// BackEnd
// Database

const {test, expect, request} = require('@playwright/test')
const payload = {userEmail: "test7lYM@gmail.com", userPassword: "Test@123"}
const orderPayload = {orders: [{country: "China", productOrderedId: "6581cade9fd99c85e8ee7ff5"}]}

test('@API Login Page validation using API', async ()=>{

    const apiContext = await request.newContext()
    const apiResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login" , 
        {
            data : payload
        }
    )

  //  console.log(await apiResponse.json());

  const loginResponseJson = await apiResponse.json() 
  const token = await loginResponseJson.token

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

  const orderID = await orderResponseJson.orders[0]
  console.log(orderID)

})


test(' @API Test', async ()=>{

    const payload = {userEmail: "test7lYM@gmail.com", userPassword: "Test@123", age : 30}

    console.log(payload.userEmail)
    console.log(payload.userPassword)
    console.log(payload.age)

    const array = [1,2,3,4,5] //0-4
    console.log(array[0]);



})

