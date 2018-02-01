function takeANumber(katzDeliLine, newPersonName){
  katzDeliLine.push(newPersonName)
  var positionInLine = katzDeliLine.length
  return `Welcome, ${newPersonName}. You are number ${positionInLine} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1){
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(line) {
  if (line.length < 1) {
    return "The line is currently empty."
  } else {
      var numbersAndNames = []
      for (let i = 0, l = line.length; i < l; i++) {
        numbersAndNames.push(`${i + 1}. ${line[i]}`)
      }
      return `The line is currently: ${numbersAndNames.join(', ')}`
    }
}
