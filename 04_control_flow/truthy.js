const a= 0
if(a){
    console.log("truthy");
}
else{
    console.log("falsy");
}

//falsy values in javascript    
// "", 0, null, undefined, NaN, false,-0, BigInt 0n
//everything else is truthy
//"0", " ", [], {}, function(){}, new Date(), -1, 3.14, "false", Infinity, -Infinity, BigInt 1n 

//[] empty array , {} empty object are truthy values


//if array is empty and u wanna check then syntax is:
const userEmail = []
//  if (userEmail.length === 0) {
    //     console.log("Array is empty");
    // }
    
    //to check if object is empty or not use Object.keys() method
    const emptyObject = {}
    // if (Object.keys(emptyObject).length === 0) {
        //     console.log("Object is empty");
// }

//to check if string is empty or not use .length property
const emptyString = ""
// if (emptyString.length === 0) {
    //     console.log("String is empty");
    // }
    
    //false==0 //true
    //false===0 //false
    //false=='' //true
    //false==='' //false
    //0=='' //true
    //0==='' //false


    //NaN is the only value in javascript which is not equal to itself
    // console.log(NaN === NaN); //false
    // console.log(Object.is(NaN, NaN)); //true
    
    //to check if a value is NaN or not use Number.isNaN() method
    // console.log(Number.isNaN(NaN));

    //Nullish coalescing operator(??) :null undefined check
    //it decides the value to be assigned when the left side is null or undefined
    //if left side is null or undefined then right side value is assigned else left side value is assigned

    let val1;
    val1=5??10

    console.log(val1);//5

    let val2=null??10
    console.log(val2);//10

    let val3=undefined??10
    console.log(val3);//10

    let val4=0??10
    console.log(val4);//0

    let val5=""??"default string"
    console.log(val5);//"" empty string

    let val6=false??"default boolean"
    console.log(val6);//false

    
    //ternary operator
    //syntax: condition ? expression if true : expression if false

    const iceteaprice=100
    iceteaprice <=80 ? console.log("I will buy ice tea") : console.log("I will not buy ice tea");