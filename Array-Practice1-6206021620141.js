let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true];
let values3 = ['Mars', 9, 'Apple'];
result = "";

function checkvalue_and_value(values1, values2){
    var result = "";
    for (let index = 0 ; index < values1.length ; index++){
        if (typeof values1[index] == typeof values2[index]){ 
            result += "True ";
        }
        else result += "False ";
    }
    return result;
}

console.log("\n****************Check Values**************\n");

result = checkvalue_and_value(values1, values2);
console.log("Check values1 & values2 = ",result,"\n");

result = checkvalue_and_value(values2, values3);
console.log("Check values2 & values3 = ",result,"\n");

result = checkvalue_and_value(values3, values1);
console.log("Check values3 & values1 = ",result,"\n");