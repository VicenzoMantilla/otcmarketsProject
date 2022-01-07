const Home = require('../pageobjects/home.page');
const Qoute = require('../pageobjects/quote.page');
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
            Home.setValueForSearch('OTCM');
            expect(Home.searchTextResult).toHaveText('OTC Markets Group Inc.');
        });
        it('Check if the search is done correctly',()=>{
            Home.clickSearch();
            expect(browser).toHaveUrl('https://www.otcmarkets.com/stock/OTCM/overview');
        });
    });
    describe('Check the navegation to Qoute section',()=>{
        it('Check to stand on the qoute section',()=>{
            Qoute.quoteSectionOtcm();
            expect(browser).toHaveUrl('https://www.otcmarkets.com/stock/OTCM/quote');
        });
    });
    describe('Check the Name and Logo of the company',()=>{
        it('check that the name matches the one searched for',()=>{
            expect(Qoute.companyName).toHaveText('OTCM');
            expect(Qoute.companyImg).toHaveLink('/logos/tier/QX.png');
        });
    });
    describe('Check the navegation to security is correct',()=>{
        it('Check that the browser has the correct url',()=>{
            Qoute.SectionOtcm();
            expect(browser).toHaveUrl('https://www.otcmarkets.com/stock/OTCM/security');
        });
    });
    describe('Check for the Market Cap between Qoute & Security sections match',()=>{
        it('Check that the market cap value match',()=>{
            expect(Qoute.marketCapValue[10]).toEqual(Security.securityMarketValue);
        });
    });
})