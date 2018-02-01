function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "There is nobody waiting to be served!"
  }

  return `Currently serving ${katzDeliLine.shift()}.`
  // .shift(), .pop() => returns the removed element
}

function currentLine(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "The line is currently empty."
  }

  const names = []

  for (let i = 0; i < katzDeliLine.length; i++) {
    names.push(`${i + 1}. ${katzDeliLine[i]}`)
  }

  return `The line is currently: ${names.join(", ")}`
  // like ruby!!
}
