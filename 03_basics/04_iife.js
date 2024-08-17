// Immediatly invoked function Expression

// ( function(){} ) ()  1st function define & 2nd is for function call
(function Chai(){
    console.log(`DB connected`);
})() ; // semi colon is necessary bcoz iife don't no were to stop execution


(  () => {
    console.log('iife using arrow function');
    
})();


( (name) => {
    console.log(`passing parameter and argument in iife function ${name}`);
    
})("Harshvardhan");