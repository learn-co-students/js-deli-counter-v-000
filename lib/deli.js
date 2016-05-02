function line(array) {
  if (array.length === 0) {
    return "The line is currently empty.";
  } else {
    var line = [];
    array.forEach(function (name, index) {
      line.push((index + 1).toString() + ". " + name);
    });
    return "The line is currently: " + line.join(", ");
  }
}

function nowServing(array){
  if (array[0]) {
    return "Currently serving " + array.splice(0,1) + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function takeANumber(array, newName){
  array.push(newName);
  return ("Welcome, " + newName + ". You are number " + (array.length) + " in line.");
};
