'use strict';

function line(array) {
  if (array.length == 0) {
    return "The line is currently empty.";
  }
  else {
  var sentence = "The line is currently: ";

  array.forEach(function(name, index) {
    var number = index + 1;
    sentence += number + ". " + name +", ";
});
   return sentence.slice(0, -2)}}

function nowServing(array) {
  if (array.length > 0) {
    name = array[0];
    array.splice(0, 1);
    return "Currently serving " + name + ".";
  }
  else
    { return "There is nobody waiting to be served!";}
  }


function takeANumber(katzDeli, newPerson) {
  katzDeli.push(newPerson);
  return "Welcome, " + newPerson + ". You are number " + katzDeli.length + " in line.";
}
