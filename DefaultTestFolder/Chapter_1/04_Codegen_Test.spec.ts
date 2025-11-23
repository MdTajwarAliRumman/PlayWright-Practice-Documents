import { test, expect } from '@playwright/test';

test('Codegen Testcase', async ({ page }) => {
    await page.goto('https://duckduckgo.com/');
    await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).click();
    await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).fill('W3S');
    await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('ArrowDown');
    await page.getByRole('combobox', { name: 'Search with DuckDuckGo' }).press('Enter');
    await page.getByTestId('result-title-a').first().click();
    await page.getByRole('link', { name: 'JAVASCRIPT', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'JavaScript Tutorial' })).toBeVisible();
});