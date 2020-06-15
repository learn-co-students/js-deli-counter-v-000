var katzDeliLine = []

function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson)
  return "Welcome, " + newPerson + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine) {
  while(katzDeliLine.length > 0) {
    var name = katzDeliLine.shift()
    return "Currently serving " + name + "."
  }
  return "There is nobody waiting to be served!"
}

function currentLine(katzDeliLine) {
  var line = "The line is currently: "
  var arr = []
  if (katzDeliLine.length >0){
    for (var i = 0; i < katzDeliLine.length; i++) {
      arr.push((i+1) + ". " + katzDeliLine[i])
      }
    return line + arr.join(", ")
    }
  else {
    return "The line is currently empty."
  }
}
