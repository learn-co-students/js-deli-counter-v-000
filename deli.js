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
if(line.length===0){
  return "The line is currently empty.";
}else {
var queue=[]

line.forEach(function(person, index){
queue.push((index+1)+". "+person)
});
  return "The line is currently: "+queue.join(", ");
}

}
