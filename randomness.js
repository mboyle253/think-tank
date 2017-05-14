/**
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
**/
function adjacentElementsProduct(inputArray) {
    var total = inputArray[0] + inputArray[1];
    for (var i=0; i<inputArray.length; i++){
        if (i+1 <= inputArray.length);
        {
            var sub = inputArray[i] * inputArray[i+1];
            if (total < sub)
                {
                    total = sub;
                }    
        }
        
    }
    
    return total;
}
