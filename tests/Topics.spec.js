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
14. Screenshots - 
15. Playwright getBy methods for writing locators - 
16. Basics of API - Using Postman - 
17. Few script for API validation along with UI - 
22. codegen (Record and Playwright) - 
23. scrolldown -
24. Annotations - 
18. Framework gneration using POM -  
26. Tag the test cases - 
27. Scripts inside the package.json - 
19. Report generation using HTML and Allure - 
20. GitHub - 
21. Jenkins CICD - 



25. BDD cucumber 



*/

// Page Object Model - 

// Page layer - Locators and methods related to a specific page

// LoginPage.js
// Locators only related to Login page
// methods related to login page
// validLogin()
// invalidLogin()

// DashboardPage.js
// Locators only related to Dashboard page
// methods related to Dashboard page
// searchProduct()



// Test layer - Test cases related to specific page

// LoginPageTest.spec.js
// Test cases related to login page
// call all the methods for the test steps
// Assertion for the test cases



// JSON file - Data management
// Reporting - HTML, Allure report
// Utils package - Generic functions - To get the data from excel, json



//BDD Cucucmber framework

// Page layer  - locators and methods

// .feature file - Ghrekin language

// Feature - Write the test suite name 
// This file consists of all the test cases related to Login Page

// Scenario - Providing the scenario name
// Check if the login is working with valid credentails

// 1. Go to Login page by launching the url - Precondition
// 2. Enter valid username and password  - Action
// 3. Click on login button - Action
// 4. Verify the login is successful - Expected Result


// Check if the login is throwing error with invalid scenario

// 1. Given I am on the login page
// 2. When Enter invalid username and password
// 3. When Click on login button
// 4. Then Verify the error message is displayed

// Given - Precondition
// When - Action
// Then - Expected Result
// Scenario Outline - Data driven testing
// Examples : Provide the data for the scenario outine
// Background - Precondition for the feature file



//  StepDefinition - 
// Given('I am on the login page', async function({page}{
// })

// PO(.js) -> Feature(.feature) -> StepDefinition(.js)

//Hook
// before - This function will run before running each test scenario
// after - This function will run after running each test scenario
// beforeAll - This function will run before running all the test scenarios
// afterAll - This function will run after running all the test scenarios
// beforeStep - before running each step 
// afterStep - after running each step





