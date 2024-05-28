// for of loop

const arr = [1, 2, 3, 4, 5, 6];

for (const num of arr) {
  // console.log(num);
}

const greetings = "Hello World!";

for (greet of greetings) {
  // console.log(greet);
}

const myObject = {
  js: "Javascript",
  py: "Python",
  cpp: "C++",
  rb: "Ruby",
  swift: "Swift by Apple",
};

//find keys
for (const key in myObject) {
  console.log(key);
}

// find values
for (const key in myObject) {
  console.log(myObject[key]);
}

//find key values in array
const array = ["js", "py", "rb", "java", "cpp"];
for (const key in array) {
  console.log(key); // the index are the keys in array by default
}

//values
for (const key in array) {
  console.log(array[key]);
}
