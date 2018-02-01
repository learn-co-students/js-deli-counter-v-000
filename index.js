var katzDeli=[];
function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
var  n = katzDeliLine.indexOf(name) + 1;
  return "Welcome, " + name + ". You are number " + n + " in line.";
}

function nowServing(katzDeliLine,name){
  if(katzDeliLine.length > 0){
    //var no1 = katzDeliLine[0];
    return "Currently serving " + katzDeliLine.shift() + ".";
   //katzDeliLine = katzDeliLine.slice(1);

}
  else return "There is nobody waiting to be served!"
}//end function

function currentLine(line){
  if(line.length>0){
    var line2 = [];
  for(var i = 0; i < line.length; i++){

//line2.push(`${i+1}. ${line[i]}`);
var n = i+1;
line2.push( n + ". " + line[i]);

    }//end for loop
return "The line is currently: " + line2.join(', ');
  }//end if
else {return "The line is currently empty."}//return else

}//end function
