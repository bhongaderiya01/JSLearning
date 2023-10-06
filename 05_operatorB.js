


function greaterNumber(num1 ,num2){
     var result = num1>=num2 ?num1:num2;
     console.log(`The greatest number from ${num1} and ${num2} is: ${result}`);
}

console.log(`============================= Step 1: Greatest no==============`);
greaterNumber(10,-10);
greaterNumber(800,899);


function isEvenOrOddNum(num){
    var result = num %2==0 ? "even : True" :"odd : False";
    //console.log(`The Given no ${num} is ${result}`:);
    return console.log(`The Given number ${num} is ${result}` );


}
console.log(`========================  Step 2:Even or Odd==============================`);
var result = isEvenOrOddNum(29);
var result = isEvenOrOddNum(44);
var result = isEvenOrOddNum(0);
var result = isEvenOrOddNum(101);



console.log(`=====================  step 3 :word length :even or odd ===========================`);
 function wordLength(str){
  var lengthOfWord = str.length;
   var result = lengthOfWord %2==0 ? "Even" : "Odd";
  //console.log(lengthOfWord);


  return console.log(`The length of given word "${str}" is ${result}`);
 }
var result = wordLength("JavaScript");
var result = wordLength("developer");
var result = wordLength("Google");

