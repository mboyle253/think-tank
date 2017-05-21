function growingPlant(upSpeed, downSpeed, desiredHeight) {
  if (desiredHeight <= upSpeed) return 1;
  return Math.ceil((desiredHeight - downSpeed)/(upSpeed - downSpeed));
}

function knapsackLight(v1, w1, v2, w2, maxW) {
  if (w1 > maxW && w2 > maxW)  return 0;
  if (w1 + w2 <= maxW) return v1+v2;

  if ((w1 <= maxW && w2 <= maxW) || (w1 <= maxW && w1 == w2)) return Math.max(v1, v2);
  if (w1 <= maxW && (w1 > w2 || w2 > maxW)) return v1;
  if (w2 <= maxW && (w2 > w1 || w1 > maxW)) return v2;

  return 0;
}

function longestDigitsPrefix(inputString) {
  return inputString.match(/^\d*/g)[0];
}

function digitDegree(n) {
  function cc(v, c){
    var arr = v.toString().split('');
    if (arr.length > 1){
      c++;
      return cc(arr.reduce(function(t, val){
        return t+parseInt(val);
      }, 0), c);
    }
    
    return c;

  }

  return cc(n, 0);

}

function bishopAndPawn(bishop, pawn) {
  var b = bishop.charCodeAt(0), p = pawn.charCodeAt(0), diff  = Math.abs(b-p), n1 = bishop.match(/\d+/)[0];
  var w1 =  String.fromCharCode(p) + (parseInt(n1)+diff);
  var w2 =  String.fromCharCode(p) + (parseInt(n1)-diff);
  return w1 === pawn || w2 === pawn;
}
