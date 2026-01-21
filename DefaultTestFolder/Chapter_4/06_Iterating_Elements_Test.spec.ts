// Import playwright module
import { test, expect } from '@playwright/test';

// write a test
test('Iterating matching elements in playwright', async ({ page }) => {

    console.log('test execution Started..');

    await page.goto('https://github.com/MdTajwarAliRumman');

    // This $$ sign identifies all the elements present in the page which means it will select the 6 repositories 
    const allRepo = await page.$$('.repo')

    for (const repositoryLink of allRepo) {
        // this textContent() method will return the texts of the element (For of loop)
        const repoName = await repositoryLink.textContent();
        console.log(`Repository name is: ${repoName}`);
    }

    console.log(`==================================================`);

    // This for loop will also return the texts of the element (For of loop)
    for (let i = 0; i < allRepo.length; i++) {
        const repoName = await allRepo[i].textContent();
        console.log(`Text from 2nd for loop: ${repoName}`);
    }
    console.log(`==================================================`);

    const allRepositories = await page.locator('.repo')
    const count = await allRepositories.count();
    for (let i = 0; i < count; i++) {
        const repoName = await allRepositories.nth(i).textContent();
        console.log(`Text from 3rd for loop: ${repoName}`);
    }
})