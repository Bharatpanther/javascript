//                              ****1****                     
let score = "44abc"

//  console.log(typeof score);
console.log(typeof (score));

//conversion string to integer
let inInteger = Number(score)
console.log(inInteger);
console.log(typeof inInteger);

let toString = String(score)
console.log(toString);
console.log(typeof toString);

//                              ****2****                     
let a = null
console.log(typeof a);
let aa = Number(a)                     
console.log(aa);



//                              ****3****                     
let b = undefined
console.log(typeof b);
let bb = Number(b)
console.log(bb);


//                              ****4****                     
let c = true 
console.log(typeof c);
let cc = Number(c)
console.log(cc);

// summary
/*
"33" = 33  
"33abc" = NaN
true  = 1
null = 0
undefined = NaNt

*/

//                              ****5****                     
// to boolean
// number to boolean
let isLoggedIn  = "harsh"
let toBoolean = Boolean(isLoggedIn)
console.log(toBoolean);

/* 1 => true
"" => false
"Harsh" => true
*/   


//                              ****6****                     
// number to string
let tr =  33
let tyr = String(tr)
console.log(tyr);



//     *********************** Operation *********************
let value = 3
let negValue  = -value
// console.log(negValue);

/* console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);
console.log(2**3);
*/

let str1 = "hello "
let str2 = "Dear"
console.log(str1 + str2);



console.log("1" + 2 ); // string  output = 12
console.log(1 + "2" ); // string  output = 12
console.log("1" + 2 + 2 ); // string  output =122 
console.log(1 + 2 + "3");  //string  output = 33            









