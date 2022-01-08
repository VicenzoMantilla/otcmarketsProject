class Quote {
    get quoteBtn () {
        return $('a[href$="quote"]')
    }
    get companyName () {
        return $('h1:first-child')
    }
    get securityBtn() {
        return $('a[href$="security"]')
    }
    get openValue () {
        return $(`(//div[@class='_1G7n38q1bb'])[1]/p`);
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