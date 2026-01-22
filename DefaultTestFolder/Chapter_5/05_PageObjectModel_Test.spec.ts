// Import playwright module
import { test, expect } from '@playwright/test';
import { HomePage } from '../../src/pages/HomePage';
import { ResultPage } from '../../src/pages/ResultPage';
import { PlaylistPage } from '../../src/pages/PlaylistPage';

// write a test
test('Page Object Model test in playwright', async ({ page }) => {

    console.log('test execution Started..');
    // create object of HomePage
    const homePage = new HomePage(page);
    await homePage.goToURL();
    await homePage.searchWithKeywords(`${process.env.SEARCH_KEYWORDS}`);

    // create object of ResultPage
    const resultPage = new ResultPage(page);
    await resultPage.clickOnLink(`${process.env.SEARCH_KEYWORDS}`);

    // create object of PlaylistPage
    const playlistPage = new PlaylistPage(page);
    await playlistPage.validatePageTitle(`${process.env.SEARCH_KEYWORDS}` + ' at DuckDuckGo');



})