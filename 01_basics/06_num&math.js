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
