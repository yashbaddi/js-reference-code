const fs = require("fs");

// Function to read the file and get integers
function readFileIntoArray(filePath) {
  const data = fs.readFileSync(filePath, "utf8");
  return data.split(/\s+/).map(Number); // Split by whitespace and convert to integers
}

// The threeSum function from before
function threeSum(nums) {
  const result = [];

  console.time(`Three Sum Execution Time for ${nums.length} records`); // Start timing

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
          result.push(triplet);
        }
      }
    }
  }

  console.timeEnd(`Three Sum Execution Time for ${nums.length} records`); // End timing

  // return result;
}

// const nums = [-1, 0, 1, 2, -1, -4];
// console.log(threeSum(nums));

// Main function to progressively test with doubling input sizes
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

// Call the function with the path to the file
progressivelyTestThreeSum("1Mints.txt");

function insertionSort(nums) {
  console.time(`Three Sum Execution Time for ${nums.length} records`); // Start timing

  for (let i = 1; i < nums.length; i++) {
    let key = nums[i];
    let j = i - 1;
    while (j >= 0 && nums[j] > key) {
      nums[j + 1] = nums[j];
      j = j - 1;
    }
    nums[j + 1] = key;
  }
  console.timeEnd(`Three Sum Execution Time for ${nums.length} records`); // End timing
}

function mergeSort(nums) {
  console.time(`Three Sum Execution Time for ${nums.length} records`); // Start timing

  if (nums.length <= 1) {
    return nums;
  }

  let step = 1;
  while (step < nums.length) {
    for (let left = 0; left < nums.length; left += 2 * step) {
      const mid = Math.min(left + step, nums.length);
      const right = Math.min(left + 2 * step, nums.length);
      nums = merge(nums, left, mid, right);
    }
    step *= 2;
  }
  console.timeEnd(`Three Sum Execution Time for ${nums.length} records`); // End timing
}

function merge(arr, left, mid, right) {
  let leftArr = arr.slice(left, mid);
  let rightArr = arr.slice(mid, right);
  let i = 0,
    j = 0,
    k = left;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      arr[k++] = leftArr[i++];
    } else {
      arr[k++] = rightArr[j++];
    }
  }

  while (i < leftArr.length) {
    arr[k++] = leftArr[i++];
  }

  while (j < rightArr.length) {
    arr[k++] = rightArr[j++];
  }

  return arr;
}

function jsSort(nums) {
  console.time(`Three Sum Execution Time for ${nums.length} records`); // Start timing

  nums.sort();
  console.timeEnd(`Three Sum Execution Time for ${nums.length} records`); // End timing
}
