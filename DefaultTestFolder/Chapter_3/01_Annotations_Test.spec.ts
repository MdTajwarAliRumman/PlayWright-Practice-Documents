// Import playwright module
import { test, expect } from '@playwright/test';

// write a test
test('First test for playwright', async ({ page }) => {

    console.log('test execution Started..');

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
})

// Test the script method for test 
test.skip('Skip test-2 for playwright', async ({ page }) => {

    console.log('test execution Started..');

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
})

// Only method test
test.only('Run only method test-3 for playwright', async ({ page }) => {

    console.log('test execution Started..');

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
})