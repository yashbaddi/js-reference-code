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

function mergePairs(arr, size) {}

function merge(leftArr, rightArr) {
  const arr = [];
  leftArr = arr.slice(left, mid + 1);
  rightArr = arr.slice(mid + 1, right);

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
