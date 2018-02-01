'use strict';

var katzDeli = [];

function takeANumber(katzDeli, name) {
	katzDeli.push(name);
	var position = katzDeli.length;
	return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(katzDeli) {
	if (katzDeli.length === 0) {
		return "There is nobody waiting to be served!";
	} else {
		var currentLine = katzDeli.splice(0, 1);
		return `Currently serving ${currentLine}.`;
	}
}

function currentLine(katzDeli) {
	if (katzDeli.length === 0) {
		return "The line is currently empty.";
	} else {
		var theLine = [];
		katzDeli.forEach(function(name, index) {
			theLine.push(`${index +1}. ${name}`)
	});
		return `The line is currently: ` + theLine.join(", ");
	}
}