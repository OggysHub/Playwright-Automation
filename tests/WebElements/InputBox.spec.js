
/**
 * Test script to validate the behavior of an input box on a web page.
 * Ensures the input box is visible, empty, editable, enabled, and correctly updates its value.
 * Uses Playwright's assertion methods to verify the expected behavior of the input box.
 */
// @ts-check

const { test, expect } = require('@playwright/test');

    test('Asseration for input box type', async ({ page }) => {
        // Navigate to the website
        await page.goto('https://itera-qa.azurewebsites.net/home/automation');

        // Fill out the Name field
        await expect (await page.locator('#name')).toBeVisible();
        await expect (await page.locator('#name')).toBeEmpty();
        await expect (await page.locator('#name')).toBeEditable();
        await expect (await page.locator('#name')).toBeEnabled();

        await page.locator('#name').fill('John Doe');
        await expect (await page.locator('#name')).toHaveValue('John Doe');
        await expect (await page.locator('#name')).toHaveText('John Doe');
        //await page.fill('#name', 'John Doe');
    });