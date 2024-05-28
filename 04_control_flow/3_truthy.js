const userEmail = "ashish@gmail.com";

if (userEmail) {
  console.log("Got email Successfully");
} else {
  console.log("email failed");
}

// falsy values
// false, 0, -0, bigInt 0n, "", null, undefined, NaN

//truthy value
// "0", "false", " ", [], {}, function(){}

const arr = [];

if (arr.length === 0) {
  console.log("Array is empty");
}

const obj = {};

if (Object.keys(obj).length === 0) {
  console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null , undefined

let val1;
// val1 = 10 ?? 20; //10

// val1 = null ?? 10; // 10 if the value is null or undefined then it goes to the next value of function, it is just a fallback operator

val1 = undefined ?? 10 ?? 20;
console.log(val1);

// Terinary Operator
// condition ? true : false

let teaPrice = 50;
teaPrice >= 80 ? console.log("More than 80") : console.log("Less than 80");
