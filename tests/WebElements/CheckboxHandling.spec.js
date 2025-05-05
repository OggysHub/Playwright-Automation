/**
 * Test suite for handling checkbox interactions on a web page using Playwright.
 * This script demonstrates checking, verifying, and unchecking checkboxes with assertions.
 * It ensures the functionality of checkboxes is working as expected.
 */
// @ts-check

const{test, expect} = require("@playwright/test")

test('Handling Checkbox Button', async({page}) =>{

    await page.goto('https://demoqa.com/automation-practice-form');
    
    // Check a single checkbox
    const sportsCheckbox = page.getByText('Sports');
    const musicCheckbox = page.getByText('Music');
    
    // Check the checkbox using two different methods
    await sportsCheckbox.check(); // Check the checkbox using locator
    
    // Check if the checkbox is checked using two different methods
    await expect(sportsCheckbox).toBeChecked(); // Check if the checkbox is checked using locator
    await expect(sportsCheckbox.isChecked()).toBeTruthy(); // Check if the checkbox is checked using toBeTruthy()
    await expect(!musicCheckbox).toBeFalsy(); // Check if the checkbox is unchecked using toBeFalsy()
    
    // Uncheck a single checkbox
    await sportsCheckbox.uncheck(); // Uncheck the checkbox using locator
    await expect(sportsCheckbox).not.toBeChecked(); // Check if the checkbox is unchecked using locator
    await expect(!sportsCheckbox).toBeFalsy(); // Check if the checkbox is unchecked using toBeFalsy()
})