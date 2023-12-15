interface numberWithLogs {
  result: number;
  logs: string[];
} //type

function wrapWithLogs(x: number): numberWithLogs {
  return {
    result: x,
    logs: [],
  };
} //lift

function runWithLogs(
  input: numberWithLogs,
  func: (x: number) => numberWithLogs
) {
  const operatedValue = func(input.result);
  return {
    result: operatedValue.result,
    logs: input.logs.concat(operatedValue.logs),
  };
}
//bind

console.log(runWithLogs(runWithLogs(wrapWithLogs(2), addOne), idFunc));

function square(x: number): numberWithLogs {
  return {
    result: x * x,
    logs: ["Squared the number"],
  };
}

function addOne(x: number): numberWithLogs {
  return {
    result: x + 1,
    logs: ["Added one to the number"],
  };
}

function idFunc(x: number): numberWithLogs {
  return {
    result: x,
    logs: [],
  };
}

// console.log(addOne(square(wrapWithLogs(2))));
