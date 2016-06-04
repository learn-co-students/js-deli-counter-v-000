function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var person = katzDeliLine[katzDeliLine.length - 1];
  var posInLine = katzDeliLine.indexOf(person) + 1;
  return "Welcome, " + person + ". You are number " + posInLine + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var served = katzDeliLine[0]
    katzDeliLine.shift();
    return "Currently serving " + served + ".";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var collection = [] 
    katzDeliLine.forEach(function(name, index) {
      collection.push((index + 1).toString() + ". " + name);
    });
    return "The line is currently: " + collection.join(", ")
  }
}

