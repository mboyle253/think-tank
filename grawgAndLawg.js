/*
https://codefights.com/challenge/YapP4jc9KPYq9RA5s
*/

function grawgAndLawg(q) {
  var p = {N : 'E', L : '\u018E', F : '\u00A3', C : 'F'},
    f = {S : '-', M : '=', G : '\u2261'}

  return q.map((o)=>{
    var t = o.match(/[NLFC](?!.*[NLFC])/g)[0],
      r = f[o.match( /[SMG](?!.*[SMG])/g)[0]].repeat(o.match(/\d+(?!.*\d+)/g)[0]),
      q=o.match(/T/g), y=t=='L';
    if (q){
      r = y ? r + ' ==<o~' : '~o>== ' + r;
    }
    return y ? p[t] + r : r + p[t];
  })
}
