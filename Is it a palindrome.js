function isPalindrome(x) {
    // your code here
      var re = /[\W_]/g;
    var lowRegStr = x.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  