// Import playwright module
import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
    console.log('running before all tests.........')
})

test.beforeEach(async ({ page }) => {
    await page.goto('https://duckduckgo.com/');
    console.log('running before each tests.........')
})

test.afterAll(async () => {
    console.log('running after all tests.........')
})

test.afterEach(async () => {
    console.log('running after Each tests.........')
})

// write a test
test('Test 1', async ({ page }) => {

    // go to Url
    // await page.goto('https://duckduckgo.com/');
    console.log('Test 1 execution started');

    // search with keywords)

    await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill('platwirght by testers talk');
    await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('Enter');

    // click on playlist
    await page.getByRole('link', { name: 'Playwright by Testers Talk -' }).first().click();

    // validate web page title
    await expect(page).toHaveTitle('Playwright by Testers Talk ✅ - YouTube');

})


// write a test
test('Test 2', async ({ page }) => {
    console.log('Test 2 execution started');

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





