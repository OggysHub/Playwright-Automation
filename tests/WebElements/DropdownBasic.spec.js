/**
 * Test script to handle dropdown list interactions on a webpage.
 * Demonstrates selecting dropdown options by visible text, value, label, and index.
 * Uses Playwright's `selectOption` method to interact with the dropdown element.
 */
//@ts-check

const {test, expect} = require("@playwright/test")

test('Handiling Dropdown List', async ({page}) => {
    
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    // It includes selecting options by value, label, and index.
    await page.locator("#country").selectOption('Canada'); // Select by visible text
    await page.locator("#country").selectOption({value:'japan'}); // Select by value
    await page.locator("#country").selectOption({label:'China'}); // Select by label
    await page.locator("#country").selectOption({index:2}); // Select by index
    await page.selectOption("#country", 'Australia'); // Select by visible text
})