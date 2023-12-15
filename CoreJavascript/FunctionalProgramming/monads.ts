// interface numberWithLogs {
//   result: number;
//   logs: string[];
// } //Wrapper Type

// function wrapWithLogs(x: number): numberWithLogs {
//   return {
//     result: x,
//     logs: [],
//   };
// } //Wrapper function

// function runWithLogs(
//   input: numberWithLogs,
//   transform: (x: number) => numberWithLogs
// ): numberWithLogs {
//   const transformedNumberWithLogs = transform(input.result);
//   return {
//     result: transformedNumberWithLogs.result,
//     logs: input.logs.concat(transformedNumberWithLogs.logs),
//   };
// }
// //Run with logs

// function square(x: number): numberWithLogs {
//   return {
//     result: x * x,
//     logs: ["Squared the number"],
//   };
// }

// // function square(x: numberWithLogs): numberWithLogs {
// //   return {
// //     result: x.result * x.result,
// //     logs: x.logs.concat(["Squared the number"]),
// //   };
// // }

// function addOne(x: number): numberWithLogs {
//   return {
//     result: x * 1,
//     logs: ["Added 1 to the number"],
//   };
// }

// // function addOne(x: numberWithLogs): numberWithLogs {
// //   return {
// //     result: x.result + 1,
// //     logs: x.logs.concat(["Added 1 to the number"]),
// //   };
// // }

// // console.log(addOne(square(wrapWithLogs(2))));

// console.log(
//   runWithLogs(runWithLogs(runWithLogs(wrapWithLogs(2), square), square), addOne)
// );
