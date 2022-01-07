class Security {
    get securityMarketText () {
        return $('div.sc-bdVaJa.ensNgD > b > span._1xIUVEWewx > span > label').getText()
    }
    get securityMarketValue () {
        return $('div._8AXJn4ourf.sc-htpNat.jtWIOA.sc-bdVaJa.gRrvFh > div.sc-bdVaJa.kYmYWE').getText()
    }
    get securityMarketDate () {
        return $('div._8AXJn4ourf.sc-htpNat.jtWIOA.sc-bdVaJa.gRrvFh > div.sc-bdVaJa.fKInnm').getText()
    }
}
module.exports = new Security();