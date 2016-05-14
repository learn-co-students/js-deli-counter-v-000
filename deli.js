'use strict';

var katzDeli = [];


function takeANumber(katzDeli, name){
	katzDeli.push(name);
	return katzDeli.length;
};

function nowServing(katzDeli, index){
	if (katzDeli.length === 0){
		return "The line is currently empty.";
	} else {
		return katzDeli.splice(0,1);
	};
};

function line(katzDeli){
	if (katzDeli.length === 0){
		return "The line is currently empty.";
	}else{
		console.log('The line is currently: ');
		katzDeli.forEach(function(name, index){
			var number = index + 1;
			console.log(number + '. ' + name);
		});
	};
};