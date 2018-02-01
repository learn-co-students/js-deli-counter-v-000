var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var linePosition = katzDeliLine.length;
  katzDeli.push(name)
  return "Welcome, " + name + "." + " You are number " + linePosition + " in line.";
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0 ){
    var servingName = katzDeliLine.splice(0,1);
    return "Currently serving " + servingName + ".";
  } else {
    return "There is nobody waiting to be served!";
  };
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length == 0) {
    return "The line is currently empty.";  
  } else {
    var lineStatus = [];
      katzDeliLine.forEach(function(name, index){
        var number = index + 1;
        var status = ` ${number}. ${name}`;
        lineStatus.push(status);
      });
      return `The line is currently:${lineStatus}`;
  };
}