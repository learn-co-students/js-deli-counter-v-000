'use strict';

function line(deli) {
   var str = "The line is currently: ";
  if (deli.length === 0){
    return  "The line is currently empty.";
  }
  
  else{
      
       
       deli.forEach(function(person, index){
         if( index != deli.length-1 ){
           str += (index+1) + ". " + person + ", ";
        }
        else{
          str += (index+1) + ". " + person;
        }

        });
  }
  return str;
}

function nowServing(deli){
  if (deli.length === 0){
      return  "There is nobody waiting to be served!";
    }
  else{
    return "Currently serving " + deli.shift()+ ".";

  }

}

function takeANumber(deli, person){
  deli.push(person)

   return  "Welcome, " + person + ". You are number " + deli.length + " in line.";

}


