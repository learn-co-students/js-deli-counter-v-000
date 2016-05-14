'use strict';

var katzDeli = [];


function takeANumber(katzDeli, name){
	katzDeli.push(name);
	return 'Welcome, ' + name + '. You are number ' + katzDeli.length + ' in line.';
};

function nowServing(katzDeli, index){
	if (katzDeli.length === 0){
		return 'There is nobody waiting to be served!';
	} else {
		return 'Currently serving ' + katzDeli.splice(0,1)[0] + '.';
	};
};

function line(katzDeli){
	if (katzDeli.length === 0){
		return "The line is currently empty.";
	}else{
		var list = '';
		katzDeli.forEach(function(name, index){
			var number = index + 1;
			list += (" " + number + '. ' + name + ",");
		});
		list = list.slice(0, -1);
		return 'The line is currently:' + list;
	};
};