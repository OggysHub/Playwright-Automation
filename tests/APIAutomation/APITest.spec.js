/**
 * @file APITest.spec.js
 * @description This script performs API testing using Playwright's request fixture. 
 * It validates the response of a GET request to fetch users from page 2 of the ReqRes API.
 * The test ensures the response structure and data integrity are as expected.
 */

const { test, expect } = require('@playwright/test');

test.describe('API Testing with Playwright', () => {
    test('GET request to fetch users from page 2', async ({ request }) => {
        const response = await request.get('https://reqres.in/api/users?page=2');
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody.page).toBe(2);
        expect(responseBody.data).toBeDefined();
        expect(Array.isArray(responseBody.data)).toBeTruthy();
        expect(responseBody.data.length).toBeGreaterThan(0);

        // Example: Check the first user's properties
        const firstUser = responseBody.data[0];
        expect(firstUser).toHaveProperty('id');
        expect(firstUser).toHaveProperty('email');
        expect(firstUser).toHaveProperty('first_name');
        expect(firstUser).toHaveProperty('last_name');
        expect(firstUser).toHaveProperty('avatar');
    });
});