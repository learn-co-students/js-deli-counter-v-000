function takeANumber(line, customer) {
  line.push(customer);
  return "Welcome, " + customer + ". You are number " + line.length + " in line.";

}

function nowServing(line) {
  if ( line.length === 0 ) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + line.shift() + ".";
  }
}

function currentLine(line) {
  if ( line.length === 0) {
    return "The line is currently empty.";
  } else {
    msg = "The line is currently: ";
    var queue = [];

    line.forEach(function(customer, index) {
      queue.push((index+1) + ". " + customer);
    })

    return msg + queue.join(", ");
  }
}
