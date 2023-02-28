const { manhattan, Point } = require('./manhattan.js')

describe('Point', () => {
	test('should have defined x and y coordinates.', () => {
		const newPoint = new Point(0, 0)
		expect(newPoint).toHaveProperty('xCoordinate')
		expect(newPoint).toHaveProperty('yCoordinate')
	})
})
describe('manhattan function', () => {
	test('should be defined', () => {
		expect(manhattan).toBeDefined()
	})
	test('should return a distance of 0 <-? when given undefined arguments', () => {
		expect(manhattan()).toEqual(0)
	})
	test('should return a distance of 0 when given the same point', () => {
		const startPoint = new Point(0, 0)
		const endPoint = new Point(0, 0)
		expect(manhattan(startPoint, endPoint)).toEqual(0)
	})

	test('should return distance between points on same x-axis', () => {
		const startPoint = new Point(0, 2)
		const endPoint = new Point(0, 0)
		expect(manhattan(startPoint, endPoint)).toEqual(2)
	})
	test('should return distance between points on same y-axis', () => {
		const startPoint = new Point(3, 0)
		const endPoint = new Point(0, 0)
		expect(manhattan(startPoint, endPoint)).toEqual(3)
	})
	test('should return distance between points on different axes', () => {
		const startPoint = new Point(3, 1)
		const endPoint = new Point(0, 0)
		expect(manhattan(startPoint, endPoint)).toEqual(4)
	})
	test('should return distance between points moving backwards', () => {
		const startPoint = new Point(0, 0)
		const endPoint = new Point(3, 1)
		expect(manhattan(startPoint, endPoint)).toEqual(4)
	})
})
