const Wallet = require('./wallet.js')

describe('Wallet', () => {
	test('should be instance of class.', () => {
		const wallet = new Wallet()
		expect(wallet).toBeInstanceOf(Wallet)
	})
	test('should return a walletTotal.', () => {
		const wallet = new Wallet()
		expect(wallet.walletTotal).toEqual(0)
	})
	test('should add stock to walletTotal.', () => {
		const wallet = new Wallet()
		wallet.addStock('fallback', 1)
		expect(wallet.walletTotal).toEqual(1)
	})
	test('should add stock to walletTotal multiple times.', () => {
		const wallet = new Wallet()
		wallet.addStock('fallback', 1)
		wallet.addStock('fallback', 1)
		wallet.addStock('fallback', 1)
		expect(wallet.walletTotal).toEqual(3)
	})
	test('should add different amount of stocks to walletTotal.', () => {
		const wallet = new Wallet()
		wallet.addStock('fallback', 1)
		wallet.addStock('fallback', 2)
		expect(wallet.walletTotal).toEqual(3)
	})
	test('should consider share price when adding to walletTotal.', () => {
		const wallet = new Wallet()
		wallet.addStock('fallback', 1)
		wallet.addStock('fallback', 0.5)
		expect(wallet.walletTotal).toEqual(1.5)
	})
	test('should return rate in EUR.', () => {
		const wallet = new Wallet()
		wallet.addStock('fallback', 1)
		wallet.calculateWalletTotal()
		expect(wallet.walletTotal).toEqual(0.95)
	})
	test('should return rate in CNY.', () => {
		const wallet = new Wallet()
		wallet.addStock('fallback', 1)
		wallet.calculateWalletTotal('CNY')
		expect(wallet.walletTotal).toEqual(6.97)
	})
	test('should handle multiple conversions.', () => {
		const wallet = new Wallet()
		wallet.addStock('fallback', 1)

		wallet.calculateWalletTotal('CHF')
		wallet.calculateWalletTotal('CNY')

		expect(wallet.walletTotal).toEqual(6.55)
	})
	test('should add real world stock values to walletTotal.', () => {
		const wallet = new Wallet()
		wallet.addStock('GOOGL', 1)

		wallet.calculateWalletTotal('CHF')

		expect(wallet.walletTotal).toEqual(Number((89.13 * 0.94).toFixed(2)))
	})
	test('should add multiple real world stock values walletTotal.', () => {
		const wallet = new Wallet()
		wallet.addStock('GOOGL', 1)
		wallet.addStock('AAPL', 1)

		expect(wallet.walletTotal).toEqual(Number((89.13 + 146.71).toFixed(2)))
	})
	test('should add multiple real world stocks with conversion to walletTotal.', () => {
		const wallet = new Wallet()
		wallet.addStock('GOOGL', 1)
		wallet.addStock('AAPL', 1)
		wallet.calculateWalletTotal('CHF')
		expect(wallet.walletTotal).toEqual(
			Number(((89.13 + 146.71) * 0.94).toFixed(2))
		)
	})
	test('should add multiple real world stocks with multiple conversions to walletTotal.', () => {
		const wallet = new Wallet()
		wallet.addStock('GOOGL', 1)
		wallet.addStock('AAPL', 1)
		wallet.calculateWalletTotal('CHF')
		wallet.calculateWalletTotal('CNY')
		expect(wallet.walletTotal).toEqual(
			Number(((89.13 + 146.71) * 0.94 * 6.97).toFixed(2))
		)
	})
})
