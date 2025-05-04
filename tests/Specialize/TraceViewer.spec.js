/**
 * @file TraceViewer.spec.js
 * @description This test script automates the login process for the OrangeHRM demo site using Playwright. 
 * It includes tracing functionality to capture screenshots and snapshots for debugging purposes.
 * The test verifies the ability to interact with locators such as placeholders and roles.
 * 
 * @module TraceViewerTest
 * @requires @playwright/test
 */
// @ts-check

const {test, expect} = require("@playwright/test")

test('Filtering Locators', async({page,context}) =>{
    
    await context.tracing.start({screenshots:true, snapshots:true});
    await page.goto('https://opensource-demo.orangehrmlive.com', { timeout: 60000 });
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Username").fill("admin123");
    await page.getByRole('button', {name:'Login'}).click();

    await context.tracing.stop({path:'tracing.zip'})
})