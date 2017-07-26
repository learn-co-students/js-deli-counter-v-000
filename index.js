var katzDeliLine = [];
function takeANumber(array,person)
{
  array.push(person);
  return `Welcome, ${person}. You are number ${array.length} in line.`;
}
function nowServing(array)
{
  if (array.length!=0)
  {
   var result="Currently serving "+array[0]+".";
   array.shift();
   return result;
 }
   else
   return 'There is nobody waiting to be served!'


}
function currentLine(array)
{
  var str="The line is currently: ";
  if (array.length!=0)
  {
      for (var i = 0; i < array.length; i++)
      {
        str+=i+1+". "+array[i]+", ";
      }

      return str.substring(0,str.length-2);
  }else
  {
    return "The line is currently empty.";
  }
}
