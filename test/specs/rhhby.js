const Home = require('../pageobjects/home.page');
const Quote = require('../pageobjects/quote.page');
const Security = require('../pageobjects/security.page');

describe('otc markets',()=>{
    beforeAll('Open the main page',()=>{
        Home.open();
    });
    describe('Check if the browser is correct',()=>{
        it('The url is correct',()=>{
            expect(browser).toHaveUrl('https://www.otcmarkets.com/');
        });
    });
    describe('Check that the search works',()=>{
        it('Check the search is correct',()=>{
            Home.setValueForSearch('RHHBY');
            expect(Home.searchTextResult).toHaveTextContaining('Roche Holding Ltd');
        });
        it('Check if the search is done correctly',()=>{
            Home.clickSearch();
            expect(browser).toHaveUrl('https://www.otcmarkets.com/stock/RHHBY/overview');
        });
    });
    describe('Check the navegation to Quote section',()=>{
        it('Check to stand on the qoute section',()=>{
            Quote.quoteSectionRhhby();
            expect(browser).toHaveUrl('https://www.otcmarkets.com/stock/RHHBY/quote');
        });
    });
    describe('Check the Name and Logo of the company',()=>{
        it('check that the name matches the one searched for',()=>{
            expect(Quote.companyName).toHaveText('RHHBY');
        });
        it('Check the image is not right with the Name',()=>{
            expect(Quote.companyImg).toHaveLink('/logos/tier/QX.png');
        });
    });
    describe('Check the navegation to security is correct',()=>{
        it('Check that the browser has the correct url',()=>{
            Quote.SectionRhhby();
            expect(browser).toHaveUrl('https://www.otcmarkets.com/stock/RHHBY/security');
        });
    });
    describe('Check for the Market Cap between Quote & Security sections match',()=>{
        it('Check that the market cap value match',()=>{
            expect(Quote.marketCapValue[10]).toEqual(Security.securityMarketValue);
        });
    });
})