var katzDeli = ["ada", "eva", "ted"];

function takeANumber(line, name) {
  line.push(name);
  var position = line.length;
  return "Welcome, " + name + ". You are number " + position + " in line.";
} 

function nowServing(line) {
  if (line.length === 0) {
  return  "There is nobody waiting to be served!";
  } else {
  line = line.splice(0,1);
  return "Currently serving " + line[0]+".";
  }
}

function currentLine(line) {
  if (line.length === 0) {
  return "The line is currently empty.";
  } else {
  var newLine = []
  line.forEach(function(customer, index) {
  var number = index + 1;
  newLine.push(" "+ number + ". " + customer);
  });
  return "The line is currently:" + newLine;
  }
}