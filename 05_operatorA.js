


function squareOfWordLength(str){
    
    
    var lengthOfStr =str.length;
    return lengthOfStr*lengthOfStr;

}
console.log(`====================  Step 1 =============================`);
    
var result= squareOfWordLength("JavaScript");
console.log(`Given string is "JavaScript" and its square of length is: "${result}"`);

var result= squareOfWordLength("Google Chrome");
console.log(`Given string is "Google Chrome"   and its square of length is: "${result}"`);

var result= squareOfWordLength("Developer Smart");
console.log(`Given string is "Developer Smart"  and its square of length is: "${result}"`);

console.log(`========================  Step 2 ==========================`);
function stringConcept(){
    var str ="I am Angular Developer";
    var strLength = str.length;
    console.log(`The length of given string ${str} is: ${str.length}`);
    var totalWordsOfStr = str.split(" ");
    var wordsLength = totalWordsOfStr.length;

    console.log(`Total  words of given String is:${wordsLength}`);
    console.log(`========================================================`); 

    var result = strLength/wordsLength;
    console.log(` The string length and divide by total number of words :${result}`);

    var result = strLength*wordsLength;
    console.log(` The string length and multiplied by total number of words :${result}`);

}
stringConcept();
