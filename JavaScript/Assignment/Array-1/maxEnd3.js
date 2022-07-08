function maxEnd3(nums){
  if(nums[0]>=nums[2]){
    for(let i=0; i<3;i++){
      nums[i] = nums[0];
    }
  }
  if(nums[2]>nums[0]){
    for(let i=0; i<3;i++){
      nums[i] = nums[2];
    }
  }
  return nums
}