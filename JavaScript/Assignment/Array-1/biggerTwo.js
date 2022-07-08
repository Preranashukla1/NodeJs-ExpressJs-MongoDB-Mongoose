function biggerTwo(a, b){
  let arr = []
  if(a[0]+a[1] >= b[0]+b[1]){
    return a
  }
  if(a[0]+a[1] < b[0]+b[1]){
    return b
  }
}