console.log(Math.PI);

const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descripter);

const chai = {
  name: "Masala Chai",
  price: 20,
  isAvailable: true,
  orderNow: function () {
    console.log("Your order is cancelled");
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key}: ${value}`);
  }
}
