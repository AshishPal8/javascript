// for

for (let i = 0; i <= 10; i++) {
  //   console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log(`Table of: ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

const myArray = ["Spiderman", "Ironman", "Thor"];

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  console.log(element);
}

for (let i = 0; i < 20; i++) {
  if (i === 5) {
    console.log("Detacted 5");
    break;
  }
  console.log(i);
}
for (let i = 0; i < 20; i++) {
  if (i === 5) {
    console.log("Detacted 5");
    continue;
  }
  console.log(i);
}
