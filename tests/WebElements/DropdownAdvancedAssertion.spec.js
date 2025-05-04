/**
 * @file DropdownAdvancedAssertion.spec.js
 * @description This test script performs advanced assertions on a dropdown menu using Playwright. 
 * It verifies the presence of specific options, logs the results, and selects an option programmatically.
 * The script demonstrates the use of Playwright locators and loops for dropdown interaction.
 * 
 * @module tests/WebElements/DropdownAdvancedAssertion
 * 
 * @requires playwright/test
 */
//@ts-check

const {test, expect} = require("@playwright/test")

test('Different type of dropdown assertion', async ({page}) => {
    
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Check the presence of a specific option in the dropdown using textContent
    const optionContent = await page.locator('#country').textContent();
    if (optionContent) {
        expect(optionContent.includes('Japan')).toBe(true);
    } else {
        throw new Error("Dropdown content is null");
    }
    console.log("Is Japan present in the dropdown: ", optionContent);

    // Check the presence of a specific option using loop
    const dropdownOptions = await page.$$("#country option");
    let isFrancePresent = false;
    for (const option of dropdownOptions) {
        const optionText = await option.textContent();
        if (optionText?.includes('France')){
            isFrancePresent = true;
            break;
        }
    }
    expect(isFrancePresent).toBe(true);
    console.log("Is France present in the dropdown: ", isFrancePresent);

    // Selecting an option from the dropdown using loop
    const dropdown = await page.$$("#country");
    for (const selectOption of dropdown) {
        const value = await selectOption.textContent();
        if (value?.includes('Germany')) {
            await selectOption.click();
            break;
        }
    }
})