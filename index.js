var katzDeliLine = [];

function takeANumber(katzDeliLine, name ) {
    katzDeliLine.push(name)
    return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`;
}



function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0){
   var test = `Currently serving ${katzDeliLine.shift()}.`;
  }
  else {
    return "There is nobody waiting to be served!"
  }
  return test;
}

function currentLine(katzDeliLine) {
 var values = [];
  if (katzDeliLine.length > 0){
   for (var i = 0; i < (katzDeliLine.length); i++) {
     values.push(` ${i + 1}. ${katzDeliLine[i]}`);
   }
   return `The line is currently:${values}`;
  }
  else {
    return "The line is currently empty."
  }

}


currentLine(katzDeliLine)
