// primitive datatypes

// types: String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);

// reference ( non primitive)

// Array, Object, Function

const superHeros = ["Saktiman", "Batman", "Superman"];

const myObj = {
  name: "Ashish",
  age: 21,
};

const myFunction = function () {
  // console.log("Hello World");
};

// console.log(typeof anotherId);

// **********************************************************************************
// stack (primitive), heap (non-primitive / reference)

let myName = "Ashishpal";

let nickname = myName;

nickname = "Ashu Pal";

// console.log(myName);

// console.log(nickname);

let userOne = {
  name: "Ashish Pal",
  email: "ashish@gmail.com",
};

let userTwo = userOne;

userTwo.name = "Ashu Pal";
userTwo.email = "ashu@gmail.com";

console.log(userOne);
console.log(userTwo);
