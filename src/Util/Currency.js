class Currency {
    static convertNumberToCurrency(money) {
      let value = money.toString()
      if (value != "") {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1" + '.');
      }
      return value
    }
  }
  module.exports = Currency;
  