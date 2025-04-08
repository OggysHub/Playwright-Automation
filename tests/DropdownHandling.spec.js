//@ts-check

const {test, expect} = require("@playwright/test")

test('Handiling Dropdown List', async ({page}) => {

    await page.goto('https://www.saucedemo.com/v1/index.html');
    await page.locator('//input[@id="user-name"]').fill('standard_user');
    await page.locator('//input[@id="password"]').fill('secret_sauce');
    await page.locator('//input[@id="login-button"]').click();
    await page.locator('//select[@class="product_sort_container"]').selectOption({index:1});

    await page.locator('//select[@class="product_sort_container"]').selectOption({label:'Price (low to high)'});

    await page.waitForTimeout(10000);
    
})