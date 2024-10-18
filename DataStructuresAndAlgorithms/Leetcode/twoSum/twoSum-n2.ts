function twoSumOn2(nums: number[], target: number): number[] | undefined {
  let first = 0,
    second = 1;
  while (first < nums.length) {
    while (second < nums.length) {
      if (nums[first] + nums[second] === target && second !== first) {
        return [first, second];
      }
      second++;
    }
    first++;
    second = 0;
  }
}
console.log(twoSumOn2([3, 2, 4], 6));
