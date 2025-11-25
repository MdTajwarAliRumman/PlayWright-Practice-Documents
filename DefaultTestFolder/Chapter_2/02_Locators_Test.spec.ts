// Import playwright module
import { test, expect } from '@playwright/test';

// write a test
test('Test Different locators in playwright', async ({ page }) => {

    // <----------------*************Note: Comment out each line before Trying to run the next one*************------------------------->
    // go to Url
    await page.goto('https://duckduckgo.com/');
    await page.goto('https://github.com/MdTajwarAliRumman');

    // Get by role-> button text nite hobe
    await page.getByRole('link', { name: 'Sign In' }).click()

    // Get by lable-> jekhane area label nite hobe 
    await page.getByLabel('Homepage', { exact: true }).first().click();

    // GetbyAltText-> jekhnae Alt image text nite hobe
    await page.getByAltText("View MdTajwarAliRumman's full-sized avatar").click();

    // GetbyTextId-> data-tab-item nite hobe
    await page.getByTestId("repositories").first().click();

    // GetbyText-> text nite hobe
    await page.getByText("Sign up").click();

    // GetbY ,placeholder xpath, cssSelector nite hobe
    await page.goto('https://youtube.com/')
    await page.getByPlaceholder('Search').fill('Sunsetz');
    await page.locator("//input[@placeholder='Search']").fill('Sunsetz')
    await page.locator("input[placeholder='Search']").fill('Sunsetz')

    // GetbYTitle-> use the title
    await page.goto('https://google.com/')
    await page.getByTitle('Search').fill('MdTajwarAli');


})





