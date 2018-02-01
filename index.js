
function takeANumber(katzDeliLine, new_person) {
  katzDeliLine.push(new_person);
  return `Welcome, ${new_person}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    var currentCust = katzDeliLine[0];
    katzDeliLine.splice(0, 1);
    return `Currently serving ${currentCust}.`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return `The line is currently empty.`;
  } else {
    var string = "The line is currently: "
    katzDeliLine.forEach(function(name, index) {
      string = string.concat(`${index + 1}. ${name}, `)
    });
    return string.slice(0, -2);
  };
}