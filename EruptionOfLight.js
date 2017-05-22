function isBeautifulString(inputString) {
  var l=0, arr = inputString.split('').sort(), start = 'a'.charCodeAt(0), end = arr[arr.length-1];
  for (var i=start;i<=end.charCodeAt(0);i++){
    var x = String.fromCharCode(i), idx = arr.indexOf(x);
    if (idx === -1) return false;
    var t = (arr.lastIndexOf(x)+1) - idx;
    if (t>l && i!=start) return false;
    l=t;
  }
  return true;
}
