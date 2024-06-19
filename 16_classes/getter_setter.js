class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return `${this._email}`;
  }
  set email(val) {
    this._email = val;
  }

  get password() {
    return `${this._password}ashish`.toUpperCase();
  }
  set password(val) {
    this._password = val;
  }
}

const ashish = new User("a@gmail.com", "abcdefghijklmnopqustuvwxyz");

console.log(ashish.email);
