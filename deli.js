var katzDeli = [];

function takeANumber(deli, person) {
  deli.push(person)
  return deli.length;
}

function nowServing(deli) {
  if deli.length 
    return "Currently serving " + deli.shift() + ".";
  else
    return "There is nobody waiting to be served!";
}

function currentLine(deli) {
  line = "The line is currently: ";
  deli.forEach(function(person, index) {
    line += (index + 1) + ". " + person;
  });
  return line;
}