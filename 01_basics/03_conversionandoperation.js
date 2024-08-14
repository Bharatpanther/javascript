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


//                              ****3****                     
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
 
 