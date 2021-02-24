function simplePair(num,sum){
    result = [];
    for(i=0;i<num.length;i++){  
        for(j=0;j<num.length;j++){
            if(i!=j){
                if(num[i]*num[j]==sum){
                    result.push(num[i]);
                    result.push(num[j]);
                    return  result;
                }
            }
        }
    } 
    return null; 
} 
console.log(simplePair([1,2,3],3));
console.log(simplePair([1,2,3],6));
console.log(simplePair([1,2,3],9));