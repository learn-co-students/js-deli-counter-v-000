'use strict';

var katzDeli=[]
function takeANumber(katzDeliLine, name){
  place = katzDeliLine.length
  katzDeliLine.push(name)
  linePlace = place + 1

  return "Welcome, " + name +". You are number " + linePlace + " in line."
}

//Build a function that a new customer will use when entering the deli.
//The function, takeANumber, should accept
//   the current line of people, katzDeliLine, along with the new person's name as parameters.
//   The function should return their position in line.
//      And don't go being too programmer-y and give them their index.
//      These are normal people. If they are 7th in ok==line, tell them that. Don't get their hopes up by telling them they are number 6 in line.
