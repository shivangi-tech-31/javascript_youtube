function saymyname(){
 console.log("h");
 console.log("i");
 console.log("t");
} 

//saymyname()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
  //  let result= number1+number2
  //return result

return number1+number2
}

addTwoNumbers(3,4)

//now if we store this function result in any variable then the value of variable would not be stored like:
const result = addTwoNumbers(3,5)
// console.log(result);//this gives undefined as console ka kaam sirf print krna hota h store krna nhi in a function so for that we use return keyword.

function loginUserMessage (username){
  if(username === undefined){
    /// !username means that username===undefined
    console.log("please enter a username");
    return
  }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))

//a situation when u dont know how many args may come either in a shopping tym scenario

function cala
