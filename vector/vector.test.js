const Vector = require('./vector.js')

// Leaving some older tests in to show how the development progressed.

describe('The vector instance', () => {
	test('should be instance of a Vector class.', () => {
		const newVector = new Vector()
		expect(newVector).toBeInstanceOf(Vector)
	})
	test.skip('[DEPRECATED] should return a tail with an x coordinate.', () => {
		const newVector = new Vector(1)
		expect(newVector.tail[0]).toEqual(1)
	})

	test('should return a tail when given x and y coordinates.', () => {
		const newVector = new Vector(1, 2)
		expect(newVector.tail).toEqual({ x: 1, y: 2 })
	})

	test('should return length from origin of a given vector.', () => {
		const newVector = new Vector(3, 4)
		expect(newVector.length()).toEqual(5)
	})

	test('should return identity when addend is [0, 0].', () => {
		const newVector = new Vector(3, 4)
		const addendVector = new Vector(0, 0)
		expect(newVector.add(addendVector).tail).toEqual({ x: 3, y: 4 })
	})

	test('should return sum of two vectors when addend is not [0, 0]. ', () => {
		const newVector = new Vector(3, 4)
		const addendVector = new Vector(1, 1)
		const answerVector = new Vector(4, 5)
		expect(newVector.add(addendVector)).toEqual(answerVector)
	})

	test('should return identity if subtrahend is [0, 0].', () => {
		const newVector = new Vector(3, 4)
		const subtrahendVector = new Vector(0, 0)
		expect(newVector.subtract(subtrahendVector).tail).toEqual(newVector.tail)
	})

	test('should return difference of two vectors when subtrahend is not [0, 0].', () => {
		const newVector = new Vector(3, 4)
		const subtrahendVector = new Vector(1, 2)
		expect(newVector.subtract(subtrahendVector)).toEqual(new Vector(2, 2))
	})

	test('should return identity product when multiplier is [[1,1],[1,1]].', () => {
		const newVector = new Vector(1, 1)
		const identityMultiplier = [
			[1, 1],
			[1, 1],
		]
		expect(newVector.multiply(identityMultiplier)).toEqual(new Vector(1, 1))
	})

	test('should return product when multiplier is not [[1,1],[1,1]].', () => {
		const newVector = new Vector(1, 1)
		const multiplier = [
			[1, 2],
			[1, 2],
		]
		expect(newVector.multiply(multiplier)).toEqual(new Vector(3, 3))
	})

	test('should return dynamic product when multiplier is not [[1,1],[1,1]].', () => {
		const newVector = new Vector(1, 1)
		const multiplier = [
			[2, 2],
			[2, 2],
		]
		expect(newVector.multiply(multiplier)).toEqual(new Vector(4, 4))
	})

	test('should return length of vector sums. ', () => {
		const newVector = new Vector(1, 2)
		const addendVector = new Vector(2, 2)
		expect(newVector.add(addendVector).length()).toEqual(5)
	})

	test('should return length of vector differences. ', () => {
		const newVector = new Vector(11, 12)
		const subtrahendVector = new Vector(5, 4)
		expect(newVector.subtract(subtrahendVector).length()).toEqual(10)
	})

	test('should return length of vector products. ', () => {
		const newVector = new Vector(1.5, 2)
		const multiplier = [
			[2, 2],
			[2, 2],
		]
		expect(newVector.multiply(multiplier).length()).toEqual(10)
	})
})
