class Wallet {
	walletTotal = 0

	conversionTableUSDToX = {
		CNY: 6.97,
		CHF: 0.94,
		EUR: 0.95,
	}

	stockTable = {
		GOOGL: 89.13,
		AAPL: 146.71,
		fallback: 1,
	}

	addStock(stockType = 'fallback', amountOfShares = 1) {
		this.walletTotal += this.stockTable[stockType] * amountOfShares
	}

	calculateWalletTotal(targetCurrency = 'EUR') {
		this.walletTotal = Number(
			(this.walletTotal * this.conversionTableUSDToX[targetCurrency]).toFixed(2)
		)
	}
}
module.exports = Wallet
