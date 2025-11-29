// Import playwright module
import { test, expect } from '@playwright/test';

// write a test
test('Selecting Date value in playwright', async ({ page }) => {

    // go to Url
    await page.goto('https://jqueryui.com/datepicker/');

    // Hardcoded Date
    const iframe = page.frameLocator('[class="demo-frame"]');
    await iframe.locator("//input[@id='datepicker']").fill('03/12/2025')

    // dynamic date 
    await iframe.locator("//input[@id='datepicker']").click();
    await iframe.locator("//tbody/tr[2]").click(); // For the date selection go inspect and select from the Todays date option

    // select past date
    await iframe.locator("//input[@id='datepicker']").click();
    await iframe.locator("//span[@class='ui-icon ui-icon-circle-triangle-w']").click();
    await iframe.locator("text='15'").click();

    // select Future date
    await iframe.locator("//input[@id='datepicker']").click();
    await iframe.locator("//span[@class='ui-icon ui-icon-circle-triangle-w']").click();
    await iframe.locator("text='2'").click();
})

