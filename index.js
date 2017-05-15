function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  var linenumber = katzDeliLine.indexOf(person) + 1
  return "Welcome, " + person + ". You are number " + linenumber + " in line.";
};

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
};

function currentLine(katzDeliLine){
  if (katzDeliLine.length == 0) {
    return "The line is currently empty."
  } else {
    var array = [];
    for (var i = 0; i < katzDeliLine.length; i++){
      array.push(" " + parseInt(i + 1) + ". " + katzDeliLine[i])
    }
    return "The line is currently:" + array
  }
}
