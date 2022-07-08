function only14(nums){
  for(i=0;i<nums.length;i++){
    if(nums[i]!=1){
      if(nums[i]!=4){
      return false;
      break;}
    }
  }
  return true;
}