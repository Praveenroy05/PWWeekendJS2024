/*


test.skip() marks the test as irrelevant. Playwright does not run such a test. Use this annotation when the test is not applicable in some configuration.
test.fail() marks the test as failing. Playwright will run this test and ensure it does indeed fail. If the test does not fail, Playwright will complain.
test.fixme() marks the test as failing. Playwright will not run this test, as opposed to the fail annotation. Use fixme when running the test is slow or crashes.
test.slow() marks the test as slow and triples the test timeout. - 90 secs
default timeout in PW - 30 secs
*/
const {test, expect} = require('@playwright/test')

// test.only() - This will run only the test case which have been marked as test.only()
// test.skip() - This will skip the test case which have been marked as test.skip()
// test.fail() - This will mark the test case as failing and will run the test case
// test.fixme() - This will mark the test case as failing and will not run the test
// test.slow() - This will mark the test case as slow and will triple the test timeout
// test.describe() - 
// test.describe.configure() - This helps in writing the configuration for a single file


test.skip('skip', async ()=>{
    console.log("SKip Test case");
})

test('only', async ()=>{
    console.log("only Test case");
})

test.fail('Fail', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client")
    await page.locator('#userEmail').fill("test7lYM@gmail.com", {timeout :100*1000})
    await page.locator("//input[@type='password']").fill("Test@123")
    await page.locator("#login").click()
    await expect(page.locator(".fa-sign")).toBeVisible()
})

test.fixme('Fixme', async ()=>{
    console.log("Fixme Test case");
})

test.slow('Slow', async ()=>{
    test.slow()
    await page.goto("https://rahulshettyacademy.com/client")
    await page.locator('#userEmail').fill("test7lYM@gmail.com", {timeout :100*1000})
    await page.locator("//input[@type='password']").fill("Test@123")
    await page.locator("#login").click()
    await expect(page.locator(".fa-sign")).toBeVisible()
})


test.describe("This is a grouped test cases", async ()=>{
    test('test case 1', async ()=>{
        console.log("Test case 1");
    })
    test('test case 2', async ()=>{
        console.log("Test case 2");
        })
})

test('@smoke Login page test', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client")

    await test.step("Fill the username", async ()=>{
        await page.locator('#userEmail').fill("test7lYM@gmail.com")
   })
    await test.step("Fill the Password", async ()=>{
        await page.locator("//input[@type='password']").fill("Test@123")
    })
    await page.locator("#login").click()
    await expect(page.locator(".fa-sign-out")).toBeVisible()
})