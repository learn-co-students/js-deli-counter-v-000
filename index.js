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


function currentLine(line) {
  if(line.length <= 0) {
    return "The line is currently empty."
  }
  var firstString = "The line is currently:"
  for(var i = 0; i<line.length; i++) {
    if(i === line.length-1 ) {
    firstString = firstString + ` ${i+1}. ${line[i]}`
    return firstString
    } else {
      firstString = firstString +  ` ${i+1}. ${line[i]},`
    }
}
return firstString
}
