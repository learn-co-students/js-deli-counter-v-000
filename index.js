
function takeANumber(katzDeli, customer) {
  katzDeli.push(customer);
  return `Welcome, ${customer}. You are number ${ katzDeli.indexOf(customer) + 1 } in line.`;
}

function nowServing(deliLine) {
  if (deliLine.length == 0) {
    return "There is nobody waiting to be served!";
  }

  return `Currently serving ${deliLine.shift()}.`;
}

function currentLine(line) {
  if (line.length == 0 ) {
    return "The line is currently empty.";
  }

  var newLine = [];
  for (var i = 0 ; i < line.length; ) {
   newLine.push(` ${i+1}.` + ` ${line[i++]}`);
 }

 return "The line is currently:" + newLine;
}
