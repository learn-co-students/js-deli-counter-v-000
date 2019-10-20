var katzDeli = [];

function takeANumber(katzDeliLine, newPerson) {
	katzDeliLine.push(newPerson)
	return (`Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine) {
	if (katzDeliLine.length === 0) {
		return ("There is nobody waiting to be served!")
	} else {
		return (`Currently serving ${katzDeliLine.shift()}.`)
	}	
}

function currentLine(line) {
	if (!line.length) {
		return ("The line is currently empty.")
	} else {
		const numberName = []

		for (let i = 0, l = line.length; i < l; i++) {
			numberName.push(`${i + 1}. ${line[i]}`)
		}
		return `The line is currently: ${numberName.join(", ")}`
	}
}

