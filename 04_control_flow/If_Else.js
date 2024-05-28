let temperature = 41;

if (temperature < 42) {
  console.log("less then 42");
} else {
  console.log("more then 42");
}

const score = 200;
if (score > 100) {
  let power = "fly";
  console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`); this is outside of block so this gives error power is not defined

const isUserLoggedin = true;
const debitCard = true;
const loggedInWithGoogle = true;
const loggedInWithEmail = false;

if (isUserLoggedin && debitCard) {
  console.log("You are able to buy courses");
}

if (loggedInWithEmail || loggedInWithGoogle) {
  console.log("You are looged In");
}
