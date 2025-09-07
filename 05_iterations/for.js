//for
// let ar

// for (let i = 0; i <=10; i++) {
//     const element = i;
//     // console.log(element);
//     if(i===5){
//         // consoray = [1, 2, 3, 4, 5];
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     // console.log(element);
// }le.log("Breaking the loop");
//         break;//breaks the loop when i is 5
//     }
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//    for (let j = 1; j <= 10; j++) {
//     // console.log(`Inner loop value ${j} and inner loop ${i}`);
//     console.log(i + '*' + j + ' = ' + i*j );
//    }
// }

let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}
//continue skips the current iteration and continues with the next iteration