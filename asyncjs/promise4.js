// const myPromise = new Promise((res, rej) => {
//   console.log("Inside first promise");
//   setTimeout(() => {
//     console.log("First time out");
//     res("hey");
//   }, 10000);
// });

// const myPromise2 = new Promise((res, rej) => {
//   console.log("Inside Second Promise");
//   setTimeout(() => {
//     console.log("second timeout");
//     res("hey");
//   }, 1000);
// });

const myPromise3 = new Promise((res, rej) => {
  console.log("Inside third Promise");

  res("hey");
}, 0);

// const myPromise4 = new Promise((res, rej) => {
//   console.log("Inside fourth Promise");

//   res("hey");
// });

// const myPromise5 = new Promise((res, rej) => {
//   console.log("Inside fifth Promise");

//   res(myPromise4);
// });

// myPromise.then((res) => {
//   console.log("inside then of 10sec");
// });

// myPromise2.then((res) => {
//   console.log("Inside then of 1sec");
// });

// myPromise5
//   .then((res) => {
//     console.log("Res:", res);
//     console.log("Inside then of no time 5");
//     return myPromise3;
//   })
//   .then((res) => console.log("Hey:", res));
// myPromise4.then((res) => {
//   console.log("Inside then of no time 4");
// });

// myPromise3.then((res) => {
//   console.log("Inside then of no time 3");
// });
let a;
async function yash() {
  console.log("Inside Async");

  return a;
}
async function harsh() {
  const b = yash();
  console.log("iseq:", b);
  console.log("is a:", a);
  console.log("is a b:", a == b);
}

harsh();

a = new Promise((res, rej) => {
  res("new promise resolved");
});
