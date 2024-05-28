// FILTER

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNums.filter((num) => num > 5);
// console.log(newNum);

// const newNum = [];

// myNums.forEach((num) => {
//   if (num > 5) {
//     newNum.push(num);
//   }
// });

// console.log(newNum);

const books = [
  { title: "book one", genre: "fiction", publish: 1981, edition: 2002 },
  { title: "book two", genre: "non-fiction", publish: 1976, edition: 2001 },
  { title: "book three", genre: "history", publish: 1973, edition: 2008 },
  { title: "book four", genre: "science", publish: 1989, edition: 2011 },
  { title: "book five", genre: "non-fiction", publish: 1983, edition: 2016 },
  { title: "book six", genre: "comic", publish: 1992, edition: 2005 },
  { title: "book seven", genre: "horror", publish: 1996, edition: 2001 },
  { title: "book eight", genre: "fiction", publish: 1979, edition: 2006 },
  { title: "book nine", genre: "science", publish: 1986, edition: 2001 },
];

let userBooks = books.filter((bk) => bk.genre === "non-fiction");
userBooks = books.filter((bk) => {
  return bk.publish > 1990 && bk.genre === "comic";
});
// console.log(userBooks);

// MAPS

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newnums = numbers.map((num) => num * 2);
// console.log(newnums);

//chaining
const newNums = numbers
  .map((num) => num * 10)
  .map((num) => num + 2)
  .filter((num) => num >= 50);

// console.log(newNums);

const digit = [1, 2, 3, 4];
const total = digit.reduce(function (acc, currVal) {
  console.log(`acc: ${acc}, currVal: ${currVal}`);
  return acc + currVal;
}, 0);

const sumTotal = digit.reduce((acc, curr) => acc + curr, 0);
// console.log(sumTotal);

const shoppingCart = [
  {
    itemName: "Truke Buds",
    price: 899,
  },
  {
    itemName: "ON protein",
    price: 1899,
  },
  {
    itemName: "ATOM Creatine",
    price: 699,
  },
  {
    itemName: "Compression T-Shirt",
    price: 399,
  },
];

const priceTotal = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceTotal);
