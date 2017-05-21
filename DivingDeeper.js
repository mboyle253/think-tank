function extractEachKth(inputArray, k) {
  return inputArray.filter(function(v, idx){
    return ((idx+1) % k) !=0 ;
  });
}

function firstDigit(inputString) {
  return inputString.split('').filter(function(n){
    return !isNaN(parseInt(n))
  })[0];

}

function differentSymbolsNaive(s) {
  return s.split('').sort().reduce(function(total, v, idx, arr){
    return (idx === 0 || arr[idx-1] != arr[idx]) ? ++total : total;
  }, 0)
}
function arrayMaxConsecutiveSum(inputArray, k) {

  var total= 0;
  while (inputArray.length >= k){
    var sum=0;
    for (var i=0; i<k; i++){
      sum += inputArray[i];
    }
    total = sum>total ? sum : total;
    inputArray.shift();
  }
  return total;
}
