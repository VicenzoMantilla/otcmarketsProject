class Home {
    get inputSearch () {
        return $('div._2LtWySGSlk.sc-htpNat.fzUmoZ.sc-bdVaJa.iHZvIS > div.sc-bdVaJa.kjdvDm > div._3XTsBmZSmj > div > input')
    };
    get searchResult () {
        return $('div._2LtWySGSlk.sc-htpNat.fzUmoZ.sc-bdVaJa.iHZvIS > div.sc-bdVaJa.kjdvDm > div._3XTsBmZSmj > div > div > div.Rnxv8ImvYu')
    };
    get searchTextResult (){
        return $('div._2LtWySGSlk.sc-htpNat.fzUmoZ.sc-bdVaJa.iHZvIS > div.sc-bdVaJa.kjdvDm > div._3XTsBmZSmj > div > div > div.Rnxv8ImvYu').getText();
    }
    setValueForSearch (company) {
        this.inputSearch.click();
        this.inputSearch.setValue(company);
    };
    clickSearch (){
        this.searchResult.click();
    }
    open = () => {
        return browser.url('https://www.otcmarkets.com/');
    }
}

module.exports = new Home();
