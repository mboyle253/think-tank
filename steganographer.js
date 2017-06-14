/*
https://codefights.com/challenge/PyzYWH2rf7eJDh9QH
*/

function steganographer(arr, c) {
  var m = [c&8, c&4, c&2, c&1], t = '', b='';
  arr.forEach((a)=>{
    a.forEach((r)=>{
      var s = r.toString(2);
      (new Array(33 - s.length).join('0') + s).match(/.{1,8}/g).forEach((k, v)=>{
        if (m[v]) b += k.slice(-1);
        if (b.length == 7){
          t += String.fromCharCode(parseInt(b, 2));
          b='';
        }
      })
    })
  })

  return t;
}
