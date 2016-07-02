// returns "The line is currently empty." if no one is in line
function currentLine(line) {
  newLine=[];
  if (line.length === 0) {
    return "The line is currently empty."
  } else{
  	var intro= "The line is currently:"
    line.forEach(function(person, number) {
          newLine.push(" "+`${number+1}`+". "  + person);
    });
    return intro + newLine.toString();
  }
}

// returns the line is empty when no on is on line
function nowServing(deliLine) {
  if (deliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else{
//returns an announcement about the person it is serving, and shifts the line
     var announcement = `Currently serving ${deliLine[0]}.`
      deliLine.shift();
      deliLine
      return announcement;
    }
}
// appends the person the end of the line if there are already people on it
function takeANumber(katzDeli, person) {
     katzDeli.push(person);
     katzDeli.forEach(function(personInLine, num) {
       bill= "Welcome, "+ personInLine +". You are number " +`${num+1} `+"in line."
     });
return bill;
}
