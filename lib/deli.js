'use strict';

function line(deliArr) {
	var	returnStr
	if (deliArr.length==0) {
		returnStr="The line is currently empty."
	} else {
  		returnStr = "The line is currently: "
		deliArr.forEach(function(customer, id) {
			returnStr+=((id+1)+". "+customer);
			if (id!=(deliArr.length-1)) returnStr+=", "
		});
	}
  return returnStr;
};

function nowServing(deliArr){
  if (deliArr.length==0) {
  	return "There is nobody waiting to be served!";
  } else {
  	return "Currently serving "+deliArr.shift()+".";
  }
};

function takeANumber(deliArr, customer){
	deliArr.push(customer);
	var id = deliArr.length
 	return "Welcome, "+customer+". You are number "+id+" in line." 
};


