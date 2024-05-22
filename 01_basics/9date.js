let myDate = new Date();

console.log(myDate); // 2024-05-22T03:01:09.685Z
console.log(typeof myDate); // object
console.log(myDate.toString()); // Wed May 22 2024 10:47:00 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Wed May 22 2024
console.log(myDate.toISOString()); //2024-05-22T05:18:15.797Z
console.log(myDate.toJSON()); // same as toISOString
console.log(myDate.toLocaleDateString()); // 22/5/2024
console.log(myDate.toLocaleTimeString()); // 10:49:53 am
console.log(myDate.toLocaleString()); // 22/5/2024, 10:50:22 am
console.log(myDate.toTimeString()); //10:50:55 GMT+0530 (India Standard Time)

let createdDate = new Date(2024, 4, 22);
let createdDate2 = new Date(2024, 4, 22, 10, 52);
console.log(createdDate2);

let currentDate = new Date();
let currentYear = currentDate.getFullYear();

console.log(currentYear);
