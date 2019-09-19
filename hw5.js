//GLOBAL SCOPE
var a = 1;
let b = 2;
const c = 3;

/* function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function Scope: ', a, b, c);//FUNCTION SCOPE is specific to values inside it
}
test(); */

/* if (true) {
    //BLOCK SCOPE
    var a = 4;// don't use var it causes confusion and will try to change the global scope based on the block scope
    let b = 5;
    const c = 6;
    console.log('If Scope: ', a, b, c);
} */

/* for(let a = 0; a < 10; a ++) {
    console.log(`Loop: ${a}`);
} */



 console.log('Global Scope: ', a, b, c);  //global scope is any defined values outside of a function or object