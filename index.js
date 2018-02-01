function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var name = katzDeliLine[0]
    katzDeliLine.splice(0, 1) 
    return `Currently serving ${name}.`;
  }  
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
    var numbersAndNames = []
    katzDeliLine.forEach(function(name, index) {
      numbersAndNames.push(`${index + 1}. ${name}`)
    });
     return `The line is currently: ${numbersAndNames.join(', ')}`;
  }


