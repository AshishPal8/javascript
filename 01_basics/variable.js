const accountId = 1010;
let accountEmail = "asish@gmail.com";
var accountPassword = "121212";
let accountCity = "Ghaziabad";
let accountState;

// accountId = 1020;
accountEmail = "a@gmail.com";
accountPassword = "13131313";
accountCity = "Noida";

/* prefer not to use var it has issue with block scope and functional scope  */

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
