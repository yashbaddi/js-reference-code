interface IHash {
  [details: number]: number;
}

function twoSum(nums: number[], target: number): number[] | undefined {
  const hashmap: IHash = {};
  for (let first = 0; first < nums.length; first++)
    hashmap[target - nums[first]] = first;

  for (let second = 0; second < nums.length; second++)
    if (hashmap[second] !== undefined && hashmap[second] !== second)
      return [hashmap[second], second];
}
console.log(twoSum([3, 2, 4], 6));
