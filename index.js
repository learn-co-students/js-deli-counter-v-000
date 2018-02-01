//var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}

function nowServing(line) {
  if (line.length > 0){
    return "Currently serving " + line.shift() + ".";
    }
  else {
    return "There is nobody waiting to be served!";
  }

}

function currentLine(line) {
  if (line.length > 0){
    var placeAndPerson = [];
    line.forEach(function(person, index){
      var place = index ++;
      placeAndPerson.push(` ${place + 1}. ${person}`);
    });
    return "The line is currently:" + placeAndPerson;
    }
  else {
    return "The line is currently empty.";
  }
}
