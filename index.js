function takeANumber(katzDeliLine, name) {
	katzDeliLine.push(name);
	return `Welcome, ${name}. You are number ${katzDeliLine.length + 0} in line.`
}

function nowServing(katzDeliLine) {
	if (katzDeliLine.length >= 1) {
		return "Currently serving " + katzDeliLine.shift() + "."
	} else {
		return `There is nobody waiting to be served!`
	}
}

function currentLine(katzDeliLine) {
	var currentOrder = "The line is currently:"

	katzDeliLine.forEach(function(name, index) {
		var number = index + 1;
		currentOrder += " " + number + "." + " " + name + ","
	});
	
	var newStr = currentOrder.substring(0, currentOrder.length-1);
	
	if (katzDeliLine.length >= 1) {
		return newStr;
	} else {
		return "The line is currently empty."
	}
}
