function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map(function(x){
    return (x === elemToReplace ? substitutionElem : x);
  });
}
