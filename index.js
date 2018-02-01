
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {

  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);

}

function nowServing(katzDeliLine, name) {

if (katzDeliLine.length !=0){

    return `Currently serving ${katzDeliLine.shift()}.`;
  }

  return "There is nobody waiting to be served!";
}

function currentLine(katzDeliLine) {
var numbersNames = [];
  if(katzDeliLine.length !=0) {
    for (var i = 0; i< katzDeliLine.length; i++) {
   numbersNames.push(`${i + 1}. ${katzDeliLine[i]}`)
 }

 return `The line is currently: ${numbersNames.join(', ')}`

  }

  return("The line is currently empty.")
}
