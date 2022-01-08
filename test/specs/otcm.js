const Home = require('../pageobjects/home.page');
const Quote = require('../pageobjects/quote.page');
const Security = require('../pageobjects/security.page');

let quoteOpenValue
let secMarketCap
let secDate

describe('OTC Markets Cycle',()=>{
    beforeAll('Open the main page', async ()=>{
        await Home.open();
    });
    describe('Check the cycle e2e for OTCM',()=>{
        it('The url display should be correct', async ()=>{
            await expect(browser).toHaveUrl('https://www.otcmarkets.com/');
        });
        it('Searching for OTCM on the input text should be successful ', async ()=>{
            await Home.inputSearch.isDisplayedInViewport();
            await Home.setValueForSearch('otcm');
            await Home.inputSearch.waitForClickable();
            await browser.pause(2000)
            await Home.searchFound.click();
            await expect(browser).toHaveUrl('https://www.otcmarkets.com/stock/OTCM/overview')
        });
        it('The search result should match with the Company Name', async ()=>{
            await browser.pause(2000)
            await Quote.companyName.waitForDisplayed();
            await expect(Quote.companyName).toHaveText('OTCM');
        });
        it('It Should redirect to the Quote section', async ()=>{
            await Quote.quoteBtn.waitForDisplayed();
            await Quote.quoteBtn.scrollIntoView();
            await Quote.quoteSectionBtn();
            await browser.pause(2000)
            await expect(browser).toHaveUrl('https://www.otcmarkets.com/stock/OTCM/quote');
        });
        it('Get & save the open/market cap values', async ()=>{
            await Quote.openValue.waitForDisplayed();
            await Quote.marketCapValue.waitForDisplayed();
            await Quote.openValue.scrollIntoView();
            quoteOpenValue = await Quote.openValue.getText();
            marketCapQuoteValue = await Quote.marketCapValue.getText();
        });
        it('It should redirect to Security/Details section', async () => {
            await Quote.securityBtn.waitForClickable()
            await Quote.securitySectionBtn();
            await browser.pause(2000)
            await expect(browser).toHaveUrlContaining('https://www.otcmarkets.com/stock/OTCM/security');
        });
        it('Market Cap value from Security should match the one in Quote section', async () => {
            await Security.securityMarketValue.waitForDisplayed();
            await Security.securityMarketDate.waitForDisplayed();
            secMarketCap = await Security.securityMarketValue.getText();
            secDate = await Security.securityMarketDate.getText();
            console.log("Market Cap: " + secMarketCap + " - " +  secDate);
            await expect(secMarketCap).toEqual(marketCapQuoteValue);
        });
    })
})