'use strict';

function line(qu) {
  if (qu.length == 0){
    return "The line is currently empty.";
  } else {
    var output = "The line is currently:";
    for (var i=0; i < qu.length; i++){
      output = output.concat(" " + (i+1).toString() + ". " + qu[i] + ",");
    }
    output = output.slice(0,-1);

    return output;
  }
};

function nowServing(qu){
  if (qu.length == 0){
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + name + qu.shift() + ".";
  }
};

function takeANumber(qu, new_guy){
  qu.push(new_guy);
  return "Welcome, " + new_guy + ". You are number " + qu.length + " in line.";
};


