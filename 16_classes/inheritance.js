class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.password = password;
    this.email = email;
  }
  addCourse() {
    console.log(`New course added by ${this.username}`);
  }
}

const detail = new Teacher("Ashish", "a@gmail.com", "1234");

detail.logMe();

const newDetail = new User("Ashu");
newDetail.logMe();
// newDetail.addCourse();

// console.log(detail instanceof Teacher);
