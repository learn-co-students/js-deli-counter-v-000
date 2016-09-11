function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "There is nobody waiting to be served!";
  }
  else {
    return "Currently serving " + katzDeliLine.splice(0,1) + ".";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var currentLine = [];
    katzDeliLine.forEach(function(customer, index) {
      currentLine.push((index + 1) + ". " + customer)
    });
    return "The line is currently: " + currentLine.join(", ");
  }
  else {
    return "The line is currently empty."
  }
}
