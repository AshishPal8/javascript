if (true) {
  var a = 10; // global scope
  let b = 20; // block scope
  const c = 30; // block scope
}

// console.log(a, b, c);

function One() {
  const name = "Ashish";

  function Two() {
    const email = "ashish@gmail.com";
    console.log(name);
  }

  //   console.log(email);

  Two();
}

One();

Hello();
function Hello() {
  console.log("Hello");
}

const helloTwo = function () {
  console.log("hello Two");
};
helloTwo();
