function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson);
  var last = newPerson
  var queue = katzDeliLine.indexOf(newPerson) + 1
  return "Welcome, " + newPerson + ". You are number " + queue + " in line.";
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
} else {
  return 'Currently serving ' + katzDeliLine.splice(0, 1) + ".";  
}
 }

 function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "The line is currently empty.";
  } else {
    var phrase = "The line is currently:"
    var line_array = []
    var queue = 0
  katzDeliLine.forEach(function(person, index){
    queue += 1
    line_array.push(" " + queue + ". " + person)
  })
  return phrase + line_array.toString();
  }
 }




