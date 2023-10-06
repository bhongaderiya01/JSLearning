
function stringHandsOn(){
    var givenStr =`   Hey you are doing good, keep it up    `;
    console.log( `1. Given string is: ${givenStr}`);
    var lengthOfString = givenStr.length
    console.log(`2. The length of the given string is: ${givenStr.length}`);

    var result = givenStr.trim();
    console.log(`3.1 The given string after removing extra spaces: ${result} `);
    var lengthAfterTrim = result.length ;
    console.log(`3.2 The length of given string after removing extra spaces: ${lengthAfterTrim}`);
    var noExtraSpaces = lengthOfString- lengthAfterTrim ;
    console.log(`4. The number of extra spaces has been removed from given string is: ${noExtraSpaces}`);
    console.log(`5. The first character aftr removing extra spaces is: "${result.charAt(0)}" and the last char is "${result.charAt(result.length-1)}"`);
    var totalWords =result.split(" ");
    console.log(`6. The total words available in the string after removing extra spaces :${totalWords.length}`);
    console.log(`7. The index of word "good" from the given string:${result.indexOf("good")}`);
    console.log(`8.1 Substring starting from index 22 by slice() method is: ${result.slice(22)}`);
    console.log(`8.1 Substring starting from index 22 by substring() method is: ${result.substring(22)}`);
    console.log(`9. Is the string ends with the word "UP": ${result.endsWith("up")}`);
    console.log(`10. Is the string starts with the word "Hey" after trimming ${result.startsWith("Hey")} `);
}
stringHandsOn()