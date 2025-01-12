// goto(URL in string format) - Which is use to launch the url on the given browser
// locator(selector which is locators) - Is use to identify the element on the webpage
// fill() - This is a method which is use to enter the text in the input field on web page
// pressSequentially() - which is use to enter character by character in the input field
// click() - which use to perform click operation on an element
// close() - which is use to close the browser
// title() - Which return the title of the page. - page.title()
// expect(locator or value) - Which perform assertion for test step or test case
// toBeChecked() - Validate of the element is checked or not
// check() - which checks/click on radio button and checkbox
// selectOption() - which use to select the value from the drop down that have been developed using select tag
// uncheck() - which uncheck the checkbox and radio button
// first() - Which identify the first matching element out of all the matching element
// last() - Which identify the last matching element out of all the matching element
// nth(index) - Identify the indexed matching element. Index start with 0.
// dblClick() - Double click on an element
// hover() 
// frameLocator()
// setInputFiles()
// dragTo()
// screenshot()

/*



Remaining topics:
1. Mix of Web and API automation
2. POM framework
3. Setting up Jenkins
4. Allure report generation
5. Hidden Elements validation
6. 


*/


const {test, expect} = require('@playwright/test')

test('UI handling', async ({page})=>{
    // check box, radio button
    // check()

    await page.goto("https://rahulshettyacademy.com/angularpractice/")
    await page.locator("#exampleCheck1").check()
    await expect(page.locator("#exampleCheck1")).toBeChecked()
    await page.locator("#exampleCheck1").uncheck()
    await expect(page.locator("#exampleCheck1")).not.toBeChecked()
    await page.locator("#inlineRadio1").check()
    await expect(page.locator("#inlineRadio1")).toBeChecked()
})

/*

Drop downs
1. Static drop down
2. Dynamic drop down

1. select tag - selectOption()
2. non-select tag - 

*/

test('Drop down developed using select tag', async ({page})=>{

    await page.goto("https://practice.expandtesting.com/dropdown")
    await page.selectOption("select#dropdown", {label:'Option 1'})

    await page.selectOption("#country", 'Angola')
    await page.waitForTimeout(2000)
    await page.selectOption("#country", {value :'AQ'})
    await page.waitForTimeout(2000)
    await page.selectOption("#country", {label :'United States'})
    await page.waitForTimeout(2000)
    await page.selectOption("#country", {index :15})
    await page.waitForTimeout(3000)
})

test("@smoke Drop down developed using non select tag", async ({page})=>{
    await page.goto("https://demoqa.com/select-menu")
    await page.locator(".css-1hwfws3").first().click()
    await page.locator("#react-select-2-option-1-0").click()
    await page.locator(".css-1hwfws3").nth(1).click()
    await page.locator("#react-select-3-option-0-2").click()
    await page.locator(".css-1hwfws3").last().click()
    await page.locator("#react-select-4-option-1").click()
    await page.locator("#react-select-4-option-3").click()

    await page.selectOption("#cars", ['Volvo', 'Opel', 'Audi'])

})

