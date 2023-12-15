// const Something = (() => {
//   let isExecuted = false;
//   return function () {
//     if (!isExecuted) {
//       isExecuted = true;
//       console.log("hey");
//     }
//   };
// })();
//A function that can be executed only once this is very imp.
//You struggled to do this before
function once(fn) {
  let isExecuted = false;
  return () => {
    if (!isExecuted) {
      isExecuted = true;
      fn();
    }
  };
}
const Something = once(() => {
  console.log("hey");
});

Something();

Something();

Something();
