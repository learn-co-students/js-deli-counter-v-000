function takeANumber(katzDeliLine,person){
  katzDeliLine.push(person);
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`
}


function nowServing(katzDeliLine){
  if (!katzDeliLine.length){
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${line.shift()}.`
}

function currentLine(katzDeliLine){
  if (!katzDeliLine.length){
    return "The line is currently empty.";
  }
    katzDeliLine.forEach(function(person,index){
      return `The line is currently: ${index+1}. ${person} `
    });
}