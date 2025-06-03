import { logTimer } from "./utils";
export function sort(arr, { showOutput, type, approach, logTime }) {
  const sortedArr = logTime
    ? logTimer(selectSort(arr, type, approach))
    : selectSort(arr, type, approach);

  if (showOutput) return sortedArr;
}

function selectSort(arr, sortType, approach) {
  switch (sortType) {
    case "top-down-merge-sort":
      return topDownMergeSortRecursive(arr);
    case "bottom-up-merge-sort":
      bottomUpMergeSortRecursive();
  }
}

function topDownMergeSortRecursive(arr) {
  const mid = Math.floor(left + (right - left) / 2);

  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid + 1, arr.length);

  const leftArrSorted = topDownMergeSortRecursive(leftArr);
  const rightArrSorted = topDownMergeSortRecursive(rightArr);

  return merge(leftArrSorted, rightArrSorted);
}

function bottomUpMergeSortRecursive(arr) {
  let size = 1;
  arr;
}
function bottomUpMergeSort(arr) {
  const arrVal=arr.map(v=>[v])
  const n = arrVal.length;
  const arrReduce=arrVal.reduce((acc, curr) => {
    const leftArr = acc[0] || [];
    const rightArr = acc[1] || [];
    
    return merge(leftArr, rightArr);
  }
  , []);
  const mergedArr = merge(leftArr, rightArr);

  for (let size = 1; size < n; size *= 2) {
      // For each size, merge pairs of adjacent subarrays
      for (let left = 0; left < n - size; left += 2 * size) {
          // Find the mid and right boundaries of the subarrays to merge
          let mid = left + size - 1;
          let right = Math.min(left + 2 * size - 1, n - 1);

          // Merge the two subarrays: arr[left...mid] and arr[mid+1...right]
      }
  }

  return arr;
}

function mergePairs(arr, size) {}

function merge(leftArr, rightArr) {
  const arr = [];

  let i = 0,
    j = 0,
    k = 0;

  while (i < leftArr.length && j < rightArr.length) {
    if (i > rightArr.length || leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
  }
  return arr;
}
