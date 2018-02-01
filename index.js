var katzDeli = []

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName)
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  const array = []
  for (let i = 0, l = katzDeliLine.length; i < l; i++) {
    array.push(`${i + 1}. ${katzDeliLine[i]}`)
  }
  return `The line is currently: ${array.join(', ')}`
}
