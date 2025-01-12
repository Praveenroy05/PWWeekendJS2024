const {test, expect} = require('@playwright/test')

test('Login test validation', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client")
    await page.locator("#userEmail").fill("test7lYM@gmail.com")
    await page.locator("#userPassword").pressSequentially("Test@123")
    await page.locator("//input[@name='login']").click()
    await expect(page.locator(".fa-sign-out")).toBeVisible()
    console.log(await page.title())
    expect(await page.title()).toContain("Let's Shop")
})

/*
1. Enter the text - 
2. Click on an element - 
3. Select the value from drop down - 
4. Handling radio button, check box -
5. Handling multiple elements - 
6. Handling auto suggestive drop down - 
7. Handling alerts or pop-up - 
8. Handling multiple windows - 
9. Handling frames -
10. Handling file uploads -
11. Handling Shadow DOM elements - 
12. Handling Drag and Drop - 
13. Mouse Operation -> Right click, Dbouble Click, Context click, Mouse Hover - 
14. Screenshots, scrolldown
15. Playwright getBy methods for writing locators - 


16. Basics of API - Using Postman
17. Few script for API validation along with UI
18. Framework gneration using POM and BDD cucumber
19. Report generation using HTML and Allure
20. GitHub
21. Jenkins CICD

*/

