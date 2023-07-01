function waitTime(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Inside Set timeout 2");
      resolve("Set time resolved");
    }, time);
  });
}

async function anytimeAsync() {
  const obj = await waitTime(2000);
  console.log(obj);
  console.log("hey");
  //   await waitTime(1000);
}

anytimeAsync();
