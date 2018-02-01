var katzDeli = [];

function takeANumber(katzDeli, person) {
  katzDeli.push(person);
  return `Welcome, ${person}. You are number ${katzDeli.length} in line.`
}

function nowServing(array) {
  if (array.length > 0) {
    var newArray = array.shift()
    return `Currently serving ${newArray}.`;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(array) {
  if (array.length > 0) {
    var sentence = "The line is currently:";
    for (var i = 0; i < array.length; i++) {
      sentence = `${sentence} ${i + 1}. ${array[i]},`;
    }
  return sentence.slice(0, sentence.length - 1);
  }
  else {
    return "The line is currently empty."
  }
}
