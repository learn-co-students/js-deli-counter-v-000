var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var person = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${person}.`;
  } else {
    return "There is nobody waiting to be served!"
  }
}


function currentLine(katzDeliLine) {
  var response = "The line is currently";
  if (katzDeliLine.length === 0) {
    response += " empty. ";
  } else {
    response += ":";
    katzDeliLine.forEach(function(person, index){
      response += ` ${index+1}. ${person},`;
    })
  }
  response = response.slice(0,-1);
  return response;
}
