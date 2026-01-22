// Import playwright module
import { test, expect } from '@playwright/test';
import testData from '../../test-data/qa/testData.json';

type TestData = {
    TestDataSet1: {
        Skill1: string,
        Skill2: string
    },
    TestDataSet2: {
        Skill1: string,
        Skill2: string
    }
}

const typedTestData = testData as TestData;

for (const dataSetName in typedTestData) {
    const skill = typedTestData[dataSetName as keyof TestData];

    // write a test
    test(`Data Driven testing using json file in playwright : ${skill.Skill1}`, async ({ page }) => {

        console.log('test execution Started..');

        // go to Url
        await page.goto('https://duckduckgo.com/');

        // search with keywords     

        await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill(skill.Skill2);
        await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('Enter');

        // click on playlist
        await page.getByRole('link', { name: skill.Skill2 }).first().click();

        // validate web page title
        await expect(page).toHaveTitle(skill.Skill2 + ' at DuckDuckGo');
    })
}


