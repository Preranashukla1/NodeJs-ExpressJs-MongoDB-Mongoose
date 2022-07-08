function start1(a, b){
  let count = 0;
  for(let i=0; i<=a.length-1;i++){
    if(a[i]==1){
      count++
    }
  }
  for(let i=0; i<=b.length-1;i++){
    if(b[i]==1){
      count++
    }
  }
  return count
}