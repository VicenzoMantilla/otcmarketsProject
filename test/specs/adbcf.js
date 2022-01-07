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
            Home.setValueForSearch('ADBCF');
            expect(Home.searchTextResult).toHaveTextContaining('ADBRI Limited');
        });
        it('Check if the search is done correctly',()=>{
            Home.clickSearch();
            expect(browser).toHaveUrl('https://www.otcmarkets.com/stock/ADBCF/overview');
        });
    });
    describe('Check the navegation to Quote section',()=>{
        it('Check to stand on the qoute section',()=>{
            Quote.quoteSectionAdbcf();
            expect(browser).toHaveUrl('https://www.otcmarkets.com/stock/ADBCF/quote');
        });
    });
    describe('Check the Name and Logo of the company',()=>{
        it('check that the name matches the one searched for',()=>{
            expect(Quote.companyName).toHaveText('ADBCF');
        });
        it('Check that the image has the link expected',()=>{
            expect(Quote.companyImg).toHaveLink('/logos/tier/PS.png');
        });
    });
    describe('Check the navegation to security is correct',()=>{
        it('Check that the browser has the correct url',()=>{
            Quote.SectionAdbcf();
            expect(browser).toHaveUrl('https://www.otcmarkets.com/stock/RHHBY/security');
        });
    });
})