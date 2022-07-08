function no14(nums){
  let counta = 0,countb=0;
  for(let i=0; i<nums.length; i++){
    if(nums[i] == 1){counta++}
    if(nums[i]==4){countb++}
  }
  if((counta>=0 && countb==0) || (counta==0 && countb>=0){return true}
  return false;
}