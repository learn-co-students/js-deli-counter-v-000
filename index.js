var katzDeli = [];
function takeANumber(katzDeliLine, name)
{
  katzDeliLine.push(name);
var r="Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
return r;
}

function nowServing(katzDeliLine)
{
  if(katzDeliLine[0]==null)
      return  "There is nobody waiting to be served!";
  else
  {

      var r="Currently serving " + katzDeliLine[0] + ".";
      katzDeliLine.splice(0,1);
      return r;
    }
  }

function currentLine(katzDeliLine)
{
  var names="";
  var i=1;
    if (katzDeliLine != null && katzDeliLine[0]!= null)
    {
      katzDeliLine.forEach(function (p,index) {
        if(p!=NaN)
        {
      names = names + (i) + ". " + p  ;
      i=i+1;
         }
        if(p!=NaN && index!=p.length-1)
        names=names+ ", "
          });
    return "The line is currently: " + names
    }
  else
    return "The line is currently empty.";
}
