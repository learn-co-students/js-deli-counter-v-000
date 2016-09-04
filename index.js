var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    var currentCustomer = katzDeliLine.shift()
    return `Currently serving ${currentCustomer}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length == 0) {
    return "The line is currently empty."
  } else {
    var nameList = []
    katzDeliLine.forEach(function(name, index) {
      nameList.push(` ${index + 1}. ${name}`)
    });
    return "The line is currently:" + nameList.join()
  }
}