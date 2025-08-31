//singleton i.e. constructor se agr ban rha to aapne trh ka ek hi object h

const { jsx } = require("react/jsx-runtime");

//object iterals
//Object.create   //is a constructor method in which singleton is formed

//making a symbol and using it as a key in an object.
const mysym = Symbol("key1")
 
const JsUser= {
    name: "hitesh",
    //using symbol as a key
    [mysym]: "mykey1",
    age: 18,
    email: "hitesh@google.com",
    isloggedin: false,
    lastLoginDays:["Monday", "saturday"]
}

console.log(JsUser.age);
console.log(JsUser["email"]);//alternate and best way to access in objects.
console.log(JsUser[mysym]);

//if u want to lock  your object fully , so that anyone cant cha nge it 
//Object.freeze(JsUser)

console.log(JsUser);


//Adding a function in an object:
// JsUser.greeting = function(){
//     console.log("Hello js user");
    
// }
// console.log(JsUser.greeting());