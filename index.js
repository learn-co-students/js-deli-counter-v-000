function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  var linenumber = katzDeliLine.indexOf(person) + 1
  return "Welcome, " + person + ". You are number " + linenumber + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine = []) {
  return "There is nobody waiting to be served!"
  }
}
