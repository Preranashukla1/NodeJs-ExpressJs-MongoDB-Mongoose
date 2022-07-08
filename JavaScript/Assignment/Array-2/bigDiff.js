function bigDiff(nums){
  let a = nums[0];
  let b = 0;
  n = nums.length;
  for(let i=0; i<n;i++){
    if(nums[i] < a){a = nums[i]}
    if(nums[i] > b){ b = nums[i]}
  }
  return b-a;
}