//this is used for current context .
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.username="sam" //context can be changed 
// user.welcomeMessage()
// console.log(this);//{}
//browser ke andar global object is windows

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //undefined because this works in objects only and not in functions

// }
// chai()

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }
// chai()//undefined as this cannot be access in arooow func


// +++++++++++++ arrow func ++++++++++++
//  const addTwo = (num1, num2) => {
//     return num1 + num2

//alternates to above
// const addTwo = (num1, num2) =>  num1 + num2      //implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )

//curly braces me kra wrap output ko return likho nhi to nhi jb arrow use kr rhe

const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach() 
