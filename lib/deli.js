'use strict';

function line(katzDeli) {
	if(katzDeli.length === 0) {
		var response = "The line is currently empty.";
		return response;
	} else {
		var queue = []
		katzDeli.forEach(function(person, index) {
			queue.push((index+1).toString() + ". " + person);
		});
		var response = "The line is currently: " + queue.join(", ");
		return response;
	}
};

function nowServing(katzDeli){
	if(katzDeli.length === 0) {
		var response = "There is nobody waiting to be served!";
		console.log(response);
		return response;
	} else {
		var person = katzDeli.shift();
		var response = "Currently serving " + person + ".";
		console.log(response);
		return response;
	}

};

function takeANumber(katzDeli,name){
	var nextPosition = katzDeli.length + 1;
	var response = "Welcome, " + name + ". You are number " + nextPosition + " in line.";
	katzDeli.push(name);
	return response;
};


