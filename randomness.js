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

/*
Arrange input array from smallest to largest so that each element will be bigger than the previous one exactly by 1
*/
function makeArrayConsecutive2(statues) {
    var count = 0;
    var sorted = statues.sort(function(x, y){
        return y < x;
    });

    for (var i = 0;i<sorted.length;i++){
       if ((sorted[i] < sorted[i+1]) && (i+1 < sorted.length)){
           count = ((sorted[i+1] - sorted[i]) - 1) + count;
       }
    }
    
    return count;
}
