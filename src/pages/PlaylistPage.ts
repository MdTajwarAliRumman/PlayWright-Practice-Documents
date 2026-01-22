import { expect, Locator, Page } from "@playwright/test";

export class PlaylistPage {
    // initialize all the pages

    readonly page: Page;
    constructor(page: Page) {
        this.page = page

    }

    // Methods
    async validatePageTitle(title: string) {
        await expect(this.page).toHaveTitle(title);
    }

}