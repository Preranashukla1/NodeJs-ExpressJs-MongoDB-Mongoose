function countHi(str){
  let c=0;
  for(let i =0; i<str.length;i++){
    if(str.substr(i,2)=="hi"){
      c++;
    }
  }
  return c;
}