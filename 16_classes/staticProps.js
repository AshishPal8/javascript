class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }

  static createId() {
    console.log(`123`);
  }
}

const hello = new User("Ashish");
hello.createId();

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@gmail.com");
iphone.createdAt();
