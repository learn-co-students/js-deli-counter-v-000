'use strict';

function line(katzDeli, index) {
  if (katzDeli.length == 0) {
    return "The line is currently empty.";
  } else {
    var status = "The line is currently:";
    katzDeli.forEach(function(person, index){
      status += " " + (index + 1) + ". " + person + ",";
    });
    return status.slice(0, -1);
  }
};

// function line(deli){
//     if(deli.length === 0){
//       var response = "The line is currently empty.";
//       // console.log(response);
//       return response;
//     }else{
//       var queue = [];
//       deli.forEach(function(person, index){
//         queue.push((index + 1).toString() + ". " + person);
//       });
//       var response = "The line is currently: " + queue.join(", ")
//       // console.log(response);
//       return response;
//     }
// };

function nowServing(katzDeli){
  if (katzDeli.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
    var next = katzDeli.splice(0, 1);
    return "Currently serving " + next + ".";
  }
};

function takeANumber(katzDeli, newName){
  katzDeli.push(newName);
  return "Welcome, " + newName + ". You are number " + katzDeli.length + " in line.";
};


