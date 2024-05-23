const obj = {
  id: "001",
  fullname: {
    userFullname: {
      firstName: "Ashish",
      lastName: "Pal",
    },
  },
  email: "ashish@gmail.com",
};

// ? means optional chaining
const result = obj.fullname?.userFullname?.firstName;
console.log(result);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "a",
  4: "b",
};

const obj3 = { obj1, obj2 };
// const obj4 = Object.assign(obj1, obj2);

const obj5 = { ...obj1, ...obj2 };

console.log(obj5);

const tinderUser = {
  id: "101",
  name: "Ashish",
  email: "ashish@gmail.com",
  isLoggedIn: true,
};

console.log(Object.keys(tinderUser)); // keys are comes in array
console.log(Object.values(tinderUser)); // values are comes in array
console.log(Object.entries(tinderUser));

// *******************destracturing**************************

const bike = {
  bikeName: "Pulsar",
  bikeModel: "NS 400z",
  highSpeed: "175km/h",
};

console.log(bike.highSpeed); // normal way

// destracturing way

const { highSpeed: speed } = bike;
console.log(speed);
