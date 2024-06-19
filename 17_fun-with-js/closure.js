function outer() {
  let username = "Ashish";
  function inner() {
    console.log(`Inner ${username}`);
  }
  inner();
}
outer();
