// Import playwright module
import { test, expect } from '@playwright/test';

// write a test
test('Visual Comparison in playwright', async ({ page }) => {

    // go to Url
    await page.goto('https://github.com/login');

    await expect(page).toHaveScreenshot('GithubLoginPage.png')

    // const element = page.locator('[class="auth-form-body mt-3"]');

    // await expect(element).toHaveScreenshot('GithubLoginForm.png')

    await page.locator('#login_field').fill("Playwright with typescript")

    await expect(page).toHaveScreenshot('GithubLoginPage.png')

})

test('Element Visual Comparison in playwright', async ({ page }) => {

    // go to Url

    await page.goto('https://www.google.com/');
    await page.waitForTimeout(5000);

    await expect(page).toHaveScreenshot('GooglePage.png')

    const element = page.locator("//*[name()='path' and contains(@d,'M115.75 47')]");

    await expect(element).toHaveScreenshot('GooglePage.png')


    // await expect(element).toHaveScreenshot('GithubLoginForm.png')

    // await page.locator('#login_field').fill("Playwright with typescript")

    // await expect(page).toHaveScreenshot('GithubLoginPage.png')

})


