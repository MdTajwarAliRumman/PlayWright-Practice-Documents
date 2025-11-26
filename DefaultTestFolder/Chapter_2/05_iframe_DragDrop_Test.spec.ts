// Import playwright module
import { test, expect } from '@playwright/test';

// write a test
test('Handling Drag & Drop elements in playwright', async ({ page }) => {

    // go to Url
    await page.goto('https://jqueryui.com/droppable/');

    const iframe = page.frameLocator('[class="demo-frame"]');
    // Drag element, Drop element
    const dragElement = iframe.locator("div[id='draggable'] p");
    const dropElement = iframe.locator('[id="droppable"]');

    await dragElement.dragTo(dropElement);
})




