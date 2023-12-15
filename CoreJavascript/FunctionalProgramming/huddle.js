"use strict";
function wrapWithLogs(x) {
    return {
        result: x,
        logs: [],
    };
} //lift
function runWithLogs(input, func) {
    const operatedValue = func(input.result);
    return {
        result: operatedValue.result,
        logs: input.logs.concat(operatedValue.logs),
    };
}
//bind
console.log(runWithLogs(runWithLogs(wrapWithLogs(2), addOne), idFunc));
function square(x) {
    return {
        result: x * x,
        logs: ["Squared the number"],
    };
}
function addOne(x) {
    return {
        result: x + 1,
        logs: ["Added one to the number"],
    };
}
function idFunc(x) {
    return {
        result: x,
        logs: [],
    };
}
// console.log(addOne(square(wrapWithLogs(2))));
