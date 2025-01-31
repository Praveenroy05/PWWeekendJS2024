/*
BDD Cucucmber framework
------------------------------------------------------------------------------

Page layer  - locators and methods

.feature file - Ghrekin language

Feature - Write the test suite name 
This file consists of all the test cases related to Login Page

Scenario - Providing the scenario name
Check if the login is working with valid credentails

1. Go to Login page by launching the url - Precondition
2. Enter valid username and password  - Action
3. Click on login button - Action
4. Verify the login is successful - Expected Result


Check if the login is throwing error with invalid scenario

1. Given I am on the login page
2. When Enter invalid username and password
3. When Click on login button
4. Then Verify the error message is displayed

Given - Precondition
When - Action
Then - Expected Result
Scenario Outline - Data driven testing
Examples : Provide the data for the scenario outine
Background - Precondition for the feature file



 StepDefinition - 
Given('I am on the login page', async function({page}{
})

PO(.js) -> Feature(.feature) -> StepDefinition(.js)

Hook
before - This function will run before running each test scenario
after - This function will run after running each test scenario
beforeAll - This function will run before running all the test scenarios
afterAll - This function will run after running all the test scenarios
beforeStep - before running each step 
afterStep - after running each step



Implementation along with Playwright using JavaScript
---------------------------------------------------------------
Step 1 - Install the playwright - npm init playwright
Step 2 - Install the cucumber - npm install @cucumber/cucumber
Step 3 - Page layer (This we have already covered in POM)
Step 4 - Feature file (.feature)
Step 5 - Step definition file (.js) - This is a file where we will be writing to code to execute the steps
Step 6 - Run the test case (npx cucumber-js) npx cucumber-js filePath


*/