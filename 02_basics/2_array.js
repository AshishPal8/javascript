const marvelHeros = ["Spiderman", "Ironman", "Thanos"];
const dcHeros = ["Superman", "Flesh", "Batman"];

// marvelHeros.push(dcHeros);
console.log(marvelHeros);

// const all_heros = marvelHeros.concat(dcHeros);

const allSuperHeros = [...marvelHeros, ...dcHeros];
console.log(allSuperHeros);

console.log(Array.isArray("Ashish"));
console.log(Array.from("Ashish"));

const num1 = 100;
const num2 = 200;
const num3 = 300;

console.log(Array.of(num1, num2, num3));
