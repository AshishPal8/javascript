const number = 100;

console.log(typeof number);

const balance = new Number(101);
console.log(balance);

const rate = 600.8323;
console.log(rate.toExponential());
console.log(rate.toFixed(2));
console.log(rate.toPrecision(4));

const salary = 10000000;
console.log(salary.toLocaleString());

//***************************   Math    **************************/

console.log(Math);

//abs means absolute value convert negative value to positive and positive to positive
console.log(Math.abs(-4));

//round of the number
console.log(Math.round(1.9));

//round up to the higher value even if 4.3 output is 5
console.log(Math.ceil(1.2));

//round up to the lower value
console.log(Math.floor(1.9));

console.log(Math.random());
console.log(Math.random() * 10); // shift the one decimal number
console.log(Math.random() * 10 + 1); // not get the zero value that is why add +1
console.log(Math.floor(Math.random() * 10 + 1)); // remove the numbers after decimal or round of the number

const min = 50;
const max = 70;

const numberBetweenMinAndMax = Math.floor(
  Math.random() * (max - min + 1) + min
);

console.log(numberBetweenMinAndMax);
