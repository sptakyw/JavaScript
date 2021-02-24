function totalVolume(...num) {
    /*return num.reduce((a,b)=> a + b.reduce((c,d)=> c * d,1),0);*/
    sum = 0;
    i = 0;
    for(let dataCol of arguments){
        mul = 1;
        for (let dataCol of arguments[i]/*ROW*/){
            mul *= dataCol;
        }
        i++;
        sum += mul;
    }
    return sum;
}
 console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]))
 console.log(totalVolume([2, 2, 2], [2, 1, 1]))
 console.log(totalVolume([1, 1, 1]))