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
// var katzDeli =[]
// function takeANumber(katzDeliLine, person) {
//   katzDeliLine.forEach(function(personInLine, num) {
//     katzDeli.push(person, num);
//   }
// }
// function takeANumber(deliLine, person) {
//   for(i=0; i < deliLine.length; i++){
//     //  adds a person to the line
//      deliLine.push(person);
//   }
// }

  // deliLine.forEach(function(person, number) {
  //       newLine.push(" "+`${number+1}`+". "  + person);
  // });
  // return intro + newLine.toString();
