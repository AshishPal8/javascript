//object laterals

const mySymbol = Symbol("Hello");

const myObj = {
  name: "Ashish",
  [mySymbol]: "Ashishpal", // using square brackets you can access symbol variable
  email: "ashish@google.com",
  isLoggedIn: true,
  visiting: ["monday", "saturday"],
};

console.log(myObj.email); // not prefered, not bad but have better way
console.log(myObj["email"]);
console.log(myObj[mySymbol]);

// Object.freeze(myObj);

console.log(myObj);

myObj.greeeting = function () {
  console.log("Hello, How are you!");
};

console.log(myObj.greeeting());

myObj.greeeting2 = function () {
  console.log(`Hello, How are you ${this.name}`);
};

console.log(myObj.greeeting2());
