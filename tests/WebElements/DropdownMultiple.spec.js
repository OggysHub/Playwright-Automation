/**
 * @file DropdownMultiple.spec.js
 * @description This test script automates the handling of a dropdown list on the Sauce Demo website. 
 * It includes steps for logging in and selecting multiple options from a dropdown menu.
 * The script demonstrates the use of Playwright for end-to-end testing.
 */

//@ts-check

const {test, expect} = require("@playwright/test")

test('Handiling Multiple Dropdown List', async ({page}) => {

    await page.goto('https://www.saucedemo.com/v1/index.html');
    await page.locator('//input[@id="user-name"]').fill('standard_user');
    await page.locator('//input[@id="password"]').fill('secret_sauce');
    await page.locator('//input[@id="login-button"]').click();
    await page.locator('//select[@class="product_sort_container"]').selectOption(['az', 'za', 'lohi']);
})