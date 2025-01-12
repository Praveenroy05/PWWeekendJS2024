// Hooks 

// beforeAll() - This function will run before running any of the test cases
// afterAll() - This function will run after running all the test cases
// beforeEach() - This function will run before running each test cases
// afterEach() - This function will run after running each test cases

const {test} = require('@playwright/test')

test.beforeAll(async ()=>{
    console.log("Before All Hooks");
})

test.afterAll(async ()=>{
    console.log("After All Hooks");
})

test.beforeEach(async ()=>{
    console.log("Before Each Hooks");
})

test.afterEach(async ()=>{
    console.log("After Each Hooks");
})


test('one', async ()=>{
    await console.log("First Test case");
})

test('Two', async ()=>{
    await console.log("Second Test case");
})

test('Three', async ()=>{
    await console.log("Third Test case");
})

