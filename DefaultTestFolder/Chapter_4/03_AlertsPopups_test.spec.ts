// Import playwright module
import { test, expect } from '@playwright/test';

// write a test
test('Handling Alerts in Playwright', async ({ page }) => {

    console.log('test execution Started..');

    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    // by this code we can click on alerts or popups
    page.once('dialog', dialog => {
        dialog.accept();
        console.log(`Alert message is: ${dialog.message()}`);
        console.log(`Dialog type is: ${dialog.type()}`);
    })

    // here {exact: true} is used to handle the exact text match
    await page.getByText('See an example alert', { exact: true }).click();

})

test('Handling popups in Playwright', async ({ page }) => {

    console.log('test execution Started..');

    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    // by this code we can click on alerts or popups
    page.once('dialog', dialog => {
        dialog.accept();
        // dialog.dismiss();
        console.log(`Popup message is: ${dialog.message()}`);
        console.log(`Dialog type is: ${dialog.type()}`);

    })

    // here {exact: true} is used to handle the exact text match
    await page.getByText('See a sample confirm', { exact: true }).click();

})

test('Handling prompt popups in Playwright', async ({ page }) => {

    console.log('test execution Started..');

    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');

    // by this code we can click on pormpts and write on them
    page.once('dialog', async dialog => {
        // dialog.dismiss();
        console.log(`Prompt message is: ${dialog.message()}`);
        console.log(`Dialog type is: ${dialog.type()}`);
        await dialog.accept('Tajwar');
    })

    // here {exact: true} is used to handle the exact text match
    await page.getByText('See a sample prompt', { exact: true }).click();

})

