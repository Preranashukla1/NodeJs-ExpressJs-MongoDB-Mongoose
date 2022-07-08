function swapEnds(nums){
  let a = nums[nums.length-1]
  nums[nums.length-1] = nums[0]
  nums[0] = a;
  return nums
}