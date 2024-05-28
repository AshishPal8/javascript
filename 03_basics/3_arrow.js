const user = {
  username: "Ashish",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, How are you!`);
  },
};

user.welcomeMessage();
user.username = "Sam";
user.welcomeMessage();
console.log(this); // when we write this in node environment it refers to {} empty object
console.log(this); // when we write this in browser cosole it refers to the window object

function hello() {
  let name = "Ashish";
  console.log(this);
}
hello();

const hii = function () {
  let name = "Ashish";
  console.log(this.name);
};
hii();

const hlo = () => {
  console.log(this);
};
hlo();

//explicit return
const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(3, 4));

// implicit return, no need of return keyword
const addTwoNum = (num1, num2) => ({ username: "ashish" });
console.log(addTwoNum(3, 4));
