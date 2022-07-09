function mapBully(someMap){
  for (const [key, value] of someMap.entries()) {
    console.log(key);
    if(key == 'a'){
      let temp = someMap['key'];
      someMap['b'] = temp;
      someMap['a'] == '';
    }
}
  //return someMap;
}