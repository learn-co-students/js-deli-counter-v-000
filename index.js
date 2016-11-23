function takeANumber(katzDeliLine, name) {
  var katzDeli = []
  katzDeliLine.forEach(function(number) {
    katzDeli.push(number + 1);
  })
  return "Welcome, "+ name + ". You are number" + katzDeli + "in line."
}
