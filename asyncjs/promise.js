function resDataPromise(data) {
  return new Promise((resolve, reject) => {
    console.log("hey");
    // setTimeout(() => {
    resolve(data);
    //   }, 2000);
  });
}

let a = new Promise((res, rej) => {
  setTimeout(() => {
    res("Hey");
  }, 0);
});
console.log(a);
a.then((r) => {
  throw new Error();
});

// console.log("Task 1");
// let d = resDataPromise("Task 2")
//   .then((result) => {
//     console.log("Inside then");
//     console.log(result);
//   })
//   .catch((error) => console.error(error))
//   .finally(() => console.log("Task 3"));

// console.log("Task 4");
