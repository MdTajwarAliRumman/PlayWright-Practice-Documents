// Import playwright module
import { test, expect } from '@playwright/test';

// write a test
test('Read Env file configuration in playwright', async ({ page }) => {

    console.log('test execution Started..');

    await page.goto(`${process.env.DUCKDUCKGO_URL}`);


    await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill('platwirght by testers talk');
    await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('Enter');

    await page.getByRole('link', { name: 'Playwright by Testers Talk -' }).first().click();

    await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');

})




