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

// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//     await page.goto('https://duckduckgo.com/');
//     await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill('tester\'s talk');
//     await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('ArrowDown');
//     await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('ArrowDown');
//     await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('Enter');
//     await page.getByRole('link', { name: 'Testers Talk - YouTube', exact: true }).click();
// });


