function strCount(str, letter){  
    //code here
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === letter) {
        counter += 1
      }
    }
    return counter
  }