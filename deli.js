var katzDeli = [];

function takeANumber(line, name) {
   line.push(name);
   return "Welcome, " + name + ". You are number " + line.length + " in line.";
}


function nowServing(line) {
   if (line.length < 1) {
    return "There is nobody waiting to be served!";
  } else {
  return  "Currently serving " + line.shift() + ".";
  }
}


function currentLine(line) {
  if (line.length < 1) {
   return "The line is currently empty.";
 } else
    line.forEach(function(person, index) { var number = index + 1;
      katzDeli.push(number + ". " + person);});
    {
    return "The line is currently: " + katzDeli.join(", ");
 }

}
