function circleOfNumbers(n, firstNumber) {
  var div = n/2;
  return firstNumber < div ? firstNumber+div : firstNumber-div;
}

function depositProfit(deposit, rate, threshold) {
  function calc(d, r, t, c){
    return (d>=t) ? c : calc((d*(r/100)) + d, r, t, ++c);
  }
  return calc(deposit, rate, threshold, 0);
}

function absoluteValuesSumMinimization(a) {
  return a[Math.ceil(a.length/2)-1];
}

function stringsRearrangement(inputArray) {

  function getNext(arr, ll, rr){
    for (var b=0;b<arr.length;b++){
      if (ll.indexOf(arr[b]) === -1){
        ll.push(arr[b]);
        ll = getNext(rr[arr[b]], ll, rr);
        if (ll.length === rr.length) return ll;
        else ll.pop()
      }
    }

    return ll;
  }

  var p = [];
  inputArray.map(function(n, idx, self) {
    var ar1 = n.split('');
    p[idx] = [];
    for (var i=0;i<self.length;i++){
      if (i===idx) continue;
      var ar2 = self[i].split('');
      var count = 0;

      for (var x=0;x<ar1.length;x++){
        if (ar1[x] != ar2[x]) count+=1;
      }
      if (count === 1) p[idx].push(i);
    }
  });

  for (var i=0;i<p.length;i++){
    var linkedList = getNext(p[i], [], p);
    if (linkedList.length === inputArray.length) return true;
  }

  return false;

}
