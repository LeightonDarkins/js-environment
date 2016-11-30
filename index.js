const calculator = require('./lib/calculator')

module.exports = {
  calculateGST: (amount) => {
    const GST = 0.10

    return calculator.multiply(GST, amount)
  },
  addServiceFeeToPrice: (price) => {
    const SERVICE_FEE = 20

    return calculator.add(price, SERVICE_FEE)
  },
  calculateSalesTax: (amount) => {
    const SALES_TAX = 0.09

    return calculator.multiply(SALES_TAX, amount)
  }
}
