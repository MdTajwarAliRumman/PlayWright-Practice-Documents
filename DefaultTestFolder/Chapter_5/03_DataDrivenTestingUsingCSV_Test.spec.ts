// Import playwright module
import { test, expect } from '@playwright/test';

import { parse } from 'csv-parse/sync';
import fs from 'fs';
import { type } from 'os';
import path from 'path';

type TestRecord = {
    Skill1: string,
    Skill2: string
}

const records = parse(fs.readFileSync(path.join(__dirname, '../../test-data/qa/testData.csv')),
    {
        columns: true,
        skip_empty_lines: true
    }) as TestRecord[];

for (const record of records) {
    // write a test
    test(`Data Driven testing using csv file in playwright : ${record.Skill1}`, async ({ page }) => {

        console.log('test execution Started..');

        // go to Url
        await page.goto('https://duckduckgo.com/');

        // search with keywords

        await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill(record.Skill1);
        await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('Enter');

        // click on playlist
        await page.getByRole('link', { name: record.Skill1 }).first().click();

        // validate web page title
        await expect(page).toHaveTitle(record.Skill1 + ' at DuckDuckGo');
    })
}




