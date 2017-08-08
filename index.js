function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine != 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length == 0) {
    return "The line is currently empty."
  } else {
    var array = []
    for (let counter = 0; counter < line.length; counter++) {
      array.push(`${counter + 1}. ${line[counter]}`)
    }
    return `The line is currently: ${array.join(', ')}`
  }
}
