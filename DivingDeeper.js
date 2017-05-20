function extractEachKth(inputArray, k) {
  return inputArray.filter(function(v, idx){
    return ((idx+1) % k) !=0 ;
  });
}
