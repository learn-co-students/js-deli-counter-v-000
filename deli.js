function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(line) {
  if (line.length != 0) {
    person = line.splice(0,1)
    return `Currently serving ${person[0]}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length != 0) {
    var lineString = "The line is currently:";
    line.forEach(function(person, index){
      var num = index + 1;
      lineString += ` ${num}. ${person},`;
    })
    return lineString.slice(0, -1);
  } else {
    return "The line is currently empty."
  }
}