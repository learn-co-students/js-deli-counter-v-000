var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var pos = katzDeliLine.length;
  return "Welcome, " + name + ". You are number " + pos + " in line."
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length == 0){
    return "There is nobody waiting to be served!"
  }
  else {
    var name = katzDeliLine[0]
    katzDeliLine.shift()
    return "Currently serving " + name + "."
}}
function currentLine(katzDeliLine){
  if (katzDeliLine.length == 0){
    return "The line is currently empty."
  }
  else {
    var b = katzDeliLine.length
    var n = 1
    var list = ""
    for (; b>0; b--){
      var list = list + n +". "+ katzDeliLine[0]
      katzDeliLine.shift()
      n++
      if (katzDeliLine.length>0){
        var list = list + ", "
      }
    }
    return "The line is currently: " +list
  }
}
