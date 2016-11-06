var katzDeliLine = [];

function takeANumber(deliLine, name){
  deliLine.push(name);
  return `Welcome, ${name}. You are number ${deliLine.length} in line.`
}

function nowServing(deliLine) {
  if(deliLine.length > 0) {
    var name = deliLine.shift();
    return `Currently serving ${name}.`
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(deliLine) {
  var text = "The line is currently:";
  var nameList = [];

  if (deliLine.length === 0) {
    return "The line is currently empty.";
  }

  for (var i = 0; i < deliLine.length; i++){
    nameList.push(` ${i + 1}. ${deliLine[i]}`);
  }
  return text + nameList;
}
