/**
 * @file BasicAssertions.spec.js
 * @description This test script performs basic assertions on the nopCommerce registration page 
 *              using Playwright. It verifies page navigation, element visibility, attributes, 
 *              and input field values to ensure the UI behaves as expected.
 * @module tests/WebElements/BasicAssertions
 */

const {test, expect} = require('@playwright/test');

test('Assertions', async ({page}) => {

    // Open the page url
    await page.goto('https://demo.nopcommerce.com/register');
    
    // Click text=Get Started
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    // Checking the page title
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    // Verifying logo visibility
    const logo = page.locator('.header-logo');
    await expect(logo).toBeVisible();

    // Checking the search box is enabled
    const searchBox = page.locator('#small-searchterms');
    await expect(searchBox).toBeEnabled();

    // Checking Gender radio button is checked
    const maleRadioButton = await page.locator('#gender-male');
    await maleRadioButton.click();
    await expect(maleRadioButton).toBeChecked();

    // Checking the checkbox is checked
    const newsLetterCheckbox = await page.locator('#Newsletter');
    await expect(newsLetterCheckbox).toBeChecked();

    // Checking that element has attribute
    const regButton = page.locator('#register-button');
    await expect(regButton).toHaveAttribute('type', 'submit');

    // Element matches full text
    await expect (await page.locator('.page-title')).toHaveText('Register');

    // Element matches partial text
    await expect (await page.locator('.page-title')).toContainText('Regis');

    // Checking value of the input field
    const emailInput = page.locator('#Email');
    await emailInput.fill('test@demo.com');
    await expect(emailInput).toHaveValue('test@demo.com');

    // Counting the number of elements
    //const daysCount = await page.locator('select[name="DateOfBirthMonth"] option');
    //await expect(daysCount).toHaveCount(12);
});