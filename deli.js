function takeANumber(katzDeliLine, personName) {
 katzDeliLine.push(personName);
 return "Welcome, " + personName + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    return "Currently serving " + katzDeliLine.splice(0, 1) + ".";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "The line is currently empty.";
  }
  else {
    var string = "";
    katzDeliLine.forEach(function(person, index) {
      string = string.concat(index + 1 + ". " + person + ", ")
    });
    return "The line is currently: " + string.slice(0, -2);
  }
}
