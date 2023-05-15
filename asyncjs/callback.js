function calculateAsync(value, callback) {
  setTimeout(() => {
    const result = value * 2;
    callback(result);
  }, 1000);
  console.log("heyz");
}

function printResult(result) {
  console.log(`The result is ${result}`);
}

console.log("Task 1");
calculateAsync(5, printResult);
console.log("Task 2");
