//while

let i = 0;
while (i <= 10) {
  console.log(`value is ${i}`);
  i = i + 1;
}

const myArray = ["Spiderman", "Ironman", "Thor"];

let arr = 0;
while (arr < myArray.length) {
  console.log(myArray[arr]);
  arr = arr + 1;
}

let score = 11;

do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);
