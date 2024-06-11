const teacher = {
  makeVideo: true,
};

const teachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: teachingSupport,
};

Object.setPrototypeOf(teachingSupport, teacher);

let user = "Ashish                 ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is ${this.trim().length}`);
};

user.trueLength();
"hello ".trueLength();
