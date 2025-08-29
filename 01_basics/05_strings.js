//to write statements full you can use backticks instead of adding multiple strings
const name="hitesh"
const age=50

console.log(`my name is ${name} and age is ${age}`);

//string is always an object and not an array
//all properties are held in string prototypesec

//alternative way of string declaration
const gamename = new String('jitesh')

//accessing index of string :
console.log(gamename[0]);
console.log(gamename.__proto__);

//to find the ,ength and to change the case of the string you can use the .length and .touppercase() functions 

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(3));
console.log(gamename.indexOf('i'));

//to divide an string into its substring till its starting 4 letters
const newstring = gamename.substring(0,4)
console.log(newstring);

//if in slice gibven negative no then it will reverse the substring
const anotherstring = gamename.slice(-4,4)
console.log(anotherstring);

const newstringone = "        hitesh     "
console.log(newstringone);
//if u dont want that whitespaces then use trim function
console.log(newstringone.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'))
console.log(url.includes('sundar'))

