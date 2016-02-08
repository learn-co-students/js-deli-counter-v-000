'use strict';

function line(katzDeli) {
  // your code here

  if (katzDeli.length==0){
    return "The line is currently empty.";
  } else {
    var lineInfo=[];
    katzDeli.forEach(function(currentValue, index){
      lineInfo.push(" "+(index+1)+". "+currentValue);
    });
    return "The line is currently:"+ lineInfo.toString();

  }
}

function nowServing(katzDeli){
  // your code here
if (katzDeli.length == 0) {
  return "There is nobody waiting to be served!";
}
else {
  var person = katzDeli.splice(0,1);
  return "Currently serving "+ person+ ".";
}

}

function takeANumber(katzDeli, customerName){
  // your code here
  var position = katzDeli.push(customerName);
  return "Welcome, "+ customerName+ ". You are number "+position+ " in line.";

}
