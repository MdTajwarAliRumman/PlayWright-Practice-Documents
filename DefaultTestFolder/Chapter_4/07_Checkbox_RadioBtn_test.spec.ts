// Import playwright module
import { test, expect } from '@playwright/test';

// write a test
test('Working with Radio button in playwright', async ({ page }) => {

    console.log('test execution Started..');

    await page.goto('https://jqueryui.com/checkboxradio/');

    const iFrame = await page.frameLocator('[class="demo-frame"]');

    await expect(iFrame.locator('[for="radio-2"]').first()).not.toBeChecked();
    await iFrame.locator('[for="radio-2"]').first().check();
    await expect(iFrame.locator('[for="radio-2"]').first()).toBeChecked();

})

test('Working with Checkbox in playwright', async ({ page }) => {

    console.log('test execution Started..');

    await page.goto('https://jqueryui.com/checkboxradio/');

    const iFrame = await page.frameLocator('[class="demo-frame"]');

    await expect(iFrame.locator('[for="checkbox-2"]').first()).not.toBeChecked();
    await iFrame.locator('[for="checkbox-2"]').first().check();
    await expect(iFrame.locator('[for="checkbox-2"]').first()).toBeChecked();

})



