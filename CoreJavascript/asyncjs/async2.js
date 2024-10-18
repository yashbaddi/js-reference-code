function waitTime(time, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Inside Set timeout 2");
      resolve(value + 5);
    }, time);
  });
}

async function anytimeAsync() {
  const obj = await waitTime(2000);
  console.log(obj);
  console.log("hey");
  const values = [8, 10, 3];
  //   await waitTime(1000);
  return Promise.all(
    values.map(async (val) => {
      return waitTime(100, val);
    })
  );
}

async function superAsync() {
  const valuee = await anytimeAsync();
  console.log(valuee);
}

superAsync();
