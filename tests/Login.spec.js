// @ts-check
import { test, expect } from '@playwright/test';

test('Login & access to dashboard', async ({ page }) => {
  await page.goto('https://demoqa.com/login');
  await page.getByPlaceholder("UserName").fill("Oggy");
  await page.getByPlaceholder("Password").fill("Mibro@616");
  await page.getByRole('button', {name:"Login"}).click();
});