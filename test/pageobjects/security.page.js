class Security {
    get securityMarketValue () {
        return $('h4+div div:nth-child(2)')
    }
    get securityMarketDate () {
        return $('h4+div div:nth-child(3)')
    }
}
module.exports = new Security();