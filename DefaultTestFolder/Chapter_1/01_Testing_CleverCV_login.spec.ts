import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await test.step("Navigating to Url", async () => {
    await page.goto('https://clever-cv.de/');
    await page.getByRole('button', { name: 'Log In' }).click();
  });

  await test.step("Enter username and password", async () => {

  });

  await test.step("Click on signup", async () => {
    await page.getByRole('textbox', { name: 'Email' }).fill('demo@gmail.com');
    await page.getByRole('textbox', { name: 'Email' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('123456');
    await page.getByRole('button', { name: 'Sign In' }).click();
  });

  await test.step("Validate error message", async () => {
    await expect(page.locator('form')).toContainText('test No active account found with the given credentials');

  });



});