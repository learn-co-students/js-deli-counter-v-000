function takeANumber(deliLine, name) {
  deliLine.push(name)
  return `Welcome, ${name}. You are number ${deliLine.length} in line.`
}

function currentLine(deliLine) {
  if (deliLine.length == 0) {
    return "The line is currently empty."
  } else {
    var line = `The line is currently: 1. ${deliLine[0]}`
    for (var i = 2; i <= deliLine.length; i++) {
      line = line + `, ${i}. ${deliLine[i-1]}`
    }
    return line
  }
}

function nowServing(deliLine) {
  var name
  if (deliLine.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    name = deliLine.shift()
    return `Currently serving ${name}.`
  }
}
