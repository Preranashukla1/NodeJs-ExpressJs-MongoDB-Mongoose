function makeLast(nums){
  let arr=[], n = (nums.length)*2;
  for(i=0; i<n-1;i++){
    arr[i] = 0;
  }
  arr[n-1] = nums[nums.length-1];
  return arr;
}