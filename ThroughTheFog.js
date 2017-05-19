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
