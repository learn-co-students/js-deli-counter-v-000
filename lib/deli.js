'use strict';

function line(deliLine) {
	if (deliLine.length === 0) {
		return "The line is currently empty.";
	} else {
		var newLine = [];
		deliLine.forEach(function(person, index) {
			index += 1; newLine.push(index + ". " + person);
		});
		return "The line is currently: " + newLine.join(", ");
	}
  
};

function nowServing(deliLine) {
  if (deliLine.length === 0) {
  	return "There is nobody waiting to be served!"
  } else {
  	return "Currently serving " + deliLine.shift() + ".";
  }
};

function takeANumber(deliLine, customer) {
	deliLine.push(customer);
	return "Welcome, " + customer + 
	". You are number " + deliLine.length + " in line.";
};


