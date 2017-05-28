function takeANumber(katzDeli, name) {

  if (katzDeli.length >= 0) {
    katzDeli.push(name);
  }
  var position = katzDeli.indexOf(name) +1;
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeli) {
  if (katzDeli.length > 0) {
    var person = katzDeli.splice(0,1);
    return `Currently serving ${person}.`;
  }
  else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(line) {
  var arr = ['The line is currently:'];
  var number = 1;
  var person = line[0];
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  if (line.length > 0) {
    for (var i = 0; i < line.length; i++) {
      arr.push(" " + number + "." + " " + line[i]);
      number++;
    }
  }
  var joined = arr.join().replace(',', '');
  return joined;
}
