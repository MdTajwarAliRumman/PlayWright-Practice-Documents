// Import playwright module
import { test, expect } from '@playwright/test';

// Assigning tags
test('Testcase -1', { tag: ['@smokeTesting'] }, async ({ page }) => {

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

test('Testcase -2', { tag: ['@smokeTesting', '@regressionTesting'] }, async ({ page }) => {

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

test('Testcase -3', { tag: ['@regressionTesting'] }, async ({ page }) => {

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


