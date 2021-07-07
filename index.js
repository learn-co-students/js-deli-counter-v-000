var katzDeli[];
var katzDeliLine[];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var posiiton = katzDeliLine.length;
  console.log(`Welcome, ${name}. You are number ${posiiton} in line.`)
}

function nowServing(){
  if (katzDeliLine[0] != ''){
  console.log(`Currently serving ${katzDeliLine[0]}.`)}
  else {
    console.log('There is nobody waiting to be served!')
  }
  katzDeliLine.splice(0,1);
}

function currentLine(){
  if (katzDeliLine[0] != ''){
    console.log("The line is currently: ");
    katzDeliLine.forEach(function(name, index){
      var number = index + 1;
      console.log(number + "." + name)
    })
  }
  else {
    console.log('The line is currently empty.')
  }
}