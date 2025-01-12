// Locators

// 1. css selector
// 2. xpath
// 3. Playwright specific getBy methods


/**
 *  CSS SELECTOR
 * 
 * 1. if id is present we can use the below css selestor for locators:
 * 
 * tagname#idvalue or #idvalue
 * 
 * Ex: - if tagname is input and id is username
 * 
 * input#username OR #username
 * 
 * 2. if class attribute is present we can use the below selectors:
 * 
 * tagname.classname or .classname
 * 
 * 
 * Ex: - if tagname is input and classname is user
 * 
 * input.user OR .user
 * 
 * 3. Write css based on any attribute:
 * 
 * [attribute = 'value'] - Ex: - [type='username'] // [value="Login"]
 * 
 * tagname[attribute = 'value'] // input[id='username']
 *  
 * 
 * 4. Write css traversing from parent to child:
 * 
 * parentattribute >> childattribute or parenttagname childtagname
 * 
 * Ex: - input >> div (OR) input div (by just provide a space between parent and child)
 * 
 * div.form-group label[for='email']
 * 
 * 5. By writing the locators based on the text:
 * 
 * Ex: - ("text= Add to cart") // ("text= Email")
 * 
 * 
 */


// 2. XPATH

//  / - Absolute 
// // - Relative

1. //*[@attribute='value']
//*[@id='userEmail']

2. //tagname[@attribute='value']

//input[@id='userEmail']

3. // Parent to child

//div[@class='form-group']/input[@id='userEmail']

4. //label[@for='email']/following-sibling::input[@id='userEmail']

5. //input[@id='userEmail']/preceding-sibling::label