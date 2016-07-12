//beginning of day deli is empty
//var katzDeli = [];

//takeANumber
//accepts current line (katzDeliLine) as parameter
//returns position in line

// function takeANumber(line, name) {
//   line.push(name);
//   return `Welcome, ${name}. You are number ${line.length} in line.`;
// };

function takeANumber(line, name) {
  line.push(name);
  var lineNumber = line.length;
  return "Welcome, " + name + ". You are number " + lineNumber + " in line.";
}

//nowServing
//return the next person in line
//remove the next person in line
//if empty, return "There is nobody waiting to be served!"

// function nowServing(line) {
//   if (line.length === 0) {
//     return "There is nobody waiting to be served!";
//   } else {
//     var currentCustomer = line[0];
//     line.splice(0,1);
//     return `Currently serving ${currentCustomer}.`
//   }
// };

function nowServing(line) {
  if(line.length > 0){
    var nextCustomer = line[0];
    line.splice(0,1);
    return "Currently serving " + nextCustomer + ".";
  }
  else{
    return "There is nobody waiting to be served!";
  }
}

//currentLine
//if people in line, returns the line
//if empty, returns "The line is currently empty."
//return current line

// function currentLine(line) {
//   if (line.length === 0) {
//     return "The line is currently empty."
//   } else {
//     var customers = [];
//     line.forEach(function(customer, index) {
//       customers.push(`${index+1}. ${customer}`);
//       });
//     return "The line is currently: " + customers.join(", ");
//   }
// };
 
function currentLine(line) {
  if(line.length > 0) {
    var customerOrder = [];
    line.forEach(function(name, index) {
      var customerPosition = (index+1) + ". " + name;
      customerOrder.push(customerPosition);
      }
    );
    return "The line is currently: " + customerOrder.join(", ");
  }
  else {
    return "The line is currently empty."
  }
}