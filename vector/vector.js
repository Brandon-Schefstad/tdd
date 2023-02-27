class Vector {
	constructor(xCoordinate, yCoordinate) {
		this.tail = {
			x: Number(xCoordinate),
			y: Number(yCoordinate),
		}
	}

	length() {
		return Math.sqrt(this.tail.x ** 2 + this.tail.y ** 2)
	}

	add(addVector) {
		const { x: addVectorX, y: addVectorY } = addVector.tail

		return new Vector(
			this.tail.x + addVectorX,
			this.tail.y + addVectorY
			)
	}

	subtract(subVector) {
		const { x: subVectorX, y: subVectorY } = subVector.tail

		return new Vector(
			this.tail.x - subVectorX, 
			this.tail.y - subVectorY
			)
	}

	multiply(multiplier) {
		if (
			multiplier[0].reduce((a, b) => a * b, 1) === 1 &&
			multiplier[1].reduce((a, b) => a * b, 1) === 1
		) {
			
			return new Vector(this.tail.x, this.tail.y)

		} else {
			const [xTransformation1, xTransformation2] = multiplier[0]
			const [yTransformation1, yTransformation2] = multiplier[1]

			const newXCoordinate =(
				this.tail.x * xTransformation1 + 
				this.tail.x * xTransformation2
				)

			const newYCoordinate =(
				this.tail.y * yTransformation1 + 
				this.tail.y * yTransformation2
				)

			return new Vector(newXCoordinate, newYCoordinate)
		}
	}
}

module.exports = Vector
