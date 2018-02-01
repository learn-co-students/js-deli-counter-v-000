var katzDeli = []

function takeANumber(katzDeli, Customer) {
katzDeli.push(Customer)
return "Welcome, " + Customer + ". You are number " + katzDeli.length + " in line."
}

var deliLine = ["Steven", "Blake", "Avi"];

function nowServing(deliLine) {
if (deliLine.length >= 1) {
var Customer = deliLine[0];
deliLine.splice(0, 1);
return "Currently serving " + Customer + "."
} else {
  return "There is nobody waiting to be served!"
}
}


function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  var lineUpdate = "The line is currently: "
for (var i = 0; i < line.length; i++) {
  lineUpdate += (`${i + 1}. ${line[i]}`);
  if(i < line.length - 1)lineUpdate += ", "
}
return lineUpdate
}
