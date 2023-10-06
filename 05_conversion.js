
/*
var n1="20";
var n2=20;
console.log(n1==n2);


console.log(`----------------------`);
console.log(n1, typeof n1);
n1 =+n1;
console.log(n1 ,typeof n1);
*/
console.log(`=======================  Implicit Conversion =================================`);
var result = '3'+2; //32
console.log(`It automatically converts the '3' string into number and then + operator concat it,result: ${result} `);

var result = '3'+ true; //3true
console.log(`It automatically converts the '3' string into number and then + operator concat it,result: ${result} `);

//var result = '3'- true;
//console.log(`It automatically converts the '3' string into number and then + operator concat it,result: ${result} `);

var result = '3'+undefined;//3undefined
console.log(`It automatically converts the '3' string into number and then + operator concat it,result: ${result} `);
var result = '3'+ null;//3null
console.log(`It automatically converts the '3' string into number and then + operator concat it,result: ${result} `);

console.log(`=======================  Implicit boolean Conversion to Number =================================`);
var result ='4'-true;
console.log(`it automatically converts the '4' string into number and boolean true value is 1,result is: ${result}`);


var result = 4 +true;//5
console.log(`it automatically converts the '4' string into number and boolean true value is 1,result is: ${result}`);
var result = 4 +false;//3
console.log(`it automatically converts the '4' string into number and boolean true value is 1,result is: ${result}`);
/*
console.log(`---------------`);
 var result= 4+ undefined;  //Nan
 console.log(result);
 var result = '4'+undefined;
console.log(result);        //4undefined
var result = '4'+ null;
console.log(result);        //4null                    
var n1=20;
var result = '4'+ typeof n1;
console.log(result);         //4number
console.log(typeof  4  ); */


console.log(`=======================  Explicit Conversion =================================`);
console.log(`=======================  Convert string to number =================================`);
var num ='324'
var result = Number(num);
console.log(`The given string '${num}' is converted into number: ${result}`);  //324
var result = Number('324e-1');
console.log(`The given string '324e-1' is converted into number: ${result}`);  //32.4

console.log(`=======================  Convert boolean to number =================================`);
var n1 = true;
var result =Number(true);
console.log(`The boolean type ${n1} gives:${result}`);
var n2 = false;
var result =Number(false);
console.log(`The boolean type ${n2} gives:${result}`);

/*
console.log(`--------`);
console.log(0==' ');
console.log(0=='0');
console.log(0==false);
console.log(null == undefined);
console.log(1==[1]);
console.log(1==true);
console.log(1=='1');
*/

/*
console.log(`=============`);

var result =Boolean(1);
console.log(result,typeof result);

var result =Boolean(13);
console.log(result,typeof result);

var result =Boolean(16);
console.log(result,typeof result);

var result =Boolean(0);
console.log(result,typeof result);

var result =Boolean(" ");
console.log(result,typeof result);


var result =Boolean('jiya');
console.log(result,typeof result);

var result =Boolean(n);
console.log(result,typeof result);

var result =Boolean(undefined);
console.log(result,typeof result);
oolean(NaN);
console.log(result,typeof result);
*/
