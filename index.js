function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }

}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    let customers = "The line is currently: "
    for (let i = 0; i < katzDeliLine.length; i++) {
      customers += `${katzDeliLine.indexOf(katzDeliLine[i]) + 1}. ${katzDeliLine[i]}`
      if (i + 1 < katzDeliLine.length) {
        customers += ", "
      }
    }
    return customers
  } else {
    return "The line is currently empty."
  }
}
