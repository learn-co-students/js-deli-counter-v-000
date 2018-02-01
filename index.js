var takeANumber = function (deli, person){
  var nextPosition = deli.length + 1;
  var response = "Welcome, " + person + ". You are number " + nextPosition + " in line.";
  console.log(response);
  deli.push(person);
  return response;
}


var nowServing = function(deli){
  if(deli.length === 0){
    var response = "There is nobody waiting to be served!";
    console.log(response);
    return response;
  } else{
    var person = deli.shift();
    var response = "Currently serving "+ person +"."
    console.log(response);
    return response;
  }
}

var currentLine = function(deli){
  if(deli.length === 0){
      var response = "The line is currently empty.";
      console.log(response);
      return response;
   }else{
     var queue = [];
     deli.forEach(function(person, index){
       queue.push((index + 1).toString() + ". " + person);
     });
      var response = "The line is currently: " + queue.join(", ")
      console.log(response);
      return response;
   }
};
