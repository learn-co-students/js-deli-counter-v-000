var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    var customer = katzDeliLine[0]
    katzDeliLine.shift()
    return "Currently serving " + customer + ".";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  else {
    var customers = []
    katzDeliLine.forEach(function(name, index) {
      customers.push(`${index + 1}. ${name}`);
    })
    return "The line is currently: " + customers.join(', ');
  }

}