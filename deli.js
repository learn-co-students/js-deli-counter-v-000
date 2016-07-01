
function currentLine(line) {
  newLine=[];
  if (line.length ==0) {
    return "The line is currently empty."
  } else{
  	var intro= "The line is currently:"
    line.forEach(function(person, number) {
          newLine.push(" "+`${number+1}`+". "  + person);
    });
    return intro + newLine.toString();
  }
}
// var newNums=[]
// array.forEach(function(nums, index) {
//   newNums.push(nums + 5);
// });
// return newNums;
// }
// var katzDeli =[]
// function takeANumber(katzDeliLine, person) {
//   katzDeliLine.forEach(function(personInLine, num) {
//     katzDeli.push(person, num);
//   }
// }
