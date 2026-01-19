// Import playwright module
import { test, expect } from '@playwright/test';

// write a test
test('TestCase - 1', async ({ page }) => {

    console.log('test execution Started..');

    await page.goto('https://duckduckgo.com/');

    await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill('platwirght by testers talk');
    await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('Enter');


    await page.getByRole('link', { name: 'Playwright by Testers Talk -' }).first().click();

    await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');
})

test('TestCase - 2, Intentionally failed', async ({ page }) => {
    expect(true).toBe(false);
})

test('TestCase - 3, Intentionally failed', async ({ page }) => {
    expect(true).toBe(false);
})

// npx playwright test DefaultTestFolder/Chapter_4/02_ReRunFailed_Test.spec.ts  (This is for terminal test)
