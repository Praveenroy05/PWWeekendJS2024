const {test, expect} = require('@playwright/test')

test('Single File Upload', async ({page})=>{
    const path = "C:/Users/prave/OneDrive/Documents/Praveen-PW/PWSeptWeekend2024/test-data/Cypress.txt"
    await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html")
    //setInputFiles()
    await page.locator("[name='upfile']").setInputFiles("C:/Users/prave/OneDrive/Documents/Praveen-PW/PWSeptWeekend2024/test-data/Cypress.txt")
    await page.locator("[value='Press']").click()
    await expect(page.getByText("File Upload Results")).toBeVisible()
    await expect(page.locator("body pre")).toContainText("Cypress")
})


test('Multiple Files Upload', async ({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    //setInputFiles()
    await page.locator("#filesToUpload").setInputFiles(
        ["C:/Users/prave/OneDrive/Documents/Praveen-PW/PWSeptWeekend2024/test-data/Cypress.txt",
        "C:\\Users\\prave\\OneDrive\\Documents\\Praveen-PW\\PWSeptWeekend2024\\test-data\\Data Driven.txt"
    ])
    await page.waitForTimeout(5000)
    await expect(page.locator("#fileList li").first()).toContainText("Cypress.txt")
    await expect(page.locator("#fileList li").last()).toContainText("Data Driven.txt")


})