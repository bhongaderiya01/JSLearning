

console.log(`====================  step1 ======================`);
function maleMarriageEligibility(gender,age,boyName){
var result = gender=='Male' && age>21 
//var result = gender == 'Male'&& age>21
?`Hey ${boyName} you are eligible for marriage , congrats!`
:`Hey , ${boyName} you are not eligible for Marriage`;
 return result
}
var result =maleMarriageEligibility("Male",25, "Billgates" );
console.log(result);
var result =maleMarriageEligibility("Male",17, "Stew Jobs" );
console.log(result);

console.log(`====================  step 2 ======================`);
function femaleMarriageEligibility(gender ,age,girlName){
 var result= gender=="Female" && age>=18
  ?`Hey ${girlName}you are eligible for Marriage`
 :`Hey , ${girlName} you are not eligible for Marriage`;
 return console.log(result);
}
var result = femaleMarriageEligibility("Female",16,"Jenifier")


var result = femaleMarriageEligibility("Female",27,"Malinda Gates")
