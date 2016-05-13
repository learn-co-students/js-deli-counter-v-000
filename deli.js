function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  else {
    var mystr = "The line is currently: "
    line.forEach(function(e, ind) {
      mystr += (ind+1) + ". " + e + ", ";
    });
    return mystr.slice(0, -2);
  }
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    temp = line[0];
    line.splice(0, 1);
    return "Currently serving " + temp + "."
  }
}

function takeANumber(line, name){
   line.push(name);
   var number = (line.indexOf(name)) + 1;
   return "Welcome, " + name + ". You are number " + number + " in line.";
}