function line(array){
  if (array.length === 0) {
    return "The line is currently empty.";
  } else {
    var lineArray = [];
    array.forEach(function(name, index){
      lineArray.push(" "+(index+1) + ". "+ name);
    });
    return "The line is currently:" + lineArray.join();
  }
}


function nowServing(lineArray) {
  if (lineArray.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var beingServed = lineArray[0];
    lineArray.splice(0, 1);
    return "Currently serving " + beingServed + ".";
  }
}

function takeANumber(lineArray, person) {
  lineArray.push(person);
  return "Welcome, " + person + ". You are number " + lineArray.length +" in line.";
}
