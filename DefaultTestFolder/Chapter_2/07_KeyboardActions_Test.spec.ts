// Import playwright module
import { test, expect } from '@playwright/test';

// write a test
test('KeyboardActions in playwright', async ({ page }) => {

    // go to Url
    await page.goto('https://duckduckgo.com/');

    // Enter Option from keyboard
    await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill('W3Schools Online Web Tutorials');
    await page.locator("//button[@aria-label='Search']").press('Enter');

    // Enter Option from keyboard
    await page.locator("//input[@id='search_form_input']").first().click();
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Delete');

    // Enter Option from keyboard
    await page.locator("//input[@id='search_form_input']").first().click();
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');

})

