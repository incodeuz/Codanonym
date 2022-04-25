function solution(nums) {
  if (nums === null) {
    return [];
  } else {
    return nums.sort((a, b) => a - b);
  }
}
console.log(solution([1,5,1,666,2,6,3,4]));