// @ts-check

const{test, expect} = require("@playwright/test")

test('Handling Radio Button', async({page}) =>{

    await page.goto('https://demoqa.com/automation-practice-form');
    await page.locator('//label[normalize-space()="Male"]').click();

    await page.locator('//label[normalize-space()="Male"]').check();

})