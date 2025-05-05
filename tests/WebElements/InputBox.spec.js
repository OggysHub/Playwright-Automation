
/**
 * Test script to validate the behavior of an input box on a web page.
 * Ensures the input box is visible, empty, editable, enabled, and correctly updates its value.
 * Uses Playwright's assertion methods to verify the expected behavior of the input box.
 */
// @ts-check

const { test, expect } = require('@playwright/test');

    test('Asseration for input box type', async ({ page }) => {
        // Navigate to the website
        await page.goto('https://demoqa.com/text-box');

        // Verify the input box is visible, empty, editable, and enabled
        await expect (await page.locator('#userName')).toBeVisible();
        await expect (await page.locator('#userName')).toBeEmpty();
        await expect (await page.locator('#userName')).toBeEditable();
        await expect (await page.locator('#userName')).toBeEnabled();

        // Fill the input box with a value
        await page.locator('#userName').fill('John Doe');
        // Verify the input box is no longer empty
        await expect (await page.locator('#userName')).not.toBeEmpty();
        // Verify the input box contains the expected value
        await expect (await page.locator('#userName')).toHaveValue('John Doe');
    });