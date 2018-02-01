var katzDeli = [];

function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function currentLine(line) {
  var peopleInLine = []
  if (line.length == 0) {
    return "The line is currently empty.";
  } else {
    line.forEach(function(name, index){
      peopleInLine.push(`${index+1}. ${name}`)
    })
  }
  return `The line is currently: ${peopleInLine.join(', ')}`
}

function nowServing(line) {
  if (line.length == 0) {
    return `There is nobody waiting to be served!`
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}
