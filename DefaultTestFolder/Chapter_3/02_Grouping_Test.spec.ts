// Import playwright module
import { test, expect } from '@playwright/test';

test.describe('SmokeTesting', () => {
    test('Test-1', async ({ page }) => {

        console.log('test execution Started..');

        // go to Url
        await page.goto('https://duckduckgo.com/');
        // search with keywords)
        await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill('platwirght by testers talk');
        await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('Enter');
        // click on playlist
        await page.getByRole('link', { name: 'Playwright by Testers Talk -' }).first().click();
        // validate web page title
        await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');
    })
})

test.describe('RegressionTesting', () => {
    test('test-2', async ({ page }) => {

        console.log('test execution Started..');

        // go to Url
        await page.goto('https://duckduckgo.com/');
        // search with keywords)
        await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill('platwirght by testers talk');
        await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('Enter');
        // click on playlist
        await page.getByRole('link', { name: 'Playwright by Testers Talk -' }).first().click();
        // validate web page title
        await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');
    })

    test('Test -3', async ({ page }) => {

        console.log('test execution Started..');
        // go to Url
        await page.goto('https://duckduckgo.com/');
        // search with keywords)
        await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill('platwirght by testers talk');
        await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('Enter');
        // click on playlist
        await page.getByRole('link', { name: 'Playwright by Testers Talk -' }).first().click();
        // validate web page title
        await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');
    })
})




