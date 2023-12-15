async function SumAsync(a, b) {
  await setTimeout(() => {
    console.log("Inside time out");
  }, 2000);
  console.log("Completion of set timeout");
  return a + b;
}

console.log("Before Call");
SumAsync(2, 3).then((res) => console.log(res));
console.log("After Call");
