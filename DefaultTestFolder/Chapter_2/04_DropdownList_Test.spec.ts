// Import playwright module
import { test, expect } from '@playwright/test';



// write a test
test('Handeling Dropdown list in playwright', async ({ page }) => {

    // go to Url
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    // Select dropdown using value
    await page.locator("//select[@id='dropdown-class-example']").click();

    await page.locator("//select[@id='dropdown-class-example']").selectOption('option2')
    await page.locator("//select[@id='dropdown-class-example']").selectOption('option1')

    // Select dropdown using visible text
    // await page.getByLabel("Select").selectOption('option3')

    // Validate all the options from the dropdown
    await expect(page.locator("#dropdown-class-example > option")).toHaveText(['Select', 'Option1', 'Option2', 'Option3'])

})