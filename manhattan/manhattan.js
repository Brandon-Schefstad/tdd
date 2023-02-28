function manhattan(startPoint, endPoint) {
	if (JSON.stringify(startPoint) !== JSON.stringify(endPoint)) {
		return (
			Math.abs(startPoint.xCoordinate - endPoint.xCoordinate) +
			Math.abs(startPoint.yCoordinate - endPoint.yCoordinate)
		)
	}
	return 0
}

class Point {
	constructor(x, y) {
		this.xCoordinate = x
		this.yCoordinate = y
	}
}

module.exports = { manhattan, Point }
