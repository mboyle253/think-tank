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

function findEmailDomain(address) {
  //if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(address))
  return address.substring(address.lastIndexOf('@')+1);
}

function buildPalindrome(st) {
  var d = st.split('').findIndex((v, x, self)=>{
    return self.slice(x, self.length).reverse().join('') === self.slice(x, self.length).join('');
  });

  return d===0 ? st : st + st.substring(0, d).split('').reverse().join('');
}

function electionsWinners(votes, k) {
  return votes.sort((a, b)=>{
      return b-a;
    }).filter((v, idx, self)=>{
      return v+k > self[0] || (idx === 0 && v+k > self[idx+1])
  }).length;
}

function isMAC48Address(inputString) {
    return /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/.test(inputString);
}
