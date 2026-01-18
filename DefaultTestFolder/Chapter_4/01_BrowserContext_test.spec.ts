// Import playwright module
import { test, expect } from '@playwright/test';

// here we are writing browser beside page to open a new context browser session
test('Multiple browser/tabs in Playwright Typescript', async ({ page, browser }) => {

    console.log('test execution Started..');

    // go to Url
    await page.goto('https://duckduckgo.com/');

    // search with keywords)

    await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill('platwirght by testers talk');
    await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('Enter');

    await page.getByRole('link', { name: 'Playwright by Testers Talk -' }).first().click();
    await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');


    const context2 = await browser.newContext();
    const page2 = await context2.newPage();

    // open new browser session
    await page2.goto('https://duckduckgo.com/');

    await page2.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill('platwirght by testers talk');
    await page2.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('Enter');
    await page2.getByRole('link', { name: 'Playwright by Testers Talk -' }).first().click();
    await expect(page2).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');

    //create new tab
    const newTab = await context2.newPage();
    await newTab.goto('https://duckduckgo.com/');

    await newTab.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill('platwirght by testers talk');
    await newTab.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('Enter');
})



