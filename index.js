var katzDeliLine = []

function takeANumber(array, name) {
  array.push(name)
  return "Welcome, " + name + ". You are number " + array.length + " in line."
}

function nowServing(array) {
  if (array.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return "Currently serving " + array.splice(0,1) + "."
  }
}

function currentLine(array) {
  // your code here
    if(array.length == 0){
      return "The line is currently empty.";
    }

    else{
       var queue = [];
      array.forEach(function(person, place){
       queue.push((place + 1).toString() + ". " + person );
      });
      return "The line is currently: " + queue.join(", ");

   // "The line is currently: 1. Steven, 2. Blake, 3. Avi"
  }
}
