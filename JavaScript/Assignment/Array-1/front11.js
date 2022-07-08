function front11(a, b){
  let alen = a.length;
  let blen = b.length;
  let nums = [];
  if(alen ==0 && blen==0){return []}
  if(alen==0){nums[0] = b[0]}
  if(blen==0){nums[0] = a[0]}
  if(alen>0 && blen>0){
    nums[0] = a[0];
    nums[1] = b[0];
  }
  return nums;
}