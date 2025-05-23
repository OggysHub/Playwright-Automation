/**
 * @fileoverview This script tests locating multiple elements on a webpage using Playwright.
 * It navigates to the DemoBlaze website and retrieves product names from the homepage.
 * The test demonstrates the use of XPath selectors and iterating over multiple elements.
 */

// @ts-check

const {test, expect} = require("@playwright/test")

test('Locate Multiple Elements', async({page}) =>{ 
    
    await page.goto('https://www.demoblaze.com/index.html');

    /*const links = await page.$$('a');{
        for(const link of links){
            const linktext = await link.textContent();
            console.log(linktext);
        }
    }
    */
   const products = await page.$$("//div[@id='tbodyid']//div//h4//a")
    for (const product of products){
       const productName = await product.textContent();
        console.log(productName)

    }
})
