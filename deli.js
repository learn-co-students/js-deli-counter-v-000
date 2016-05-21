function takeANumber(katzDeliLine, name){

    katzDeliLine.push(name);
    number = katzDeliLine.indexOf(name) + 1;
    return "Welcome, " + name + ". You are number " + number + " in line.";
}


function nowServing(katzDeliLine){

  var first = katzDeliLine[0];

  katzDeliLine.splice(0,1);

  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  else{
    return "Currently serving " + first + ".";
  }

}

function currentLine(katzDeliLine){

  var string = "The line is currently: ";

  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  else{
    katzDeliLine.forEach(function(person, index){
      var number = index + 1;
      string = string + number + ". " + person + ", ";
    });
  }
  string = string.slice(0,-2);
  return string;

}

currentLine(["Bill", "Jane", "Ann"])