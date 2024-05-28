function sayHello() {
  console.log("Hello");
}
sayHello();

//parameterised funciton

function addTwoNumbers(num1, num2) {
  // this is parameter
  console.log(num1 + num2);
}
let result = addTwoNumbers(2, 3); // this is argument
console.log(result); // result is undefined coz the functions never return anything

function addTwoNumbers1(num1, num2) {
  return num1 + num2;
}
let sum = addTwoNumbers1(10, 20);
console.log(sum);

function loginUser(username) {
  if (username) {
    return `${username}, Just logged in!`;
  } else {
    return "Please enter Username";
  }
}
const user = loginUser();
console.log(user);

function calculateCartPrice(...total) {
  return total;
}
// in parameter there is rest operator that is return an array

const price = calculateCartPrice(200, 300, 500);
console.log("Price:", price);

// handle objects with functions

const product = {
  name: "T-shirt",
  price: 299,
};

function userProduct(item) {
  return `The name of Product is ${item.name} and price is ${item.price}`;
}

console.log(userProduct(product));

const myArray = [10, 20, 30, 40];

function returnArray(arrayItem) {
  return arrayItem[3];
}
console.log(returnArray(myArray));
