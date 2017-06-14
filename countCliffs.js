/*
https://codefights.com/challenge/6eeBErC6dHrTQnyhj
*/
function countCliffs(seaMap) {
  function dfs(i, j, seaMap, visited){
    var result = false;
    if(!visited[i][j] && seaMap[i][j] == 1){
      visited[i][j] = true;

      if (i + 1 < seaMap.length)
        dfs(i + 1, j, seaMap, visited);
      if (i - 1 >= 0)
        dfs(i - 1, j, seaMap, visited);
      if (j + 1 < seaMap[0].length)
        dfs(i, j + 1, seaMap, visited);
      if (j - 1 >= 0)
        dfs(i, j - 1, seaMap, visited);

      result = true;
    }

    return result;

  }

  var visited = [];
  for (var x=0;x<seaMap.length;x++){
    var arr = [];
    for (var r=0;r<seaMap.length;r++){
      arr.push(false);
    }
    visited.push(arr);
  }

  var counter = 0;
  for(var i=0; i<seaMap.length; i++){
    for(var j=0; j<seaMap[0].length; j++){
        if (dfs(i, j, seaMap, visited))
        counter++;
    }
  }
  return counter;

}
