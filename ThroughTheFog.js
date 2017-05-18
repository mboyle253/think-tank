function depositProfit(deposit, rate, threshold) {
  function calc(d, r, t, c){
    var balance = (d*(r/100)) + d;
    return balance >= t ? ++c : calc(balance, r, t, ++c);
  }
  return calc(deposit, rate, threshold, 0);
}
