function sumTwoSmallestNums(numbers){
    let min = numbers[0];
    let secondMin = numbers[1];
    for (let i = 1; i < numbers.length; i++) { 
        if(numbers[i] > 0){
            if (numbers[i] < min) {
                secondMin = min;
                min = numbers[i];
            } 
            else if (numbers[i] < secondMin) {
                secondMin = numbers[i];
            }
        }
    }
    return console.log(min + secondMin);
}
sumTwoSmallestNums([19,5,42,2,77])
sumTwoSmallestNums([10,343445353,3453445,3453545353453])
sumTwoSmallestNums([2,9,6,-1])
sumTwoSmallestNums([879,953,694,-847,342,221,-91,-723,791,-587])
sumTwoSmallestNums([3683,2902,3951,-475,1617,-2385])