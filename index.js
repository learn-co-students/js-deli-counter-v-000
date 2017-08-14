var katzDeliline = []

function takeANumber(katzDeliline, name) {
  katzDeliline.push(name)
  return "Welcome, " + `${name}` + '. ' + 'You are number ' + `${katzDeliline.length} ` + 'in line.'
  
}

function nowServing(katzDeliline) {
  if (katzDeliline.length > 0) {
   return "Currently serving " + `${katzDeliline.shift()}` + "."
   
  } else {
    return "There is nobody waiting to be served!"
  }

}

function currentLine(katzDeliline) {
  if (katzDeliline.length == 0) {
   return 'The line is currently empty.'
  } else if (katzDeliline.length > 0) {
    var array = []
    for (var i = 0; i < katzDeliline.length; i++) {
    
    array.push(`${i + 1}` + '. ' + `${katzDeliline[i]}`)
  }
    return 'The line is currently: ' + `${array.join(', ')}`
  } 
  
}