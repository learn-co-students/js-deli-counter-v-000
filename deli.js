function nowServing(line){
if (line.length===0){
return "There is nobody waiting to be served!";
  } else {
  return "Currently serving "+line.shift()+".";
  }
}





function takeANumber(katzDeliLine, name){
katzDeliLine.push(name);
return "Welcome, "+name+". You are number "+ katzDeliLine.length+" in line.";

};


function currentLine(line){
if (line.length===0){
  return "The line is currently empty.";}
else {
  var queue=[]
  line.forEach(function(name, index){
 queue.push((index+1)+". "+name);

  });
  return "The line is currently: "+queue.join(", ");
}
};
