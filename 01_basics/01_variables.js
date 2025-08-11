const accountId=1334
let accountEmail="hitesh"
var accountPassword="234"
accountCity="jaipur"
let accountState;

//accountId=2

accountEmail="hiufid@gmail.com"
accountPassword="543"
accountCity="Bengaluru"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

//to show whole values in table.
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
prefer not use var
because of issue in block scope and functional scope
*/ 

/*only use const or let. you should not declare a variable without let or var */

//if u only declare a variable then by default it is initialized undefined 