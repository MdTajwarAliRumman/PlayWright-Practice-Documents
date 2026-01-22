import { Locator, Page } from "@playwright/test";

export class ResultPage {
    // initialize all the pages

    readonly page: Page;
    constructor(page: Page) {
        this.page = page

    }

    // Methods
    async clickOnLink(link: string) {
        await this.page.getByRole('link', { name: link }).first().click();
    }

}