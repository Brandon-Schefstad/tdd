function lengthOfLastWord(input) {
	if (!input) {
		return 0
	}
	let trimmedInput = input.trim()
	const inputSplitBySpaces = trimmedInput.split(' ')
	return inputSplitBySpaces.at(-1).length
}

module.exports = lengthOfLastWord
