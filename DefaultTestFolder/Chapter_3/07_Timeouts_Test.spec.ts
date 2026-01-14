// Import playwright module
import { test, expect } from '@playwright/test';

// write a test
test('Timeouts in playwright', async ({ page }) => {

    // for single timeout, this will overtake the global timeout
    test.setTimeout(1 * 60 * 1000)

    // go to Url
    await page.goto('https://duckduckgo.com/');


    await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill('platwirght by testers talk');
    await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('Enter');

    // if we can not find field within the 5 sec then 
    await page.getByRole('link', { name: 'Playwright Typescript by Testers Talk -' }).first().click({ timeout: 5000 });

    // override the timeout {timeout:5000}
    await expect(page).toHaveTitle('Playwright Typescript by Testers Talk ✅ - YouTube', { timeout: 5000 });

    //Waiting time . for whole freame work
    // await page.waitForTimeout(60000); 
})


