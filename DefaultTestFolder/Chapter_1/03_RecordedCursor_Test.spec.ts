// Import playwright module
import { test, expect } from '@playwright/test';

// write a test
test('Record at cursor test', async ({ page }) => {

    // go to Url
    await page.goto('https://duckduckgo.com/');

    // search with keywords)

    await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill('platwirght by testers talk');
    await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('Enter');

    // await page.locator("//textarea[@id='APjFqb']").fill('Playwright by Testers Talk ');
    // await page.locator("//textarea[@id='APjFqb']").press('Enter');

    // click on playlist
    await page.getByRole('link', { name: 'Playwright by Testers Talk -' }).first().click();

    // validate web page title
    await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');

    await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();
    await expect(page.getByRole('link', { name: '#2 Playwright API Testing' })).toBeVisible();
    await expect(page.getByLabel('#1 Playwright Tutorial Full Course 2025').locator('#video-title')).toContainText('#1 Playwright Tutorial Full Course 2025 | Playwright Testing Tutorial');
    await expect(page.getByLabel('#2 Playwright API Testing').locator('#video-title')).toContainText('#2 Playwright API Testing Tutorial Crash Course 2024');
}) 