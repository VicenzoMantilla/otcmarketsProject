class Quote {
    get quoteBtn () {
        return $('a[href$="Quote"]')
    }
    get companyName () {
        return $('h1:first-child')
    }
    get securityBtn() {
        return $('a[href$="security"]')
    }
    get openValue () {
        return $('//label[contains("Open")]/following-sibling::p');
    }
    get marketCapValue () {
        return $('span + p');
    }
    quoteSectionBtn () {
        this.quoteBtn.click();
    }
    securitySectionBtn () {
        this.securityBtn.click();
    }
}
module.exports = new Quote();