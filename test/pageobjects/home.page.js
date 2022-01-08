class Home {
    get inputSearch () {
        return $(`(//input[@placeholder='Quote'])[1]`)
    };
    get searchFound () {
        return $(`(//img[@src='/icons/tier/qx.png'])[1]`)
    };
    get searchImg () {
        return $(`(//img[@src='/icons/tier/ps.png'])[1]`)
    }
    
    setValueForSearch (companyName) {
        this.inputSearch.click();
        this.inputSearch.setValue(companyName);
    };
    open = () => {
        return browser.url('https://www.otcmarkets.com/');
    }
}

module.exports = new Home();
