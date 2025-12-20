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
