var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(`${name}`);
  var place = katzDeliLine.length; 
  return `Welcome, ${name}. You are number ${place} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    var current = katzDeliLine.shift();
    return `Currently serving ${current}.`;
  }
}

nowServing(katzDeliLine);

function currentLine(katzDeliLine) {

}

