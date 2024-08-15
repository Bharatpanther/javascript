// ******************* numbers ********************

const score = 400 // type number
const balance = new Number(100)
// console.table([score, balance]) 
console.log(balance);

console.log(balance.toString()); /* convert number to string after converting in string 
                        we got more power, also apply string methods in this string*/

console.log(balance.toString().length);
console.log(balance.toFixed(2));//it give's only two values after decimal point like 100.26

// const running = 12.893214  // output : 12.9
// const running = 123.893214  // output : 124
const running = 1123.893214  // output : 124
console.log(running.toPrecision(3))
                  

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// ******************* math ********************
/* math is an object in js  */

console.table([Math.PI, Math.abs(-5), Math.round(25.54),Math.ceil(4.2),Math.floor(4.5)]);
console.table([Math.min(4,5,1,2,3,9,11), Math.random()]) 
/* 
math.random gives no in betweeen 0 - 9 
*/