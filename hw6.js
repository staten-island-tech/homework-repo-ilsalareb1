const num1= 100;
const num2 = 50;
let val;


//simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;


//Math Object

val = Math.PI;// math is an object , PI is a method

val = Math.E; // uler's number

val = Math.round(2.4);//rounds

val = Math.ceil(2.4);//round up

val = Math.floor(2.8);//round down 

val = Math.sqrt(64);//square root

val = Math.abs(-3);//absolute value 

val = Math.pow(8 , 2);//the power of the first number

val = Math.min(2,33,4,1,55,6,3,-2);// minimum of data set

val = Math.max(2,4,26,8,9,54);// maximum of data set

val = Math.random();//gives random decimal

val = Math.floor(Math.random() * 20 + 1);//math.floor rounds the decimals and the 1 makes sure the number is between 1 and 20 rather than 1-19
console.log(val);
