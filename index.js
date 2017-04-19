var katzDeli = [];

function takeANumber(katzDeliLine, customer) {
  katzDeliLine.push(customer)
  return (`Welcome, ${customer}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    // return `Currently serving ${katzDeliLine[0]}.`
    return `Currently serving ${katzDeliLine.shift()}.`
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(line) {
  if (line.length > 0) {
    // "The line is currently: 1. Ada 2. Grace"
    var lineString = [];
    for (var i = 0; i < line.length; i++) {
      lineString.push(`${i+1}. ${line[i]}`)
    }
    return "The line is currently: " + lineString.join(', ');

  } else {
    return "The line is currently empty."
  }
}