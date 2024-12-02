import * as fs from "fs";

function progressivelyTestThreeSum(filePath) {
  const nums = readFileIntoArray(filePath); // Load all integers from the file
  let dataSize = 5;

  // Keep doubling the size until we reach the full array
  while (dataSize <= nums.length) {
    const subset = nums.slice(0, dataSize); // Take the first 'dataSize' elements
    jsSort(subset); // Call the threeSum function
    dataSize *= 3; // Double the input size for the next iteration
  }
}

export function logTimer(func, name = "") {
  console.time(`${name} execution time for ${nums.length} records`);
  const returnedValue = func();
  console.timeEnd(`${name} execution time for ${nums.length} records`);

  return returnedValue;
}

progressivelyTestThreeSum("1Mints.txt");
