//immediately invoked function expressions IIFE
//if u want your function to be invoked immediately and the pollutiion that is created by global scope variables must be removed so we use iife
//to make iife just wrap your function in ()and add (); after it

// do iife likh rhe ho to ; lagana na bhoole.

//named iife
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); 

//arrow func can also be used in iife

//unnamed iife
( () => {
    console.log(`DB CONNECTED TWO `);
} )();

//now if u want to pass a parameter like name then do like given below:
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');