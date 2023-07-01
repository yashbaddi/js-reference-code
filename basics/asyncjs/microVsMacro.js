console.log("Task 1");

setTimeout(() => {
  console.log("Task 2");
});

queueMicrotask(() => {
  console.log("Microtask 1");
});

console.log("Task 3");

Promise.resolve().then(() => {
  console.log("Microtask 2");
});
