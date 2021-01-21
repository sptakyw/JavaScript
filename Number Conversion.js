let num1 = '150' ;
let flol = '1.50' ;

console.log ("****** Converting strings to intergers ******") ;
// Converting strings to intergers
console.log (parseInt('100')) ;
console.log (parseInt(num1)) ;
console.log (parseInt('ABC')) ;
console.log (parseInt('0xF')) ; //Hexadecimal number

console.log ("****** Converting strings to float ******") ;
// Converting strings to float
console.log (parsefloat('1.25abc')) ;
console.log (parsefloat(floal)) ;
console.log (parsefloat('ABC')) ;

console.log ("****** More Conversion Examples ******") ;
// More Conversion Examples
// Number after special characters are ignored
console.log (parseInt('1.5')) ;
console.log (parseInt('1+1')) ;

//Using Template Literals
console.log (parseInt(`${1 + 1}`)) ;

console.log ("****** Converting numbers to strings ******") ;
// Converting numbers to strings
console.log (num1.toString()) ;
console.log (flol.toString()) ;
console.log ((100).toString()) ;
