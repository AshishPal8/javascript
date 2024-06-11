// function multiplyByFive(num) {
//   return num * 5;
// }

// console.log(multiplyByFive.power);
// multiplyByFive.power = 6;
// console.log(multiplyByFive(5));
// console.log(multiplyByFive.power);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`Score is ${this.score}`);
};
const chai = new createUser("chai", 50);
const tea = new createUser("tea", 500);

tea.printMe();
