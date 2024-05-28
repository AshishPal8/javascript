// IIFE(Imediately Invoked Function Function)

(function database() {
  console.log(`DB is connected`);
})(); // if you write two iife use semicolon ending of first iife then second iife runs

((name) => {
  console.log(`DB is connected again ${name}`);
})("Ashish");
