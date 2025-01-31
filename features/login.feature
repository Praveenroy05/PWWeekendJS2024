Feature: Login Page Validation

    This file consists of all the test cases related to Login Page

Scenario: Check the login is working as expected with valid credentials
Given I am on the login page
When I enter username as "test7lYM@gmail.com" and password as "Test@123"
When I click on the Submit button
Then I should see the dashboard page