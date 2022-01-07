const Home = require('../pageobjects/home.page');
const Quote = require('../pageobjects/quote.page');
const Security = require('../pageobjects/security.page');

let quoteOpenValue, quoteMarketCap, secMarketCap, secDate;

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
            await Home.setValueForSearch('OTCM');
            await Home.inputSearch.waitForClickable();
            await Home.searchFound.click();
            await expect(browser).toHaveUrl('https://www.otcmarkets.com/stock/OTCM/overview')
        });
        it('The search result should match with the Company Name', async ()=>{
            await expect(Quote.companyName).toHaveText('OTCM');
        });
        it('It Should redirect to the Quote section', async ()=>{
            await Quote.quoteBtnOtcm.isDisplayedInViewport();
            await Quote.quoteBtnOtcm.waitForClickable();
            await Quote.quoteSectionOtcm();
            await expect(browser).toHaveUrl('https://www.otcmarkets.com/stock/OTCM/quote');
        });
        it('Get & save the open/market cap values', async ()=>{
            quoteOpenValue = await Quote.openValue.getText();
            marketCapQuoteValue = await Quote.marketCapValue.getText();
        });
        it('It should redirect to Security/Details section', async () => {
            await Quote.securityBtn.isDisplayedInViewport();
            await Quote.securitySectionBtn();
            await expect(browser).toHaveUrlContaining('https://www.otcmarkets.com/stock/OTCM/security');
        });
        it('Market Cap value from Security should match the one in Quote section', async () => {
            secMarketCap = await Security.marketCapSecValue.getText();
            secDate = await Security.marketCapSecDate.getText();
            await expect(secMarketCap).toEqual(quoteMarketCap);
            console.log("Market Cap $" + secMarketCap + "On" +  marketCapSecDate);
        });
    })
})