function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1 } in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0){
    var currentCustomer = katzDeliLine[0]
    katzDeliLine.splice(0,1)
    return `Currently serving ${currentCustomer}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  var line = []

  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
  katzDeliLine.forEach(function (customer, index) {
     line.push(` ${index+1}. ${customer}`) 
  }) 
  return "The line is currently:" + line
  }
}