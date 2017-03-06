




function takeANumber(katzDeliLine, newName) {
  // var katzDeliLine = []
  katzDeliLine.push(newName);

  var lineLength = katzDeliLine.length
  var positionInLine = 'Welcome, ' + newName + '. You are number ' + lineLength + ' in line.'
  
  return positionInLine
}


function nowServing(katzDeliLine) {
  
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    var response = 'Currently serving ' + katzDeliLine[0] + '.'
    katzDeliLine.shift()
    return response
  }
}

function currentLine(line) {
  var ary = []
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    for (var i = 0; i < line.length; i++ ) {
      var num = i + 1
      var name = line[i]

      var place = ' ' + num + '. ' + name
      ary.push(place)
    }
      var response = 'The line is currently:' 
    
      return response + ary
  }
}











