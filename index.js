var katzDeliLine = [];


function takeANumber(katzDeliLine, person){
  katzDeliLine.push(person);
  var position = katzDeliLine.length;
  return `Welcome, ${person}. You are number ${position} in line.`;
}


function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${katzDeliLine.shift()}.`;
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  }

  const newLine = [];
  for(let i=0, l=katzDeliLine.length; i<l; i++){
    newLine.push(`${i+1}. ${katzDeliLine[i]}`)
  }
  return `The line is currently: ${newLine.join(', ')}`;
}
