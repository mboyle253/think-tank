function isDigit(symbol) {
    return !Number.isNaN(parseInt(symbol));
}

function lineEncoding(s) {
  var arr = s.split('');
  var holder = [], str='';
  while (arr.length > 0){
    holder.push(arr.shift());

    if (holder[0] != arr[0]){
      str = holder.length > 1 ? str + holder.length + holder[0] : str + holder[0];
      holder = [];
    }
  }

  return str;
}

