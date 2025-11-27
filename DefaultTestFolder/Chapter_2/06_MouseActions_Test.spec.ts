// Import playwright module
import { test, expect } from '@playwright/test';

// write a test
test('Handling MouseActions in playwright', async ({ page }) => {

    // go to Url
    await page.goto('https://duckduckgo.com/');

    // search with keywords)
    await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill('W3Schools Online Web Tutorials');
    await page.locator("//button[@aria-label='Search']").click();

    // Mouse left button click
    await page.getByRole('link', { name: 'W3Schools Online Web Tutorials' }).first().click({ button: 'left' });

    // Mouse Middle button click
    await page.getByRole('link', { name: 'JAVASCRIPT' }).first().click({ button: 'middle' });

    // Mouse Right button click
    await page.getByRole('link', { name: 'Java' }).first().click({ button: 'right' });

    // Mouse Hover on element                                    
    await page.locator("//a[@class='ga-nav'][normalize-space()='C#']").hover()

    // Mouse Double click on element                                    
    await page.locator("//a[@class='ga-nav'][normalize-space()='C#']").dblclick()

})

