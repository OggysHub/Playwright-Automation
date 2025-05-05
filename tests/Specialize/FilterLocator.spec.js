/**
 * @fileoverview This script tests the filtering of locators on a webpage using Playwright.
 * It navigates to the OrangeHRM demo site, logs in, and demonstrates filtering locators by text and child elements.
 * The test ensures that specific elements can be interacted with based on their properties.
 *
 * @module FilterLocator.spec
 */

// @ts-check

const {test, expect} = require("@playwright/test")

test('Filtering Locators', async({page}) =>{
    
    await page.goto('https://opensource-demo.orangehrmlive.com', { timeout: 60000 });
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Username").fill("admin123");
    await page.getByRole('button', {name:'Login'}).click();
    
    await page.waitForTimeout(10000);

    //Filter By Text
    //await page.getByRole('listitem').filter({hasText:/Leave/}).click;

    //Filter By Child
    //await page.getByRole('listitem').filter({has: page.getByRole('link',{name: 'Leave'})}).click();
})