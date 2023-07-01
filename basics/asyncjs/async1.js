async function myFunc() {
  console.log("In Function");
  const res = await console.log("hey");
  console.log("hey3");
  console.log("After await");
}

let c = new Promise((resolve, reject) => {
  resolve("Fulli");
});

async function newAsync(a) {
  setTimeout.then = console.log;
  const res = await setTimeout(() => 2, 2000);
  console.log("Bye");
  console.log(a);
  //   console.log(a.then(res=>{throw new Error}))
  console.log("after hey");
}

console.log("Before Function Call");
let a = myFunc();
console.log("After Function Call");
console.log(a);
let d = c
  .then((res) => {
    throw new Error();
  })
  .catch((error) => console.log(error));
let b = newAsync(d);
console.log();
