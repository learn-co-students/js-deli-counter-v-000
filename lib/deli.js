
function line(line) {
  if (line.length === 0) {
    return "The line is currently empty.";}
  else {
    var message = []
    line.forEach(function(customer, index) {
      message.push(index + 1 + ". " + customer)});
    return "The line is currently: " + message.join(", ");
  }
}

function nowServing(line){
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    var serving = line.splice(0, 1)
    return "Currently serving " + serving[0] + ".";
  }
};

function takeANumber(line, name){
  line.push(name);
  return "Welcome, " + name + "." + " You are number " + line.length + " in line.";
};
