function unlucky1(nums){
  let n = nums.length;
  for(let i=0; i<n; i++){
    if(i<2 || i>=n-2){
      if(nums[i] == 1 && nums[i+1]== 3){
        return true}
    }
  }
  return false;
}