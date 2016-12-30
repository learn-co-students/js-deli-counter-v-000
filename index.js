
var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name); // add person to line
  var position = katzDeliLine.length; // person's position is size of deli's length
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length == 0){
    return "There is nobody waiting to be served!";
  }

    return `Currently serving ${katzDeliLine.shift()}.`;
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length == 0){
    return "The line is currently empty.";
  }
  const newArray = []
  for(let i=0, l=katzDeliLine.length; i<l; i++){
    newArray.push(`${i+1}. ${katzDeliLine[i]}`)
  }
  return `The line is currently: ${newArray.join(', ')}`;
}
