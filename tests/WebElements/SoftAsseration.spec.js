/**
 * @file SoftAsseration.spec.js
 * @description This test script performs soft assertions on the DemoBlaze website. 
 * It verifies the URL, title, visibility, text, and attributes of specific web elements.
 * Soft assertions allow the test to continue execution even if some assertions fail.
 * 
 * @module tests/WebElements/SoftAsseration
 * @requires @playwright/test
 */
const {test, expect} = require('@playwright/test');

test('Soft Assertions', async ({page}) => {

    await page.goto('https://www.demoblaze.com/index.html');

    // Soft Assertions
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html');
    await expect.soft(page).toHaveTitle('STORE');
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();
    await expect.soft(page.locator('.navbar-brand')).toHaveText('PRODUCT STORE');
    await expect.soft(page.locator('.navbar-brand')).toHaveAttribute('href', 'index.html');
})