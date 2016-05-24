var katzDeli = [];



function currentLine(line){
  if (line.length==0){
    return  "The line is currently empty.";
  }

  var order = [];

  for(var i=0; i < line.length; i++){
    order.push(`${i+1}. ${line[i]}`);
  }
  return `The line is currently: ${order.join(`, `)}`;
};

function nowServing(line){
  if (line.length==0){
    return  "There is nobody waiting to be served!";
  }
  return  `Currently serving ${line.shift()}.`;
}

function takeANumber(line, person){
  line.push(person);
  return `Welcome, ${person}. You are number ${line.length} in line.`
}
