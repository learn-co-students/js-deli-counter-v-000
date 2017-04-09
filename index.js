// function takeANumber(katzDeliLine, name) {
//   var number = katzDeliLine.length + 1;
//   katzDeliLine.push(name);
//   return `Welcome, ${name}. You are number ${number} in line.`;
// }
//
// function nowServing(katzDeliLine) {
//   if (katzDeliLine.length > 0) {
//     var first = katzDeliLine[0];
//     katzDeliLine.splice(0,1);
//     return `Currently serving ${first}.`;
//   } else {
//     return 'There is nobody waiting to be served!';
//   }
// }
//
function currentLine(katzDeliLine) {
  var numbers = katzDeliLine.map(function(currElement, index) {
    return `${index + 1}. ${currElement}`;
  });
  if (katzDeliLine.length == 0) {
    return 'The line is currently empty.';
  } else {
    return `The line is currently: ${numbers.join(", ")}`;
  }
}

function takeANumber(array, person) {
  array.push(person);
  return `Welcome, ${person}. You are number ${array.length} in line.`;
}

function nowServing(array) {
  if (array.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
    var first = array[0]
    array.shift();
    return `Currently serving ${first}.`;
  }
}

function currentLine(array) {
  var numbers = array.map(function(currElement, index) {
    return `${index + 1}. ${currElement}`;
  });
  if (array.length == 0) {
    return 'The line is currently empty.';
  } else {
    return `The line is currently: ${numbers.join(", ")}`;
  }
}
