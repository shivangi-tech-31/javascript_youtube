// let a=20
// const b=40
// var c=90

//var goes out of scope and hence we dont use it instead we use let and const .

if (true) {
    let a = 10
    const b = 20
    var c=30
}
//global scope is written outside braces and is available for inside the scope.
//let and const are very safe to use but in their scope only.


 console.log(a);
console.log(b);
console.log(c);

//nested func mein child parent ko use kr pata h but parent child ko nhi
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); //error

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); //error
}

// console.log(username);//error

// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))
//is vale func mein func call phle krenege to ans ayega 
function addone(num){
    return num + 1
}



addTwo(5)
//bs expression bana diya uar kuch nhi but isme vo hoisting nhi kr apyega means isme hm declare kr rhe baad me and access kr rhe phle

const addTwo = function(num){
    return num + 2
}