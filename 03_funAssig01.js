console.log("==============  Step 1 =====================");
 
console.log("======== function with no arguments and no return type ===========");
function ganeshChaturthi(){
   console.log("Hello there..");
   console.log("Ganapati Bappa Morya");
   
}
ganeshChaturthi() ;
console.log("==============  Step 2 =====================");
 
console.log("======== function with  arguments and no return type ===========");
 function personalDetails(firstName ,lastName , collegeName){
    console.log("First Name :",firstName);
    console.log("Last Name :",lastName);
    console.log("College Name :",collegeName);
 }
 personalDetails("Riya","Bhongade","Vidyabharti Mahavidyalay, Amravati")
 console.log("==============  Step 3 =====================");
 
console.log("======== function with  arguments and no return type ===========");
function swapValues(num1,num2){
    console.log("Before swap :", num1,num2);
  var temp = num1;
  num1=num2 ;
  num2= temp;
  console.log("After swap :", num1,num2);
  console.log("-----------------");

}
swapValues("Virat","Anushka");
swapValues(1000, 2000);
console.log("====================");
function addThreeValues(num1, num2, num3){
  console.log("Addition of three arguments :",num1 + num2 + num3);
  
}
addThreeValues(10.23 ,600, 40);
addThreeValues("Hello ","Good ","Morning");

