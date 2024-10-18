import fs from "fs";
import papa from "papaparse";
import path from "path";

const data1 = fs.readFileSync("./2024-05-08-21-02-14.txt").toString(); //working
const data2 = fs.readFileSync("./2024-05-08-23-00-53.txt").toString(); //not working
const data3 = fs.readFileSync("./2024-05-09-06-01-56.txt").toString(); //not working

const op1 = papa.parse(data1, {
  header: true,
  skipEmptyLines: true,
});
const op2 = papa.parse(data2, {
  header: true,
  skipEmptyLines: true,
});
const op3 = papa.parse(data3, {
  header: true,
  skipEmptyLines: true,
});

console.log(op1);
console.log(op2);
console.log(op3);
