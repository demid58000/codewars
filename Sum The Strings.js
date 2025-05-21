function sumStr(a,b) {
    if (b === '' && a ==='') {
      return '0';
    } else if (b === '') {
      return a;
    } else if (a === '') {
      return b
    }
    let aToInt = parseInt(a);
    let bToInt = parseInt(b);
    let summa = aToInt + bToInt;
    return String(summa);
  }