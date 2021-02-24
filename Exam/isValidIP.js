function isValidIP(str) {
    test = str.split("."); 
    if (test.length == 4) {
      for (i = 0; i < test.length; i++) {
        if (test[i] < 1 || test[i] > 255) return false;
        for (a = 0; a < test[i].length; a++) {
          if (test[i].charAt(a) == " ") return false; 
        }
        if (test[i].charAt(0) == 0) return false; 
        if (isNaN(test[i])) return false; 
        if (i == 3) {
          for (a = 0; a < test[i].length; a++) {
            if (test[i].charAt(a) == 0) return false; 
          }
        }
      }
      return true;
    } else {
      return false;
    }
}
console.log(isValidIP("1.2.3.4"));
console.log(isValidIP("1.2.3"));
console.log(isValidIP("1.2.3.4.5"));
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("123.456.78.90"));
console.log(isValidIP("123.045.067.089"));