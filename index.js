function takeANumber(katzDeliLine, personsName) {
  katzDeliLine.push(personsName);
  var line = katzDeliLine.length;
  return `Welcome, ${personsName}. You are number ${line} in line.`;
}

function nowServing(line) {
  if (line.length > 0) {
    return `Currently serving ${line.shift()}.`;
}
  else {
    return  "There is nobody waiting to be served!";
  }
}

function currentLine(line) {

  if (line.length === 0){
    return "The line is currently empty.";
  }

  else
    line.forEach(function(name, index) {
      var number = index + 1
    return`The line is currently:${number}.${name}`;
  })
}
