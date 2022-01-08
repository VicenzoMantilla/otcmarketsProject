const Home = require('../pageobjects/home.page');
const Quote = require('../pageobjects/quote.page');
const Security = require('../pageobjects/security.page');

let quoteOpenValue
let quoteMarketCap
let secMarketCap
let secDate

describe('RHHBY Markets Cycle',()=>{
    beforeAll('Open the main page', async ()=>{
        await Home.open();
    });
    describe('Check the cycle e2e for RHHBY',()=>{
        it('The url display should be correct', async ()=>{
            await expect(browser).toHaveUrl('https://www.otcmarkets.com/');
        });
        it('Searching for RHHBY on the input text should be successful ', async ()=>{
            await Home.inputSearch.isDisplayedInViewport();
            await Home.setValueForSearch('rhhby');
            await Home.inputSearch.waitForClickable();
            await browser.pause(2000)
            await Home.searchFound.click();
            await expect(browser).toHaveUrl('https://www.otcmarkets.com/stock/RHHBY/overview')
        });
        it('The search result should match with the Company Name', async ()=>{
            await browser.pause(2000)
            await Quote.companyName.isDisplayedInViewport();
            await expect(Quote.companyName).toHaveText('RHHBY');
        });
        it('It Should redirect to the Quote section', async ()=>{
            await Quote.quoteSectionBtn();
            await browser.pause(2000)
            await expect(browser).toHaveUrl('https://www.otcmarkets.com/stock/RHHBY/quote');
        });
        it('Get & save the open/market cap values', async ()=>{
            await Quote.openValue.isDisplayedInViewport();
            await Quote.marketCapValue.isDisplayedInViewport();
            quoteOpenValue = await Quote.openValue.getText();
            marketCapQuoteValue = await Quote.marketCapValue.getText();
        });
        it('It should redirect to Security/Details section', async () => {
            await Quote.securitySectionBtn();
            await browser.pause(2000);
            await expect(browser).toHaveUrlContaining('https://www.otcmarkets.com/stock/ADBCF/security');
        });
        it('Market Cap value from Security should match the one in Quote section', async () => {
            secMarketCap = await Security.marketCapSecValue.getText();
            secDate = await Security.marketCapSecDate.getText();
            await expect(secMarketCap).toEqual(quoteMarketCap);
            console.log("Market Cap: " + secMarketCap + " - " +  marketCapSecDate);
        })
    })
})