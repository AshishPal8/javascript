let name = "ashish";
let phone = " Samsung";

// console.log(name + phone);

//string interpolation or tempelate laterals
console.log(`My name is ${name} and I have ${phone}`);

const gameName = new String("Ashish");

// give the index that charactor you want to find
console.log(gameName.charAt(2));

//give the charactor and it gives the index of the number
console.log(gameName.indexOf("h"));

// in substring negative indexes are not allowed
console.log(gameName.substring(0, 4));

//in slice negative indexes are allowed, in negative it shows from the backword
console.log(gameName.slice(-6, 6));

//trim removes the whitespace in the string
const username = "   ashish pal   ";
const newUsername = username.trim();
console.log(username);
console.log(newUsername);

//replace any caractors with new charactors
const url = "https://ashish.com/ashish%20pal";
const newUrl = url.replace("%20", "-");
console.log(url);
console.log(newUrl);

//split the string and convert it into an array
const fruits = "Apple Orange Papaya Grapes";
console.log(fruits.split(" "));

console.log(fruits.at(1));

console.log(fruits.includes("se"));
