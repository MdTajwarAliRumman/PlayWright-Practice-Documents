// Import playwright module
import { test, expect } from '@playwright/test';

// write a test
test('Capture Screenshots in playwright', async ({ page }) => {

    // go to Url
    // await page.goto('https://duckduckgo.com/');
    await page.goto('https://www.w3schools.com/');

    // element screenshot
    await page.locator("//h1[normalize-space()='Learn to Code']").screenshot({ path: './Screenshots/elementSS.png' });

    // page screenshot
    await page.screenshot({ path: './Screenshots/WholePageSS.png' });

    // Full page screenshot
    await page.screenshot({ path: './Screenshots/FullPageSS.png', fullPage: true });


})
6



