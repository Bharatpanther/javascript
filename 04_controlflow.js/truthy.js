// thruthy means assume thing is true (assume kara jata h true hi hoga)
const userEmail = "harsh@gmail.com"
if (userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email"); 

}


//truthy values 
// true ," " (string with space), "0", 'false',[],{},functiopn(){}

//falsy values
// false, 0, -0, ""(empty string), null, undefined, NaN, 0n(bigInt)

//how to check empty array
if(userEmail.length === 0){
    console.log("Array is empty");
    
}

//how to check empty object 

const emptyObj = {}
if (Object.keys(emptyObj).length === 0){ //object.key(emptyObj) is return an array. so after that apply array method of previou code
    console.log("Object is empty");
    
}



//Nullish coalesing operator (??) is type of logical operator
val1 = 10 ?? 15 //output 10
val1 = null ?? 10 //output 10
val1 = undefined ?? 15  //output 15
val1 = null ?? 10 ?? 15 //output 10 


//Terniary operator
// syntax : condition ? true : false

//example 1 
const iceCream =80
iceCream >= 80 ? console.log("pay for iceCream"):console.log("don't pay for iceCream");



//example 2
(10<1) ?console.log("harsh") : console.log("Hitesh");

