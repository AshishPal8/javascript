function setUsername(username) {
  this.username = username;
}

function createUser(username, email, password) {
  setUsername.call(this, username);
  this.email = email;
  this.password = password;
}

const userDetail = new createUser("Ashish", "a@gmail.com", "12334");

console.log(userDetail);
