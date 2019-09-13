///FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Wick') {
    /* if (typeof firstName == 'undefined'){firstName = 'John'};
    if (typeof lastName == 'undefined'){lastName = 'Wick'}; */
    return 'Hello' + ' ' + firstName + ' ' + lastName;
}

/* console.log(greet('John', 'Wick')); */
/* console.log(greet()); */

///FUNCTION EXPRESSIONS
//basically puts a function as a variable assignment

const square = function(x = 3){
    return x*x;
};

/* console.log(square()); */

///IMMEDIATLY INVOKABLE FUNCTION EXPRESSIONS - IIFES
//an iife is a function that you declare AND run at the STIMULTANEOUSLY

/* (function(){
    console.log('IIFE Ran...');
})(); */

/* (function(name){
    console.log(`Hello ${name}, I did my homework :)`);
})('Mr.Whalen'); */

///PROPERTY METHODS
//when a function is put inside an object its called a 'method'

const todo = {
    add: function(){
        console.log('Add todo..');
    }
    edit: function(id){
        console.log(`Edit todo ${id} ..`);
    }
}

todo.delete = function(){
    console.log ('Delete todo..');
}

todo.add();
todo.edit(22);
todo.delete();
