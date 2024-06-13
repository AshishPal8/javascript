class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptedPassword() {
    return `${this.password}abc`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const details = new User("Ashish", "a@gmail.com", "1123");

console.log(details.encryptedPassword());
console.log(details.changeUsername());
