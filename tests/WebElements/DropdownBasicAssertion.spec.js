/**
 * @file DropdownBasicAssertion.spec.js
 * @description This test script performs assertions on a dropdown element on a webpage. 
 * It validates the default value, checks the first option's value, and verifies the total number of options.
 * The script uses Playwright's testing library for browser automation and assertions.
 */

//@ts-check

const {test, expect} = require("@playwright/test")

test('Different type of dropdown assertion', async ({page}) => {
    
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    // Validate the default value of the dropdown
    const defaultValue = await page.locator("#country").inputValue();
    expect(defaultValue).toBe('usa');

    // Check the value of the first option in the dropdown
    const firstOptionValue = await page.locator("#country option").nth(0).getAttribute('value');
    expect(firstOptionValue).toBe('usa');

     // Check the total number of options in the dropdown using count
     const optionsCount = await page.locator("#country option").count();
     expect(optionsCount).toBe(10);

    // Check the number of options in the dropdown using length
    const optionsLength = await page.$$("#country option");
    console.log("Length of options: ", optionsLength.length);
    expect(optionsLength.length).toBe(10);
})