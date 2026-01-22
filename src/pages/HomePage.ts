import { Locator, Page } from "@playwright/test";

export class HomePage {
    // initialize all the pages

    readonly page: Page;
    readonly searchTextBox: Locator;

    constructor(page: Page) {
        this.page = page

        // Elements
        this.searchTextBox = page.locator("//input[@id='searchbox_input']")
    }

    // Methods
    async goToURL() {
        await this.page.goto(`${process.env.DUCKDUCKGO_URL}`);
    }

    async searchWithKeywords(keyword: string) {
        await this.searchTextBox.click();
        await this.searchTextBox.fill(keyword);
        await this.searchTextBox.press('Enter');


    }

}