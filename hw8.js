
//Destructuring with Arrays
const alphabet = [ 'A', 'B', 'C', 'E', 'F']
const numbers = ['1', '2', '3', '4', '5', '6']

/* const a = alphabet[0]
const b = alphabet[1] */

/* const [a , b , c] = alphabet */
const [a ,, c, ...rest] = alphabet//skips b and uses spread to log rest of the letters

/* const newArray = [...alphabet, ...numbers] *///all elements of alphabet and numbers 
const newArray = alphabet.concat(numbers)//does same thing as above 

//Destructuring with Functions 

function sumAndMultiply(a , b){
    return [a+b, a*b]
}

const array = sumAndMultiply(2, 3)

const [sum, multiply, division = 'No Division'] = sumAndMultiply(2 , 3)

console.log(sum)
console.log(multiply)
console.log(division)


//Destructuring with Objects

const personOne = {
    name: 'Kyle',
    age: 24,
    address: {
        city: 'Somewhere',
        state: 'One of Them'
    }
}

const personTwo = {
    age: 32,
    favoriteFood: 'Watermelon',
}

/* const {name : firstName, address: { state}, ...everythingElse} = personTwo */

const personThree = {...personOne, ...personTwo}

console.log(personThree)

function printUser({name, age, favoriteFood = 'Watermelon'}){
    console.log(`Name is ${name}. Age is ${age}. Favorite Food is ${favoriteFood}.`)
}

printUser(personOne)