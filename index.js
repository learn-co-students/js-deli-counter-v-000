var katzDeliLine = []
function takeANumber(katzDeliLine, name) {

   katzDeliLine.push(name)

   return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine < [0]) {
   return "There is nobody waiting to be served!"
  } else  {
    return `Currently serving ${katzDeliLine.shift()}.`

  }
}

var katzDeliLine = {}
function currentLine(line) {
  if(line.length <= 0) {
    return "The line is currently empty."
  }
  var firstString = "The line is currently:"
  for(var i = 0; i<line.length-1; i++) {
    firstString = firstString  +  ` ${i+1}. ${line[i]},`
}
firstString = firstString + ` ${line.length}. Ann`
 return firstString
}
