const accountId = 144525
let accountEmail = "harsh@gmail.com"
var accountPassword = "1452356"
accountCity  = "jaipur"


let state
console.log(state);


// accountId = 152365  we can't update account variable 
console.log(accountId);

// we are update let , var variable  
accountEmail = "pawan@gmail.com"
console.log(accountEmail);

accountPassword = "012548987"
console.log(accountPassword);
// we also update this kind of variables in javascript
accountCity = "udaipur"
console.log(accountCity);


// 2nd method of console using tabel
console.table([accountEmail, accountId, accountPassword, accountCity])

/*
 note :-  prefer not to use var
          because issue in function and block scope
*/
