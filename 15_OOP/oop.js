// const user = {
//   username: "Ashish Pal",
//   position: "Web Developer",
//   userDetail: function () {
//     console.log(`Username is ${this.username}`);
//   },
// };

// console.log(user.userDetail());

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  return this;
}

const userOne = new User("Ashish", 12, true);
console.log(userOne);
