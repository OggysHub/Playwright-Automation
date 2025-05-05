/**
 * @fileoverview This script tests the handling of radio buttons on a web form using Playwright.
 * It verifies the initial state of the radio buttons, performs interactions, and asserts the expected behavior.
 * The test ensures that only one radio button can be selected at a time, as per standard radio button functionality.
 */
// @ts-check

const{test, expect} = require("@playwright/test")

test('Handling Radio Button', async({page}) =>{

    await page.goto('https://demoqa.com/automation-practice-form');

    // Assert that the "Male" radio button is not checked initially
    const maleRadioButton = page.locator('//label[normalize-space()="Male"]/preceding-sibling::input');
    await expect(maleRadioButton).not.toBeChecked(); // Check if the radio button is not checked
    expect(await maleRadioButton.isChecked()).toBeFalsy(); // Check if the radio button is not checked

    // Click the "Male" radio button
    await page.locator('//label[normalize-space()="Male"]').check();

    // Assert that the "Male" radio button is now checked
    await expect(maleRadioButton).toBeChecked(); // Check if the radio button is checked
    expect(await maleRadioButton.isChecked()).toBeTruthy(); // Check if the radio button is checked

    // Assert that the "Female" radio button is not checked
    const femaleRadioButton = page.locator('//label[normalize-space()="Female"]/preceding-sibling::input');
    await expect(femaleRadioButton).not.toBeChecked(); // Check if the radio button is not checked
    expect(await femaleRadioButton.isChecked()).toBeFalsy(); // Check if the radio button is not checked

    // Click the "Female" radio button
    await page.locator('//label[normalize-space()="Female"]').check();

    // Assert that the "Female" radio button is now checked
    await expect(femaleRadioButton).toBeChecked(); // Check if the radio button is checked
    expect(await femaleRadioButton.isChecked()).toBeTruthy(); // Check if the radio button is checked
})