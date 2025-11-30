// Import playwright module
import { test, expect } from '@playwright/test';

// write a test
test('Assertions in playwright', async ({ page }) => {

    // go to Url
    // await page.goto('https://duckduckgo.com/');
    await page.goto('https://www.w3schools.com/');

    // just use the place holder value here not the key
    await page.getByPlaceholder('Search our tutorials, e.g. HTML', { exact: true }).first();
    // await page.locator("//input[@id='search2']").fill("Hello Tajwar!");

    // See if the element is visible, Editable, Enable, Empty
    await expect(page.getByPlaceholder('Search our tutorials, e.g. HTML', { exact: true }).first()).toBeVisible();
    await expect(page.getByPlaceholder('Search our tutorials, e.g. HTML', { exact: true }).first()).toBeEditable();
    await expect(page.getByPlaceholder('Search our tutorials, e.g. HTML', { exact: true }).first()).toBeEnabled();
    await expect(page.getByPlaceholder('Search our tutorials, e.g. HTML', { exact: true }).first()).toBeEmpty();

    // expect page to have URl,title,text
    await expect(page).toHaveURL("https://www.w3schools.com/");
    await expect(page).toHaveTitle("W3Schools Online Web Tutorials");
    await expect(page.locator("//h3[@class='learntocodeh3']")).toHaveText("With the world's largest web developer site.");
    await expect(page.locator("//h3[@class='learntocodeh3']")).toHaveCount(2);

})

