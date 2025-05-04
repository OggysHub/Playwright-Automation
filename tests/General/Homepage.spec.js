/**
 * @file Homepage.spec.js
 * @description This test script validates the title and URL of the homepage of the DemoBlaze website. 
 * It ensures that the page title matches the expected value and the URL is correct after navigation.
 * Additionally, it logs the page title and URL for debugging purposes.
 */
// @ts-check

const {test, expect} = require("@playwright/test")

test('Validate Page Title', async({page}) =>{ 
    
    await page.goto('https://www.demoblaze.com/index.html'); 

    //Storing & Printing Page Title
    const pageTitle = await page.title();
    console.log('Page Title is:', pageTitle);

    //Validatin Page Title & URL
    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

     //Storing & Printing Current Page URL
    const pageURL = page.url();
    console.log('Page URL IS:', pageURL);

    await page.close();
})
