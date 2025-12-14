// Import playwright module
import { test, expect } from '@playwright/test';

const searchKeywords = ['Playwright by Testers Talk', 'Cypress by Testers Talk', 'API Testing by Testers Talk']

for (const searchKeyword of searchKeywords) {

    // write a test
    test(`Parameterize tests in playwright ${searchKeyword}`, async ({ page }) => {

        console.log('test execution Started..');

        // go to Url
        await page.goto('https://duckduckgo.com/');

        // search with keywords) 

        await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill(searchKeyword);
        await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('Enter');

        // click on playlist
        await page.getByRole('link', { name: searchKeyword }).first().click();

        // validate web page title
        await expect(page).toHaveTitle(searchKeyword + '✅ - YouTube');
    })
}

