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

var people = [];

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  else {
    katzDeliLine.forEach(function (person, index) {
      people.push(`${index + 1}. ${person}`)
    });
    var current = people.join(', ');
    return `The line is currently: ${current}`;
  };
}


