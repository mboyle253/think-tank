/**
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
**/
function adjacentElementsProduct(inputArray) {
    var total = inputArray[0] * inputArray[1];
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

/**
Given an n-interesting polygon, find the area of the polygon for n.
**/
function shapeArea(n) {
    if (n===1){
        return 1;
    }
    else {
        return (4 * (n - 1)) + shapeArea(n-1);
    }
    
}
