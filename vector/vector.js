class Vector {
	constructor(xCoordinate, yCoordinate) {
		this.tail = [Number(xCoordinate), Number(yCoordinate)]
	}

	length() {
		return Math.sqrt(this.tail[0] ** 2 + this.tail[1] ** 2)
	}

	add(addVector) {
		const [addVectorX, addVectorY] = addVector.tail

		return new Vector(this.tail[0] + addVectorX, this.tail[1] + addVectorY)
	}

	subtract(subVector) {
		const [subVectorX, subVectorY] = subVector.tail

		return new Vector(this.tail[0] - subVectorX, this.tail[1] - subVectorY)
	}

	multiply(multiplier) {
		const originalXCoordinate = this.tail[0]
		const originalYCoordinate = this.tail[1]

		if (
			multiplier[0].reduce((a, b) => a * b, 1) === 1 &&
			multiplier[1].reduce((a, b) => a * b, 1) === 1
		) {
			return new Vector(originalXCoordinate, originalYCoordinate)
		} else {
			const [xTransformation1, xTransformation2] = multiplier[0]
			const [yTransformation1, yTransformation2] = multiplier[1]

			const newXCoordinate =
				originalXCoordinate * xTransformation1 +
				originalXCoordinate * xTransformation2

			const newYCoordinate =
				originalYCoordinate * yTransformation1 +
				originalYCoordinate * yTransformation2

			return new Vector(newXCoordinate, newYCoordinate)
		}
	}
}

module.exports = Vector
