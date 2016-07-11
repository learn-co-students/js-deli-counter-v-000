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

      index == 0 ? currentDeliLine.push("The line is currently: "+pos+". "+name) : currentDeliLine.push(" "+pos+". "+name);
      
      return currentDeliLine.toString();
    })
  } else {
    return "The line is currently empty.";
  }
}