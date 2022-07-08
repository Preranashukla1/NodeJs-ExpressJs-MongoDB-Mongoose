function double23(nums){
  for(i=0; i<nums.length;i++){
    if((nums[i]==2 && nums[i+1]==2) || (nums[i]==3 && nums[i+1]==3) ){
      return true;
    }
  }
  return false;
}