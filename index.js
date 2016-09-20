var katzDeli = [];

function takeANumber(katzDeliLine, newPersonName) {
  katzDeliLine.push(newPersonName);
  return `Welcome, ${newPersonName}. You are number ${katzDeliLine.indexOf(newPersonName) + 1} in line.`;
}

function nowServing(katzDeliLine) {
  var nextInLine = katzDeliLine.shift();
  return nextInLine ? `Currently serving ${nextInLine}.` : 'There is nobody waiting to be served!';
}

function currentLine(katzDeliLine) {
  var lineString = 'The line is currently:';
  var initialLineString = lineString;
  katzDeliLine.forEach(function(name, index) {
    lineString += ` ${index + 1}. ${name},`
  })
  return lineString === initialLineString ? 'The line is currently empty.' : lineString.slice(0, lineString.length - 1);
}