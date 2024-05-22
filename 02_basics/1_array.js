const myArr = [0, 1, 2, 3, 4, 5, 6];
console.log(myArr[1]);
console.log(myArr.length);

// myArr.push(7, 8);
// myArr.pop();

// myArr.unshift(-1, -2);
// myArr.shift();

console.log("A", myArr);

const sliceArray = myArr.slice(0, 3);
console.log("slicedArray", sliceArray);
console.log("B", myArr);

const spliceArray = myArr.splice(0, 3);
console.log("SplicedArray", spliceArray);
console.log("C", myArr);
