function plusTwo(a, b){
  let arr = []
  for(let i=0;i<4;){
    if(i<2){
      arr[i] = a[i];
      i++;
    }
    else{
      arr[i] = b[i-2];
      i++;
    }
  }
  return arr
}