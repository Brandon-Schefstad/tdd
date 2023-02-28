const lengthOfLastWord = require('./index')

describe('lengthOfLastWord', () => {
	test('should return a number.', () => {
		expect(lengthOfLastWord()).toEqual(0)
	})
	test('should return length single word.', () => {
		expect(lengthOfLastWord('12')).toEqual(2)
	})
	test('should return length single word with length 3.', () => {
		expect(lengthOfLastWord('123')).toEqual(3)
	})
	test('should return length single word with length 4.', () => {
		expect(lengthOfLastWord('1234')).toEqual(4)
	})
	test('should return length of longest multiple words with no outside spaces.', () => {
		expect(lengthOfLastWord('1 12')).toEqual(2)
	})
	test('should return length of longest multiple words with outside spaces.', () => {
		expect(lengthOfLastWord(' 1 12 ')).toEqual(2)
	})
	test('should return length of longest multiple words with outside spaces.', () => {
		expect(lengthOfLastWord('   fly me   to   the moon  ')).toEqual(4)
	})
})
