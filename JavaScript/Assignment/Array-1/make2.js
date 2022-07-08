function make2(a, b){
  let alen = a.length;
  let blen = b.length;
  let nums = [];
  if(alen >=2){
    nums[0] = a[0];
    nums[1] = a[1];
  }
  if(alen < 2){
    nums = a;
    for(let i=alen;i<2;i++){
      nums[i] = b[i-alen];
    }
  }
  
  return nums;
}