function findLowestIndex(nums){
  let a = 0;
  for(let i=0; i<nums.length;i++){
    if(nums[i]<nums[a]){
      a = i;
    }
  }
  return a;
}