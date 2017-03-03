function takeANumber(katzDeliLine, nameNew) {
  katzDeliLine.push(`${nameNew}`)
  return `Welcome, ${nameNew}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = katzDeliLine.shift()
    return `Currently serving ${name}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var returnString = "The line is currently:"
    for (let i = 1; i <= katzDeliLine.length; i++) {
      if (i === katzDeliLine.length) {
          returnString += ` ${i}. ${katzDeliLine[i-1]}`
      } else {
        returnString += ` ${i}. ${katzDeliLine[i-1]},`
      }
    }
  }

  return returnString
}
