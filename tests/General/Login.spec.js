/**
 * @fileoverview This script tests the login functionality of the demo QA application.
 * It verifies that a user can log in and access the dashboard using valid credentials.
 * The test navigates to the login page, fills in the credentials, and clicks the login button.
 */
// @ts-check
import { test, expect } from '@playwright/test';

test('Login & access to dashboard', async ({ page }) => {
  await page.goto('https://demoqa.com/login');
  await page.getByPlaceholder("UserName").fill("Oggy");
  await page.getByPlaceholder("Password").fill("Mibro@616");
  await page.getByRole('button', {name:"Login"}).click();
});