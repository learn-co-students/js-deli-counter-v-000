function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

// This function should return the first person in line and then remove that individual from the line.
 // but then, how can it work if return stops the functiuon?

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}


// if (katzDeliLine.length = 0) {
//   return "The line is currently "
// }


function currentLine(katzDeliLine) {

  if (katzDeliLine.length > 0) {
    var string = "The line is currently:"
    for (var i = 0; i < katzDeliLine.length; i++ ){
        string += ` ${i + 1}. ${katzDeliLine[i]},`

    }
    // var trimstring = string.replace(/(^,)|(,$)/g, "")
    // return trimstring

    return string.slice(0, string.length - 1)
    // return x
}
  else {
    return "The line is currently empty."
  }

}
