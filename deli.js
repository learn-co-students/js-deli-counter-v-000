
var katzDeli = [];

function takeANumber(line,name){
  line.push(name);
  return "Welcome, "+name+". You are number "+line.length+" in line.";
}

function nowServing(line){
  if (line.length > 0){
  x = line[0];
  line.splice(0,1);
  return "Currently serving " + x + "."} else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line){
  var message = "The line is currently: "
if (line.length > 0){
  line.forEach(function(name,index){
    var num = index + 1;
  message += num + ". "+line[index]+ ", " ;
  })
  return message.slice(0,-2)
  } else {
    return "The line is currently empty."
  }
}
