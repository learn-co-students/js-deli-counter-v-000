var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return 'Welcome, ' + name + '. You are number ' + (katzDeliLine.indexOf(name) + 1) + ' in line.';
}

function nowServing(deliLine) {
  if (deliLine.length > 0) {
    var text = "Currently serving " + deliLine[0] + ".";
    deliLine.splice(0,1);
    return text;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  else {
    var thisLine = "The line is currently: ";
    for (var i = 0; i < line.length; i++){
      thisLine += ((i+1) + ". " + line[i] + ", ");
    }
    return thisLine.substring(0, thisLine.length - 2);
  }
}
