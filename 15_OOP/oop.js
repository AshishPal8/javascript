const user = {
  username: "Ashish Pal",
  position: "Web Developer",
  userDetail: function () {
    console.log(`Username is ${this.username}`);
  },
};

console.log(user.userDetail);
