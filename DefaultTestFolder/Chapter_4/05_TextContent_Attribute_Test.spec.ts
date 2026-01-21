// Import playwright module
import { test, expect } from '@playwright/test';

// write a test
test('Get text and get attribute value in playwright', async ({ page }) => {

    console.log('test execution Started..');

    await page.goto('https://www.w3schools.com/');

    // text content returns wbsites any particular element text
    const title = await page.locator("//h3[@class='learntocodeh3']").textContent();
    const removSpaces = title?.trim();
    console.log(`Title is: ${title}`);
    expect(removSpaces).toBe("With the world's largest web developer site.")

    const attributeValue = await page.locator("//a[normalize-space()='JAVASCRIPT']").first().getAttribute('JavaScript Tutorial');
    console.log(`Attribute value is: ${attributeValue}`);
})



