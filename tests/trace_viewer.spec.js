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