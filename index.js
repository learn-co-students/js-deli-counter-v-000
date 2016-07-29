function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson);
  var number = katzDeliLine.indexOf(newPerson) + 1;
  return `Welcome, ${newPerson}. You are number ${number} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    var currentPerson = katzDeliLine.splice(0,1);
    return `Currently serving ${currentPerson}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "The line is currently empty.";
  }
  else { 
    katzDeliLine.forEach(function(person, index) {
      katzDeliLine[index] = (index + 1) + '. ' + person;
    });
    var string = "The line is currently: " + katzDeliLine.join(", ");
    return string;
  }
}