//#Primitive

//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isloggedIn = false
const outsideTemp = null
let useremail; 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log (id === anotherId);

//const bigNumber = 3632566432656652356n






//Reference type (Non primitive)



//Array, objects, Functions

const heros = ["aditya","dogeshbhai", "maafi maag"];
let myboj = {
    Name:"pandit",
    age: 20,
}

const myfunction = function(){
    console.log("Hello world");
}

console.log(typeof heros);