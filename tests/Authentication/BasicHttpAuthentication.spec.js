/**
 * This test script performs basic authentication using Playwright.
 * It demonstrates how to handle HTTP Basic Authentication by encoding credentials
 * and setting up a request interceptor to include the `Authorization` header.
 * 
 * @module AuthenticationTricky.spec
 */

 /**
    * Test for Basic Authentication.
    * 
    * @param {import('@playwright/test').Page} page - The Playwright page object used for browser automation.
    * 
    * @example
    * // Run this test to verify basic authentication functionality
    * test('Basic Authentication', async ({ page }) => { ... });
    * 
    * Steps:
    * 1. Define the basic authentication credentials (username and password).
    * 2. Encode the credentials as a Base64 string.
    * 3. Set up a request interceptor to add the `Authorization` header with the encoded credentials.
    * 4. Navigate to the target URL that requires basic authentication.
    * 5. Verify that the authentication was successful by checking the page content.
    * 6. Wait for a timeout to observe the result (optional).
    */
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