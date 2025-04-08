// @ts-check

//Note:
//use async for making sure that the anonymous function will return a promise
//Await is for making sure that a particular function should wait for it's previous function promise resolving

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
