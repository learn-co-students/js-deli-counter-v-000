






function currentLine(array) {
  if (array.length === 0){
    return "The line is currently empty.";
  }
  else {
    var list =  "The line is currently: ";
    array.forEach(function(person, index) {
      var realindex = index + 1;
      list += realindex + ". " + person + ", ";
    });
    return list.slice(0,-2);
}
}
function nowServing(array) {
  if (array.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
  var person = array[0];
  array.shift();
  return "Currently serving" + person;
}
}





function takeANumber(array,name) {
  array.push(name);
  len = array.length;
  return "Welcome, " + name + ". You are " + len + " in line.";
}