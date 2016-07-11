function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return 'Welcome, '+name+'. You are number '+katzDeliLine.length+' in line.';
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return  "Currently serving "+katzDeliLine.shift()+".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine) {
  var currentDeliLine = []
 
  if (katzDeliLine.length > 0) {

    katzDeliLine.forEach(function(name, index) {
      var pos = index + 1;

      currentDeliLine.push(pos+". "+name);
      
    });
    return "The line is currently: "+currentDeliLine.join(", ");

  } else {
    return "The line is currently empty.";
  }
}