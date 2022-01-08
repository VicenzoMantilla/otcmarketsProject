class Security {
    get securityMarketValue () {
        return $('//div[2]/div/div/div[1]/div[2]/div/div[2]/div/div[2]/div[2]');
    }
    get securityMarketDate () {
        return $('h4+div div:nth-child(3)')
    }
}
module.exports = new Security();