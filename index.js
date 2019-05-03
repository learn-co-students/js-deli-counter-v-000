function takeANumber(currLine, customer){

  currLine.push(customer);

  let currPosition = currLine.length;
  return `Welcome, ${customer}. You are number ${currPosition} in line.`;
}


function nowServing(katzDeliLine){

  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else{
    let currPerson = katzDeliLine[0]
    return `Currently serving ${katzDeliLine.shift()}.`;

  }
}


function currentLine(currLine){
  let finalArray = [];

  if(currLine.length === 0) return "The line is currently empty.";

  for(let i=0; i<currLine.length; ++i){
    let currPerson = currLine[i];
    let currPosition = i+1;
    finalArray.push(`${currPosition}. ${currPerson}`);
  }
  return `The line is currently: ${finalArray.join(", ")}`;
}
