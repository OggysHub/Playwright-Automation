//@ts-check

const {test, expect} = require("@playwright/test")

test('Basic Authentication', async({page})=>{

    //Defined the basic auth creedentials

    const username = 'admin';
    const password = 'admin';

    //Encode the credentials as base64 string

    const base64Creedentails = Buffer.from(`${username}:${password}`).toString('base64');

    //Set up the request interceptor to handle basic auth

    await page.route('**/*', (route)=>{

        const headers = {
            'Authorization': `Basic ${base64Creedentails}`,
        };
        route.continue({headers});

    });

    await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth')
    const text = await page.locator('dive[class="example"] p').textContent()
    expect(text).toContain('Congratulations')

    await page.waitForTimeout(10000);
})