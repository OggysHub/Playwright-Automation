//@ts-check

const {test, expect} = require("@playwright/test")

test('Basic Authentication', async({page})=>{

    await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth')
    const text = await page.locator('dive[class="example"] p').textContent()
    expect(text).toContain('Congratulations')

    await page.waitForTimeout(10000);
})

