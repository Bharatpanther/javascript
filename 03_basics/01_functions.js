// Syntax : function function_name() { }

function saymyName() {  //function defination/ declaration
    console.log("H");
    console.log("a");
    console.log("r");
    console.log("s");
    console.log("h");
    
}

// saymyName() // function execution

/*
// program to add two number using function
function addTwoNum(num1, num2) {  //here num1 and num2 is parameter
    const total = num1 + num2;
    console.log(total);
    
}

//here it is argument
addTwoNum(5,9) // output : 14
addTwoNum(5,"9") // output : 59 typeof string 
addTwoNum(5,"a")  // output : 5a
addTwoNum(5,null) // output : 5

*/


/*
function addTwoNum(num1, num2) {
    let result = num1 + num2
    console.log("Harshvardhan");
    // return result;
    return num1 + num2
    // console.log("harsh"); // after return statement, any block of code doen't execute 
}

const result = addTwoNum(5,6)
console.log("Result : ", result);

*/


function loginuserName(username = "Hari") {
    if(!username){
        console.log("please enter the user name");
        return ;
        
    }
    return `${username} just logged in `
}
// console.log(loginuserName("kamal Thakur"))



//  *********************** Functon with objects and arrays**************************
/*function calculateCartPrice(...num1) { // here we can use rest operator (...)
    return num1
}

console.log(calculateCartPrice(200, 400, 500)); //output : [ 200, 400, 500 ]
*/

/*
function calculateCartPrice(val1,val2,...num1) { // here we can use rest operator (...)
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000)); // output : [ 500, 2000 ]
// here first two values take val1 and val2, ramaining values goes in num1 variable

*/

// passing an object in function
const user = {
    name :"hitest",
    price  : 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.name} & price is ${anyobject.price}`);   
}

// handleObject(user) // here you can pass array name
handleObject({       // here you can update array value
    name : "harsh",
    price : 599
})

//passing an array in function
const myArray = [100,200,300,400]

function returnArray(getarray) {
    return getarray[1]
}

// console.log(returnArray(myArray));        // here you can pass array name
console.log(returnArray([250,350]));

