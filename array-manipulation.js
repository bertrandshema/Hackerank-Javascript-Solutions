function arrayManipulation(n, queries) {
    // Write your code here
    let normalArray = new Array(n).fill(0);
    let maxResult = 0;
    let currentMax = 0;
    
    //put a positive value at start index and a negative value at the end index
    queries.forEach(function(query){
        normalArray[query[0] - 1] += query[2];
        normalArray[query[1]] -= query[2];
    });
    
    for(let i = 0; i < normalArray.length; i++){  
        currentMax += normalArray[i];
        if(currentMax > maxResult){
            maxResult = currentMax;
        }
        
    }

    console.log(maxResult);


}

console.log(arrayManipulation(10, [[1,5,3], [4,8,7], [6,9,1]]));