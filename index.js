

function takeANumber(katsDeliLine, name){
  katsDeliLine.push(name);
  var number = katsDeliLine.length;
  return "Welcome, " + name + ". You are number " + number + " in line."
};

function nowServing(katsDeliLine){
  if (katsDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    var currentName = katsDeliLine.splice(0,1);
    return "Currently serving " + currentName + "."
  };
};

function currentLine(katsDeliLine){
  if (katsDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var lineArr = [];
    katsDeliLine.forEach(function(person, number) {
      var index = number + 1;
      var position = ` ${index}. ${person}`;
      lineArr.push(position);
    });
    return `The line is currently:${lineArr}`;
  };
};
