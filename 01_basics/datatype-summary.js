// there are two type of datatype in javascript 
// 1. primitive      2. Non-primitive



// ******* Primitive Datatype **********
/*
7 types (string, number, boolean, null, undefined, symbol, bigint) 
all are call by value means 
we change in copy not in original value (not referance of mempry space where is reserved)
*/


// ******* Non-Primitive(Referance) Datatype **********
/* memory referance directly allocated to the user, so you change in original value
   types :- Array, Objects, Functions
*/



const score = 100
const avgScore = 100.3

const isLoggedin = false
const outsidetemp = null
let carName 


// ******* symbol ********
const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id == anotherid); // output : false



 // ******** bigInt *********
 const bigNumber = 12546325411n //Bigint declare
 console.log(typeof bigNumber);// type is bigint
 const big = Number(bigNumber) // convert bigint to number
 console.log(typeof big); // type is number
 
 
 // ******** Array, objects, functions *********
 // method 1
let heros = ["saktiman", "nagtraj", "donga"] // Array 

// method 2 
let myArray = new Array("harsh")
myArray[1] = "karishma"
myArray[2] = new Array("vikram", "bhima")
console.log(myArray);
 
// object  (written in curly braces {})
let myObj = {
   name : "Harsh",
   age: 22,
}
console.log(myObj);


// functions 
// function declaration : function(){}

//using variable 
let fun = function(){
   console.log("hello world");
   
}





// *********************** Stack & Heap memory **********************
let myYtname = "harshshinchan.com"

let anotherName = myYtname
anotherName = "chaishaibar"

console.log(myYtname);
console.log(anotherName);



let userOne = {
   email : "harsh@gmail.com",
   upi : "52145@okicici",
}

let userTwo = userOne
userTwo.email = "Karishma@gmail.com"

console.log(userTwo);
