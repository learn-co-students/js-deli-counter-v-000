'use strict';

function line(deli) {
  var announcement = "The line is ";
  if (deli.length == 0) {
    announcement += "currently empty.";
    return announcement;
  } else {
    announcement += "currently: ";
    deli.forEach(function(e,i) {
      announcement += (i+1).toString() + ". " + e + ", ";
    });
    var announcementF = announcement.slice(0, -2);
    return announcementF;
  }
};

function nowServing(deli){
  if (deli.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
    var nextCust = deli.shift();
    return "Currently serving " + nextCust + ".";
  }
};

function takeANumber(deli, newCust){
  deli.push(newCust);
  var welcome = "Welcome, " + newCust + ". You are number " + deli.length + " in line.";
  return welcome;
};


