/*console.log(2 > 4);
console.log(2 >= 4);
console.log(2 == 4);
console.log(2 != 4);

*/

// whem you compare different data type
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

console.log("2" == 2 ); // otuput is true
console.log("2" === 2); /* output is false (because '===' compare datatype and value both 
if value and datatype is equal themn output is true else false, it's chech strictly )*/




/* 
Note :- when you compare between values, before you need to identfy datatypes of variables
        because some cases result we get it is wrong.

Reason :- the is an equality check == and comparision <,>,<=,>= work different.
          Comparision conveart null value to a number, treating it as 0.
          that's why (3)null >= 0  true & (1)null > 0 is false

*/