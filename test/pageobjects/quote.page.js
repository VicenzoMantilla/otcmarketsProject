class Quote {
    get quoteBtnOtcm () {
        return $('div._2H94cIcGl1.sc-bdVaJa.fSzdHl > a[href="/stock/OTCM/quote"]')
    }
    get quoteBtnRhhby () {
        return $('div._2H94cIcGl1.sc-bdVaJa.fSzdHl > a[href="/stock/RHHBY/quote"]')
    }
    get quoteBtnAdbcf () {
        return $('div._2H94cIcGl1.sc-bdVaJa.fSzdHl > a[href="/stock/ADBCF/quote"]')
    }
    get companyName () {
        return $('h1._2D4XgQ0gJK').getText()
    }
    get companyImg () {
        return $('div.ln9E-VnEyg > span > span >img').getAttribute('src')
    }
    get securityBtmOtcm () {
        return $('div._2H94cIcGl1.sc-bdVaJa.fSzdHl > a[href="/stock/OTCM/security"]')
    }
    get securityBtmRhhby () {
        return $('div._2H94cIcGl1.sc-bdVaJa.fSzdHl > a[href="/stock/RHHBY/security"]')
    }
    get securityBtmAdbcf () {
        return $('div._2H94cIcGl1.sc-bdVaJa.fSzdHl > a[href="/stock/ADBCF/security"]')
    }
    get openValue () {
        return $('div._1G7n38q1bb.sc-bdVaJa.lbvrig > p').getText()
    }
    get marketCapValue () {
        return $$('div._1G7n38q1bb.sc-bdVaJa.lbvrig > p').getText()
    }
    quoteSectionOtcm () {
        this.quoteBtnOtcm.click();
    }
    quoteSectionRhhby () {
        this.quoteBtnRhhby.click();
    }
    quoteSectionAdbcf () {
        this.quoteBtnAdbcf.click();
    }
    SectionOtcm () {
        this.securityBtmOtcm.click();
    }
    SectionRhhby () {
        this.securityBtmRhhby.click();
    }
    SectionAdbcf () {
        this.securityBtmAdbcf.click();
    }
}
module.exports = new Quote();