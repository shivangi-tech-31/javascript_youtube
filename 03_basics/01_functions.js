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

function calculateCartPrice(...num1){
  //rest operator used when u have many inputs unknownn
  return num1
}

// console.log(calculateCartPrice(200 , 400, 500));

//making an object:
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

//passing direct object
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
//alternate way::
console.log(returnSecondValue([200, 400, 500, 1000]));