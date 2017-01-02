function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var count = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${count} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine[0]) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine[0]) {
    var currentLine = [];
    katzDeliLine.forEach(function(name, index) {
      currentLine.push(` ${index + 1}. ${name}`);
    })
    return "The line is currently:" + currentLine.toString();
  } else {
      return "The line is currently empty.";
  }
}
