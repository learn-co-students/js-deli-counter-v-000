var katzDeliLine = [];

function takeANumber(katzDeliLine, personsName) {
  katzDeliLine.push(personsName);
  var position = katzDeliLine.length;
  return "Welcome, " + personsName + ". You are number " + position + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0 ) {
    return "Currently serving " + katzDeliLine.splice(0,1) + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var waiting = [];
  if (katzDeliLine.length > 0) {
    katzDeliLine.forEach(function(name, index) {
      waiting.push(`${index + 1}. ${name}`);
    });
    return "The line is currently: " + waiting.join(", ");
  } else {
    return "The line is currently empty.";
  }
}
