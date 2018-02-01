var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var position = katzDeliLine.indexOf(name) + 1
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length >= 1){
    var next = katzDeliLine.splice(0, 1)
    return `Currently serving ${next}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length >= 1) {
    var waitingCustomers = []
    katzDeliLine.forEach(function(name, index) {
      var number = index + 1
      waitingCustomers.push(`${number}. ${name}`)
    })

    return "The line is currently: " + waitingCustomers.join(", ")

  } else {

    return "The line is currently empty."
    
  }
}