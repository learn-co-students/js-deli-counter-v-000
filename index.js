var katzDeliLine = ["a", "b", "c", "d"];

function takeANumber(katzDeliLine, name) {

}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    var current = katzDeliLine.shift();
    return `Currently serving ${current}.`;
  }
}

nowServing(katzDeliLine);

function currentLine(katzDeliLine) {

}

